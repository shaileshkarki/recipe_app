import React, {Component} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
// import { useHistory } from "react-router-dom";
class Login extends Component {
    state = {
        email: "",
        password_digest: "",
        username: ""
    }
    login(e) {
        // e.preventdefault();
        console.log(this.props);
        try {
            axios.post(`http://localhost:4000/login`, {
                "email": this.state.email,
                "password_digest": this.state.password_digest
            }).then(response => {
                this.props.handleLogin(response.data)
            })
            // console.log('👉 Returned data:', response);
            // this.props.updateLogin(response);
          } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
          }
        //   let history = useHistory();
        //   history.push("/home");
    }

    reset() {
        this.setState({
            email: "",
            password: ""
        })
    }
    render() {
        return (
            <div className="login-form">
                {/* <form action=""> */}
                <div className="form-group">
                <label htmlFor="">Email</label>
                <input type="email" className="form-control" onChange={e=> {this.setState({email:e.target.value})}}/>
                </div>
                <div className="form-group">
                    <label>Password</label>  
                    <input type="password" className="form-control" name="" id="" onChange={e=> {this.setState({password_digest:e.target.value})}}/>
                </div>
                <button onClick={()=>this.login()} className="btn btn-info">Login</button>
                <button type="reset" className="btn btn-info">Reset</button>
                {/* </form> */}
            </div>
        );
    }
}

export default Login;