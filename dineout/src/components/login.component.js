import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
    constructor(props) {
        super(props); 
            this.state = {
                modifiedData: {
                  'email':'',
                  'password':''
                }
              }
    }

    handleInputChange = ({ target: { name, value } }) => {
        this.setState(prev => ({
          ...prev,
          modifiedData: {
            ...prev.modifiedData,
            [name]: value,
          },
        }));
      };
    
        handleSubmit = async e => {
          e.preventDefault();
            try {
              const response = await axios.get('https://dine-out-syracuse.herokuapp.com/user-logins',this.state.modifiedData);
              console.log(response);
             //var loginResponse = await axios.get('https://dine-out-syracuse.herokuapp.com/signups');
              var result = response.data
              function userID(uName, password)
              {
              for (var items in result)
              { 
                
                if(result[items]['email']===uName)
                {
                  if (result[items]['password']=== password){
                    
                    alert('True');
                    
                  }
                  else {
                   
                    alert('Login failed. Enter correct password or reset password');
                    
                  }
                }
              }
              }
            userID(this.state.modifiedData.email, this.state.modifiedData.password);
              
            } catch (error) {
              this.setState({ error });
            }
          };

    render() {
      const{modifiedData} = this.state;

        return (
          <div className ="App">
            <form onSubmit = {this.handleSubmit}>

                <h3>Log in</h3>

                    <br />
                    <label>Email
                    <input name="email" type="email" onChange={this.handleInputChange} value={modifiedData.email} />
                    </label>

                    <br />
                    <label>Password
                    <input name="password" type="password" onChange = {this.handleInputChange} value={modifiedData.password} />
                    </label>

                    <br />
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                
                <br />
                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    {/* Forgot <a href="#">password?</a> */}
                </p>
            </form>
            </div>
        );
    }
}
