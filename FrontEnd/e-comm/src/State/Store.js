import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import adminOrderReducer from "./Admin/Orders/Reducer"
import adminUserReducer from './Admin/Users/Reducer'
const rootReducer= combineReducers({
    auth:authReducer,
    products:customerProductReducer,
    carts:cartReducer,
    orders:orderReducer,
    adminOrders:adminOrderReducer,
    users:adminUserReducer
})

export const store =legacy_createStore(rootReducer ,applyMiddleware(thunk))
