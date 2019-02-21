import axios from "axios";

//export const BASE_URL = "http://104.211.215.126/ApiStaging/"
export const BASE_URL = "http://vemulate.com";

const Api = () => {

  const endPoints = {
    getBanners: "/api/home",
    categories: '/api/category',
    sub_catgory: '/api/subcategory',
    child_catgory: '/api/childcategory',
    new_products: '/api/new_products',
    product_list: '/api/browseCategory'

  };

  const api = axios.create({
    baseURL: BASE_URL,
    timeout: 20000,
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
  const getSubCategories = (id) => {
    return api.post(endPoints.sub_catgory, { key: 'A123456789', category_group_id: id })
      .catch((error) => {
        if (error && error.response) {
          // const { data } = error.response;
        }
      });
  }
  const getChildCategories = (id) => {
    return api.post(endPoints.child_catgory, { key: 'A123456789', category_sub_group_id: id })
      .catch((error) => {
        if (error && error.response) {
          // const { data } = error.response;
        }
      });
  }
  const getProductList = (id) => {
    return api.post(endPoints.product_list, { key: 'A123456789', id: id, page_id: 1 })
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
    getSubCategories,
    getChildCategories,
    getProductList,
    getProducts
  }
}

export default {
  Api
};










