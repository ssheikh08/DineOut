import axios from 'axios';
axios
  .post('http://localhost:1337/signups', {
    username: 'Jon Lewis',
    password: 'abc123456',
    firstName: 'Jon',
    secondName : 'Lewis',
    email:'jlewis@gmail.com'
  })
  .then(response => {
    console.log(response);
  });