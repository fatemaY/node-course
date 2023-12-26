const request =require('request')
const axios = require('axios')
const fetch = require('node-fetch')

const url = 'https://catfact.ninja/fact'



// Fetch data using the request module

const fetchCatFactRequest = () => {
request({ url: url, json:true}, (error, response) => {
    try{
        console.log('Cat Data (Request):', response.body)
    }catch{
        console.log('Error fetching cat fact:', error.message);
    }
})
}
fetchCatFactRequest();



// // Fetch data using axios

const fetchCatFactAxios = async () => {
    try {
      const response = await axios.get(url);
      console.log('Cat Data (Axios):', response.data);
    } catch (error) {
      console.error('Error fetching cat fact (Axios):', error.message);
    }
  };
fetchCatFactAxios();


// Fetch data using another 3rd party module

const fetchCatFactNodeFetch = async () => {
    try {
      const response = await fetch(url);
      const catFact = await response.json();
      console.log('Cat Data (node-fetch):', catFact);
    } catch (error) {
      console.error('Error fetching cat fact (node-fetch):', error.message);
    }
  };
  
  fetchCatFactNodeFetch();



