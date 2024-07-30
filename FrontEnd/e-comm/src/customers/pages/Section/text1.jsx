import React from 'react';
import { Avatar, Menu, MenuItem, Button } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

const UserMenu = ({ open, anchorEl, handleUserClick, handleCloseUserMenu, navigate, handleOpen }) => (
  <div onClick={handleUserClick}>
    <Avatar
      className="text-white z-500"
      aria-controls={open ? "basic-menu" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
      sx={{
        bgcolor: deepPurple[500],
        color: "white",
        cursor: "pointer",
      }}
    >
      S
    </Avatar>
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleCloseUserMenu}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
      <MenuItem onClick={() => navigate("/account/order")}>My Orders</MenuItem>
      <MenuItem>Logout</MenuItem>
    </Menu>
  </div>
);

const SignInButton = ({ handleOpen }) => (
  <Button
    onClick={handleOpen}
    className="text-sm font-medium text-gray-700 hover:text-gray-800"
  >
    Sign In
  </Button>
);

const UserAction = ({ isAuthenticated, ...props }) => (
  isAuthenticated ? (
    <UserMenu {...props} />
  ) : (
    <SignInButton handleOpen={props.handleOpen} />
  )
);

export default UserAction;
