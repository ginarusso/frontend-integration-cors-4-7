import axios from 'axios'

const BASE_URL = 'http://localhost:3001'; // Change to 3001
const apiConn = axios.create({
  baseURL: BASE_URL, // Corrected baseURL
});

export default apiConn