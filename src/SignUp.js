import React, {Component} from 'react';
import axios from 'axios';
// import Form from 'bootstrap/Form';
class SignUp extends Component {
    state = {
        email: "",
        password_digest: "",
        username: ""
    }
    signup(e) {
        // e.preventdefault();
        console.log(this.props);
        try {
            axios.post(`http://localhost:4000/signUp`, {
                "email": this.state.email,
                "password_digest": this.state.password_digest,
                "user_name": this.state.username
            }).then(response => {
                // this.props.handleLogin(response.data)
            })
            // console.log('👉 Returned data:', response);
            // this.props.updateLogin(response);
          } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
          }
    }

    reset() {
        this.setState({
            email: "",
            password: "",
            username: "",
            repassword_digest: ""
        })
    }
    render() {
        return (
            <div className="login-form">
                {/* <form action=""> */}
                <div className="form-group">
                    <label>User Name</label>  
                    <input type="text" className="form-control" name="" id="" onChange={e=> {this.setState({username:e.target.value})}}/>
                </div>
                <div className="form-group">
                <label htmlFor="">Email</label>
                <input type="email" className="form-control" onChange={e=> {this.setState({email:e.target.value})}}/>
                </div>
                <div className="form-group">
                    <label>Password</label>  
                    <input type="password" className="form-control" name="" id="password" onChange={e=> {this.setState({password_digest:e.target.value})}}/>
                </div>
                <div className="form-group">
                    <label>Retype-Password</label>  
                    <input type="password" className="form-control" name="" id="repassword" onChange={e=> {this.setState({repassword_digest:e.target.value})}}/>
                </div>
                <button onClick={()=>this.signup()} className="btn btn-info">Sign Up</button>
                <button type="reset" className="btn btn-info">Reset</button>
                {/* </form> */}
            </div>
        );
    }
}

export default SignUp;