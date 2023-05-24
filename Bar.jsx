import { AppBar, Button, Toolbar, Typography, colors } from '@mui/material'
import { green } from '@mui/material/colors'
import React from 'react'
import Add from './Add'
import { Link } from 'react-router-dom'
const Bar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography sx={{flexGrow:1}} variant='h2' color={"yellow"}>Baa Pillere Schoolee Povam</Typography>
                <Button variant='contained' color='success'><Link to={"/Table1"}>Student</Link></Button>
                <Button variant='contained' color='error'><Link to={"/Add"}>Add</Link></Button>
                </Toolbar>
        </AppBar>
    </div>
  )
}
export default Bar


