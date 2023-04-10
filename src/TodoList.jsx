import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {} from '@mui/material'
const Todo = () => {
  let [name, updatename] = useState('');
  let [names, updatenames] = useState([]);
  useEffect(() => {
    localStorage.setItem('name', names);
  }, [names])

  function removeall()
  {
    updatenames([])
  }
  function Add()
  {
    if (name === "") {
        alert("Please enter a todo item!");
        return;
  }
  updatenames([...names, name])
        updatename("")
}
  return (
    <>
    <div className='todo'>
        <div className='todo1'>
        <h1>TODO LIST</h1>
      <input type='text' name='name' value={name} placeholder='Enter Name'
        onChange={(e) => { updatename(e.target.value) }} />
         
      <Button variant='contained' color='success' size='small' sx={{marginLeft:2}} endIcon={<AddBoxIcon/>} onClick={Add}>ADD</Button>
      {names.map((v, i) => {
        return (<div spakey={i} > <div className='main'>{v}
        <EditIcon variant='contained' color='warning' size='small' sx={{marginLeft:20}}  endIcon={<EditIcon/>} onClick={() => {
            let d = localStorage.getItem('name');
            d = d.split(',');
            d = d.filter((t) => {
              return t !== v;
            })
            updatenames(d);
            updatename(v);
          }}>EDIT</EditIcon><DeleteIcon variant='contained' color='secondary' size='small'  endIcon={<DeleteIcon/>} onClick={() => {
          let d = localStorage.getItem('name');
          d = d.split(',');
          d = d.filter((t) => {
            return t !== v;
          })
          updatenames(d)
        }}>DELETE</DeleteIcon></div>
        
          
        </div>)
      })}
      <div className='deletall'>
     {names.length>=1 && <Button variant='contained' size='small' style={{marginTop:3}} endIcon={<DeleteForeverIcon/>}  onClick={removeall} className='btn-center'>DELETE ALL</Button>}
     </div>
     </div>
     </div>
    </>
  )
}
export default Todo