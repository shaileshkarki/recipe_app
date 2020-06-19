import React, {Component} from 'react';
import axios from 'axios';
import FormErrors from './FormErrors';
import {Redirect} from 'react-router-dom';
// import Form from 'bootstrap/Form';
class SignUp extends Component {
    state = {
        email: "",
        password: "",
        username: "",
        formErrors:{email: '',password: '',username:'',repassword:''},
        emailValid:false,
        passwordValid: false,
        usernameValid: false,
        repasswordValid: false,
        formValid: false,
        toHome: false
    }
    signup(e) {
        // e.preventdefault();
        console.log(this.props);
        try {
            axios.post(`http://localhost:4000/signUp`, {
                "email": this.state.email,
                "password_digest": this.state.password,
                "user_name": this.state.username
            }).then(response => {
                alert(response.data.result);
                this.setState({
                    toHome: true
                })
                // this.props.handleLogin(response.data)
            })
            // console.log('👉 Returned data:', response);
            // this.props.updateLogin(response);
          } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
          }
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let repasswordValid = this.state.repasswordValid;
        let usernameValid = this.state.usernameValid;

        switch(fieldName) {
            case 'username':
                usernameValid = value.length >= 3;
                fieldValidationErrors.username = usernameValid ? 
                '': 
                ' must be greater than 3 characters';
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)?true:false;
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? 
                '': 
                ' is too short';
                break;
            case 'repassword':
                repasswordValid = value === this.state.password;
                fieldValidationErrors.repassword = repasswordValid ? 
                '': 
                ' did not match with password';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            usernameValid: usernameValid,
            emailValid: emailValid,
            passwordValid: passwordValid,
            repasswordValid: repasswordValid
          }, this.validateForm);
    }
    validateForm() {
        this.setState({formValid: this.state.usernameValid && this.state.emailValid && this.state.passwordValid && this.state.repasswordValid});
    }

    reset() {
        this.setState({
            reset: true
        })
    }
    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, 
                      () => { this.validateField(name, value) });
    }
    render() {
        if(this.state.toHome) {
            return <Redirect to="/"/>
        } else {
            return (
                <div className="login-form">
                    <div className="panel panel-default">
                        <FormErrors formErrors={this.state.formErrors} />
                    </div>

                    <div className="form-group">
                        <label>User Name</label>  
                        <input type="text" className="form-control" name="username" id="" onChange={(event) => this.handleUserInput(event)}/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="email" className="form-control" name="email" onChange={(event) => this.handleUserInput(event)}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>  
                        <input type="password" className="form-control" name="" id="" name="password" onChange={(event) => this.handleUserInput(event)}/>
                    </div>
                    <div className="form-group">
                        <label>Retype-Password</label>  
                        <input type="password" className="form-control" name="repassword" id="" onChange={(event) => this.handleUserInput(event)}/>
                    </div>
                    <button onClick={()=>this.signup()} className="btn btn-info" disabled={!this.state.formValid}>Sign Up</button>
                    <button type="reset" className="btn btn-info">Reset</button>
                </div>
            );
        }
    }
}

export default SignUp;