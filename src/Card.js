import React from 'react';
import axios from 'axios';
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
  // useParams
} from 'react-router-dom';

function Card(props){
  let handleDeleteRecipe = props.handleDeleteRecipe;
  console.log(props);
  
  return props.results.map(recipe=>{
    return <div className="card-deck">
    <div key={recipe.id} className="card  bg-dark text-white">
    <div className="card-header text-center">
      <h2>{recipe.title}</h2>
    </div>  
    <div className="card-body text-center">
    {recipe.readyinminutes?
     <img claclassName="card-img-top" src={recipe.img} alt=""/>:
     <img claclassName="card-img-top" src={`https://spoonacular.com/recipeImages/${recipe.id}-480x360.jpg`} alt=""/>
      }

      <h3>Ready in (minutes): {recipe.readyInMinutes || recipe.readyinminutes}</h3>
      {recipe.readyinminutes?
      <div>
        <Link to={`/show/${recipe.id}`}className="btn btn-primary">Show Details</Link>
        <button onClick={() => props.handleDeleteRecipe(recipe.id)} className="btn btn-danger">Delete</button>
      </div>:
      <Link to={`/show/${recipe.id}`}className="btn btn-primary">Show Details</Link>
      }
    </div>           
  </div>
  </div>
  })
}

export default Card;