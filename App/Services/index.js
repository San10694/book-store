import axios from "axios";

//export const BASE_URL = "http://104.211.215.126/ApiStaging/"
export const BASE_URL = "http://68.183.94.56";
//export const BASE_URL = "http://titlezstore.in"
//export const BASE_URL = "http://vemulate.com";

const Api = () => {

  const endPoints = {
    getBanners: "/api/home",
    categories: '/api/category',
    sub_catgory: '/api/subcategory',
    child_catgory: '/api/childcategory',
    new_products: '/api/new_products',
    product_list: '/api/browseCategory',
    product_detail: '/api/product/',
    sign_up: '/api/request_signup_otp/',
    sign_in: '/api/request_login_otp/',
    otp_verify: '/api/verify_otp/',
    add_address: '/api/add_address',
    get_address: '/api/all_address',
    delete_address: '/api/delete_address/',
    login_otp: '/api/customer_login'
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
    const body = JSON.stringify({ key: 'A123456789', category_sub_group_id: id })
    return api.post(endPoints.child_catgory, body)
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


  const getProductDetails = (id) => {
    //console.log('id', endPoints.product_detail + `${id}`);
    const formData = new FormData();
    formData.append('key', 'A123456789');
    api.defaults.headers.post['Content-Type'] = 'multipart/form-data';
    // console.log("API -", api.defaults);
    return api.post(endPoints.product_detail + `${id}`, formData)
      .catch((error) => {
        if (error && error.response) {
          const { data } = error.response;
        }
      });
  }

  const getProducts = (flag) => {
    return api.post(endPoints.new_products, { key: 'A123456789' })
      .catch((error) => {
        if (error && error.response) {
          // const { data } = error.response;
        }
      });
  }


  const userSignup = (mobile) => {
    //console.log('id', endPoints.product_detail + `${id}`);
    const formData = new FormData();
    formData.append('key', 'A123456789');
    api.defaults.headers.post['Content-Type'] = 'multipart/form-data';
    console.log("API -", api.defaults);
    return api.post(endPoints.sign_up + `${mobile}`, formData)
      .catch((error) => {
        if (error && error.response) {
          const { data } = error.response;
        }
      });
  }


  const userLogin = (mobile) => {
    //console.log('id', endPoints.product_detail + `${id}`);
    const formData = new FormData();
    formData.append('key', 'A123456789');
    api.defaults.headers.post['Content-Type'] = 'multipart/form-data';
    console.log("API -", endPoints.sign_in + `${mobile}`);
    return api.post(endPoints.sign_in + `${mobile}`, formData)
      .catch((error) => {
        if (error && error.response) {
          const { data } = error.response;
        }
      });
  }

  const otpVerifyReg = (data) => {
    //console.log('id', endPoints.product_detail + `${id}`);
    const formData = new FormData();
    formData.append('key', 'A123456789');
    formData.append('fcm_token', data.fcm);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.mobile);
    api.defaults.headers.post['Content-Type'] = 'multipart/form-data';

    return api.post(endPoints.otp_verify + `${data.mobile}` + '/' + `${data.otp}`, formData)
      .catch((error) => {
        if (error && error.response) {
          const { data } = error.response;
        }
      });
  }


  const otpVerify = (data) => {
    //console.log('id', endPoints.product_detail + `${id}`);
    const formData = new FormData();
    formData.append('key', 'A123456789');
    formData.append('fcm_token', data.fcm);
    formData.append('phone', data.mobile);
    formData.append('otp', data.otp)
    api.defaults.headers.post['Content-Type'] = 'multipart/form-data';
    console.log("API -", endPoints.login_otp);
    return api.post(endPoints.login_otp, formData)
      .catch((error) => {
        console.log("otpVerify ERROR ", error)
        if (error && error.response) {
          const { data } = error.response;
        }
      });
  }

  const addAddress = (data) => {
    //console.log('id', endPoints.product_detail + `${id}`);
    const formData = new FormData();
    formData.append('key', 'A123456789');
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('mobile', data.mobile);
    formData.append('address_line_1', data.other);
    formData.append('city', data.city);
    formData.append('state', data.state);
    formData.append('pincode', data.pincode);
    formData.append('address_type', data.address_type);
    formData.append('set_default', data.set_default);
    formData.append('customer_id', data.customer_id);
    formData.append('country', data.country);
    formData.append('address_line_2', data.address_line_2);
    api.defaults.headers.post['Content-Type'] = 'multipart/form-data';
    console.log("API -", api.defaults);
    return api.post(endPoints.add_address, formData)
      .catch((error) => {
        if (error && error.response) {
          const { data } = error.response;
        }
      });
  }


  const getAddress = (id) => {
    //console.log('id', endPoints.product_detail + `${id}`);
    const formData = new FormData();
    formData.append('key', 'A123456789');
    formData.append('customer_id', id)
    api.defaults.headers.post['Content-Type'] = 'multipart/form-data';
    console.log("API -", api.defaults);
    return api.post(endPoints.get_address, formData)
      .catch((error) => {
        if (error && error.response) {
          const { data } = error.response;
        }
      });
  }


  const deleteAddress = (id) => {
    //console.log('id', endPoints.product_detail + `${id}`);
    const formData = new FormData();
    formData.append('key', 'A123456789');
    api.defaults.headers.post['Content-Type'] = 'multipart/form-data';
    console.log("API -", api.defaults);
    return api.post(endPoints.delete_address + `${id}`, formData)
      .catch((error) => {
        if (error && error.response) {
          const { data } = error.response;
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
    getProducts,
    getProductDetails,
    userSignup,
    userLogin,
    otpVerify,
    addAddress,
    getAddress,
    deleteAddress,
    otpVerifyReg
  }
}

export default {
  Api
};










