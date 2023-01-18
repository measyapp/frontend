import axios from "axios";
import {loadEnv } from 'vite'
const env = loadEnv('', process.cwd(), '');
console.log(env.VITE_API_URL);
export const Api = axios.create({
    baseURL: "https://measy-api-service.herokuapp.com",
    withCredentials: true,
    headers: {'Access-Control-Allow-Origin': 'true'},
    

})