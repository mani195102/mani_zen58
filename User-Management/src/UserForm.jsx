import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'


function UserForm({ user, onSave, onCancel }) {
    const [formData, setFormData] = useState({ name: '', company: {name: ''},email: '',phone:'',address:{city: ''} });

    useEffect(() => {
        if (user) {
            setFormData({
                ...user,
                company: user.company || { name: '' },address: user.address || { city: '' }   // Ensure company is an object
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'company') {
            setFormData({ ...formData, company: { name: value } });
        } else if (name === 'city') {
            setFormData({ ...formData, address: { city: value } });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    }

    return (
        <Dialog open onClose={onCancel}>
            <DialogTitle>{user.id ? 'Edit User' : 'Add User'}</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin='dense'
                    name='name'
                    label='Name'
                    type='text'
                    fullWidth
                    value={formData.name}
                    onChange={handleChange}></TextField>

                     <TextField
                    autoFocus
                    margin='dense'
                    name='company'
                    label='Company'
                    type='text'
                    fullWidth
                    value={formData.company.name}
                    onChange={handleChange}></TextField>
                <TextField
                    autoFocus
                    margin='dense'
                    name='email'
                    label='Email'
                    type='email'
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}></TextField> 
                          <TextField
                    autoFocus
                    margin='dense'
                    name='city'
                    label='city'
                    type='text'
                    fullWidth
                    value={formData.address.city}
                    onChange={handleChange}></TextField>                 
                       <TextField
                    autoFocus
                    margin='dense'
                    name='phone'
                    label='phone'
                    type='phone'
                    fullWidth
                    value={formData.phone}
                    onChange={handleChange}></TextField>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel} color='primary'>Cancel</Button>
                <Button onClick={handleSubmit} color='primary'>Save</Button>
            </DialogActions>
        </Dialog>
    )
}

export default UserForm