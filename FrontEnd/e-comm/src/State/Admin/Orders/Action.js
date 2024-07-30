import { api } from "../../../config/apiConfig";
import {
  CONFIRMED_ORDERS_FAILURE,
  CONFIRMED_ORDERS_REQUEST,
  CONFIRMED_ORDERS_SUCCESS,
  DELETE_ORDERS_FAILURE,
  DELETE_ORDERS_REQUEST,
  DELETE_ORDERS_SUCCESS,
  DELIVERED_ORDERS_FAILURE,
  DELIVERED_ORDERS_REQUEST,
  DELIVERED_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  SHIP_ORDERS_FAILURE,
  SHIP_ORDERS_REQUEST,
  SHIP_ORDERS_SUCCESS,
} from "./ActionType";

export const getOrders = () => async (dispatch) => {
  dispatch({ type: GET_ORDERS_REQUEST });
  
  try {
    console.log("data get ")
    const response = await api.get(`/api/admin/orders/`);
    dispatch({ type: GET_ORDERS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_ORDERS_FAILURE, payload: error.message });
  }
};

export const confirmOrder = (orderId) => async (dispatch) => {
  dispatch({ type: CONFIRMED_ORDERS_REQUEST });

  try {
    const response = await api.put(`/api/admin/orders/${orderId}/confirmed`);
    console.log("data conf ",response.data)
    dispatch({ type: CONFIRMED_ORDERS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: CONFIRMED_ORDERS_FAILURE, payload: error.message });
  }
};

export const shipOrder = (orderId) => async (dispatch) => {
  dispatch({ type: SHIP_ORDERS_REQUEST });

  try {
    const { data } = await api.put(`/api/admin/orders/${orderId}/ship`);
    console.log("data ship ",data)
    dispatch({ type: SHIP_ORDERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SHIP_ORDERS_FAILURE, payload: error.message });
  }
};

export const deliveredOrder = (orderId) => async (dispatch) => {
  dispatch({ type: DELIVERED_ORDERS_REQUEST });

  try {
    const { data } = await api.put(`/api/admin/orders/${orderId}/deliver`);
    console.log("data deliver ",data)
    dispatch({ type: DELIVERED_ORDERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DELIVERED_ORDERS_FAILURE, payload: error.message });
  }
};


export const cancelOrder = (orderId) => async (dispatch) => {
    dispatch({ type: DELIVERED_ORDERS_REQUEST });
  
    try {
      const { data } = await api.put(`/api/admin/orders/${orderId}/cancel`);
      console.log("data cancel ",data)
      dispatch({ type: DELIVERED_ORDERS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: DELIVERED_ORDERS_FAILURE, payload: error.message });
    }
  };

  export const deleteOrder = (orderId) => async (dispatch) => {
    dispatch({ type: DELETE_ORDERS_REQUEST });
  
    try {
      const { data } = await api.delete(`/api/admin/orders/${orderId}/deleteOrder`);
      console.log("data delete ",data)
      dispatch({ type: DELETE_ORDERS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: DELETE_ORDERS_FAILURE, payload: error.message });
    }
  };