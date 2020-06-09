import React from 'react';
import Auth from './Auth'
import './App.css';
import SearchByIngredients from './SearchByIngredients';

import Card from './Card';
import Home from './Home';
import Recipe from './Recipe';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const apiKey = process.env.SPOONACULAR_APIKEY;
class App extends React.Component {

  render() {
    // const {query, results,isLoading} = this.state;
    // console.log(this.state.results);
    return (
      <div className="App">
          <header>
            <h1>Find Recipe</h1>
            <nav className="header-right">              
              <Link exact to="/">Home</Link>
              <Link to="/RecipeByIngredients">Show Recipe By Ingredients</Link>
              <Link to="/AboutUs">About Us</Link>
              <Link to="/ContactUs">Contact Us</Link>
            </nav>
          </header>
        <Switch>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/show/:id" component={Recipe}/>
            <Route path="/RecipeByIngredients" component={SearchByIngredients}/>
          </div>
      </Switch>
          <footer>
            <p>&copy; 2020 Copyright</p>
          </footer>
        </div>
    );
  }
}

export default App;
          