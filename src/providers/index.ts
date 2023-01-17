import axios from "axios";
import { loadEnv } from 'vite'
const env = loadEnv('', process.cwd(), '');
const API_URL = env.API_URL || 'http://localhost:3333';
console.log(API_URL)
export const Api = axios.create({
    baseURL: API_URL,
})