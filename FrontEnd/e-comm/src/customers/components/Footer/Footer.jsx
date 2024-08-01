import React from "react";
import { Grid, Typography, Button, Box, Avatar } from "@mui/material";
import co from '../../../assets/1.png';
import logo from '../../../assets/payment-method.svg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
function Footer() {
    return (
        <div>
            <Grid
                className="bg-black text-sm text-white text-left pl-10 mt-8"
                container
                sx={{ bgcolor: "black", color: "white", py: 3 }}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Box
                        component="img"
                        sx={{
                            height: 200,
                            width: 250,
                         
                        }}
                        alt="Your Alt Text"
                        src={co}
                    />
                    <p className="pt-4 pr-20">Discover a world of endless possibilities. Shop with us, where every click brings joy to your doorstep!</p>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pl-4" variant="h6">
                        {" "}
                        Company{" "}
                    </Typography>
                    <hr class="border-t-2 border-gray-300 ml-4 mr-24 mb-2" />
                    <div>
                        <Button className="pb-2" variant="body1" gutterBottom style={{ fontSize: '12px' }}>
                            Press
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-2" variant="h6" gutterBottom style={{ fontSize: '12px' }}>
                            Blog
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-2" variant="h6" gutterBottom style={{ fontSize: '12px' }}>
                            Carrier
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-2" variant="h6" gutterBottom style={{ fontSize: '12px' }}>
                            FAQ
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-2" variant="h6" gutterBottom style={{ fontSize: '12px' }}>
                            Privacy Policy
                        </Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className=" pl-4" variant="h6">
                        {" "}
                        Customer Service{" "}
                    </Typography>
                    <hr class="border-t-2 border-gray-300 ml-4 mr-24 mb-2" />
                    <div>
                        <Button className="pb-2" variant="h6" gutterBottom style={{ fontSize: '12px' }}>
                            Returns & Exchanges
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-2" variant="h6" gutterBottom style={{ fontSize: '12px' }}>
                            Order Tracking
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-2" variant="h6" gutterBottom style={{ fontSize: '12px' }}>
                            Help
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-2" variant="h6" gutterBottom style={{ fontSize: '12px' }}>
                            Terms & Conditions
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6">
                        {" "}
                        Contact Us{" "}
                    </Typography>
                    <hr class="border-t-2 border-gray-300 mr-24 mb-4" />
                    <div className=" pb-2">
                        <div> <LocationOnIcon/> 41, Second Floor, Navjivan Industrial,</div>
                        <div className="pl-7">Near Unique Hospital,Laxmi Nagar,</div>
                        <div className="pl-7">Jaipur, Rajasthan 302020</div>
                        

                    </div>
                    <div className=" pb-2">
                       <EmailIcon/> vkfashion@gmail.com
                    </div>
                    <div className="pb-2"><CallIcon/>+91-8318446814</div>
                    <div>
                        <Typography variant="h6" style={{ fontSize: '15px' }}>
                            Follow us :
                        </Typography>

                        <div className="flex justify-between pt-2 pr-12">
                            <a href=""><InstagramIcon fontSize="large" /></a>
                            <a href=""><FacebookIcon fontSize="large" /></a>
                            <a href=""><TwitterIcon fontSize="large" /></a>
                            <a href=""><YouTubeIcon fontSize="large" /></a>
                        </div>

                    </div>
                </Grid>
            </Grid>
            <hr style={{ border: "1px solid white" }} />

            <Grid
                className="bg-black text-sm text-white text-center pb-3"
                container
                sx={{ bgcolor: "black", color: "white", py: 2 }}
            >
                <Grid item xs={12} sm={6}>
                    <Typography className="pb-1  " variant="p">
                        {" "}
                        Copyright &copy; 2024. All Rights Reserved by vijay.{" "}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img
                        src={logo}
                        alt="Company Logo"
                        style={{
                            height: 30,
                            width: 500,
                            maxWidth: "100%",
                            display: "block",
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer;
