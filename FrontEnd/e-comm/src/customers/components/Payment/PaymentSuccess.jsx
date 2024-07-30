import { Alert, AlertTitle, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import OrderTracker from '../Order/OrderTracker'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOrderById } from '../../../State/Order/Action'
import { updatePayment } from '../../../State/Payment/action'
import AddressCard from '../AddressCard/AddressCard'
import OrderItemCard from '../Checkout/OrderItemCard'
// import { store } from '../../../State/Store'


const PaymentSuccess = () => {
    const [paymentId, setPaymentId] = useState();
    const [stepNo, setStepNo] = useState(0);
    const [paymentStatus, setPaymentStatus] = useState();
    const { orderId } = useParams();

    const { orders } = useSelector(store => store)
    const dispatch = useDispatch();

    useEffect(() => {
        const urlParam = new URLSearchParams(window.location.search);
        setPaymentId(urlParam.get('razorpay_payment_id'));
        setPaymentStatus(urlParam.get('razorpay_payment_link_status'));
    }, [])

    useEffect(() => {
        const step = orders.order?.orderStatus

        if (step === "CONFIRMED") {
            setStepNo(1)
        }
        if (step === "SHIPPED") {
            setStepNo(2)
        }
        if (step === "DELIVERED") {
            setStepNo(3)
        }

        console.log("order status", stepNo)

    }, [orders.order?.orderStatus])
    useEffect(() => {
        if (paymentId) {
            const data = { orderId, paymentId }
            dispatch(getOrderById(orderId));
            dispatch(updatePayment(data))
        }
    }, [orderId, paymentId])

    return (
        <div className='px2 lg:px-36'>
            <div className='flex flex-col mt-4 justify-center items-center'>
                <Alert
                    variant='filled'
                    severity='success'
                    sx={{ mb: 2, width: "fit-content" }}
                >
                    <AlertTitle>Payment Success</AlertTitle>
                    Congratulation Your Order Get Placed
                </Alert>
            </div>
            <OrderTracker activeStep={stepNo} />
            <Grid container className='space-y-5 py-5 pt-2 text-left'>
                <Grid
                    container
                    item
                    className='shadow-black col-span-2 rounded-md p-5'
                    sx={{ alignItems: "center", justifyContent: "space-between" }}
                >
                    {orders.order?.orderItems.map((item, index) => (
                        <Grid item xs={12} key={index}>
                            <OrderItemCard item={item} />
                        </Grid>
                    ))}
                    {/* <Grid item xs={12}>
                         <AddressCard /> 
                    </Grid> */}
                </Grid>
            </Grid>

        </div>
    )
}

export default PaymentSuccess