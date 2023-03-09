'use client'
import { Slider } from '@/shared/components/slider/slider';
import { Box, Button, Grid, TextField,Typography } from '@mui/material'
import Image,{ StaticImageData } from 'next/image';
import React from 'react'
import Slider1 from '../../public/SLIDERS WEB 02-02 (1).png'
import Slider2 from '../../public/SLIDERS WEB 02-03 (1).png'
import Slider3 from '../../public/SLIDERS WEB 02-01 (1).png'
import Slider1Cel from '../../public/SLIDERS WEB_Mesa de trabajo 1.png'
import Slider2Cel from '../../public/SLIDERS WEB-02.png'
import Slider3Cel from '../../public/SLIDERS WEB-03.png'
import Phone from '../../public/distefano web 02 (1).png'
import Desktop from '../../public/distefano web (1).png'
import RoomIcon from '@mui/icons-material/Room';
import { IData, SectionEventData } from '@/shared/components/sectionEventData/sectionEventData';
import style from './amececis.module.css'
import footerImage from '../../public/footer wweb (1).png'

const datos:IData = {
  ubicacion:"Alberdi 333",
  fecha:'MIE 15/03 12:00h',
  tarjetas: [{
    image:Slider1,
    title:'UBICACIÓN',
    icono: <RoomIcon/>,
    description:'Salón de Fiestas y Eventos 1929, (Uruguay 478, Río Tercero, Córdoba)',
    class:'card1',
    button:true,
    urlButton:'https://www.google.com.ar/maps/place/Sal%C3%B3n+de+Fiestas+y+Eventos+1929/@-32.1768803,-64.1078752,17z/data=!3m1!4b1!4m6!3m5!1s0x95cd6f215d353921:0x87899bef8cf94b29!8m2!3d-32.1768849!4d-64.1056865!16s%2Fg%2F11gbwlfzhk',
    bgColor:'#d80032',
    bgcButton:'#ffffff',
    textButton:'Ver en el mapa'
  },{
    image:Slider2,
    title:'HORARIO',
    icono: <RoomIcon/>,
    description:'MIE15/03 12h',
    class:'card2',
    button:false,
    bgColor:'#d80032',
    bgcButton:'#444242',
    textButton:''

  }]
}



export const Amcecis = () => {
  
  return (
      <Box className={style.fondo}>
        <Box className={style.slider1}>
          <Slider images={[Slider1,Slider2,Slider3 ]} autoPlay={true} showButtons={false} />
        </Box>
        <Box className={style.slider2}>
          <Slider images={[Slider1Cel,Slider2Cel,Slider3Cel ]} autoPlay={true} showButtons={false} />
        </Box>


        <Image className={style.phone} src={Desktop} alt={''} style={{
        maxWidth: "100%",
        width: "100%",
        objectFit: "cover",
        height: "100%",
        transition: "1s",
        position: "relative",
        display: "inline-block",
        margin: "0%",
        padding: "0%",
        
    }}></Image>
    
    <Image src={Phone} alt={''} className={style.desktop} style={{
        maxWidth: "100%",
        width: "100%",
        objectFit: "cover",
        height: "100%",
        transition: "1s",
        position: "relative",
        display: "inline-block",
        margin: "0%",
        padding: "0%",
    }}></Image> 

        <SectionEventData  data={datos}/>

    <Box pb={15} pt={20} > 
    <Typography color={'#d80032'} textAlign={'center'} variant="h4" component="h2" fontWeight={'bolder'}> Próximos almuerzos</Typography>
      <Image src={footerImage} className={style.footer} alt={''}style={{
        width: "100%",
        height: "100%",
        
    }} ></Image>
    </Box>


          
    </Box>
  
  )
}
