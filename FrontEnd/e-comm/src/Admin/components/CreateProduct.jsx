import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../State/Product/Action';
import { useNavigate } from 'react-router-dom';

const initialSizes = [
  { name: 'XS', quantity: 0 },
  { name: 'S', quantity: 0 },
  { name: 'M', quantity: 0 },
  { name: 'L', quantity: 0 },
  { name: 'XL', quantity: 0 },
  { name: 'XXL', quantity: 0 },
];

const CreateProduct = () => {
  const [productData, setProductData] = useState({
    imageUrl: [""], // Initialize as an array
    highlights:[""],
    brand: "",
    title: "",
    color: "",
    discountedPrice: "",
    price: "",
    discountPresent: "",
    sizes: initialSizes,
    quantity: "",
    topLevelCategory: "",
    secondLevelCategory: "",
    thirdLevelCategory: "",
    description: ["", ""],
     // Initialize as an array with two fields
  });

  const dispatch = useDispatch();
  const navigate=useNavigate();
  const jwt = localStorage.getItem("jwt");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageUrlChange = (e, index) => {
    const { value } = e.target;
    const imageUrls = [...productData.imageUrl];
    imageUrls[index] = value;
    setProductData((prevState) => ({
      ...prevState,
      imageUrl: imageUrls,
    }));
  };

  const handleHighlightChange = (e, index) => {
    const { value } = e.target;
    const highlight = [...productData.highlights];
    highlight[index] = value;
    setProductData((prevState) => ({
      ...prevState,
      highlights: highlight,
    }));
  };

  const handleDescriptionChange = (e, index) => {
    const { value } = e.target;
    const descriptions = [...productData.description];
    descriptions[index] = value;
    setProductData((prevState) => ({
      ...prevState,
      description: descriptions,
    }));
  };

  const handleSizeChange = (e, index) => {
    const { value } = e.target;
    const Sizes = [...productData.sizes];
    Sizes[index].quantity = value;
    setProductData((prevState) => ({
      ...prevState,
      sizes: Sizes,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("daadadadadadadadad",productData)
    dispatch(createProduct(productData));
    navigate("/products")
  };

  const addImageUrlField = () => {
    setProductData((prevState) => ({
      ...prevState,
      imageUrl: [...prevState.imageUrl, ""],
    }));
  };

  const addHighlightField = () => {
    setProductData((prevState) => ({
      ...prevState,
      highlight: [...prevState.highlight, ""],
    }));
  };
  return (
    <div className="p-10 bg-slate-900">
      <Typography variant="h4" sx={{ textAlign: "center", bgcolor: "white" }} className='py-6 text-center rounded-xl'>
        Add New Product
      </Typography>
      <form onSubmit={handleSubmit} className='mt-2 min-h-screen p-6 bg-white rounded-lg'>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h6' style={{ fontSize: "20px", fontWeight: 'bold' }}>
              Add One Or More Image URLs
            </Typography>
          </Grid>
          {productData.imageUrl?.map((url, index) => (
            <Grid item xs={12} key={index}>
              <TextField
                fullWidth
                required
                label={`Image URL ${index + 1}`}
                value={url}
                onChange={(e) => handleImageUrlChange(e, index)}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button variant="contained" onClick={addImageUrlField}>
              Add Another Image URL
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6' style={{ fontSize: "20px", fontWeight: 'bold' }}>
              Add Brand Name, Product Title, Product Quantity, Product Color:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={productData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Total Quantity"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Color</InputLabel>
              <Select
                name='color'
                value={productData.color}
                onChange={handleChange}
                label="Color"
              >
                <MenuItem value="white">White</MenuItem>
                <MenuItem value="beige">Beige</MenuItem>
                <MenuItem value="blue">Blue</MenuItem>
                <MenuItem value="brown">Brown</MenuItem>
                <MenuItem value="green">Green</MenuItem>
                <MenuItem value="purple">Purple</MenuItem>
                <MenuItem value="yellow">Yellow</MenuItem>
                <MenuItem value="black">Black</MenuItem>
                <MenuItem value="red">Red</MenuItem>
                <MenuItem value="maroon">Maroon</MenuItem>
                <MenuItem value="pink">Pink</MenuItem>
                <MenuItem value="orange">Orange</MenuItem>
                <MenuItem value="gray">Gray</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6' style={{ fontSize: "20px", fontWeight: 'bold' }}>
              Add Price
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discounted Price"
              name="discountedPrice"
              value={productData.discountedPrice}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discounted Percentage"
              name="discountPresent"
              value={productData.discountPresent}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6' style={{ fontSize: "20px", fontWeight: 'bold' }}>
              Add Category
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select
                name='topLevelCategory'
                value={productData.topLevelCategory}
                onChange={handleChange}
                label="Top Level Category"
              >
                <MenuItem value="men">Men</MenuItem>
                <MenuItem value="women">Women</MenuItem>
                <MenuItem value="kids">Kids</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Second Level Category</InputLabel>
              <Select
                name='secondLevelCategory'
                value={productData.secondLevelCategory}
                onChange={handleChange}
                label="Second Level Category"
              >
                <MenuItem value="Clothing">Clothing</MenuItem>
                <MenuItem value="accessories">Accessories</MenuItem>
                <MenuItem value="brands">Brands</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Third Level Category</InputLabel>
              <Select
                name='thirdLevelCategory'
                value={productData.thirdLevelCategory}
                onChange={handleChange}
                label="Third Level Category"
              >
                <MenuItem value="tops">Tops</MenuItem>
                <MenuItem value="dresses">Dresses</MenuItem>
                
                <MenuItem value="pants">Pants</MenuItem>
                <MenuItem value="denim">Denim</MenuItem>
                <MenuItem value="sweaters">Sweaters</MenuItem>
                <MenuItem value="shirts">Shirts</MenuItem>
                <MenuItem value="t-shirts">T-Shirts</MenuItem>
                <MenuItem value="jackets">Jackets</MenuItem>
                {/* <MenuItem value="activewear">Activewear</MenuItem> */}
                <MenuItem value="watches">Watches</MenuItem>
                <MenuItem value="wallets">Wallets</MenuItem>
                <MenuItem value="bags">Bags</MenuItem>
                <MenuItem value="women_sunglass">Sunglasses</MenuItem>
                <MenuItem value="men_sunglass">Sunglasses</MenuItem>
                <MenuItem value="hats">Hats</MenuItem>
                <MenuItem value="belts">Belts</MenuItem>

                <MenuItem value="mens_kurta">Mens Kurta</MenuItem>
                <MenuItem value="womens_kurta">Women Kurtas</MenuItem>
                <MenuItem value="jeans">Jeans</MenuItem>
                <MenuItem value="lehenga">Lehenga</MenuItem>
                
                <MenuItem value="gowns">Gowns</MenuItem>
                <MenuItem value="hand_bag">Hand Bag</MenuItem>
                <MenuItem value="bangles">Bangles</MenuItem>
                <MenuItem value="women_sunglass">Sunglasses</MenuItem>
                <MenuItem value="perfume">Perfume</MenuItem>
                <MenuItem value="t-shirts">T-Shirt</MenuItem>
                <MenuItem value="saree">Saree</MenuItem>


            
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6' style={{ fontSize: "20px", fontWeight: 'bold' }}>
              Add Description, Details
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Description"
              multiline
              name="description"
              rows={3}
              value={productData.description[0]}
              onChange={(e) => handleDescriptionChange(e, 0)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Details"
              multiline
              name="details"
              rows={3}
              value={productData.description[1]}
              onChange={(e) => handleDescriptionChange(e, 1)}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6' style={{ fontSize: "20px", fontWeight: 'bold' }}>
              Add One Or More Highlight 
            </Typography>
          </Grid>
          {productData.highlight?.map((text, index) => (
            <Grid item xs={12} key={index}>
              <TextField
                fullWidth
                required
                label={`Highlight ${index + 1}`}
                value={text}
                onChange={(e) => handleHighlightChange(e, index)}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button variant="contained" onClick={addHighlightField}>
              Add Another Highlight
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Typography variant='h6' style={{ fontSize: "20px", fontWeight: 'bold' }}>
              Add Quantity
            </Typography>
          </Grid>
          {productData.sizes?.map((size, index) => (
            <Grid container item spacing={3} key={index}>
              <Grid item xs={6} sm={6}>
                <TextField
                  fullWidth
                  label={size.name}
                  name="quantity"
                  type='number'
                  value={size.quantity}
                  onChange={(event) => handleSizeChange(event, index)}
                />
              </Grid>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button variant="contained" sx={{ p: 1.8 }} className='py-20' size='large' type='submit'>
              Add New Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CreateProduct;
