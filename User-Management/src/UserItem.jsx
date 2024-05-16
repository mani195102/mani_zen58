import React from 'react';
import { Button, Card, CardActions,CardContent,Grid,Typography} from '@mui/material'

function UserItem({user, onEdit, onDelete}) {
  return (
    <Grid  item xs={12} sm={6} md={4}>
        <Card style={ {backgroundColor : '#000000bd'}}>
            <CardContent>
                <Typography variant='h6' style={{ width:'100%',display:'block',paddingBottom:'5px',marginBottom:'5px',color:'#fff',borderBottom:'1px solid #fff'}}>
                  <strong style={{color:'yellow'}}>Name:</strong>  {user.name}
                </Typography>
                <Typography variant='p' style={{ width:'100%',display:'block',paddingBottom:'5px',marginBottom:'5px',color:'#fff',borderBottom:'1px solid #fff'}}>
                <strong style={{color:'yellow'}}>company:</strong>  {user.company.name}
                </Typography>
                <Typography variant='p' style={{ width:'100%',display:'block',paddingBottom:'5px',marginBottom:'5px',color:'#fff',borderBottom:'1px solid #fff'}}>
                <strong style={{color:'yellow'}}>Email:</strong>  {user.email}
                </Typography>
                <Typography variant='p' style={{ width:'100%',display:'block',paddingBottom:'5px',marginBottom:'5px',color:'#fff',borderBottom:'1px solid #fff'}}>
                <strong style={{color:'yellow'}}>Phone:</strong>  {user.phone}
                </Typography>
                <Typography variant='p' style={{ width:'100%',display:'block',paddingBottom:'5px',marginBottom:'5px',color:'#fff',borderBottom:'1px solid #fff'}}>
                <strong style={{color:'yellow'}}>City:</strong>  {user.address.city}
                </Typography>
            </CardContent>
            <CardActions>
            <Button variant="contained" size="small" color='success'
                        onClick={() => onEdit(user)}>
                        Edit
                    </Button>
                    <Button variant="contained" size="small" color='secondary'
                        onClick={() => onDelete(user.id)}>
                        Delete
                    </Button>
            </CardActions>
        </Card>
    </Grid>
  )
}

export default UserItem