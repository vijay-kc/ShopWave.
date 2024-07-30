import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cancelOrder, confirmOrder, deleteOrder, deliveredOrder, getOrders, shipOrder } from '../../State/Admin/Orders/Action'
import { Avatar, AvatarGroup, Button, Card, CardHeader, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

function OrdersTable() {
  const dispatch = useDispatch()
  const { adminOrders } = useSelector(store => store)


  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event,index) => {
    const newAnchorElArray=[...anchorEl]
    newAnchorElArray[index]=event.currentTarget
    setAnchorEl(newAnchorElArray);
  };
  const handleClose = (index) => {
    const newAnchorElArray=[...anchorEl]
    newAnchorElArray[index]=null
    setAnchorEl(newAnchorElArray);
  };

  const handleShippedOrder = (orderId) => {
    dispatch(shipOrder(orderId))
    handleClose()
  }

  const handleConfirmOrder = (orderId) => {
    dispatch(confirmOrder(orderId))
    handleClose()
  }

  const handleCancelOrder = (orderId) => {
    dispatch(cancelOrder(orderId))
    handleClose()
  }


  const handleDeliveredOrder = (orderId) => {
    dispatch(deliveredOrder(orderId))
    handleClose()
  }


  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId))
   
  }

  useEffect(() => {
    dispatch(getOrders())
  }, [adminOrders.confirmed, adminOrders.shipped, adminOrders.delivered ,adminOrders.deleted])
  return (
    <div className='m-10'>
      <Card className='mt-2'>
        <CardHeader title="All Orders" />

        <TableContainer component={Paper} sx={{ bgcolor: "#475569", height:"80vh", color: "white" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "white" }} >Image</TableCell>
                <TableCell align="left" sx={{ color: "white" }} >Title</TableCell>

                <TableCell align="left" sx={{ color: "white" }} >Total Price</TableCell>
                <TableCell align="left" sx={{ color: "white" }}  >Quantity</TableCell>
                <TableCell align="left" sx={{ color: "white" }} >Status</TableCell>
                <TableCell align="left" sx={{ color: "white" }} >Update Status</TableCell>
                <TableCell align="left" sx={{ color: "white" }}  >Delete</TableCell>

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

                  <TableCell align="left">  <Button
                    id="basic-button"
                    aria-haspopup="true"
                    sx={{ bgcolor: "#1BCA9B", color: "white" }}
                    onClick={(event)=>handleClick(event,index)}
                    aria-controls={`basic-menu-${item._id}`} 
                    aria-expanded={Boolean(anchorEl[index])}
                  >
                    Status
                  </Button>
                    <Menu
                      id={`basic-menu-${item._id}`}
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={()=>handleClose(index)}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={() => handleConfirmOrder(item._id)}>Confirm Order</MenuItem>
                      <MenuItem onClick={() => handleShippedOrder(item._id)}>Shipped Order</MenuItem>
                      <MenuItem onClick={() => handleDeliveredOrder(item._id)}>Delivered Order</MenuItem>
                      <MenuItem onClick={() => handleCancelOrder(item._id)}>Cancel Order</MenuItem>
                    </Menu></TableCell>

                  <TableCell align="left"><Button onClick={() => handleDeleteOrder(item._id)} variant='outline'  sx={{ color: "white", bgcolor: "red" }} >Delete</Button></TableCell>


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