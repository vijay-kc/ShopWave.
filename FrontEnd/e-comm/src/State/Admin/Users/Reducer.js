import { GET_ALL_USER_FAILURE, GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS } from "./ActionType";

const initialState = {
  loading: false,
  users: [],
  error: null,
};
const adminUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_ALL_USER_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case GET_ALL_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default adminUserReducer;
