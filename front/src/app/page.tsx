'use client'

import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { useState } from "react";
import IFooter, { BottomItem } from "@/shared/components/footer/footer";
import AlertCalendar from "@/shared/components/dialog/dialogCalendar";
import AlertDialog from "@/shared/components/dialog/dialog";
import AlertMercadoPago from "@/shared/components/dialog/dialogMercadoPago";
import AlertLocation from "@/shared/components/dialog/dialogLocation";

export default function Home() {

  const [openHorario,setOpenHorario] = useState(false)
  const [openAsistencia,setOpenAsistencia] = useState(false)
  const [openPagar,setOpenPagar] = useState(false)
  const [openUbicacion,setOpenUbicacion] = useState(false)

  const items:BottomItem[] = [{
    icon:<AccessTimeFilledIcon />,
    label:"Horario del evento",
    action:()=>{ 
      setOpenHorario(true)
      return true;
    }
},{
    icon:<ThumbUpAltIcon />,
    label:"Confirmar asistencia",
    action:()=>{
      setOpenAsistencia(true)
      return true;
    }
},{
    icon:<CreditCardIcon />,
    label:"Pagar",
    action:()=>{
      setOpenPagar(true)
      return true;
    }
},{
    icon:<FmdGoodIcon />,
    label:"Ubicación del evento",
    action:()=>{
      setOpenUbicacion(true)
      return true;
    }
  }]

  const tilteSlider = ['INVITACIONES WEB']
  const LogoSocial ='https://socialup.com.ar/wp-content/uploads/2021/11/logo-blanco-300x159.png'
  const imagesSlider = ['https://harboursideplace.com/wp-content/uploads/2016/06/Zootopia-1000px-x-500px.jpg','https://harboursideplace.com/wp-content/uploads/2016/12/Winter-Blues-Sip-Shop-at-Glitzy-Girl-1000px-x-500px.jpg','https://harboursideplace.com/wp-content/uploads/2016/07/Classic-Car-Show-1000px-x-500px.jpg']
  
  return (
    <main>
      <div>
        <IFooter bottomItems={items}></IFooter>
        <AlertCalendar  open={openHorario} handleClose={()=> {
         setOpenHorario(false)
         return true;
        } } handleAgree={()=>{
          setOpenHorario(false)
          return true;
        } } handleDisagree={()=>{
          setOpenHorario(false)
          return true;
        } }/>
        <AlertDialog  open={openAsistencia} handleClose={()=> {
         setOpenAsistencia(false)
         return true;
        } } handleAgree={()=>{
          setOpenAsistencia(false)
          return true;
        } } handleDisagree={()=>{
          setOpenAsistencia(false)
          return true;
        } }/>
        <AlertMercadoPago  open={openPagar} handleClose={()=> {
         setOpenPagar(false)
         return true;
        } } handleAgree={()=>{
          setOpenPagar(false)
          return true;
        } } handleDisagree={()=>{
          setOpenPagar(false)
          return true;
        } }/>
        <AlertLocation  open={openUbicacion} handleClose={()=> {
         setOpenUbicacion(false)
         return true;
        } } handleAgree={()=>{
          setOpenUbicacion(false)
          return true;
        } } handleDisagree={()=>{
          setOpenUbicacion(false)
          return true;
        } }
        locationAddress="Rio Tercero"
        />
      </div>
    </main>
  );
}
