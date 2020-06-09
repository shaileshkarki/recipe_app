import React from 'react';
import './Home.css';
import axios from 'axios';
import Card from './Card';

// const apiKey = process.env.SPOONACULAR_APIKEY;
class Home extends React.Component {
  state = {
      query: "",
      results: [],
      isLoading: true
  }

  componentDidMount() {
    const apiKey = process.env.SPOONACULAR_APIKEY;
    // https://api.spoonacular.com/recipes/search?apiKey=0fe88fb2905449f68ae3dd65d0cf47c0&query=burger&number=10&includeInstruction=true
    const url = `https://api.spoonacular.com/recipes/search?apiKey=${apiKey}=${this.state.query}&number=5&includeInstruction=true`;
    axios.get(url).then(res => {
      this.setState({
        // query: "",
        results: res.data,
        isLoading: false
      })
    })
  }

  handleSearch = () => {
      const url = `https://api.spoonacular.com/recipes/search?apiKey=0fe88fb2905449f68ae3dd65d0cf47c0&query=${this.state.query}&number=5&includeInstruction=true`;
      // console.log(url);
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
              <h1>Search Recipe By Dish Name</h1>
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
export default Home;