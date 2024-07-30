import { Store } from '@mui/icons-material';
import { Box, Button, Grid, Typography, styled } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

function AccountInfo() {
  const navigate = useNavigate();
  const { auth } = useSelector(store => store);
  console.log("acc", auth)
  const ContentSection = styled(Box)(({ theme }) => ({
    border: '1px solid lightgray', // orange border F59E0B
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: '#f6f6f8', // light grey background F9FAFB
  }));
  let last= auth.user?.address?.length -1;
  return (
    <div><Box flexGrow={1} pl={4} >

      <ContentSection>
        <Typography variant="h6" gutterBottom >Account Information</Typography>
        <hr class="border-t-1 border-gray-300 my-4" />
        <Grid container spacing={2}>

          <Grid item xs={12} sm={6}>
            <Box border="1px solid #F59E0B" p={2} bgcolor="#F9FAFB">
              <Typography variant="subtitle1">Contact Information</Typography>
              <Typography variant="body2">{auth.user?.firstName} {auth.user?.lastName}</Typography>
              <Typography variant="body2" sx={{ marginBottom: "10px" }}>{auth.user?.email}</Typography>
              <Button variant="contained" color="primary" style={{ marginRight: '8px', borderRadius: "9999px", padding: '1px' }} onClick={() => navigate("/Register")}>Edit</Button>
              <Button variant="contained" color="primary" sx={{ borderRadius: "9999px", padding: '1px', paddingLeft: "15px", paddingRight: "15px" }}>Change Password</Button>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box border="1px solid #F59E0B" p={2} bgcolor="#F9FAFB">
              <Typography variant="subtitle1">Newsletters</Typography>
              <Typography variant="body2">You aren’t subscribed to our newsletter.</Typography>
              <Button variant="contained" color="primary" sx={{ borderRadius: "9999px", padding: '1px', marginTop: "10px", marginBottom: "20px" }}>Edit</Button>
            </Box>
          </Grid>

        </Grid>
      </ContentSection>

      <ContentSection>
        <Typography variant="h6" gutterBottom>Address Book</Typography>
        <hr class="border-t-1 border-gray-300 my-4" />
        <Grid container spacing={2}>

          <Grid item xs={12} sm={6}>
            <Box border="1px solid #F59E0B" p={2} bgcolor="#F9FAFB">
              <Typography variant="subtitle1">Default Billing Address</Typography>

              {auth.user?.address.length > 0 ? (<><Typography variant="body2">{auth.user?.address[0]?.firstName} {auth.user?.address[0]?.lastName}, {auth.user?.address[0]?.mobile}</Typography>
                <Typography variant="body2" >{auth.user?.address[0]?.
                  streetAddress}, {auth.user?.address[0]?.city}</Typography>
                <Typography variant="body2">{auth.user?.address[0]?.state}, {auth.user?.address[0]?.zipCode}</Typography></>) : (<Typography variant="body2">You have not set a default Billing address.</Typography>)}

              <Button variant="contained" color="primary" sx={{
                borderRadius: "9999px", padding: '1px', marginTop: "10px", marginBottom: "20px",
                paddingLeft: "15px", paddingRight: "15px"
              }} onClick={() => navigate("/checkout?step=2")}>Edit Address</Button>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box border="1px solid #F59E0B" p={2} bgcolor="#F9FAFB">
              <Typography variant="subtitle1">Default Shipping Address</Typography>

              {auth.user?.address.length >0 ? (<><Typography variant="body2">{auth.user?.address[last]?.firstName} {auth.user?.address[last]?.lastName}, {auth.user?.address[last]?.mobile}</Typography>
                <Typography variant="body2" >{auth.user?.address[last]?.
                  streetAddress}, {auth.user?.address[last]?.city}</Typography>
                <Typography variant="body2">{auth.user?.address[last]?.state}, {auth.user?.address[last]?.zipCode}</Typography></>) : (<Typography variant="body2">You have not set a default shipping address.</Typography>)}

              <Button variant="contained" color="primary" sx={{ borderRadius: "9999px", padding: '1px', marginTop: "10px", marginBottom: "20px", paddingLeft: "15px", paddingRight: "15px" }} onClick={() => navigate("/checkout?step=2")}>Edit Address</Button>
            </Box>
          </Grid>

        </Grid>
      </ContentSection>
    </Box></div>
  )
}

export default AccountInfo