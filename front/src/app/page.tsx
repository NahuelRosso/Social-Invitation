'use client'
import ImageHeader from '../../public/ImageHeader.jpeg'
import { Template1 } from '@/shared/templates/template-fiesta-15/template1/template1';
import Image1 from '../../public/image1.jpg'
import Image2 from '../../public/image2.jpg'
import Image3 from '../../public/image3.jpg'
import Image4 from '../../public/image4.jpg'
import Image5 from '../../public/image5.jpg'
import Image6 from '../../public/image6.jpg'
import Image7 from '../../public/image7.jpg'
import ImageInstagram from '../../public/fondo-instagram.jpg'
import { MuiColorInput } from 'mui-color-input'
import { Dialog, DialogTitle, DialogContent, DialogContentText, MenuItem, Box, FormControl, InputLabel, Select, SelectChangeEvent, Fab } from '@mui/material';
import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Page() {   
  const [openModal, setOpenModal] = React.useState(true); 
  const [colorPrimary, setColorPrimary] = React.useState('rgb(255,255,255)')
  const [colorSecundary, setColorSecundary] = React.useState('rgb(0,0,0')
  const [tipography, setTipography] = React.useState('')
   const CARRUSEL=[Image1,Image2,Image3,Image4,Image5,Image6,Image7]    
   
   const handleChangeColorPrimary = (colorPrimary:string) => {
console.log(colorPrimary)
    setColorPrimary(colorPrimary)
  }

   const handleChangeColorSecundary = (colorSecundary:string) => {
    setColorSecundary(colorSecundary)
  }

  const handleChangeTipography=(event:SelectChangeEvent)=>{
    setTipography(event.target.value as string)
  } 

   const handleCloseModal =()=>{
    setOpenModal(false)
  }

  return (
    <main>
      <div className='container'>
      <Dialog
        open={openModal}
        keepMounted
        onClose={handleCloseModal}
        aria-describedby="alert-dialog-slide-description"
        style={{zIndex:'2'}}
      >
        <DialogTitle  bgcolor={'black'} color={'white'} textAlign={'center'} className='title-modal'>{"Selecciona color y tipografia para ver un adelanto de como queda"}</DialogTitle>
        <DialogContent style={{backgroundColor:'#f4e0d3'}}>
        <MuiColorInput value={colorPrimary} onChange={handleChangeColorPrimary} />
        <MuiColorInput value={colorSecundary} onChange={handleChangeColorSecundary} />
        <Box>
        <FormControl sx={{ m: 1, minWidth: "25ch" }}>
        <InputLabel id="demo-simple-select-autowidth-label">Tipografía</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={tipography}
          onChange={handleChangeTipography}
        >
          <MenuItem value="DM Serif Display regular">DM Serif Display
</MenuItem>
          <MenuItem value='Bree Serif'>Bree Serif</MenuItem>
          <MenuItem value="Playfair">Playfair</MenuItem>
          <MenuItem value="Geologica">Geologica
</MenuItem>
          <MenuItem value="Open Sans">Open Sans</MenuItem> 
          <MenuItem value="Raleway">Raleway</MenuItem>
        </Select>
      </FormControl>
        </Box>
          <DialogContentText  id="alert-dialog-slide-description" textAlign={'center'}>
           Esta sección  
          </DialogContentText>
        </DialogContent>
      </Dialog>
        <Template1 colorPrimary={colorPrimary} colorSecundary={colorSecundary} tipography={tipography} dateBirth={'12/30'} music={'audio/music-fondo.mp3'} imageHeader={ImageHeader} nameBirthdayGirl={'TU NOMBRE'} dayAndHour={'Fecha, día y hora de tus 15'} place={'LUGAR DEL EVENTO'} locationOnMap={''} carruselImages={[]} beforeDinnerButton={''} afterDinnerButton={''} hotels={'Alojamiento cercano'} dressCode={'Dress Code '} shopify={'lista de shopify'} imageInstagram={ImageInstagram} arrobaInstagram={'@TUINSTAGRAM'} urlInstagram={'instagram'} alias={'tualias.para.transferir'} phone={'+123-456-789-123'} email={'tuemail@email.com'}></Template1>
        <Box sx={{ '& > :not(style)': { m: 1 } ,  position: 'fixed',
  bottom: 0,
  right: 0,
  zIndex:3
}} >
            <Fab color="primary" aria-label="add" onClick={()=>setOpenModal(!openModal)} >
              <SettingsIcon />
            </Fab>
        </Box>
      </div>
    </main>
  );
}
