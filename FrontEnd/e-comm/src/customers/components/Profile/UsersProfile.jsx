import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../State/Auth/Action';
import AccountInfo from './AccountInfo';

import Subscription from './Subscription';
import Reviews from './Reviews';
import Rating from './Rating';
import PaymentMethods from './PaymentMethods';

const Sidebar = styled('div')(({ theme }) => ({
  width: '250px',
  padding: theme.spacing(2),
  border: '1px solid lightgray',
  textAlign: 'left'
}));



const UserProfile = () => {
  // const { auth } = useSelector(store => store)
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
    navigate("/")
  }
  const navigate = useNavigate();
  return (
    <Container maxWidth="lg">
      <Box display="flex" pt={4}>
        <Sidebar width="15%">
          <Typography variant="h6" color="primary" >
            My Account
          </Typography>
          <hr class="border-t-1 border-gray-300 my-4" />
          <Typography variant="body2" gutterBottom sx={{ cursor: 'pointer', '&:hover': { color: "#F59E0B" }, padding: "5px" }} onClick={() => navigate("/account/order")}>My Orders</Typography>
          <Typography variant="body2" gutterBottom sx={{ cursor: 'pointer', '&:hover': { color: "#F59E0B" }, padding: "5px" }} onClick={() => navigate('/cart')}>My Wish List</Typography>
          <Typography variant="body2" gutterBottom sx={{ cursor: 'pointer', '&:hover': { color: "#F59E0B" }, padding: "5px" }} onClick={() => navigate('/checkout?step=2')}>Address Book</Typography>

          <Typography variant="body2" gutterBottom sx={{ cursor: 'pointer', '&:hover': { color: "#F59E0B" }, padding: "5px" }} onClick={() => navigate('/profile/')}>Account Information</Typography>
          <Typography variant="body2" gutterBottom sx={{ cursor: 'pointer', '&:hover': { color: "#F59E0B" }, padding: "5px" }} onClick={() => navigate('/profile/reviews')}>My Product Reviews</Typography>
          <Typography variant="body2" gutterBottom sx={{ cursor: 'pointer', '&:hover': { color: "#F59E0B" }, padding: "5px" }} onClick={() => navigate('/profile/ratings')}>My Product Rating</Typography>
          <Typography variant="body2" gutterBottom sx={{ cursor: 'pointer', '&:hover': { color: "#F59E0B" }, padding: "5px" }} onClick={() => navigate('/profile/payment')}>My Payment Methods</Typography>
          <Typography variant="body2" gutterBottom sx={{cursor: 'pointer','&:hover': {color:"#F59E0B"} ,padding:"5px"}} onClick={()=>navigate('/profile/subscription')}>My Subscriptions</Typography>
          <Typography variant="body2" gutterBottom sx={{ cursor: 'pointer', '&:hover': { color: "#F59E0B" }, padding: "5px" }} onClick={handleLogout}>Logout</Typography>
        </Sidebar>
        <div className='w-[85%] '>
          <Routes>
            <Route path='/' element={<AccountInfo />}></Route>
            <Route  path='/payment' element={<PaymentMethods />}></Route>
            <Route  path='/subscription' element={<Subscription/>}></Route>
            <Route  path='/reviews' element={<Reviews/>}></Route>
            <Route  path='/ratings' element={<Rating/>}></Route>
          </Routes>
        </div>
      </Box>
    </Container>
  );
};

export default UserProfile;
