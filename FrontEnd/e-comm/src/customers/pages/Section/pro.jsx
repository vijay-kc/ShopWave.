import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Sidebar = styled('div')(({ theme }) => ({
  width: '250px',
  padding: theme.spacing(2),
  borderRight: '1px solid #ddd',
}));

const ContentSection = styled(Box)(({ theme }) => ({
  border: '1px solid #F59E0B', // orange border
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  backgroundColor: '#F9FAFB', // light grey background
}));

const AccountPage = () => {
  return (
    <Container maxWidth="lg">
      <Box display="flex" pt={4}>
        <Sidebar>
          <Typography variant="h6" color="primary" gutterBottom>
            My Account
          </Typography>
          <Typography variant="body1" gutterBottom>My Orders</Typography>
          <Typography variant="body1" gutterBottom>My Wish List</Typography>
          <Typography variant="body1" gutterBottom>Address Book</Typography>
          <Typography variant="body1" gutterBottom>Account Information</Typography>
          <Typography variant="body1" gutterBottom>My Product Reviews</Typography>
          <Typography variant="body1" gutterBottom>Newsletter Subscriptions</Typography>
          <Typography variant="body1" gutterBottom>My Reward Points</Typography>
          <Typography variant="body1" gutterBottom>My Payment Methods</Typography>
          <Typography variant="body1" gutterBottom>My Subscriptions</Typography>
          <Typography variant="body1" gutterBottom>Logout</Typography>
        </Sidebar>
        <Box flexGrow={1} pl={4}>
          <ContentSection>
            <Typography variant="h6" gutterBottom>Account Information</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box border="1px solid #F59E0B" p={2} bgcolor="#F9FAFB">
                  <Typography variant="subtitle1">Contact Information</Typography>
                  <Typography variant="body2">Vijay Kumar Chaurasiya</Typography>
                  <Typography variant="body2">vijaykumarchaurasiya999@gmail.com</Typography>
                  <Button variant="contained" color="primary" style={{ marginRight: '8px' }}>Edit</Button>
                  <Button variant="contained" color="primary">Change Password</Button>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box border="1px solid #F59E0B" p={2} bgcolor="#F9FAFB">
                  <Typography variant="subtitle1">Newsletters</Typography>
                  <Typography variant="body2">You aren’t subscribed to our newsletter.</Typography>
                  <Button variant="contained" color="primary">Edit</Button>
                </Box>
              </Grid>
            </Grid>
          </ContentSection>
          <ContentSection>
            <Typography variant="h6" gutterBottom>Address Book</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box border="1px solid #F59E0B" p={2} bgcolor="#F9FAFB">
                  <Typography variant="subtitle1">Default Billing Address</Typography>
                  <Typography variant="body2">You have not set a default billing address.</Typography>
                  <Button variant="contained" color="primary">Edit Address</Button>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box border="1px solid #F59E0B" p={2} bgcolor="#F9FAFB">
                  <Typography variant="subtitle1">Default Shipping Address</Typography>
                  <Typography variant="body2">You have not set a default shipping address.</Typography>
                  <Button variant="contained" color="primary">Edit Address</Button>
                </Box>
              </Grid>
            </Grid>
          </ContentSection>
        </Box>
      </Box>
    </Container>
  );
};

export default AccountPage;



import * as React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Link,
  Typography,
} from '@mui/material';

const MyAccount = () => {
  return (
    <Container maxWidth="lg">
      <Box mt={4}>
        <Typography variant="h4" align="center">
          My Account
        </Typography>
        <Typography variant="body2" align="center" mt={1}>
          Home > My Account
        </Typography>
      </Box>
      <Grid container spacing={3} mt={4}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                My Account
              </Typography>
              <ul>
                <li>
                  <Link href="/my-orders">My Orders</Link>
                </li>
                <li>
                  <Link href="/my-wishlist">My Wish List</Link>
                </li>
                <li>
                  <Link href="/address-book">Address Book</Link>
                </li>
                <li>
                  <Link href="/account-information">
                    Account Information
                  </Link>
                </li>
                <li>
                  <Link href="/my-product-reviews">
                    My Product Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/newsletter-subscriptions">
                    Newsletter Subscriptions
                  </Link>
                </li>
                <li>
                  <Link href="/my-reward-points">My Reward Points</Link>
                </li>
                <li>
                  <Link href="/my-payment-methods">
                    My Payment Methods
                  </Link>
                </li>
                <li>
                  <Link href="/my-subscriptions">My Subscriptions</Link>
                </li>
                <li>
                  <Link href="/logout">Logout</Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={9}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Account Information
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="subtitle1" gutterBottom>
                        Contact Information
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Vijay Kumar Chaurasiya
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        vijaykumarchaurasiya999@gmail.com
                      </Typography>
                      <Box mt={2}>
                        <Button variant="contained">Edit</Button>
                        <Button variant="contained" ml={2}>
                          Change Password
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="subtitle1" gutterBottom>
                        Newsletters
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        You aren't subscribed to our newsletter.
                      </Typography>
                      <Box mt={2}>
                        <Button variant="contained">Edit</Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="subtitle1" gutterBottom>
                        Address Book
                      </Typography>
                      <Card>
                        <CardContent>
                          <Typography variant="subtitle2" gutterBottom>
                            Default Billing Address
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            You have not set a default billing address.
                          </Typography>
                          <Box mt={2}>
                            <Button variant="contained">Edit Address</Button>
                          </Box>
                        </CardContent>
                      </Card>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="subtitle1" gutterBottom>
                        Default Shipping Address
                      </Typography>
                      <Card>
                        <CardContent>
                          <Typography variant="subtitle2" gutterBottom>
                            Default Shipping Address
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            You have not set a default shipping address.
                          </Typography>
                          <Box mt={2}>
                            <Button variant="contained">Edit Address</Button>
                          </Box>
                        </CardContent>
                      </Card>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyAccount;