import React from 'react';
import axios from 'axios';
import Card from './Card';
class SearchByIngredients extends React.Component {
    state = {
        query: "",
        results: [],
        isLoading: true
    }

    componentDidMount() {
        // const apiKey = process.env.SPOONACULAR_APIKEY;
        // https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${this.state.query}&number=10&includeInstruction=true
        const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=0fe88fb2905449f68ae3dd65d0cf47c0&ingredients=${this.state.query.split('').join('+')}&number=5&includeInstruction=true`;
        axios.get(url).then(res => {
          this.setState({
            // query: "",
            results: res.data,
            isLoading: false
          })
        })
    }

    handleSearch = () => {
        // const apiKey = process.env.SPOONACULAR_APIKEY;
        const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=0fe88fb2905449f68ae3dd65d0cf47c0&ingredients=${this.state.query.split('').join('+')}&number=5&includeInstruction=true`;
        console.log(url);
        //https://api.spoonacular.com/recipes/findByIngredients?apiKey=0fe88fb2905449f68ae3dd65d0cf47c0&ingredients=rice,+sugar&number=5&includeInstruction=true
        axios.get(url).then(res => {
          console.log(res.data.results);
          this.setState({
            results: res.data.results,
            isLoading: false
          })
        })
      }
      
    handleChange = (event) => {
      this.setState({
        query: event.target.value
      })
    }

    render() {
    return(
        <div className="home">
            <div className="input-recipe">
              <h1>Search Recipe By Ingredients</h1>
              <p>Enter ingredients seperated by comma(,)</p>
                <input type="text" onChange={this.handleChange}/>
                <button onClick={this.handleSearch}>Search Recipe</button>
            </div>
            <div className="search-results">
                <Card results={this.state.results} />
            </div>
        </div>
    )
  }
}

export default SearchByIngredients;