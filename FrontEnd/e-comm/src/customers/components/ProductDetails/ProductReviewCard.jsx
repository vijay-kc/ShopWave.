import { Padding } from '@mui/icons-material'
import { Avatar,Box,Rating, Grid } from '@mui/material'
import React from 'react'

function ProductReviewCard() {
  return (
    <Grid container className='border-b-2'>
        <Grid item  className='flex pt-4'>
            
                <Avatar className='text-white' sx={{width:50,height:50,bgcolor:"#9155fd"}}>
                    V
                </Avatar>
            
           <Box >
           <p className='font-semibold text-lg pl-4'>Vijay kumar</p>
           <Rating value={3.5} size='small' className='pl-3' name='half-rating' readOnly precision={.5}/>
           </Box>
            
        </Grid>
        <Grid item  className='text-left' >         
            <p className='opacity-70  text-sm text-left pt-2'>Reviewed in India on 12 July 2024</p>
            <p className=' pb-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius soluta eveniet, accusamus architecto est mollitia alias dolor rem porro illum aut nulla minus qui excepturi saepe aliquid, magni enim </p>
        </Grid>
    </Grid>
  )
}

export default ProductReviewCard