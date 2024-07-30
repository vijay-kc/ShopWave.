import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import {deleteProduct, findProducts} from '../../State/Product/Action'
import { Avatar, AvatarGroup, Button, Card, CardHeader } from '@mui/material';

function ProductsTable() {
  const dispatch = useDispatch();
  const {products}=useSelector(store=>store)
  // console.log("product admin  ", products)

  const handleProductDelete=(productId)=>{
    dispatch(deleteProduct(productId))
  }
  useEffect(() => {
    const data = {
      category: '',
      colors: [],
      sizes: [],
      minPrice : 0,
      maxPrice : 100000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 1,
      pageSize: 20,
      stock: ""
    }
    dispatch(findProducts(data))
  }, [products.deletedProducts , products.createdProduct,])
  return (
    <div className='p-10 '>
      <Card className='mt-2'>
        <CardHeader title="All Products"/>
    
      <TableContainer component={Paper} sx={{bgcolor:"#475569", height:"80vh", color:"white"}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell  sx={{color:"white"}} >Image</TableCell>
              <TableCell align="left" sx={{color:"white"}} >Title</TableCell>
              <TableCell align="left" sx={{color:"white"}} >Sizes</TableCell>
              <TableCell align="left" sx={{color:"white"}} >Category</TableCell>
              <TableCell align="left" sx={{color:"white"}} >Price</TableCell>
              <TableCell align="left" sx={{color:"white"}}  >Quantity</TableCell>
              <TableCell align="left" sx={{color:"white" }}  >Delete</TableCell>
              {/* <TableCell align="left" >status</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody sx={{color:"white"}} >
            {products?.products?.content?.map((item) => (
              <TableRow
                key={item._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                 {/* { item.imageUrl?.map((url)=><Avatar src={url}></Avatar>)}
                  <Avatar src={item.imageUrl}></Avatar> */}
                  <AvatarGroup sx={{ justifyContent: "start" }} >
                      {item.imageUrl?.map((image) => <Avatar align="left" src={image}></Avatar>)}
                    </AvatarGroup>
                </TableCell>
                <TableCell align="left"  sx={{color:"white"}} >{item.title}</TableCell>
                
                <TableCell align="left" sx={{ color: "white" }} ><div className='flex justify-start'>{item.sizes?.map((size) => <p className='pl-2  pr-2 p-1 mr-1 bg-pink-500 rounded-full'>{size.name}</p>)}</div></TableCell>
                <TableCell align="left"  sx={{color:"white"}} >{item.category?.name}</TableCell>
                <TableCell align="left" sx={{color:"white"}} >{item.price}</TableCell>
                <TableCell align="left"  sx={{color:"white"}} >{item.quantity}</TableCell>
                <TableCell align="left"><Button onClick={()=>{handleProductDelete(item._id)}} variant='outline' sx={{color:"white", bgcolor:"red"}} >Delete</Button></TableCell>
                {/* <TableCell align="left">{item.quantity}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Card>
    </div>
  )
}

export default ProductsTable




// const data = {
//   category: param.levelThree,
//   colors: colorValue || [],
//   sizes: sizeValue || [],
//   minPrice,
//   maxPrice,
//   minDiscount: discount || 0,
//   sort: sortValue || "price_low",
//   pageNumber: pageNumber - 1,
//   pageSize: 1,
//   stock: stock
// }
