import { Checkbox, FormControlLabel, FormLabel, Grid, Radio, TextField } from '@mui/material'
import React, { useState } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import { Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../../../State/Order/Action'
import { useNavigate } from 'react-router-dom'



function DeliveryAddressForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {auth}=useSelector(store=>store)

    const [mobileNumber, setMobileNumber] = useState('');
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('');

    const handleChange = (event) => {
        const { value } = event.target;
        const phoneNumberPattern = /^[0-9]{10}$/; // Regex pattern for a 10-digit mobile number

        setMobileNumber(value);

        if (phoneNumberPattern.test(value)) {
            setError(false);
            setHelperText('');
        } else {
            setError(true);
            setHelperText('Please enter a valid 10-digit mobile number');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const datas = new FormData(e.currentTarget);
        const address = {
            firstName: datas.get("firstName"),
            lastName: datas.get("lastName"),
            streetAddress: datas.get("address"),
            city: datas.get("city"),
            state: datas.get("state"),
            zipCode: datas.get("zip"),
            mobile: datas.get("mobile"),
            save: datas.get("save"),
        }
        console.log("address save", address);
        const orderData = { address, navigate }

        dispatch(createOrder(orderData));
    }
    return (
        <div>
            <Grid container spacing={4}>
                <Grid xs={12} lg={5} className='border rounded-e-md h-[30.5rem] mt-8 overflow-y-scroll'>
                    <div ><div className='font-bold text-xl mt-2' >Address book</div>
                      {  auth?.user?.address?.map((add)=><AddressCard address={add} />)}
                        {/* <Button sx={{ bgcolor: "rgb(145 85 253)" }} size="large" variant='contained'>Deliver Here</Button> */}
                    </div>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Box className='border rounded-s-md shadow-md p-5' >
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='firstName'
                                        name='firstName'
                                        label='First Name'
                                        fullWidth
                                        autoComplete='given-name'
                                    />

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='lastName'
                                        name='lastName'
                                        label='Last Name'
                                        fullWidth
                                        autoComplete='given-name'
                                    />

                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id='address'
                                        name='address'
                                        label='Address'
                                        fullWidth
                                        autoComplete='given-name'
                                        multiline
                                        rows={4}
                                    />

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='city'
                                        name='city'
                                        label='City/Town'
                                        fullWidth
                                        autoComplete='given-name'
                                    />

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='state'
                                        name='state'
                                        label='State/Region'
                                        fullWidth
                                        autoComplete='given-name'
                                    />

                                </Grid>
                                <Grid item xs={12} sm={6}  noValidate>
                                    <TextField
                                        required
                                        id='zip'
                                        name='zip'
                                        label='Zip/PIN Code'
                                        fullWidth
                                        type='number'
                                        autoComplete='shipping postal-code'

                                    />

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        value={mobileNumber}
                                        onChange={handleChange}
                                        error={error}
                                        helperText={helperText}
                                        inputProps={{
                                            maxLength: 10,
                                        }}
                                        id='mobile'
                                        name='mobile'
                                        label='Mobile Number'
                                        fullWidth
                                        autoComplete='given-name'

                                    />

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button sx={{ mt: 2, bgcolor: "rgb(145 85 253)" }} size="large" variant='contained' disabled={mobileNumber.length !== 10 || error} type='submit'>Deliver Here</Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <FormControlLabel className='mt-4 rounded-md border-2 pr-2' id='save' name='save' control={<Checkbox />} label="Save Address" />
                                </Grid>

                            </Grid>
                        </form>
                    </Box>

                </Grid>
            </Grid>
        </div>
    )
}

export default DeliveryAddressForm