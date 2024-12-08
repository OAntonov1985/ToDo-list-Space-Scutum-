import axios from 'axios';
import { ADRESS } from '@/constants/urlAdress';

const api = axios.create({
    baseURL: ADRESS,
    withCredentials: true
});


export { api };