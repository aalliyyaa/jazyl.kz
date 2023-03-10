import * as React from 'react';
import {Typography,  Stack, Grid}from '@mui/material';
import {v4 as uuidv4} from 'uuid'
import { PoolsCard } from './PoolsCard';
import WavesIcon from '@mui/icons-material/Waves';
import "./pool.css"



 const eveningGroups = [
  {
    id: uuidv4(),
    name: "Almaly",
    time: "19:00",
    coach: "Dima"

},
{
id: uuidv4(),
name: "Rozybakiyev",
time: "19:00",
coach: "Vanya"
},
{
id: uuidv4(),
name: "Kazakhstan",
time: "19:00",
coach: "Svetlana"

}]


export const PoolsList = () => {


  return ( 
<div >

    <Stack direction="row" spacing={3} sx={{pl:3, pt:4}}>
    <WavesIcon />

    <Typography gutterBottom variant="h5" component="div">
    baseinder
    </Typography>

    </Stack>

    <Grid item>
      <Grid container spacing={3}  sx={{pt:10, pl:5}}>
        {eveningGroups.map((el) => (
          <Grid key={el.id} item xs={4}>
            <PoolsCard item={el} />
          </Grid>
        ))}
      </Grid>
    </Grid>

    <div id="container">
<div id="glass">
<div id="water"></div>
</div>
</div>

    </div>

  );
}