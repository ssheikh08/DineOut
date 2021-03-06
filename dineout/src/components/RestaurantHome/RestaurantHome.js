import React from 'react';
import axios from 'axios';
import {Form, FormGroup, Input, Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import RestaurantCard from '../Restaurant/RestaurantCard';




export default class Home extends React.Component{
    state = {
        restaurants: [],
        search: '',
        username: ''
    }

    componentDidMount(){
        // Make Rest call here to get restaurant details
        this.getHomePageDetails();
        const id = localStorage.getItem('merchID');
        axios.get('https://dine-out-syracuse.herokuapp.com/' + "restaurant-infos").then(response => {
        const result = response.data.filter(row=>row.merchant.id==id)
        this.state.username = result.firstName;
        console.log(this.state.username)
    });
    }
    
    getHomePageDetails = async () => {
        const id = localStorage.getItem('merchID');
        const url = 'https://dine-out-syracuse.herokuapp.com/' + "restaurant-infos";
        const response = await axios.get(url);
        const result = response.data.filter(row=>row.merchant.id==id);
        this.setState({
            restaurants: result
        })
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    searchRestaurants = async (event) => {
        event.preventDefault();
        const searchtext = this.state.search.toLowerCase();
            const url = "https://dine-out-syracuse.herokuapp.com/restaurant-infos";
            const restaurantsData = await axios.get(url);
            const searchData = restaurantsData.data.filter(restaurantObj => {
               return  restaurantObj.restName?.toLowerCase().startsWith(searchtext) || restaurantObj.restCity?.toLowerCase().startsWith(searchtext)||restaurantObj.categories?.toLowerCase().startsWith(searchtext);
            });
            this.setState({
                restaurants: searchData
            });        
    }

    render(){
        const uid = localStorage.getItem('merchID');
        const path = "/restaurantSignup/"+ uid;
        const reserPath = "/merchantReservations/"+uid;
        return(
            <div className ="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Dine-Out</Link>
         
        </div>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              
              <Link className="nav-link" to={reserPath}>Reservations</Link>
            </li>
              <li className="nav-item">
                <Link className="nav-link" to={path}>Restraunt Sign-up</Link>
              </li>
              <li className="nav-item">
              
                <Link className="nav-link" to='/merchant-signin'>LogOut</Link>
              </li>
              </ul>

              </div>
      </nav>
      
      <div className="outer">
        
        <div className="inner">
            <div className="container mt-2 mb-2" >
                <div className="container pt-3 pl-0 pr-0">
                    <Form onSubmit={this.searchRestaurants}>
                        <FormGroup>
                            <Input  type="text" name="search" id="search" maxLength="45" className="mb-3 mt-3"
                                    placeholder="Search and Press Enter..." onChange={this.handleInputChange}
                                    value={this.state.search}/>
                        </FormGroup>
                        </Form>
                </div>  
                <div className = "col-sm-12">
                    <div className = "row" >
                        { this.state.restaurants && this.state.restaurants.length > 0 ? this.state.restaurants.map(restaurant => 
                           <div className = "col-sm-2 col-md-2 col-xl-4" key={restaurant.id} >
                                <Link to = {{
                                    pathname: `/restaurant/${restaurant.id}`, restaurantObj: restaurant,
                                }}><RestaurantCard key={restaurant.id} restaurantObj = {restaurant}/> </Link>
                            </div>) : null }
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
            
        );
    }

}