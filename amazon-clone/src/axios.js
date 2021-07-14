import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-challenge-f4eff.cloudfunctions.net/api' // The Cloud function API URL
});

export default instance;


// Rough
// http://localhost:5001/challenge-f4eff/us-central1/api