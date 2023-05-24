import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
const Table1 = () => {
     var [names,setname]= useState([{Name:"Karthik",Grade:"P"},{Name:"Kevin",Grade:"S"},{Name:"Judin",Grade:"A+"}])
  return (
    <div>
        <TableContainer style={{paddingLeft:200}}>
            <Table>
                <TableHead>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <TableRow>
                        <TableCell>Name</TableCell> 
                        <TableCell>Grade</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {names.map((value,index)=> {
                        return(
                        <TableRow>
                            <TableCell>{value.Name}</TableCell>
                            <TableCell>{value.Grade}</TableCell>
                        </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}
export default Table1