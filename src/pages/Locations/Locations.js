import React from 'react'
import {useFormik} from 'formik'
import { Button, Input } from '@mui/material'


const Locations = () => {
  return (
    <div>
      <Input placeholder='search' name='search'/>
      <Button type='submit' onClick={()=>{}}>Search</Button>
    </div>
  )
}

export default Locations