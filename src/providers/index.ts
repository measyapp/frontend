import axios from "axios";
const url = process.env.API_URL;
console.log(url)
console.log(process.env.NODE_ENV);
export const Api = axios.create({
    baseURL: process.env.API_URL,
    withCredentials: true,
    headers: {'Access-Control-Allow-Origin': 'true'},
    

})