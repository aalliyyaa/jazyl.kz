import * as React from 'react';

import {Stack, Typography, Card, CardContent, Box} from '@mui/material';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import PoolIcon from '@mui/icons-material/Pool';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import "./main.css"





export const OpenPage =() => {

  return (

    <div >

      <Stack direction="row" sx={{display: 'flex', justifyContent: 'center', alignContent: 'center', pt:30, pl:5 }} spacing={4} >
      <Box sx={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}> 

<Card sx={{ width: 150, height: 150, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
 <CardContent>


   <IconButton variant="contained" aria-label="Disabled elevation buttons" component={Link} to="/pools">
   <PoolIcon />
   </IconButton>

</CardContent> 
</Card>

</Box>
    <Box id="banner"> 

     <Card sx={{ width: 150, height: 150 }}>
      <CardContent>
     <Typography  component="div" sx={{textAlign: 'center', pt:5}}
     variant="h5"
     style={{ textShadow: '0px 0px 10px rgba(255, 255, 255, 0.8)' }}>
          jazyl
        </Typography> 
    </CardContent> 
    </Card>

    </Box>


    <Box sx={{display: 'flex', justifyContent: 'center'}}> 

    <Card sx={{ width: 150, height: 150, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <CardContent>
    
  
    
        <IconButton component={Link} to="/events">
        <Diversity1Icon/>
        </IconButton>


    </CardContent> 
    </Card>

    </Box>

    </Stack>
    </div>
  );
}