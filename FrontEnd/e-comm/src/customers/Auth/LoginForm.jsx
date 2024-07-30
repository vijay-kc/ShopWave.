import { Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/1.png'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../State/Auth/Action'
import { Visibility, VisibilityOff } from '@mui/icons-material';
function LoginForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { auth } = useSelector(store => store)

    const handleSubmit = (event) => {
        event.preventDefault()

        const data = new FormData(event.currentTarget)

        const userData = {
            email: data.get("email"),
            password: data.get("password")
        }
        dispatch(login(userData))
        // console.log("user login respond", auth.error)

    
    }
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    return (
        <div>
            <div className=' flex justify-center'>
                <img
                    className="h-12 rounded-full w-auto"
                    src={logo}
                    alt=""
                />
            </div>
            <div className='pb-8  text-center '>

                <h1 className='text-2xl font-semibold '>Login</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} >
                        <TextField
                            required
                            id='email'
                            name='email'
                            label="Email"
                            fullWidth
                            autoComplete='email' />
                    </Grid>
                    <Grid item xs={12} >
                        {/* <TextField
                            required
                            type="password"
                            id='password'
                            name='password'
                            label="Password"
                            fullWidth
                            autoComplete='password' /> */}
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <OutlinedInput
                            name='password'
                                id="password"
                                required
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="password"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        {auth.error && <div style={{ color: 'red' }}>{auth.error?.response?.data?.message || auth.error?.response?.data?.error}</div>}
                    </Grid>
                    <Grid item xs={12} >
                        <Button className='bg-[#9155FD] w-full' type='submit' variant='contained'
                            size='large'
                            sx={{ padding: "0.8rem 0", bgcolor: "#9155FD" }}
                        >
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div className='flex justify-center flex-col items-center'>
                <div className='py-3 flex items-center'>
                    <p>if you don't have account ?</p>
                    <Button onClick={() => navigate("/Register")}
                        className='ml-5' size='small'>Register</Button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm