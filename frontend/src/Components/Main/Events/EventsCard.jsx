import * as React from 'react';
import {Stack, Collapse, Typography, Card, CardContent, Box, CardActions, TextField, Modal, CardMedia, IconButton, Icon, Button } from '@mui/material';
import { useEffect, useState } from 'react'
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import axios from 'axios'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  

export const EventsCard = ({item})=>{
    const [name2, setName2] = useState([])
    const [input, setInput] = useState("")
   
        const addMe = async (e)=>{
          e.preventDefault();
          if (input ===''){
            alert('input is empty')}
            
            else{
            try{
              const res = await axios.post('http://localhost:3000/participant', {participant: input, eventId:item._id})
              setName2(prev=>[...prev,res.data])
              setInput('');
          
            }catch(err){
              console.log(err);
            } }
          }
          
            useEffect(()=>{
              const getAll = async ()=>{
             try{
             const res = await axios.get('http://localhost:3000/participants')
              setName2(res.data)
           
             }catch(err){
               console.log(err);
             }} 
             getAll()
             },[])
           
      
           const deleteParticipants = async (e, id)=>{
            e.preventDefault()
            try{
              const res = await axios.delete(`http://localhost:3000/participants/${id}`)
               const newParticipants = name2.filter(el=>el._id !== id)
               setName2(newParticipants)
            }catch(err){
              console.log(err);
            }
              }

           const filteredname2 = name2.filter(el=>el.eventId ===item._id)

                           
            const [expanded, setExpanded] = useState(false);
          
            const handleExpandClick = () => {
              setExpanded(!expanded);
            };
  console.log(item.date);  

return(

    <Card sx={{ maxWidth: 500 }}>
      <CardContent>
        <Stack direction="row" spacing={5}>
        <Typography gutterBottom variant="h5" component="div" color="primary">
          {new Date(item.date).toDateString()}
        </Typography>
        <Box sx={{width:250}}>
        <Typography gutterBottom variant="h5" component="div">
          {item.event}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        </Box>
        </Stack>
      </CardContent>
      <CardActions>
        <Stack direction="column">
        <Box>
      <TextField
        id="outlined-name"
        label="name"
        value={input}
        onChange={(e) => {
          setInput (e.target.value);
        }}
        sx={{width:130, pl:1}}
          />

 <Button size="large" onClick={addMe} >+</Button>
 <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
          </ExpandMore>


          </Box>
          <Collapse in={expanded} timeout="auto" unmountOnExit>


        { filteredname2.map( (el)  => (
        <List >
        <Stack direction ="row">
        
        <ListItemText primary={el.participant} sx={{pt: 2, pl:2}}/>   
        <IconButton  onClick={(e)=>deleteParticipants(e, el._id)}>
        <Icon color="primary">-</Icon>
        </IconButton>

          <Divider />
          </Stack>
        </List>
        ))} 

</Collapse>


</Stack>
        
      </CardActions>
    </Card>
   
)
}