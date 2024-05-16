import React from 'react';
import { Button, Card, CardActions,CardContent,Grid,Typography} from '@mui/material'

function UserItem({user, onEdit, onDelete}) {
  return (
    <Grid  item xs={12} sm={6} md={4}>
        <Card style={ {backgroundColor : '#000000bd'}}>
            <CardContent>
                <Typography variant='h6' style={{ color:'#fff'}}>
                  <strong>Name:</strong>  {user.name}
                </Typography>
                <Typography variant='p' style={{ color:'#fff'}}>
                <strong>Email:</strong>  {user.email}
                </Typography>
                <br/>
                <Typography variant='p' style={{ color:'#fff'}}>
                <strong>Phone:</strong>  {user.phone}
                </Typography>
            </CardContent>
            <CardActions>
            <Button variant="contained" size="small" color='primary'
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