import { Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/1.png'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, register } from '../../State/Auth/Action'
import { Visibility, VisibilityOff } from '@mui/icons-material'

function RegisterForm() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const jwt = localStorage.getItem("jwt")
    const { auth } = useSelector(store => store)

    useEffect(() => {
        if (jwt) {
            dispatch(getUser(jwt))
        }
    }, [jwt, auth.jwt, dispatch])

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)

        const userData = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            email: data.get("email"),
            password: data.get("password")
        }
        dispatch(register(userData))
    }
    // password hide
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

                <h1 className='text-2xl font-semibold '>Register</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id='firstName'
                            name='firstName'
                            label="FirstName"
                            fullWidth
                            autoComplete='given-name' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id='lastName'
                            name='lastName'
                            label="LastName"
                            fullWidth
                            autoComplete='given-name' />
                    </Grid>
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
                        {auth.error && <div style={{ color: 'red' }}>{auth.error.response.data.error}</div>}
                    </Grid>
                    <Grid item xs={12} >
                        <Button className='bg-[#9155FD] w-full' type='submit' variant='contained'
                            size='large'
                            sx={{ padding: "0.8rem 0", bgcolor: "#9155FD" }}
                        >
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div className='flex justify-center flex-col items-center'>
                <div className='py-3 flex items-center'>
                    <p>if you have already account ?</p>
                    <Button onClick={() => navigate("/Login")}
                        className='ml-5' size='small'>Login</Button>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm