import axios from "axios";
import {loadEnv } from 'vite'
const env = loadEnv('', process.cwd(), '');
console.log(env.VITE_API_URL);
export const Api = axios.create({
    baseURL: env.VITE_API_URL,
    withCredentials: true,
    headers: {'Access-Control-Allow-Origin': 'true'},
    

})