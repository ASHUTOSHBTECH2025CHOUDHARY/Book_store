import React, { useState } from 'react'
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {NavLink} from 'react-router-dom'

const Header = () => {

    const [value,setvalue]=useState();

  return (
    <div>
        <AppBar sx={{backgroundColor:'black'}}>
            
            <Toolbar>
            <NavLink to={'/books'}>
                <Typography>
                    <MenuBookIcon/>
                 </Typography>
            </NavLink>
                <Tabs sx={{ml:'auto'}} textColor='inherit' indicatorColor='secondary' value={value} onChange={(e,val)=>setvalue(val)} >
                    <Tab LinkComponent={NavLink} to='/add' label='Add Books' />
                    <Tab LinkComponent={NavLink} to='/books' label='Books' />
                    <Tab LinkComponent={NavLink} to='/About' label='About us' />
                </Tabs>
            </Toolbar>
            
        </AppBar>
    </div>
  )
}

export default Header;