import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material'
import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const Bookdetails = () => {
  const history=useNavigate();
  const [inputs,setinputs]=useState({})
  const [checked,setchecked]=useState(false);
  const id=useParams().id;
  console.log(id);
  useEffect(() => {
    
    const fetchHandler= async()=>{
      await axios.get(`http://localhost:3001/bookstore/getbook/${id}`).then((res)=>{
        console.log(res.data.Books);
        setinputs(res.data.Books)
      }).catch(err=>console.log(err))
    }
    fetchHandler();
  }, [id])
  const sendrequest=async()=>{
    await axios.put(`http://localhost:3001/bookstore/updatebook/${id}`,{
      name:String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      price:Number(inputs.price),
      image:String(inputs.image),
      available:Boolean(checked)
    }).then((res)=>res.data);
  }
  const handlesubmit=(e)=>{
    e.preventDefault();
    sendrequest().then(()=>history('/books'))
  }
  const handlechange=(e)=>{
    setinputs((prestate)=>({
      ...prestate,
      [e.target.name]:e.target.value,
    }))
  }
  console.log(inputs);
  return (
    <form style={{ marginTop:'4%'}} onSubmit={handlesubmit}>
    <Box display={'flex'} flexDirection={'column'} maxWidth={700} marginLeft={'auto'} marginRight={'auto'} marginTop={'6%'} boxShadow={'5px 5px 10px #ccc'} padding={'10px'} border={'2px solid black'}>
    
    <FormLabel>Name</FormLabel>
    <TextField value={inputs.name} onChange={handlechange} margin='normal' fullWidth variant='outlined' name='name'/>
    
    <FormLabel>Author</FormLabel>
    <TextField value={inputs.author} onChange={handlechange} margin='normal' fullWidth variant='outlined' name='author'/>
    
    <FormLabel>Description</FormLabel>
    <TextField value={inputs.description} onChange={handlechange} margin='normal' fullWidth variant='outlined' name='description'/>
    
    <FormLabel>Price</FormLabel>
    <TextField value={inputs.price} onChange={handlechange} type='number' margin='normal' fullWidth variant='outlined' name='price'/>
    
    <FormLabel>Image</FormLabel>
    <TextField value={inputs.image} onChange={handlechange} margin='normal' fullWidth variant='outlined' name='image'/>
    <FormControlLabel control={<Checkbox checked={checked}  onChange={()=>setchecked(!checked)} />} label='Available'/>
    <Button variant='contained' type='submit'>Update Book</Button>
    </Box>
  </form>
  )
}

export default Bookdetails