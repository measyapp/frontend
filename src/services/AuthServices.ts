import {Api} from "../providers"
import { IProjectData, IUserData, LoginData } from "../types"
Api.defaults.headers['']
const login =  (data : LoginData) => {
  return  Api.post("/auth/login",data);
}
const logout=  () => {
  return  Api.post('/auth/logout');
}
const signup=  (data : IUserData) => {
  return  Api.post('/auth/signup',data);
}

const getTokenPassReset =  (email : string) => {
  return  Api.get('/auth/resetPassword/'+email);
}

const resetPassword = (newPass : String, token : String)=>{  
  if (token!=='') Api.defaults.headers['x-altpass-token'] = token as any;
  return Api.patch('/auth/resetPassword/',{senha: newPass});
}

export const AuthServices = {
    login,
    logout,
    signup,
    getTokenPassReset,
    resetPassword,
}