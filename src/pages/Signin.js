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

const Signin = () => {

  const context = useContext(UserContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
        context.setUser({ email: res.user.email, uid: res.user.uid })
      })
      .catch(error => {
        console.log(error);
        toast(error.message, {
          closeOnClick: true,
          pauseOnHover: true,
          autoClose: 2000,
          type: "error"
        });
      })
  }

  const handleSubmit = e => {
    e.preventDefault()
    handleSignup()
  }

  const signInWithGoogle = () => {
    const google_provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(google_provider)
      .then(res => {
        console.log(res);
        context.setUser({ email: res.user.email, uid: res.user.uid })
        toast("Here you go✌🏻",
          { type: "success" }
        );
      })
      .catch(error => {
        console.log(error);
        toast("Oops.. Email already exists",
          { type: "error" }
        );
      })
  }

  if (context.user?.uid) {
    return <Redirect to="/" />
  }

  return (
    <div className='signin min-vh-100 position-relative'>
      <div className='img-overlay position-absolute w-100 h-100'>
        <Container component="main" maxWidth="xs" >

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
                Sign in
              </Typography>

              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus


                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <br />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <br />
                <Link href="/forgot" variant="body2">
                  Forgot password?

                </Link>
                <br />
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Box>
            </Card>

            <br />
            <GoogleButton className='mx-auto' label='Sign in with Google' onClick={signInWithGoogle} />
          </Box>
        </Container>

      </div>
    </div>
  );

}

export default Signin
