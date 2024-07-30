import { api } from "../../../config/apiConfig";
import { GET_ALL_USER_FAILURE, GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS } from "./ActionType";

export const getAllUsers = () => async (dispatch) => {
  console.log("data get ")
    dispatch({ type: GET_ALL_USER_REQUEST });
    try {
        const response = await api.get(`/api/user/`);
      dispatch({ type: GET_ALL_USER_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_ALL_USER_FAILURE, payload: error.message });
    }
  }