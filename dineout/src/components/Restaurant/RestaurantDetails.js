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
            restaurant: this.props.location.restaurantObj ? this.props.location.restaurantObj : []
        }
    }   

    componentDidMount(){
        //Fetch Restaurant details here
        this.getRestaurantData();
    }

    getRestaurantData = async () => {
        if(!this.props.location.restaurantObj){
            const id = this.props.match.params.id || 0;
            let url = "";
            if(id !== 0)
                url = `https://dine-out-syracuse.herokuapp.com/my-restaurants/${id}`;
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
                            </Jumbotron>
                            <Link to = {{
                                    pathname: `/reservation/${restaurant.id}`, restaurantObj: restaurant,
                                }}>
                            <Button className="w-100 p-2">
                                {/* Trigger navigation to reserve tables component */}
                                Reserve Table
                            </Button>
                            </Link>
                            <div className="col-sm-12 my-3 text-center">
                                <StarRatings
                                    rating={this.state.restaurant.restRatings}
                                    starRatedColor="gold"
                                    numberOfStars={5}
                                    name='rating'
                                />
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </React.Fragment>

        )
    }
}