import * as React from 'react';
import {Stack, Typography, Box, Grid, CardActions, TextField, Modal, IconButton, Button } from '@mui/material';
import { useEffect, useState } from 'react'
import { EventsCard } from './EventsCard';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import axios from 'axios'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid blue',
  boxShadow: 24,
  p: 4,
};


export const Events = ()=>{

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState(dayjs());


  const [input, setInput] = useState('')
  const [input2, setInput2] = useState('')
  const [event, setEvent] = useState([]) 

  const addEvent = async ()=>{
      try{
        const res = await axios.post('http://localhost:3000/event', {event: input, description: input2, date:value.toDate().toDateString()})
        setEvent(prev=>[...prev,res.data])
        setInput('');
        setInput2('');
        console.log(res.data);
  
      }catch(err){
        console.log(err);
      } }


      useEffect(()=>{
        const getEvents = async ()=>{
       try{
       const res = await axios.get('http://localhost:3000/events')
        setEvent(res.data)
     
       }catch(err){
         console.log(err);
       }} 
       getEvents()
       },[])

      const deleteEvent= async (id)=>{
        try{
          const res = await axios.delete(`http://localhost:3000/events/${id}`)
           const newEvents = event.filter(el=>el._id !== id)
           setEvent(newEvents)
        }catch(err){
          console.log(err);
        }
          }

    return (
        <div>
          <Stack sx={{pl:5, pt:3}} direction="row" spacing={3}>
          <Diversity1Icon/>
        <Typography gutterBottom variant="h5" component="div" >
        bırge şyğu
        </Typography>
        </Stack>
        <CardActions sx={{pl:10}}>
        <Button size="large"  onClick={handleOpen} >qosu</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
      component="form"
      sx={style}
      noValidate
      autoComplete="off"
      
    >
      <Stack direction="row" spacing={3} sx={{pt:3}}>
      <TextField
        id="outlined-name"
        label="event"
        spacing={3}
        value={input}
        onChange={(e) => {
            setInput (e.target.value);
          }}
      />

<TextField
        id="outlined-controlled"
        label="description"
        value={input2}
        onChange={(e) => {
          setInput2(e.target.value);
        }}
      />

<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={['DateField']}
      >
        
        <DateField
          label="Format without meridiem"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
        
      </DemoContainer>
    </LocalizationProvider>


</Stack>

<Button size="Large" onClick={addEvent} sx={{mt:3}}>add</Button>

          </Box>

      </Modal>
      
        </CardActions>
        

        {/* // List of events */}


      <Grid item >
      <Grid container spacing={3} sx={{pt:8, pl:5}}>
        {event.map((el) => (
          <Grid key={el.id} item xs={4}>
            <Box>
              <IconButton onClick={()=>deleteEvent(el._id)}>
            <ClearOutlinedIcon />
            </IconButton>
            <EventsCard item={el} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>

        </div>
    )
}