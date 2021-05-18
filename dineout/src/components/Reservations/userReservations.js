import React from 'react';
import axios from 'axios';
import {Form, FormGroup, Input, Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import ReservationCard from './ReservationCard';




export default class Home extends React.Component{
    state = {
        restaurants: [],
        search: '',
        username: ''
    }

    componentDidMount(){
        // Make Rest call here to get restaurant details
        this.getHomePageDetails();
        console.log(this.state.restaurants)
        const id = localStorage.getItem('userID');
        axios.get('https://dine-out-syracuse.herokuapp.com/' + "signups").then(response => {
        const result = response.data.filter(row=>row.id==id)
        this.state.username = result.firstName;
        console.log(this.state.username)});
    }
    
    getHomePageDetails = async () => {
        const url = "https://dine-out-syracuse.herokuapp.com/restaurant-infos";
        const restaurantsData = await axios.get(url);
        this.setState({
            restaurants: restaurantsData.data
        })
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

 

    render(){
        return(
            <div className ="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/home"}>Dine-Out</Link>
         
        </div>
        
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/profile"}>Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>Logout</Link>
              </li>
              </ul>

              </div>
      </nav>
      
      <div className="outer">
        
        <div className="inner">
            <div className="container mt-3 mb-2" >
                
                
                    
            { this.state.restaurants && this.state.restaurants.length > 0 ? this.state.restaurants.map(restaurant => 
                           <div className = "" key={restaurant.id} >
                                <ReservationCard key={restaurant.id} restaurantObj = {restaurant}/> 
                            
                            
                            </div>) : null }
                    
                
            </div>
            </div>
            </div>
            </div>
            
        );
    }

}