/* eslint-disable no-undef */
import React, { Component } from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom';

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
        'restRatings': 0,
        'capacity': 0,
        'merchant':[],
        'restreservations':[],
        'ratings_count' : 0,
        'categories': '',
        'restReviews': {}
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
           console.log(this.state.modifiedData);
          const response = await axios.post('https://dine-out-syracuse.herokuapp.com/restaurant-infos',this.state.modifiedData);
          console.log(response);
          alert('Ok');
        } catch (error) {
          this.setState({ error });
        }
        this.setState({
          userLoggedIn: true
        })
       
      };

      componentDidMount(){
        // Make Rest call here to get restaurant details

        const id = localStorage.getItem('merchID');
        axios.get('https://dine-out-syracuse.herokuapp.com/' + "merchants").then(response => {
        const result = response.data.filter(row=>row.id==id)
        this.state.modifiedData.merchant = result[0];
        console.log(this.state.modifiedData.merchant)});
    }

    render() {
      const {modifiedData} = this.state;
      const merID =  localStorage.getItem('merchID');
      const path = "/restaurantHome/"+merID;
      if(this.state.userLoggedIn){
        return (<Redirect to={path} />);

      }
        return (
            <div className="App">
               <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={path}>Dine-Out</Link>
         
        </div>
        
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
              
                <Link className="nav-link" to='/merchant-signin'>LogOut</Link>
              </li>
              </ul>

              </div>
      </nav>
      <div className="outer">
        
        <div className="inner">

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
                        <input name="restContact" className="form-control" type="text" placeholder="Enter the contact number" onChange = {this.handleInputChange} value={modifiedData.restContact}/>
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
                        <input name="restZipCode" className="form-control" type="text" placeholder="Enter the zipcode" onChange = {this.handleInputChange} value={modifiedData.restZipCode}/>
                        </div>

                        
                        <div className="form-group">
                        <div id="mem" style= {{marginRight: 18 + 'em'}}>
                        <label>Image URL</label>
                        </div>
                        <input name="restURL" className="form-control" type="text" placeholder="Enter the URL" onChange = {this.handleInputChange} value={modifiedData.restURL}/>
                        </div>

                        <div className="form-group">
                        <div id="mem" style= {{marginRight: 18 + 'em'}}>
                        <label>Capacity</label>
                        </div>
                        <input name="capacity" className="form-control" type="text" placeholder="Enter the capacity" onChange = {this.handleInputChange} value={modifiedData.capacity}/>
                        </div>

                        <div className="form-group">
                        <div id="mem" style= {{marginRight: 18 + 'em'}}>
                        <label>Cuisine</label>
                        </div>
                        <input name="categories" className="form-control" type="text" placeholder="Enter cuisine type" onChange = {this.handleInputChange} value={modifiedData.categories}/>
                        </div>


                        
                        <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button> 
                        
                    
                </form>
            </div>
            </div>
            </div>
            
        );
    }
}