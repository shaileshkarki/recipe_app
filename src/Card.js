import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom';

function Card(props) {
    return props.results.map(recipe=>{
        return <div key={recipe.id} className="card">
          <h2>{recipe.title}</h2>
          <img src={`https://spoonacular.com/recipeImages/${recipe.id}-480x360.jpg`} alt=""/>
          <h3>Ready in (minutes): {recipe.readyInMinutes}</h3>
          <Link to={`/show/${recipe.id}`}>Show Details</Link>
        </div>
      })
}

export default Card;

