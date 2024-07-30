import { CANCELED_ORDERS_FAILURE, 
    CANCELED_ORDERS_REQUEST,
     CANCELED_ORDERS_SUCCESS,
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
            PLACED_ORDERS_FAILURE,
             PLACED_ORDERS_REQUEST,
              PLACED_ORDERS_SUCCESS, 
              SHIP_ORDERS_FAILURE, 
              SHIP_ORDERS_REQUEST,
               SHIP_ORDERS_SUCCESS } from "./ActionType"

const initialState = {
    loading: false,
    orders: [],
    error: null,
}
const adminOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.payload,
                error: null,
            }
        case GET_ORDERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                orders: []
            }
        case CONFIRMED_ORDERS_REQUEST:
        case PLACED_ORDERS_REQUEST:
        case DELIVERED_ORDERS_REQUEST:
        case CANCELED_ORDERS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case CONFIRMED_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                confirmed: action.payload,
                error: null
            }
        case PLACED_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                placed: action.payload,
                error: null
            }
        case DELIVERED_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                delivered: action.payload,
                error: null
            }
        case CANCELED_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                canceled: action.payload,
                error: null
            }
        case DELIVERED_ORDERS_FAILURE:
        case PLACED_ORDERS_FAILURE:
        case CONFIRMED_ORDERS_FAILURE:
        case CANCELED_ORDERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload

            }
        case DELETE_ORDERS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case DELETE_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                deleted:action.payload
            }
        case DELETE_ORDERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case SHIP_ORDERS_REQUEST:
            return {
                ...state,
                loading: true,
                error:null
            }
        case SHIP_ORDERS_SUCCESS:
            return {
                ...state,
                shipped:action.payload,
                loading:false
            }
        case SHIP_ORDERS_FAILURE:
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state;
        
    }
}

export default adminOrderReducer;