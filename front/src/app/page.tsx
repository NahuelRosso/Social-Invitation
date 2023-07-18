"use client"
import { Box, Button, TextField } from '@mui/material';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import FIESTADE15 from 'pages/fiesta15/fiesta15';
import React from 'react'
import { auth } from './api/firebase';


export default function Page() {
  const [form, setForm] = React.useState({
    email: "Mis15@eventup.com",
    password: "MiFiesta15",
  });
  const [user, setUser] = React.useState(null);


  const submit = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      const user = userCredential.user;
      // Resto de tu lógica aquí...
    } catch (error) {
      
      console.log(error);
    }
  };

 
  return (
    <main>
    <div className='container'>
      <Box bgcolor={'red'}>
      <TextField  label="Outlined" variant="outlined" />
      <TextField  label="Outlined" variant="outlined" />
      <Button color='info' onClick={submit}></Button>
      </Box>
      {/* <FIESTADE15 />  */}
      
      
    </div>
    </main>
  );
};
