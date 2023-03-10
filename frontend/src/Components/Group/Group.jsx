import * as React from 'react';
import {Card , CardActions, CardContent, Button, IconButton, Typography, Box, Stack, TextField,  } from '@mui/material';
import { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Icon from '@mui/material/Icon';
import PoolIcon from '@mui/icons-material/Pool';
import RecommendRoundedIcon from '@mui/icons-material/RecommendRounded';
import Bad from "./bad.png"
import Good from "./good.png"
import axios from 'axios'
import { useParams } from "react-router-dom";


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





export const Group = () => {


  const [memberName, setMemeberName] = useState('') 
  const [member, setMember] = useState([]);
  const [classList, setClassList] = useState([]);

  const {name} = useParams()
// add member
const addMember = async (e)=>{
e.preventDefault();
if (memberName ===''){
alert('input is empty')}

else{

  try{
    const res = await axios.post('http://localhost:3000/member', {name: memberName})
    setMember(prev=>[...prev,res.data])
    setMemeberName('');

  }catch(err){
    console.log(err);
  } }}

  //get all members

  useEffect(()=>{
   const getMembers = async ()=>{
  try{
  const res = await axios.get('http://localhost:3000/members')
   setMember(res.data)

  }catch(err){
    console.log(err);
  }} 
  getMembers()
  },[])

  //delete member

  const deleteMember = async (id)=>{
try{
  const res = await axios.delete(`http://localhost:3000/members/${id}`)
   const newMembers = member.filter(el=>el._id !== id)
   setMember(newMembers)
}catch(err){
  console.log(err);
}
  }

  //onClass members

  const handleBeOnClass = async (e, id)=>{
    e.preventDefault()
    try{
      const res = await axios.get(`http://localhost:3000/members/${id}`)
    console.log(res.data)
  
    }catch(err){
      console.log(err);
    }
       }

       useEffect(()=>{
        const getClassList = async ()=>{
       try{
       const res = await axios.get('http://localhost:3000/classlist')
       setClassList(res.data)
     
       }catch(err){
         console.log(err);
       }} 
       getClassList()
       },[])

  const handleRemove = async (id)=>{
    try{
      const res = await axios.get(`http://localhost:3000/members/${id}`)
    const udatedList = classList.filter(el=>el._id !== id)
    setClassList(udatedList)
  
    }catch(err){
      console.log(err);
    }
    
   }

   const filteredmember = member.filter(el=> el.isOnClass ===true)
  

  
  return (

    <div >
    
    <Stack direction= "row" spacing ={5} sx={{pl: 3, pt:5}}>
    <PoolIcon/>
    <Typography gutterBottom variant="h5" component="div">
        {name}    
</Typography>
    </Stack>

    <Stack direction="row" spacing={4} sx={{pl:4, pt:6}}>    

    <Card sx={{ width: 300, maxheight: 400, opacity:0.8 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'center'}}>
        müşelerı

        </Typography>

        <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
        <Box >
      <TextField
        id="outlined-name"
        label="name"
        value={memberName}
        onChange={(e) => {
          setMemeberName (e.target.value);
        }}
        sx={{width:100, fontSize:8}}
          />

 <Button size="small" onClick={(e)=>addMember(e)} >qosu</Button>
          </Box>

        

      </CardActions>
        
        {
        member.map( (el)  => (

        <Stack direction="row" spacing={1} sx={{justifyContent: 'space-between'}}>    
        <Typography variant="body2" color = {el.isOnClass?"text.primary":"text.secondary"} key={el.id}>
            {el.name}
        </Typography>

        <Box  sx={{ display: 'flex', justifyContent: 'flex-end' }}> 
        <IconButton aria-label="delete" onClick={()=>deleteMember(el._id)}>
        <DeleteIcon />
        </IconButton>
        <IconButton onClick={(e)=>handleBeOnClass(e, el._id)}>
        <Icon color="primary" >+</Icon>
        </IconButton>
        </Box>

        </Stack>
))}

      </CardContent>
    
    </Card>

    <Card sx={{ width: 300, maxheight: 400, opacity:0.8 }} >
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'center', pb:5}}>
        qatysamyn
        </Typography>

        { filteredmember.map((el)=>(

        <Stack direction="row" spacing={1} sx={{justifyContent: 'space-between'}}>    
        <Typography variant="body2" color="text.secondary" key={el._id}>
            {el.name}
        </Typography>

        <IconButton  onClick={()=>handleRemove(el._id)}>
        <Icon color="primary">-</Icon>
        </IconButton>
        </Stack>

    ))}

      </CardContent>
    </Card>

    <Box sx={{display:"flex", justifyContent:"start", flexDirection:"column"}}>

    <Card sx={{ width: 600, maxheight: 500, opacity:0.8,  textAlign: 'center'}} >
    
      <CardContent>
        
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'center'}}>
           nätije
        </Typography>

        <Box sx={{pt:4}}>
        <PoolIcon color="primary"/>
        <Typography> {classList.length} of swimmers to join! </Typography>
  
        <RecommendRoundedIcon color="primary"/>
        <Typography> {(classList.length/2)<6? "It's perfect number to swim in 2 lines":"More lines, less complain and hits!"} </Typography>
        </Box>

        <Box sx={{width:500, pt:4 }}>

        {((classList.length/2)<6)?
        <img style={{height:200, width: 
        500}} src={Good}/> :
        <img style={{eight:200, width: 
          500}} src={Bad}/>
        }
        </Box>
        

        

        
      </CardContent>
      
    </Card>

    
    </Box>
    </Stack>
    </div>
    
    )
        }
