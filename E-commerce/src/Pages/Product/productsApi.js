import axios from "axios";

export function fetchProducts(){
    return axios.get('https://fakestoreapi.com/products')
}

// export function fetchMenProducts(){
//     return axios.get("https://fakestoreapi.com/products/category/men's%20clothing")
// }