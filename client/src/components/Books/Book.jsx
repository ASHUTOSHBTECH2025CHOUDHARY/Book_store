import React from 'react'
import './Book.css'
import {Button} from "@mui/material"
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'


const Book = (props) => {
  const {_id,name,author,description,image,price,available}=props.book
  console.log(_id)
  const history=useNavigate();
  const delethandler=async()=>{
    await axios.delete(`http://localhost:3001/bookstore/deletebook/${_id}`).
    then((res)=>console.log(res.data)).
    then(()=>history('/add'))
  }
  const delethandler2=()=>{
    delethandler().then(()=>history('/books'))
  }
  return (
    <div id='child'>
      <figure>
        <img src={image} alt="" />
        <figcaption><h3>{name}</h3></figcaption>
      </figure>   
      <div className="other"><article>By: {author}</article></div>
      <div className="other">Description: {description}</div>
      <div className="other"><h2>Price: {price}</h2></div>
      <div className="other">Available: {available?"Available":"Not available"}</div>
      <Button  LinkComponent={Link} to={`/books/${_id}`} id='button'>Update</Button>
      <Button onClick={delethandler2} id='button' >delete</Button>
    </div>
  )
}

export default Book