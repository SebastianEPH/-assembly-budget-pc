import axios from 'axios'

const connectionAPI =  axios.create({
    baseURL: "https://assembly-budget-node.herokuapp.com/api/"
    // baseURL: "http://127.0.0.1:5000/api/"
})

export default connectionAPI ;
