import React from 'react';
import axios from 'axios';
import Card from './Card';
import {Jumbotron} from './components/Jumbotron';
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
  // useParams
} from 'react-router-dom';
class Account extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userID: props.userID,
            // userID: props.id,
            results: []
        }
        console.log(props.userID)
    }

    componentDidMount() {
        const  userID  = this.state.userID;
        // https://api.spoonacular.com/recipes/search?apiKey=0fe88fb2905449f68ae3dd65d0cf47c0&query=burger&number=10&includeInstruction=true
        const url = `http://localhost:4000/savedRecipes/${userID}`;
        axios.get(url).then(res => {
            this.setState({
                results: res.data
            })
            // if(this.state.id!==0) {
            //     let ingredients = ""
            //     for(let i = 0; i < this.state.extendedIngredients.length; i++) {
            //         ingredients += this.state.extendedIngredients[i].originalString + "ingredient-needed";
            //     }
            //     axios.post(`http://localhost:4000/recipe/edit/${this.state.id}`,{
            //         "instructions": this.state.instructions,
            //         "extendedIngredients": ingredients
            //     })
            //     .then(function(response) {
            //       console.log("instructions and extendedIngredients",ingredients);
            //     })
            // }
        })
    }
    async getSavedRecipes(userID){
        
        const url = `http://localhost:4000/savedRecipes/${userID}`;
        let result = await axios.get(url);
        
            // console.log(res.data.results);
            this.setState({
                results: result.data.results
            })

    }

    handleDelete = ()=> {

    }
    render() {
        return (<div>
            <Jumbotron/>
            <div className="search-results">
                <Card results={this.state.results} userID={this.state.userID}/>
            </div> 
        </div>
        )
    }
}


export default Account;

// {
//     this.getSavedRecipes(this.state.userID);
//     console.log(this.state.results);
//     return( this.state.results.map(recipe=>{
//         return <div className="card-deck">
//         <div key={recipe.id} className="card  bg-dark text-white">
//         <div className="card-header text-center">
//           <h2>{recipe.title}</h2>
//         </div>  
//         <div className="card-body text-center">
//           <img claclassName="card-img-top" src={recipe.img} alt=""/>
//           <h3>Ready in (minutes): {recipe.readyInMinutes}</h3>
//           <Link to={`/show/${recipe.id}`}className="btn btn-primary">Show Details</Link>
//           <button className="btn btn-primary">Delete</button>
//         </div>           
//       </div>
//       </div>
//     })
// )}