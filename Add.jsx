import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
        <br></br><br></br>
        <br></br><br></br>
        <Typography variant="h2">Student Details Form</Typography>
        <br></br><br></br><br></br>
        <TextField variant='outlined' label="Enter Student Name"/>
        <br></br><br></br>
        <TextField variant='outlined' label="Enter Grade" />
        <br></br><br></br>
        <Button variant="contained">Submit</Button>
    </div>
  )
}

export default Add