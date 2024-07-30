import { CurrencyRupee, DeviceHub, TrendingUp } from '@mui/icons-material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const salesData = [
    {
        state: '12k',
        title: "Sales",
        color: "#0A79DF",
        icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />,
    },
    {
        state: '22k',
        title: "Customers",
        color: "#45CE30",
        icon: <AccountBoxIcon sx={{ fontSize: "1.75rem" }} />,
    },
    {
        state: '1.2k',
        title: "Products",
        color: "#FAC42F",
        icon: <DeviceHub sx={{ fontSize: "1.75rem" }} />,
    },
    {
        state: '12k',
        title: "Revenue",
        color: "#01CBC6",
        icon: <CurrencyRupee sx={{ fontSize: "1.75rem" }} />,
    },
];

const renderStates = () => {
    return salesData.map((item, index) => (
        <Grid item xs={12} sm={3} key={index}>
            <Box sx={{
                display: "flex",
                alignItems: 'center',
            }}>
                <Avatar variant='rounded' sx={{
                    mr: 3,
                    width: 44,
                    height: 44,
                    boxShadow: 3,
                    color: "white",
                    bgcolor:`${item.color}` ,
                }}>
                    {item.icon}
                </Avatar>
                <Box sx={{ display: "flex", flexDirection: 'column' }}>
                    <Typography variant='caption'>
                        {item.title}
                    </Typography>
                    <Typography variant='h6'>{item.state}</Typography>
                </Box>
            </Box>
        </Grid>
    ));
}

function MonthlyOverview() {
    return (
        <Card sx={{ bgcolor: "#475569",color: "white" }}>
            <CardHeader
                title="Monthly Overview"
                action={
                    <IconButton size='small'>
                        <MoreVertIcon sx={{ color: "white" }} />
                    </IconButton>
                }
                subheader={
                    <Typography variant='body2' sx={{ textAlign: "left", color: "lightGreen" }}>
                        <Box component="span" sx={{ fontWeight: 600, mr: 1, color: "lightGreen" }}>
                            Total 49.4% growth
                        </Box>
                        😎 this month
                    </Typography>
                }
                titleTypographyProps={{
                    sx: {
                        mb: 2.5,
                        lineHeight: "2rem !important",
                        letterSpacing: '.15px !important',
                        textAlign: "left",
                    }
                }}
            />
            <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
                <Grid container spacing={[5, 0]}>
                    {renderStates()}
                </Grid>
            </CardContent>
        </Card>
    )
}

export default MonthlyOverview;
