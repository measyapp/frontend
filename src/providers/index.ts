import axios from "axios";
const url = process.env.API_URL;
//console.log(url)
//console.log(process.env.NODE_ENV);
//console.log(process.env.APP_URL);
export const Api = axios.create({
    baseURL: process.env.API_URL,
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': 'true',
        'Origin': process.env.API_URL
    },

    

})