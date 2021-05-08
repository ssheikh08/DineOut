import React, { Component } from "react";
import axios from "axios";

export default class LoginMerchant extends Component {   constructor(props) {
    super(props);
    this.state = {
      modifiedData: {
        'email': '',
        'password': ''
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
          const response = await axios.get('https://dine-out-syracuse.herokuapp.com/merchants');
          console.log(this.state.modifiedData);
          var result = response.data;
          function userID(email, password)
              {
                  var row = result.filter(result => result['email']==email && result['password']==password)
                  if(row[0]['id'])
                  {
                    alert('Success')
                  }
                  else
                  {
                  alert('login Failed')
                  }
              }
            userID(this.state.modifiedData.email, this.state.modifiedData.password);
        } catch (error) {
          this.setState({ error });
        }};

        render() {
            const{modifiedData} = this.state;
      
              return (
                <div className ="App">
                  <form onSubmit = {this.handleSubmit}>
      
                      <h3>Log in</h3>
                      <div className="form-group">
                      <div id="mem" style= {{marginRight: 710 + 'em'}}>
      
                          <label>Email</label>
                          </div>
                          <input name="email" type="email" className="form-control" placeholder="Enter email" onChange={this.handleInputChange} value={modifiedData.email} />
                          </div>
      
                          <div className="form-group">
                          <div id="mem" style= {{marginRight: 710 + 'em'}}>
                          <label>Password   </label>
                          </div>
                          <input name="password" type="password" className="form-control" placeholder="Enter password" onChange = {this.handleInputChange} value={modifiedData.password} />
                          </div>
      
                          <div className="form-group">
                          <div className="custom-control custom-checkbox" style= {{marginRight: 12 + 'em'}}>
                              <input type="checkbox"  className="custom-control-input" id="customCheck1" />
                                   <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                   </div>
                          </div>
                      
                      
                      
                      <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                   
                     <p className="forgot-password text-right">
                          Forgot <a href="#">password?</a>
                      </p>
                      
                  </form>
                  </div>
              );
          }
}
