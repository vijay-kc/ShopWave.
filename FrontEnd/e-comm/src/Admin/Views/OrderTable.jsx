import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cancelOrder, confirmOrder, deleteOrder, deliveredOrder, getOrders, shipOrder } from '../../State/Admin/Orders/Action'
import { Avatar, AvatarGroup, Button, Card, CardHeader, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

function OrdersTable() {
  const dispatch = useDispatch()
  const { adminOrders } = useSelector(store => store)

  useEffect(() => {
    dispatch(getOrders())
  }, [adminOrders.confirmed, adminOrders.shipped, adminOrders.delivered ,adminOrders.deleted])
  return (
    <div className=''>
      <Card className=''>
        <CardHeader title="recent Orders" />

        <TableContainer component={Paper} sx={{ bgcolor: "#475569", color: "white" }}>
          <Table sx={{ minWidth: 600 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "white" }} >Image</TableCell>
                <TableCell align="left" sx={{ color: "white" }} >Title</TableCell>

                <TableCell align="left" sx={{ color: "white" }} >Total Price</TableCell>
                <TableCell align="left" sx={{ color: "white" }}  >Quantity</TableCell>
                <TableCell align="left" sx={{ color: "white" }} >Status</TableCell>
                

              </TableRow>
            </TableHead>
            <TableBody sx={{ color: "white" }} >
              {adminOrders?.orders?.map((item ,index) => (
                <TableRow
                  key={item._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <AvatarGroup sx={{ justifyContent: "start" }} >
                      {item.orderItems?.map((orderItem) => <Avatar align="left" src={orderItem.product?.imageUrl[0]}></Avatar>)}
                    </AvatarGroup>
                  </TableCell>

                  <TableCell align="left" sx={{ color: "white" }} >{item.orderItems?.map((orderItem) => <p>{orderItem.product?.title}</p>)}</TableCell>


                  <TableCell align="left" sx={{ color: "white" }} >{item.totalDiscountedPrice}</TableCell>

                  <TableCell align="left" sx={{ color: "white" }} >{item.totalItem}</TableCell>

                  <TableCell align="left" sx={{ color: "white" }} ><span className={`text-white px-5 py-2 rounded-full  
                    ${item.orderStatus == "CONFIRMED" ? "bg-[#369236]" :
                     item.orderStatus == "SHIPPED" ? "bg-[#4141ff]" : 
                     item.orderStatus == "PLACED" ? "bg-[#02B290]" : 
                     item.orderStatus == "PENDING" ? "bg-[gray]" :
                     item.orderStatus == "DELIVERED" ? "bg-[#F3B63A]" :
                      "bg-[red]"}`}>{item.orderStatus}</span></TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  )
}

export default OrdersTable