import React from 'react';
import {Layout} from './components/Layout';
import SearchByIngredients from './SearchByIngredients';
import Login from './Login';
import Home from './Home';
import Recipe from './Recipe';
import SignUp from './SignUp';
import Account from './Account';
// import {Nav, Navbar} from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components';
import ContactUs from'./ContactUs';
import AboutUs from'./AboutUs';

import {
  // BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom';

// const apiKey = process.env.SPOONACULAR_APIKEY;
class App extends React.Component {
  state = {
    loginStatus: false,
    userID: 0,
    username: "",
    toHome: false
  }

  handleLogin=(value)=>{
    if(value.status === true) {
      this.setState({
        loginStatus: value.status,
        userID: value.userID,
        username: value.username
      })
    }
    // let history = useHistory();
    // history.push("/account");
  }
  handleDeleteRecipe=(id) =>{
    let recipe_id = id;
    axios.post(`http://localhost:4000/deleteRecipe/${recipe_id}`,{
      "userID": this.state.userID})
    .then(function(response) {
      console.log("Deleted successfully");
    })
  }
  handleLogOut = ()=>{
    this.setState({
      loginStatus: false,
      userID: 0,
      username: "",
      toHome: true
    })
  }
  displayLogin() {
    if(this.state.loginStatus===false) {
      return <div>
        <Link to={
          {
            pathname:"/login",
            state: {
              from: "root"
            }
          }
        }>Login</Link>
        <Link to="/signUp">Sign Up</Link>
      </div>
    } else {
      return  <div>
        <Link to="/account">Account</Link>
       
         <Link to="#">Signed in as: {this.state.username}</Link> 
        
         <button onClick={this.handleLogOut}>Log Out</button>
      </div>
    }
  }
  render() {
    const Styles = styled.div`
    .navbar {
      background-color: #222;  
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }
`;
    // const {query, results,isLoading} = this.state;
    // console.log(this.state.results);
    return (
      <React.Fragment>
        <Layout>
          <header>
          <nav>
            <Link to="/">Home</Link>
            {/* <Link to="/recipeByIngredients">Show Recipe By Ingredients</Link> */}
            <Link to="/aboutUs">About Us</Link>
            <Link to="/contactUs">Contact Us</Link>
            <div className="login-info">
              {this.displayLogin()}
            </div>
          </nav>
          </header>
          <div className="content">
            <Switch>
              <Route exact path="/" render={() => <Home userID={this.state.userID} handleDeleteRecipe={this.handleDeleteRecipe}/>}/>
              <Route path='/show/:id' render={(props) => <Recipe {...props} userID={this.state.userID} />}/>
              <Route path="/recipeByIngredients"  render={() => <SearchByIngredients userID={this.state.userID} handleDeleteRecipe={this.handleDeleteRecipe}/>}/>
              <Route path='/login'render={() => <Login  handleLogin={this.handleLogin} />}/>
              <Route path="/signUp" component={SignUp}/>
              <Route path="/aboutUs" component={AboutUs}/>
              <Route path="/contactUs" component={ContactUs}/>
              <Route path='/account'render={() => <Account  userID={this.state.userID} handleDeleteRecipe={this.handleDeleteRecipe} />}/>
            </Switch>
          </div>
          <footer>
            <p>&copy; 2020 Copyright</p>
          </footer>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
          
{/* <Nav className="xl-auto">
                <Nav.Item><Link to="/">Home</Link></Nav.Item>
                <Nav.Item><Link to="/recipeByIngredients">Show Recipe By Ingredients</Link></Nav.Item>
                <Nav.Item><Link to="/aboutUs">About Us</Link></Nav.Item>
                <Nav.Item><Link to="/contactUs">Contact Us</Link></Nav.Item>
                {this.displayLogin()}
            </Nav> */}