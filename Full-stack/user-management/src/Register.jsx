import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {Textfield, BUtton, Typography, Container, Snackbar, Alert} from '@mui/material'

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
    const navigate = useNavigate();

    const handlSubmit = async (e) =>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:3000/apiUser/register', { name, email, password});
            setSnackbar({ open: true, message:"user Registered Successfully", severity:"success" });
     } catch(error){
            setSnackbar({ open: true, message:"Registration Failed", severity:"error" });
        }

    }

    const showSnackbar = (message, severity) => {
        setSnackbar({ open: true, message, severity });
    }

    const handleSnackbarClose = () => {
        setSnackbar({ ...snackbar, open: false })
    }
  return (
    <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
        Register
        </Typography>
        <form onSubmit={handleSubmit}>
            <Textfield label="Name" fullWidth margin="normal" value={name} onChange={(e) => setName(e.target.value)}></Textfield>
            <Textfield label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)}></Textfield>
            <Textfield label="Password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)}></Textfield>
            <button type="submit" variant="contained" color="primary" fullwidth>Register</button>
        </form>
        <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity={snackbar.severity}
                    sx={{ width: '100%' }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
     </Container>
  )
}

export default Register