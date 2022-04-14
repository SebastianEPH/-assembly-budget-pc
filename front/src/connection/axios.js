import axios from 'axios'
import {base_api} from "./base_api";


const connectionAPI =  axios.create({
    baseURL: base_api
})

export default connectionAPI ;
