import * as React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Stack}from '@mui/material';
import { Link } from "react-router-dom";

export const PoolsCard =({item})=>{

    return(

    <Card sx={{ width: 300}} key ={item.id}>
    
      <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}} >
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'center'}}>
          {item.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" sx={{textAlign: 'center'}}>
         { item.time}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{textAlign: 'center'}}>
          {item.coach}
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
        <Button size="small" component={Link} to={`/pools/${item.name}`}>tırkelu</Button>
      </CardActions>
    </Card>
    )
}