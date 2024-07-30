import { api } from "../../config/apiConfig";
import {
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  FIND_PRODUCT_BY_CATEGORY_FAILURE,
  FIND_PRODUCT_BY_CATEGORY_REQUEST,
  FIND_PRODUCT_BY_CATEGORY_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
} from "./ActionType";
//filter
export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_CATEGORY_REQUEST });
  const {colors,sizes,minPrice,maxPrice,minDiscount,category,stock,sort,pageNumber,pageSize} = reqData;
  try {
    console.log("api", reqData);
    const { data } = await api.get(`/api/products?color=${colors}&category=${category}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&stock=${stock}&sort=${sort}&minDiscount=${minDiscount}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`);

    console.log("findProduct data", data);

    dispatch({ type: FIND_PRODUCT_BY_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FIND_PRODUCT_BY_CATEGORY_FAILURE,
      payload: error.message,
    });
  }
};

export const findProductsById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  try {
    const { data } = await api.get(`/api/products/id/${reqData}`);
    console.log("created ", data);
    const dataSet = {
      colors:[],
      category: data.category.name,
      sizes: [],
      minPrice:0,
      maxPrice : data.price,
      minDiscount: 0,
      stock: "" ,
      sort: "",
      pageNumber: 1 ,
      pageSize: 20,
    }
  
    findProducts(dataSet);
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};

export const createProduct = (productData) => async (dispatch) => {
  dispatch({ type: CREATE_PRODUCT_REQUEST });
  try {
    const { data } = await api.post(`/api/admin/products/`, productData);
    // console.log("res", data);
    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.message });
  }
};

export const deleteProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });

    const { data } = await api.delete(`/api/admin/products/${productId}`);
    // console.log("delete", data);
    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productId });
  } catch (error) {
    dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
  }
};


// export const findAllProduct = () => async (dispatch) => {
//   try {
//     dispatch({ type: DELETE_PRODUCT_REQUEST });

//     const { data } = await api.delete(`/api/admin/products/${productId}`);
//     // console.log("delete", data);
//     dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productId });
//   } catch (error) {
//     dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
//   }
// };
