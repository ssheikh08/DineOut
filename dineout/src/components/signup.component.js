/* eslint-disable no-undef */
import React, { Component } from "react";
import axios from "axios";

export default class SignUp extends Component {
    
    constructor(props) {
    super(props);
    this.state = {
      modifiedData: {
        'username': '',
        'password': '',
        'firstName': '',
        'lastName': '',
        'email': ''
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
          const response = await axios.post('https://dine-out-syracuse.herokuapp.com/signups',this.state.modifiedData);
          console.log(response);
        } catch (error) {
          this.setState({ error });
        }
      };

    render() {
      const {modifiedData} = this.state;
        return (
            <div className="App">
        <form onSubmit = {this.handleSubmit}>
                    <h3>Register</h3>
                    <br />
                        <label>User name
                        <input name="username" type="text" onChange = {this.handleInputChange} value={modifiedData.username}/>
                         </label>
                        <br />
                    
                    
                        <label>First name
                        <input name="firstName" type="text" onChange = {this.handleInputChange} value={modifiedData.firstName}/>
                        </label>
                        <br />
                    
                        <label>Last name
                        <input name="lastName" type="text"  onChange = {this.handleInputChange} value={modifiedData.lastName}/>
                        </label>
                        <br />

                        <label>Email
                        <input name="email" type="email" onChange = {this.handleInputChange} value={modifiedData.email}/>
                        </label>
                        <br />


                        <label>Password
                        <input name="password" type="password" onChange = {this.handleInputChange} value={modifiedData.password}/>
                        </label>
                        <br />
                    <button type="submit">Submit</button>
                    {/* <button onClick={console.log(this.state)} type="submit" className="btn btn-dark btn-lg btn-block">Register</button> */}
                </form>
            </div>
        );
    }
}