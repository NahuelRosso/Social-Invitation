import { Box } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import React from 'react'
import  Carrusel  from  "react-multi-carousel" ; 
import 'react-multi-carousel/lib/styles.css';
import Image1 from '../../../../public/image1.jpg'
import Image2 from '../../../../public/image2.jpg'
import Image3 from '../../../../public/image3.jpg'
import Image4 from '../../../../public/image4.jpg'
import Image5 from '../../../../public/image5.jpg'
import Image6 from '../../../../public/image6.jpg'
import Image7 from '../../../../public/image7.jpg'
interface InterfaceImage{
  images:StaticImageData[];
}

export const CarruselMultiple = (props:InterfaceImage) => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
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
        <div style={{ position: "relative" }} ><Image src={Image1} alt={''} style={{ height: "50%", width: "100%", objectFit: "cover" }}></Image></div>
        <div style={{ position: "relative" }} ><Image src={Image2} alt={''} style={{ height: "50%", width: "100%", objectFit: "cover" }}></Image></div>
        <div style={{ position: "relative" }} ><Image src={Image3} alt={''} style={{ height: "50%", width: "100%", objectFit: "cover" }}></Image></div>
        <div style={{ position: "relative" }} ><Image src={Image4} alt={''} style={{ height: "50%", width: "100%", objectFit: "cover" }}></Image></div>
        <div style={{ position: "relative" }} ><Image src={Image6} alt={''} style={{ height: "50%", width: "100%", objectFit: "cover" }}></Image></div>
    </Carrusel>
  )
}
