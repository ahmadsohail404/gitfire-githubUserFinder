import React, { useContext, useState } from 'react'
import {
    Container,
    Form,
    Button,
    FormGroup,
    Label,
    Col,
    Input,
    Row,
    Card,
    CardBody,
    CardFooter,
    CardHeader
} from "reactstrap"

import firebase from "firebase/compat/app";
import { UserContext } from '../context/UserContext';
import { Redirect } from 'react-router-dom';
import { toast } from "react-toastify";
import Link from '@mui/material/Link';

import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import GoogleButton from 'react-google-button'
import '../Signin.css';

const ForgotPassword = () => {

    function Copyright(props) {
        return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © '}
                <Link color="inherit" style={{ textDecoration: "none" }} href="https://mui.com/">
                    Bugs Apocalypse
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    const forgotPassword = (email) => {
        firebase.auth().sendPasswordResetEmail(email)
            .then(function () {
                toast("Here you go✌🏻",
                    { type: "success" }
                );
            }).catch(function (err) {
                console.log(err);
                toast("Oops..",
                    { type: "error" }
                );
            })
    }

    return (
        <div className='signin min-vh-100 position-relative'>
            <div className='img-overlay position-absolute w-100 h-100'>
                <Container component="main"  >
                    <Box
                        sx={{
                            paddingTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Card style={{ padding: '32px', borderRadius: '8px' }} className="text-center" bg='light' border="primary">
                            <center>
                                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                    <LockOutlinedIcon />
                                </Avatar>
                            </center>
                            <Typography component="h1" variant="h5">
                                Reset Password
                            </Typography>

                            <Box component="form" onSubmit={forgotPassword} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <br />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Reset
                                </Button>
                            </Box>
                        </Card>

                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </div>
        </div>
    );

}

export default ForgotPassword
