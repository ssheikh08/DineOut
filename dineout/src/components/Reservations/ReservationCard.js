import React from 'react';
import {Card, CardImg, CardBody, CardTitle, Col,Row} from 'reactstrap';
import classes from './Reservations.module.css';


export default class RestaurantCard extends React.Component{

    render(){
        const restaurant = this.props.restaurantObj;
        return(
            
            <Row>
                <Col xs={6}>
            <Card className={["mt-2", "mb-2", classes.cardHeight].join(" ")}>
                <CardImg className = {classes.imageDim} src={restaurant.restURL} alt="Card image" />
                
                <CardBody>
                    <CardTitle tag="h5" title={restaurant.restName} className={classes.ellipsis}>{restaurant.restName}</CardTitle>
                    <CardTitle tag="h5" title={restaurant.restAddr} className={classes.ellipsis}>{restaurant.restAddr}</CardTitle>
                </CardBody>
                
            </Card>
            </Col>
            <Col xs={6}>
            
                
                
                <CardBody>
                    <CardTitle tag="h5" title={restaurant.restName} className={classes.ellipsis}>{restaurant.restName}</CardTitle>
                    <CardTitle tag="h5" title={restaurant.restAddr} className={classes.ellipsis}>{restaurant.restAddr}</CardTitle>
                </CardBody>
                
            
            </Col>
            

            </Row>
            

        )
    }
}

