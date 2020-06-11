import React from 'react';
import {Layout} from './components/Layout';
import SearchByIngredients from './SearchByIngredients';
import Login from './Login';
import Home from './Home';
import Recipe from './Recipe';
import SignUp from './SignUp';
import Account from './Account';
import {Nav, Navbar} from 'react-bootstrap';

import styled from 'styled-components';
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  Link
  // useParams
} from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom';

// const apiKey = process.env.SPOONACULAR_APIKEY;
class App extends React.Component {
  state = {
    loginStatus: false,
    userID: 0,
    username: ""
  }

  handleLogin=(value)=>{
    if(value.status === true) {
      this.setState({
        loginStatus: value.status,
        userID: value.userID,
        username: value.username
      })
    }

    

  }

  handleLogOut = ()=>{
    this.setState({
      loginStatus: false,
      userID: 0,
      username: ""
    })
    Redirect ('/home');
  }
  displayLogin() {
    if(this.state.loginStatus===false) {
      return <div>
        <Nav.Item><Link to="/login">Login</Link></Nav.Item>
        <Nav.Item><Link to="/signUp">Sign Up</Link></Nav.Item>
      </div>
    } else {
      return  <div>
        <Nav.Item><Link to="/account">Account</Link></Nav.Item>
        <Navbar.Text>
          Signed in as: {this.state.username}
        </Navbar.Text>
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
          <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            {/* <Navbar.Brand href="/"> <img
              src="./assets/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Find Recipe Logo"/>
            </Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
            <Nav className="xl-auto">
                <Nav.Item><Link to="/">Home</Link></Nav.Item>
                <Nav.Item><Link to="/recipeByIngredients">Show Recipe By Ingredients</Link></Nav.Item>
                <Nav.Item><Link to="/aboutUs">About Us</Link></Nav.Item>
                <Nav.Item><Link to="/contactUs">Contact Us</Link></Nav.Item>
                {this.displayLogin()}
            </Nav>
        </Navbar>
    </Styles> 
          </header>
          <div className="content">
            <Switch>
              <Route exact path="/" render={() => <Home userID={this.state.userID} />}/>
              <Route path='/show/:id' render={(props) => <Recipe {...props} userID={this.state.userID} />}/>
              <Route path="/recipeByIngredients" component={SearchByIngredients}/>
              <Route path='/login'render={() => <Login  handleLogin={this.handleLogin} />}/>
              <Route path="/signUp" component={SignUp}/>
              <Route path='/account'render={() => <Account  userID={this.state.userID} />}/>
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
          