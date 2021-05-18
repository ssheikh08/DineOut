import React from 'react';
import {Card, CardImg, CardBody, CardTitle, Col,Row} from 'reactstrap';
import classes from './Reservations.module.css';


export default class RestaurantCard extends React.Component{

    render(){
        const users = this.props.userObj;
        console.log(users); 
        return(
            
            
            <Card className={["mt-2", "mb-2", classes.cardHeight].join(" ")}>
               
                
                <CardBody>
                    <CardTitle tag="h5" title={users.firstName}   className={classes.ellipsis}>{users.firstName}</CardTitle>
                    <CardTitle tag="h5" title={users.lastName} className={classes.ellipsis}>{users.lastName}</CardTitle>
                    {/* <CardTitle tag="h5" title={users.slot_date} className={classes.ellipsis}>{users.slot_date}</CardTitle>
                    <CardTitle tag="h5" title={users.slot_time} className={classes.ellipsis}>{users.slot_time}</CardTitle>
                     */}
                </CardBody>
                
            </Card>
         
            
                
            
            

        )
    }
}

