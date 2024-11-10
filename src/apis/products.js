import axios from "axios";

const show = slug => axios.get(`https://smile-cart-backend-staging.neetodeployapp.com/products/${slug}`);

const fetch = () => axios.get("https://smile-cart-backend-staging.neetodeployapp.com/products/");

const productsApi = { show, fetch };


export default productsApi;