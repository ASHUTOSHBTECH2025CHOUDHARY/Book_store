import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Book from './Book';
import './Books.css'
// const  =;

const fetchHandler=async()=>{
    return await axios.get(`${window.location.origin}/bookstore/getallbooks`).then((res)=>res.data)
}

const Books = () => {

  const [books,setbooks]=useState();

  useEffect(() => {
    fetchHandler().then((data)=>setbooks(data.Books));
  }, [])
  console.log(books)
  return (
    <div style={{ marginTop:'4.5%'}}>
      <div id='parent' >
        {books &&
          books.map((book,i)=>(
            <div key={i}>
              <Book book={book}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Books