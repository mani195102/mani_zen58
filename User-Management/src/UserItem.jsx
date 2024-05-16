import React from 'react';
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function UserItem({ user, onEdit, onDelete }) {
  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + '...' : str;
  };

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
            <strong style={{ color: 'yellow' }}>Catch Phrase:</strong> {truncate(user.company.catchPhrase, 30)}
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
        <Fab color="success" aria-label="edit" onClick={() => onEdit(user)}>
        <EditIcon />
      </Fab>
          <Fab color="secondary" aria-label="edit" onClick={() => onDelete(user.id)}>
        <DeleteIcon />
      </Fab>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default UserItem;
