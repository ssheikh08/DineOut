import React from 'react';
import axios from 'axios';
import {Form, FormGroup, Input, Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import MerchantReservationCard from './MerchantReservationCard';




export default class Home extends React.Component{
    state = {
        reservations: [],
        restaurant : [] 
    }
    
    resExists(slot_time,slot_date)
{
    const slots = {'0':'9:00 AM', '1':'10:00 AM', '2':'11:00 AM','3':'12:00 PM', 
'4':'1:00 PM','5':'2:00 PM', '6':'3:00 PM', '7':'4:00 PM'}
const year = slot_date.slice(0,4)
const day = slot_date.slice(5,7)
const month = slot_date.slice(8,10)
var resDate = year + "-" + month + "-" + day + " " + slots[slot_time]
var days = new Date(resDate).valueOf();
var current_time = new Date().valueOf(); 
return (days/1000 > current_time/1000)
}


    componentDidMount(){
        // Make Rest call here to get restaurant details
        const id = 10;
        const please =[];
        const pleaseRest = [];

        axios.get('https://dine-out-syracuse.herokuapp.com/' + "restreservations").then(response => {
    var result = response.data.filter(row=> (this.resExists(row.slot_time,row.slot_date)) 
    && (row.restaurant_info.merchant==id))
       for(var res in result)
       {
        please.push(result[res]);
      // this.setState({reservations : result[res]})
       pleaseRest.push(result[res].restaurant_info)
      // this.setState({restaurant : result[res].restaurant_info})
    }
    this.setState({reservations : please})
    this.setState({restaurant: pleaseRest})
    });
     //const new2 = this.state.reservations[1];
    //console.log(new2);
    console.log('common',this.state.restaurant)
    }
    myfunc(){
          const id = 10;
        const please =[];
        const pleaseRest = [];
        axios.get('https://dine-out-syracuse.herokuapp.com/' + "restreservations").then(response => {
    var result = response.data.filter(row=> (this.resExists(row.slot_time,row.slot_date)) 
    && (row.restaurant_info.merchant==id))
       for(var res in result)
       {
        please.push(result[res]);
      // this.setState({reservations : result[res]})
       pleaseRest.push(result[res].restaurant_info)
      // this.setState({restaurant : result[res].restaurant_info})
    }
    this.setState({reservations : please})
    this.setState({restaurant: pleaseRest})
    });
     //const new2 = this.state.reservations[1];
    //console.log(new2);
    
    }
  
 
    render(){
        const {modifiedData} = this.state;
      const merID =  localStorage.getItem('merchID');
      const path = "/restaurantHome/"+merID
        return(
            <div className ="App">
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
            <div className="container mt-3 mb-2" >
                
                
                    
            { this.state.reservations && this.state.reservations.length > 0 ? this.state.reservations.map(reservations => 
                           <div className = "" key={reservations.id} >    
                                <MerchantReservationCard key={reservations.id} reservationObj = {reservations}/> 
                            
                            
                            </div>) : null }
                    
                
            </div>
            </div>
            </div>
            </div>
            
        );
    }

}