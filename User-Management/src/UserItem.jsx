import React from 'react';
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';

function UserItem({ user, onEdit, onDelete }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card style={{ backgroundColor: '#000000bd' }}>
        <CardContent>
          <Typography variant='h6' style={{ width: '100%', display: 'block', paddingBottom: '5px', marginBottom: '5px', color: '#fff', borderBottom: '1px solid #fff' }}>
            <strong style={{ color: 'yellow' }}>Name:</strong> {user.name}
          </Typography>
          <Typography variant='body2' style={{ width: '100%', display: 'block', paddingBottom: '5px', marginBottom: '5px', color: '#fff', borderBottom: '1px solid #fff' }}>
            <strong style={{ color: 'yellow' }}>Username:</strong> {user.username}
          </Typography>
          <Typography variant='body2' style={{ width: '100%', display: 'block', paddingBottom: '5px', marginBottom: '5px', color: '#fff', borderBottom: '1px solid #fff' }}>
            <strong style={{ color: 'yellow' }}>Email:</strong> {user.email}
          </Typography>
          <Typography variant='body2' style={{ width: '100%', display: 'block', paddingBottom: '5px', marginBottom: '5px', color: '#fff', borderBottom: '1px solid #fff' }}>
            <strong style={{ color: 'yellow' }}>Phone:</strong> {user.phone}
          </Typography>
          <Typography variant='body2' style={{ width: '100%', display: 'block', paddingBottom: '5px', marginBottom: '5px', color: '#fff', borderBottom: '1px solid #fff' }}>
            <strong style={{ color: 'yellow' }}>Website:</strong> {user.website}
          </Typography>
          <Typography variant='body2' style={{ width: '100%', display: 'block', paddingBottom: '5px', marginBottom: '5px', color: '#fff', borderBottom: '1px solid #fff' }}>
            <strong style={{ color: 'yellow' }}>Company:</strong> {user.company.name}
          </Typography>
          <Typography variant='body2' style={{ width: '100%', display: 'block', paddingBottom: '5px', marginBottom: '5px', color: '#fff', borderBottom: '1px solid #fff' }}>
            <strong style={{ color: 'yellow' }}>Catch Phrase:</strong> {user.company.catchPhrase}
          </Typography>
          <Typography variant='body2' style={{ width: '100%', display: 'block', paddingBottom: '5px', marginBottom: '5px', color: '#fff', borderBottom: '1px solid #fff' }}>
            <strong style={{ color: 'yellow' }}>BS:</strong> {user.company.bs}
          </Typography>
          <Typography variant='body2' style={{ width: '100%', display: 'block', paddingBottom: '5px', marginBottom: '5px', color: '#fff', borderBottom: '1px solid #fff' }}>
            <strong style={{ color: 'yellow' }}>Street:</strong> {user.address.street}
          </Typography>
          <Typography variant='body2' style={{ width: '100%', display: 'block', paddingBottom: '5px', marginBottom: '5px', color: '#fff', borderBottom: '1px solid #fff' }}>
            <strong style={{ color: 'yellow' }}>Suite:</strong> {user.address.suite}
          </Typography>
          <Typography variant='body2' style={{ width: '100%', display: 'block', paddingBottom: '5px', marginBottom: '5px', color: '#fff', borderBottom: '1px solid #fff' }}>
            <strong style={{ color: 'yellow' }}>City:</strong> {user.address.city}
          </Typography>
          <Typography variant='body2' style={{ width: '100%', display: 'block', paddingBottom: '5px', marginBottom: '5px', color: '#fff', borderBottom: '1px solid #fff' }}>
            <strong style={{ color: 'yellow' }}>Zipcode:</strong> {user.address.zipcode}
          </Typography>
          <Typography variant='body2' style={{ width: '100%', display: 'block', paddingBottom: '5px', marginBottom: '5px', color: '#fff', borderBottom: '1px solid #fff' }}>
            <strong style={{ color: 'yellow' }}>Geo Lat:</strong> {user.address.geo.lat}
          </Typography>
          <Typography variant='body2' style={{ width: '100%', display: 'block', paddingBottom: '5px', marginBottom: '5px', color: '#fff', borderBottom: '1px solid #fff' }}>
            <strong style={{ color: 'yellow' }}>Geo Lng:</strong> {user.address.geo.lng}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small" color='success' onClick={() => onEdit(user)}>
            Edit
          </Button>
          <Button variant="contained" size="small" color='secondary' onClick={() => onDelete(user.id)}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default UserItem;
