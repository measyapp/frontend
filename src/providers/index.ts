import axios from "axios";
export const Api = axios.create({
    baseURL: "https://measy-api-service.herokuapp.com",
    withCredentials: true,
    headers: {'Access-Control-Allow-Origin': 'true'},
    

})