import { Avatar, AvatarGroup, Button, Card, CardHeader, Menu, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect } from 'react'
import { MenuItem } from 'react-pro-sidebar';
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../State/Admin/Users/Action';
import { deepPurple } from '@mui/material/colors';

function CustomersTable() {
  const dispatch = useDispatch()
  const {users}=useSelector(store=>store);
  const handleDeleteUser = (orderId) => {
    // dispatch((orderId))
   
  }

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])
console.log("===",users)
  return (
    <div className='m-10'>
    <Card className='mt-2'>
      <CardHeader title="All Users" />

      <TableContainer component={Paper} sx={{ bgcolor: "#475569", height:"80vh", color: "white" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "white" }} >Image</TableCell>
              <TableCell align="left" sx={{ color: "white" }} >User</TableCell>

              <TableCell align="left" sx={{ color: "white" }} >Email</TableCell>
              <TableCell align="left" sx={{ color: "white" }}  >Review</TableCell>
              <TableCell align="left" sx={{ color: "white" }}  >Rating</TableCell>
              <TableCell align="left" sx={{ color: "white" }}  >Delete</TableCell>

            </TableRow>
          </TableHead>
          <TableBody sx={{ color: "white" }} >
            {users.users?.map((item) => (
              <TableRow
                key={item._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                <Avatar
                        className="text-white z-500"
                        sx={{
                          // bgcolor: deepPurple[500],
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        {item.firstName[0].toUpperCase()}
                      </Avatar>
                </TableCell>

                <TableCell align="left" sx={{ color: "white" }} >{item.firstName} {item.lastName}</TableCell>


                <TableCell align="left" sx={{ color: "white" }} >{item.email}</TableCell>

                <TableCell align="left" sx={{ color: "white" }} >{}</TableCell>
                <TableCell align="left" sx={{ color: "white" }} ></TableCell>

               


                <TableCell align="left"><Button onClick={() => handleDeleteUser(item._id)} variant='outline'  sx={{ color: "white", bgcolor: "red" }} >Delete</Button></TableCell>


              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  </div>
  )
}

export default CustomersTable