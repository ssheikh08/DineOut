import React from 'react';
import axios from 'axios';
import { Button, Container, Jumbotron } from 'reactstrap';
import classes from './RestaurantCard.module.css';
import StarRatings from 'react-star-ratings';
import {Link} from 'react-router-dom';


export default class RestaurantDetails extends React.Component{
   
    constructor(props){
        super(props);
        this.state = {
            restaurant: this.props.location.restaurantObj ? this.props.location.restaurantObj : [],
            rating: 0
            
        }
    }   
    
    componentDidMount(){
        //Fetch Restaurant details here
        this.getRestaurantData();
        
    }
    

    changeRating( newRating ) {
        console.log(newRating);
        this.setState({
          rating: newRating
        });
        console.log(this.state.rating)
       this.putRatings(newRating);
    }
    
    putRatings(newRating){ 
        const id = this.props.match.params.id || 0;
      console.log('newnew', newRating);
      console.log('newnew222', this.state.restaurant.restRatings);
    axios
.put(`https://dine-out-syracuse.herokuapp.com/restaurant-infos/${id}`, {
ratings_count: this.state.restaurant.ratings_count +1,
restRatings : (this.state.restaurant.restRatings + newRating)/(this.state.restaurant.ratings_count +1)
})
.then(response => {
console.log(response);
});
}
    
    

    getRestaurantData = async () => {
        if(!this.props.location.restaurantObj){
            const id = this.props.match.params.id || 0;
            let url = "";
            if(id !== 0)
                url = `https://dine-out-syracuse.herokuapp.com/restaurant-infos/${id}`;
            else{
                // Throw error here
                alert("Reload the page or contact the admin");
                return;
            }
            const restaurantData = await axios.get(url);
            this.setState({
                restaurant: restaurantData.data
            })
        }
    }
  
    render(){
        
        const restaurant = this.state.restaurant;
        return(
            <div className ="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Dine-Out</Link>
          
        </div>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/home"}>Home</Link>
              </li>

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
              </ul>

              </div>
      </nav>
  
  <div className="outer">
    
    <div className="inner">
            <React.Fragment>
                <div className="col-sm-12">
                    <div className="row">
                        {/* <div className="col-sm-12"> */}
                        <div className="col-sm-6">
                            <img className = {classes.restDetailImage} src={restaurant.restURL} alt="Card image cap" />
                        </div>
                        <div className="col-sm-6 px-2">
                            <Jumbotron className="col-sm-12">
                                <h1 className="display-3">{restaurant.restName}</h1>
                                <p className = "lead">{restaurant.restAddr}</p>
                                <p className = "lead">{restaurant.restCity}</p>
                                <div className="col-sm-12 my-3 text-center" >
                                <StarRatings
                                    rating={this.state.restaurant.restRatings}
                                    starRatedColor="gold"
                                    numberOfStars={5}
                                    name='rating'
                                />
                            </div>

                            </Jumbotron>
                            
                           
                        </div>
                      
                        
                        <div>
                           
                            <div className="col-sm-12 my-3 text-center" >
                            <StarRatings
          rating={this.state.rating}
          starRatedColor="gold"
          changeRating={this.changeRating.bind(this)}
          numberOfStars={5}
          name='rating'
        /> </div>
                            
                            <Link to = {{
                                    pathname: `/reservation/${restaurant.id}`, restaurantObj: restaurant,
                                }}>
                            <Button className="myButton text" style= {{width: 25 + 'em'}}>
                                {/* Trigger navigation to reserve tables component */}
                                Reserve Table
                            </Button>
                            </Link>
                            </div>
                          
                        {/* </div> */}
                    </div>
                </div>
            </React.Fragment>
            </div>
            </div>
            </div>

        )
    }
}