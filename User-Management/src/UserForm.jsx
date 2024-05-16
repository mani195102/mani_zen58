import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

function UserForm({ user, onSave, onCancel }) {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            geo: {
                lat: '',
                lng: ''
            }
        },
        phone: '',
        website: '',
        company: {
            name: '',
            catchPhrase: '',
            bs: ''
        }
    });

    useEffect(() => {
        if (user) {
            setFormData({
                ...user,
                company: user.company || { name: '', catchPhrase: '', bs: '' },
                address: user.address || { street: '', suite: '', city: '', zipcode: '', geo: { lat: '', lng: '' } }
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const nameParts = name.split('.');
        if (nameParts.length === 1) {
            setFormData({ ...formData, [name]: value });
        } else if (nameParts.length === 2) {
            setFormData({ ...formData, [nameParts[0]]: { ...formData[nameParts[0]], [nameParts[1]]: value } });
        } else if (nameParts.length === 3) {
            setFormData({
                ...formData,
                [nameParts[0]]: {
                    ...formData[nameParts[0]],
                    [nameParts[1]]: {
                        ...formData[nameParts[0]][nameParts[1]],
                        [nameParts[2]]: value
                    }
                }
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <Dialog open onClose={onCancel}>
            <DialogTitle>{user.id ? 'Edit User' : 'Add User'}</DialogTitle>
            <DialogContent>
                <TextField autoFocus margin='dense' name='name' label='Name' type='text' fullWidth value={formData.name} onChange={handleChange} />
                <TextField margin='dense' name='username' label='Username' type='text' fullWidth value={formData.username} onChange={handleChange} />
                <TextField margin='dense' name='email' label='Email' type='email' fullWidth value={formData.email} onChange={handleChange} />
                <TextField margin='dense' name='address.street' label='Street' type='text' fullWidth value={formData.address.street} onChange={handleChange} />
                <TextField margin='dense' name='address.suite' label='Suite' type='text' fullWidth value={formData.address.suite} onChange={handleChange} />
                <TextField margin='dense' name='address.city' label='City' type='text' fullWidth value={formData.address.city} onChange={handleChange} />
                <TextField margin='dense' name='address.zipcode' label='Zipcode' type='text' fullWidth value={formData.address.zipcode} onChange={handleChange} />
                <TextField margin='dense' name='address.geo.lat' label='Geo Lat' type='text' fullWidth value={formData.address.geo.lat} onChange={handleChange} />
                <TextField margin='dense' name='address.geo.lng' label='Geo Lng' type='text' fullWidth value={formData.address.geo.lng} onChange={handleChange} />
                <TextField margin='dense' name='phone' label='Phone' type='text' fullWidth value={formData.phone} onChange={handleChange} />
                <TextField margin='dense' name='website' label='Website' type='text' fullWidth value={formData.website} onChange={handleChange} />
                <TextField margin='dense' name='company.name' label='Company Name' type='text' fullWidth value={formData.company.name} onChange={handleChange} />
                <TextField margin='dense' name='company.catchPhrase' label='Catch Phrase' type='text' fullWidth value={formData.company.catchPhrase} onChange={handleChange} />
                <TextField margin='dense' name='company.bs' label='BS' type='text' fullWidth value={formData.company.bs} onChange={handleChange} />
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel} color='primary'>Cancel</Button>
                <Button onClick={handleSubmit} color='primary'>Save</Button>
            </DialogActions>
        </Dialog>
    );
}

export default UserForm;
