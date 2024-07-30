import { Button, CardContent, Typography, Styled, styled, Card } from '@mui/material'
import React from 'react'
import trophy from '../../assets/trophy1.png'
const  TrignleImg=styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:"absolute"
})
const  TrophyImg=styled("img")({
    right:36,
    bottom:20,
    height:98,
    position:"absolute"

})
function Achievement() {
  return (
<Card sx={{position:"relative", textAlign:'left' , bgcolor:"#475569",color:"white"}}>
    <CardContent>
        <Typography variant='h5' sx={{latterSpacing:".25px"}}>
            Shop with VK Fashion
        </Typography>
        <Typography variant='h6' sx={{color:"lightgreen", mt:"10px"}}>
            Congratulations 🥳
        </Typography>
        <Typography variant='h5' sx={{mt:"10px"}}>
            32.2k
        </Typography>
        <Button size='small' sx={{marginTop:"15px"}} variant='contained'>View Sales</Button>
        <TrignleImg src=''></TrignleImg>
        <TrophyImg src={trophy}></TrophyImg>
    </CardContent>
</Card>
  )
}

export default Achievement