import axios from "axios";
const url = process.env.API_URL;
console.log(url)
export const Api = axios.create({
    baseURL: "http://localhost:3333",
    withCredentials: true,
    headers: {'Access-Control-Allow-Origin': 'true'},
    

})