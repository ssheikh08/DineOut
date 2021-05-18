import React from 'react';
import {Card, CardImg, CardBody, CardTitle, Col,Row} from 'reactstrap';
import classes from './Reservations.module.css';
import ListingCard from './listingUsersCards';
import axios from 'axios';

export default class RestaurantCard extends React.Component{
    state = {
        signups : []
    }

    componentDidMount(){
        axios.get('https://dine-out-syracuse.herokuapp.com/' + "signups").then(response => {
            this.setState ({signups:response.data})})
            console.log(this.state.signups)

    }
    resExists(slot_time,slot_date)
    {
        const slots = {'0':'9:00 AM', '1':'10:00 AM', '2':'11:00 AM','3':'12:00 PM', 
    '4':'1:00 PM','5':'2:00 PM', '6':'3:00 PM', '7':'4:00 PM'}
    const year = slot_date.slice(0,4)
    const day = slot_date.slice(5,7)
    const month = slot_date.slice(8,10)
    var resDate = year + "-" + month + "-" + day + " " + slots[slot_time]
    var days = new Date(resDate);
    var current_time = new Date(); 
   return resDate;
    }
    
     getuserName (userid) {
 
        var result =  this.state.signups.filter(row=>row.id==userid)[0]
        if (result)
        return result.firstName + " " + result.lastName   
    }
    render(){
        const restaurant = this.props.reservationObj;
        console.log('newnenw',restaurant)
       
        return(
            
            <Row>
                <Col xs={6}>
            <Card className={["mt-2", "mb-2", classes.cardHeight].join(" ")}>
                <CardImg className = {classes.imageDim} src={restaurant.restaurant_info.restURL} alt="Card image" />
                
                <CardBody>
                    <CardTitle tag="h5" title={this.getuserName(restaurant.userID)} className={classes.ellipsis}>{this.getuserName(restaurant.userID)}</CardTitle>
                    <CardTitle tag="h5" title={this.resExists(restaurant.slot_time,restaurant.slot_date)} className={classes.ellipsis}>{this.resExists(restaurant.slot_time,restaurant.slot_date)}</CardTitle>
                </CardBody>
                
            </Card>
            </Col>
            <Col xs={6}>
            
            
            {/* { this.state.users && this.state.users.length > 0 ? this.state.users.map(users => 
                           <div className = "" key={users.id} >
                                <ListingCard key={users.id} userObj = {users}/> 
                            
                            
                            </div>) : null } */}
                
                
            
            </Col>
            

            </Row>
            

        )
    }
}

