import axios from 'axios';

axios.get('http://localhost:1337/restaurants').then(response => {
  console.log(response.data);
});

axios.get('http://localhost:1337/restaurants').then(response => {
  console.log(response.data);
});