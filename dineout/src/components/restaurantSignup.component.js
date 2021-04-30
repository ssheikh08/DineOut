/* eslint-disable no-undef */
import React, { Component } from "react";
import axios from "axios";

export default class SignUpMerchant extends Component {
    
    constructor(props) {
    super(props);
    this.state = {
      modifiedData: {
        'restaurantName': '',
        'address': '',
        'city': '',
        'zipcode': '',
        'merchant_id': ''
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
                    
                    
                    <div className="form-group">
                        <label>Restaurant Name</label>
                        <input name="restaurantName" className="form-control" type="text" placeholder="Enter your User Name" onChange = {this.handleInputChange} value={modifiedData.username}/>
                       </div>


                       <div className="form-group">
                        <label>Address </label>
                        <input name="address" className="form-control" type="text" placeholder="Enter Your First Name"onChange = {this.handleInputChange} value={modifiedData.firstName}/>
                        </div>
                    
                        <div className="form-group">
                        <label>City </label>
                        <input name="city" className="form-control" type="text"  onChange = {this.handleInputChange} value={modifiedData.lastName}/>
                        </div>

                        <div className="form-group">
                        <label>Zip Code</label>
                        <input name="zipcode" className="form-control" type="number" placeholder="Enter Your Password" onChange = {this.handleInputChange} value={modifiedData.password}/>
                        </div>
                        
                        
                        <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button> 
                        
               
                </form>
            </div>
        );
    }
}