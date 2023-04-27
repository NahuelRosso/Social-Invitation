import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import  Carrusel  from  "react-multi-carousel" ; 
import 'react-multi-carousel/lib/styles.css';

import Carrusel1 from "../../../../public/1 .jpg";
import Carrusel2 from "../../../../public/2 .jpg";
import Carrusel3 from "../../../../public/3 .jpg";
import Carrusel4 from "../../../../public/4 .jpg";
import Carrusel5 from "../../../../public/5.jpg";
import Carrusel6 from "../../../../public/6.jpg";
import Carrusel7 from "../../../../public/Recurso 1@2x (2).png";
import Carrusel8 from "../../../../public/8 .jpg";
import Carrusel9 from "../../../../public/9 .jpg";
import Carrusel10 from "../../../../public/10 .jpg";

export const CarruselMultiple = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 5
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
  return (
      <Carrusel responsive={responsive}
      arrows={false}
      autoPlay={true}
      transitionDuration={200}
      infinite={true} >
        <div style={{ position: "relative" }}><Image src={Carrusel1} alt={''} style={{ height: "50%", width: "100%", objectFit: "cover" }}></Image></div>
        <div style={{ position: "relative" }}><Image src={Carrusel2} alt={''} style={{ height: "50%", width: "100%", objectFit: "cover" }}></Image></div>
        <div style={{ position: "relative" }}><Image src={Carrusel3} alt={''} style={{ height: "50%", width: "100%", objectFit: "cover" }}></Image></div>
        <div style={{ position: "relative" }}><Image src={Carrusel4} alt={''} style={{ height: "50%", width: "100%", objectFit: "cover" }}></Image></div>
        <div style={{ position: "relative" }}><Image src={Carrusel5} alt={''} style={{ height: "50%", width: "100%", objectFit: "cover" }}></Image></div>
        <div style={{ position: "relative" }}><Image src={Carrusel6} alt={''} style={{ height: "50%", width: "100%", objectFit: "cover" }}></Image></div>
        <div style={{ position: "relative" }}><Image src={Carrusel7} alt={''} style={{ height: "50%", width: "100%", objectFit: "cover" }}></Image></div>
        <div style={{ position: "relative" }}><Image src={Carrusel8} alt={''} style={{ height: "50%", width: "100%", objectFit: "cover" }}></Image></div>
        <div style={{ position: "relative" }}><Image src={Carrusel9} alt={''} style={{ height: "50%", width: "100%", objectFit: "cover" }}></Image></div>
        <div style={{ position: "relative" }}><Image src={Carrusel10} alt={''} style={{ height: "50%", width: "100%", objectFit: "cover" }}></Image></div>
    </Carrusel>
  )
}
