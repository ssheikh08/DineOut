import axios from 'axios';

// axios.get('http://localhost:1337/restaurants').then(response => {
//   console.log(response.data);
// });

axios.post('https://dine-out-syracuse.herokuapp.com/signups',{username: "sanath23", 
password: "kjxfxjghj", firstName: "Sanath", lastName: "Satish", email: "ssatish@syr.edu"}).then(response => {
  console.log(response.data);
});