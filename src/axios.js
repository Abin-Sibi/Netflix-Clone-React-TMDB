import axios from 'axios'
// import {baseUrl} from './constants/constants'
const instance = axios.create({
    baseURL:process.env.REACT_APP_baseUrl,
});
export default instance