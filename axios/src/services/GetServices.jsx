

import axios from "axios";


const api = axios.create({
    baseURL:"https://fakestoreapi.com/"
})

export const getData =()=>{
    return api.get("products");
}