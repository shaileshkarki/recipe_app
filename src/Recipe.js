import React from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from 'react-router-dom';

class Recipe extends React.Component{

    state = {
        id: 0,
        instructions: "",
        extendedIngredients: []
        // result:{}
    }

    componentDidMount() {
        const apiKey = process.env.SPOONACULAR_APIKEY;
        const { id } = this.props.match.params
        // https://api.spoonacular.com/recipes/search?apiKey=0fe88fb2905449f68ae3dd65d0cf47c0&query=burger&number=10&includeInstruction=true
        const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=0fe88fb2905449f68ae3dd65d0cf47c0`;
        axios.get(url).then(res => {
            this.setState({
            id: id,
            // result: res.data
            // isLoading: false
            extendedIngredients: res.data.extendedIngredients,
            instructions: res.data.instructions

            })
        })
    }
    handleClick(){
            
    }

    render() {
        return(
            <div className="recipe">                
                <div>
                    <Link to="/">Go Back to Search Page</Link>
                    <button onClick={this.handleClick}>Save this recipe</button>
                    <h2>Ingredients:</h2>
                        <ul>
                            {this.state.extendedIngredients.map(ingredient => (
                                <li>{ingredient.originalString}</li>
                            ))}
                        </ul>
                    <h2>Instructions:</h2>
                        {this.state.instructions}
                </div>                
                {this.state.id}
            </div>
        )
    }
    
}

export default Recipe;