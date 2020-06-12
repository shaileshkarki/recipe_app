import React from 'react';
import axios from 'axios';
import {
    Link,
    Redirect
  } from 'react-router-dom';


class Recipe extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            instructions: "",
            extendedIngredients: [],
            userID: props.userID
        }
        console.log("props.userID",props.userID);
    }

    componentDidMount() {
        const { id } = this.props.match.params
        // https://api.spoonacular.com/recipes/search?apiKey=0fe88fb2905449f68ae3dd65d0cf47c0&query=burger&number=10&includeInstruction=true
        const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=0fe88fb2905449f68ae3dd65d0cf47c0`;
        axios.get(url).then(res => {
            this.setState({
                id: id,
                extendedIngredients: res.data.extendedIngredients,
                instructions: res.data.instructions
            })
            if(this.state.id!==0) {
                let ingredients = ""
                for(let i = 0; i < this.state.extendedIngredients.length; i++) {
                    ingredients += this.state.extendedIngredients[i].originalString + "ingredient-needed";
                }
                axios.post(`http://localhost:4000/recipe/edit/${this.state.id}`,{
                    "instructions": this.state.instructions,
                    "extendedIngredients": ingredients
                })
                .then(function(response) {
                  console.log("instructions and extendedIngredients",ingredients);
                })
            }
        })
    }
    handleLike = ()=> {
        // console.log(props);
        let userID = this.state.userID;
        let recipe_id = this.state.id;
        if(userID !== 0) {
            try {
                axios.post(`http://localhost:4000/saveRecipe`, {
                    "recipe_id": recipe_id,
                    "user_id": userID
                }).then(response => {
                    console.log(response);
                })
                // console.log('👉 Returned data:', response);
                // this.props.updateLogin(response);
            } catch (e) {
                console.log(`😱 Axios request failed: ${e}`);
            } 
        } else {
            return  <Redirect  to="/login" />
        }   
    }

    render() {
        return(
            <div className="recipe">                
                <div>
                    <Link to="/" className="btn btn-info">Go Back to Search Page</Link>
                    <button onClick={this.handleLike} className="btn btn-success">Save this recipe</button>
                    <h2>Ingredients:</h2>
                        <ol className="list-group">
                            {this.state.extendedIngredients.map(ingredient => (
                                <li className="list-group-item">{ingredient.originalString}</li>
                            ))}
                        </ol>
                    <h2>Instructions:</h2>
                    <div className="list-group-item"> {this.state.instructions}</div>
                </div>                
            </div>
        )
    }
    
}

export default Recipe;