// import axios from "axios";

// const BASE_URL = "http://www.mocky.io/v2/5ac4842c2f00005600f5f9fb";

// const api = axios.create({
//   baseURL: BASE_URL
// });


import axios from "axios";


//export const BASE_URL = "http://104.211.215.126/ApiStaging/"
//export const BASE_URL = "http://104.211.215.126/dev/"
export const BASE_URL = "http://vemulate.com";

const Api = () => {

  const endPoints = {
    getBanners: "/api/home",
    categories: '/api/category',
    new_products: '/api/new_products'

  };

  const api = axios.create({
    baseURL: BASE_URL,
    // timeout: 10000,
    headers: {
      "content-type": "application/json"
    }
  });


  const getBanners = () => {
    return api.post(endPoints.getBanners, { key: 'A123456789' })
      .catch((error) => {
        if (error && error.response) {
          // const { data } = error.response;
        }
      });
  }

  const getCategories = () => {
    return api.post(endPoints.categories, { key: 'A123456789' })
      .catch((error) => {
        if (error && error.response) {
          // const { data } = error.response;
        }
      });
  }
  const getProducts = (flag) => {
    console.log("flag --", flag);
    return api.post(endPoints.new_products, { key: 'A123456789' })
      .catch((error) => {
        if (error && error.response) {
          // const { data } = error.response;
        }
      });
  }

  const getRestaurantList = () => api.get(endPoints.getBanners);






  return {
    getRestaurantList,
    getBanners,
    getCategories,
    getProducts

  }
}

export default {
  Api
};










