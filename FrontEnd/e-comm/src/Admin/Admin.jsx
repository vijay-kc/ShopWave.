import React, { useState } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Avatar, Box, CssBaseline, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AdminDashboard from './components/Dashboard'
import logo from '../assets/Logo.png'
import CreateProduct from './components/CreateProduct'
import CustomersTable from './components/CustomersTable'
import ProductsTable from './components/ProductsTable'
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import OrdersTable from './components/OrdersTable'
import {logout} from '../State/Auth/Action'
import { useDispatch } from 'react-redux';

const menu = [{ name: "Dashboard", path: "/admin", icon: <DashboardIcon sx={{ color: "white" }} /> },
{ name: "Products", path: "/admin/products", icon: <DashboardIcon sx={{ color: "white" }} /> },
{ name: "Customers", path: "/admin/customers", icon: <DashboardIcon sx={{ color: "white" }} /> },
{ name: "Orders", path: "/admin/orders", icon: <DashboardIcon sx={{ color: "white" }} /> },
{ name: "AddProducts", path: "/admin/product/create", icon: <DashboardIcon sx={{ color: "white" }} /> },

  // { name: "Subcategories", path: "/admin/subcategories" },
  // { name: "Brands", path: "/admin/brands" },
  // { name: "Coupons", path: "/admin/coupons" },
  // { name: "Reports", path: "/admin/reports" },
  // { name: "Settings", path: "/admin/settings" },
  // { name: "Logout", path: "/logout" },
]


function Admin() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const [sideBsrVisible, setSideBarVisible] = useState(false)
  const navigate = useNavigate();
  const dispatch =useDispatch();
  const handleLogout=()=>{
    dispatch(logout())
    navigate("/")
  }
  const drawer = (
    <Box sx={{
      overflow: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
      bgcolor: "#334155",
      border: "none",
      color: "white",
      paddingTop: "20px"
    }}
    >
      {/* {isLargeScreen &&<Toolbar />} */}

      <List>
        <div className='flex justify-center mb-3 '><Avatar  sx={{ width: 56, height: 56 }} src={logo}></Avatar>
        </div>
        <Typography variant='h5'>Shop Wave</Typography>
        <hr/>
        {menu.map((item, index) => <ListItem key={item.name} disablePadding onClick={() => { navigate(item.path) }}>
          <ListItemButton>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText>
              {item.name}
            </ListItemText>
          </ListItemButton>
        </ListItem>)}
      </List>
      <List>

{/* <ListItem disablePadding onClick={() => { navigate('/logout') }}>
</ListItem> */}
<ListItem disablePadding >
          <ListItemButton onClick={()=> {navigate('/')}}>
            <ListItemIcon>
              <HomeIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText>
               Go To Home
            </ListItemText>
          </ListItemButton>
        </ListItem>


        <ListItem disablePadding >
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <AccountCircleIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText>
              Account
            </ListItemText>
            <ListItemIcon>
              <LogoutIcon sx={{ color: "white" }} />
            </ListItemIcon>
          </ListItemButton>
     
         

  
        </ListItem>
      </List>

    </Box>
  )
  return (
    <div className='bg-slate-900 '>
      <div className='flex relative '>
      
        <CssBaseline />
        <div className='w-[15%] h-full fixed top-0'>
          {drawer}
        </div>

        <div className='w-[85%] h-full ml-[15%] bg-slate-900'>
          <Routes>
            <Route path='/' element={<AdminDashboard />}></Route>
            <Route path='/product/create' element={<CreateProduct />}></Route>
            <Route path='/products' element={<ProductsTable />}></Route>
            <Route path='/orders' element={<OrdersTable />}></Route>
            <Route path='/customers' element={<CustomersTable />}></Route>

          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Admin



