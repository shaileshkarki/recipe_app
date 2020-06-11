import React from 'react';
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
  // useParams
} from 'react-router-dom';

function Card(props) {
  return props.results.map(recipe=>{
      return <div className="card-deck">
      <div key={recipe.id} className="card  bg-dark text-white">
      <div className="card-header text-center">
        <h2>{recipe.title}</h2>
      </div>  
      <div className="card-body text-center">
        <img claclassName="card-img-top" src={`https://spoonacular.com/recipeImages/${recipe.id}-480x360.jpg`} alt=""/>
        <h3>Ready in (minutes): {recipe.readyInMinutes || recipe.readyinminutes}</h3>
        {recipe.readyinminutes?
        <div>
          <Link to={`/show/${recipe.id}`}class="btn btn-primary">Show Details</Link>
          <Link to={`/show/${recipe.id}`}class="btn btn-danger">Delete</Link>
        </div>:
        <Link to={`/show/${recipe.id}`}class="btn btn-primary">Show Details</Link>
        }
      </div>           
    </div>
    </div>
    })
}

export default Card;

