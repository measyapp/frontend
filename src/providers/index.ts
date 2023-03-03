import axios from "axios";
const url = process.env.API_URL;
//console.log(url)
//console.log(process.env.NODE_ENV);
//console.log(process.env.APP_URL);
const corsOrigins = [ 'http://localhost:3367',
                      'http://localhost:3366/',
                      'https://measy-web.vercel.app',
                      'https://measy-measy-pes.vercel.app/',
                      'https://measy-teste.vercel.app'
                    ]
export const Api = axios.create({
    baseURL: process.env.API_URL,
    withCredentials: true,
    headers:{
        'Content-Type': 'application/json'
    }

    

})