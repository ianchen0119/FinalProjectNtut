import axios from 'axios'
export const va = axios
const AppDomain = axios.create({
    baseURL: 'http://liaojack.asuscomm.com:8080/http://liaojack.asuscomm.com:3000/' //your api domain
  });

  export const apiUserLogin = data => AppDomain.get('/login', data);
  export const apiUserDynamic = data => AppDomain.get('/dynamic', data);
  export const apiUserMycourse = data => AppDomain.get('/mycourse', data);
  export const apiUserMyperformance = data => AppDomain.get('/performance', data);