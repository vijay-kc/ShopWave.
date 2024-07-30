import { api } from "../../config/apiConfig"
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST } from "../Order/ActionType"
import { UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST } from "../Cart/ActionType";


export const createPayment =(orderId)=>async (dispatch)=>{
   dispatch({type:CREATE_ORDER_REQUEST})
   try {
       const {data} =await api.post(`/api/payments/${orderId}`);
       console.log("link " ,data)
    if(data.payment_Link_Url){
        window.location.href = data.payment_Link_Url
    }
   } catch (error) {
    dispatch({type:CREATE_ORDER_FAILURE,payload:error.message})
   }
} 

export const updatePayment =(reqData)=>async (dispatch)=>{
    dispatch({type:UPDATE_CART_ITEM_REQUEST})
    try {
     await api.get(`/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`);

        
    } catch (error) {
        dispatch({type:UPDATE_CART_ITEM_FAILURE,payload:error.message})
        
    }
}