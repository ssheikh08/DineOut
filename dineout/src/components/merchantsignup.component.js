/* eslint-disable no-undef */
import React, { Component } from "react";
import axios from "axios";

export default class SignUpMerchant extends Component {
    
    constructor(props) {
    super(props);
    this.state = {
      modifiedData: {
        'username': '',
        'firstName': '',
        'lastName': '',
        'email': '',
        'password': '',
        'phoneNumber': '',
        'restaurants': []
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
          const response = await axios.post('https://dine-out-syracuse.herokuapp.com/merchants',this.state.modifiedData);
          console.log(this.state.modifiedData);
          console.log(response);
        } catch (error) {
          this.setState({ error });
        }
      };

    render() {
      const {modifiedData} = this.state;
        return (
          
            <div className="App">
        <form   onSubmit = {this.handleSubmit}>
                    <h3>Register</h3>
                    
                    
                    <div className="form-group">
                    <div id="mem" style= {{marginRight: 16 + 'em'}}>
                        <label>User name  </label>
                        </div>
                        <input name="username" className="form-control" type="text" placeholder="Enter your User Name" onChange = {this.handleInputChange} value={modifiedData.username}/>
                       </div>


                       <div className="form-group">
                       <div id="mem" style= {{marginRight: 16 + 'em'}}>
                        <label>First Name  </label>
                        </div>
                        <input name="firstName" className="form-control" type="text" placeholder="Enter Your First Name"onChange = {this.handleInputChange} value={modifiedData.firstName}/>
                        </div>
                    

                        <div className="form-group">
                        <div id="mem" style= {{marginRight: 16 + 'em'}}>
                        <label>Last Name </label>
                        </div>
                        <input name="lastName" className="form-control" type="text" placeholder="Enter Your Last Name" onChange = {this.handleInputChange} value={modifiedData.lastName}/>
                        </div>

                        <div className="form-group">
                        <div id="mem" style= {{marginRight: 19 + 'em'}}>
                        <label>Email </label>
                        </div>
                        <input name="email" className="form-control" type="email" placeholder="Enter email address" onChange = {this.handleInputChange} value={modifiedData.email}/>
                        </div>

                        <div className="form-group">
                        <div id="mem" style= {{marginRight: 14.4 + 'em'}}>
                        <label>Phone Number </label>
                        </div>
                        <input name="phoneNumber" className="form-control" type="tel" placeholder="Enter phone number" onChange = {this.handleInputChange} value={modifiedData.phone}/>
                        </div>

                        <div className="form-group">
                        <div id="mem" style= {{marginRight: 19 + 'em'}}>
                        <label>Password</label>
                        </div>
                        <input name="password" className="form-control" type="password" placeholder="Enter Your Password" onChange = {this.handleInputChange} value={modifiedData.password}/>
                        </div>
                        
                        
                        <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button> 
                        
               
                </form>
            </div>
            
        );
    }
}