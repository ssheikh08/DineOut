/* eslint-disable no-undef */
import React, { Component } from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom'

export default class RegisterRestaurant extends Component {
    
    constructor(props) {
    super(props);
    this.state = {
      modifiedData: {
        'restName': '',
        'restAddr': '',
        'restContact': '',
        'restCity': '',
        'restZipCode': '',
        'restURL': '',
        'restRatings': '0',
        'restReviews': 'Nice restaurant with a good ambience'
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
          const response = await axios.post('https://dine-out-syracuse.herokuapp.com/my-restaurants',this.state.modifiedData);
          console.log(response);
          alert('Ok');
        } catch (error) {
          this.setState({ error });
        }
        this.setState({
          userLoggedIn: true
        })
       
      };

    render() {
      const {modifiedData} = this.state;
      if(this.state.userLoggedIn){
        return (<Redirect to="/home" />);

      }
        return (
            <div className="App">
        <form onSubmit = {this.handleSubmit}>
                    <h3>Register Restaurant</h3>
                    
                    
                    <div className="form-group">
                    <div id="mem" style= {{marginRight: 16 + 'em'}}>
                        <label>Name</label>
                        </div>
                        <input name="restName" className="form-control" type="text" placeholder="Enter your Restaurant Name" onChange = {this.handleInputChange} value={modifiedData.restName}/>
                       </div>


                       <div className="form-group">
                       <div id="mem" style= {{marginRight: 16 + 'em'}}>
                        <label>Address</label>
                        </div>
                        <input name="restAddr" className="form-control" type="text" placeholder="Enter Your Restaurant address"onChange = {this.handleInputChange} value={modifiedData.restAddr}/>
                        </div>
                    

                        <div className="form-group">
                        <div id="mem" style= {{marginRight: 18 + 'em'}}>
                        <label>Phone </label>
                        </div>
                        <input name="restContact" className="form-control" type="number" placeholder="Enter the contact number" onChange = {this.handleInputChange} value={modifiedData.restContact}/>
                        </div>

                        
                        <div className="form-group">
                        <div id="mem" style= {{marginRight: 18 + 'em'}}>
                        <label>City</label>
                        </div>
                        <input name="restCity" className="form-control" type="text" placeholder="Enter the city" onChange = {this.handleInputChange} value={modifiedData.restCity}/>
                        </div>

                        
                        <div className="form-group">
                        <div id="mem" style= {{marginRight: 18 + 'em'}}>
                        <label>Zip Code</label>
                        </div>
                        <input name="restZipCode" className="form-control" type="number" placeholder="Enter the zipcode" onChange = {this.handleInputChange} value={modifiedData.restZipCode}/>
                        </div>

                        
                        <div className="form-group">
                        <div id="mem" style= {{marginRight: 18 + 'em'}}>
                        <label>Image URL</label>
                        </div>
                        <input name="restURL" className="form-control" type="text" placeholder="Enter the URL" onChange = {this.handleInputChange} value={modifiedData.restURL}/>
                        </div>
                        
                        <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button> 
                        
                    
                </form>
            </div>
        );
    }
}