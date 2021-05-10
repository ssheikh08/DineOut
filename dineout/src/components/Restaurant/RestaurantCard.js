import React from 'react';
import {Card, CardImg, CardBody, CardTitle} from 'reactstrap';
import classes from './RestaurantCard.module.css';

export default class RestaurantCard extends React.Component{

    render(){
        const restaurant = this.props.restaurantObj;
        return(
            <Card className={["mt-2", "mb-2", classes.cardHeight].join(" ")}>
                <CardImg className = {classes.imageDim} src={restaurant.restURL} alt="Card image" />
                <CardBody>
                    <CardTitle tag="h5" title={restaurant.restName} className={classes.ellipsis}>{restaurant.restName}</CardTitle>
                    <CardTitle tag="h5" title={restaurant.restAddr} className={classes.ellipsis}>{restaurant.restAddr}</CardTitle>
                </CardBody>
            </Card>
        )
    }
}

