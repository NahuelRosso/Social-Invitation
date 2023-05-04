import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Portada from "../../../../../public/Recurso 2@2x.png";
import Ifisesta from "../../../../../public/Recurso 12@2x.png"; 
import Spotify from "../../../../../public/spootify.png";
import Idea from "../../../../../public/idea.png";
import FondoInsta from "../../../../../public/7.jpg";
import DressCode from "../../../../../public/dresscode.png";
import Regalo from "../../../../../public/regalo.png";
import { Instagram } from "@mui/icons-material";
import {CarruselMultiple} from "../../../components/carrusel-multiple/carruselMultiple"
import './template1.css'
import BasicModal from "@/shared/components/modal/modal";
export const Template1 = () => {
  const [open, setOpen] = React.useState(true);
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        let difference = +new Date(`06/02/${year}`) - +new Date()
      
        let timeLeft = {
            days:0,
            hours:0,
            minutes:0,
            second:0,
            llego:''
        };
      
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            second:Math.floor((difference/1000)%60),
            llego:''
          };
        }else{
            timeLeft={
                days: 0,
                hours: 0,
                minutes: 0,
                second:0,
                llego:'LLEGÓ MI GRAN DÍA, GRACIAS POR SER PARTE DE EL' 
            }
        }
      
        return timeLeft;
      }
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
      });
     

  return (
    
    <div style={{ backgroundColor: "#F4E0D3" }}>
      <Box sx={{ position: "relative" }}>
        <Image
          src={Portada}
          alt={"EventUp"}
          style={{ height: "70vh", width: "100%", objectFit: "cover" }}
          className="imagen-header"
        ></Image>
        <Box mt={'-45vh'} pb={'16vh'} className={'content-tempo'}>
        <Typography
          variant="h3"
          component="h2"
          color={"white"}
          textAlign={"center"}
          fontSize={'80px'}
          fontWeight={900}
          sx={{marginBottom:'-20px'}}
          className="header-text"
        >
          GUADALUPE
        </Typography>
        <Typography
          variant="h3"
          component="h2"
          color={"white"}
          textAlign={"center"}
          className="header-text-2"
        >
          15 años
        </Typography>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "black", textAlign: "center",p:'30px' }} className="block-2" >
        <Typography variant="h3" component="h2" fontSize={30} className="text-temporizador">
          {timeLeft.llego==""?'FALTAN': ''}
        </Typography>
        <Typography variant="h1" component="h2" fontSize={70} className="number-tempo">
            {timeLeft.llego ==''?
            timeLeft.days+':'+timeLeft.hours+':'+timeLeft.minutes+':'+timeLeft.second
            :timeLeft.llego
        }
        </Typography>
          

      </Box>
      <Box
        sx={{ color: "black", textAlign: "center", backgroundColor: "#f4e0d3", p:'50px' }}
      >
        <Typography variant="h3" component="h2"  fontFamily={"Scotch Text"} className="text-info">
          Fiesta
        </Typography>
        <Image src={Ifisesta} alt="" height={80}></Image>
        <Typography variant="body1" component="h2" className="fecha-hora" > 
          ¡Te espero el <b>Viernes 2 de junio de 21:30 a 05:00h</b>
          <br /> paraque celebremos juntos estegran momento de mi vida!
        </Typography>
        <br />
        <Typography variant="body1" component="h2" className="lugar"> 
          <b>Salón Elegantes, Av. Pte. Perón 542, Río Tercero,Córdoba.</b>
          <br />
          clickeá en el botón de abajo y encontrá las indicaciones para llegar,
          ¡nos vemos!
        </Typography>
        <br />
        <Button
          variant="contained"
          className="mapa"
          sx={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "20px",
            width: "30%",
            fontWeight:900,
            ':hover':{
              backgroundColor:"white",
              color:'black',
              transitionDuration:'1s ,0.5s'
            }
          }}
        >
          ¿COMÓ LLEGAR?
        </Button>
      </Box>
  
        
        <CarruselMultiple></CarruselMultiple>
        
      <Box sx={{ backgroundColor: "#F4E0D3",p:'50px',pt:'100',pb:'100' }} className="content-datos">
        <Grid container>
          <Grid
            xs={6}
            item
            sx={{
              textAlign: "center",
              color: "black",
              borderRight: "solid black 2px",
            }}  
            className="content-asistencia-cena"
          >
            <Typography variant="h3" component="h2"  fontSize={40} fontFamily={"Scotch Text"} fontWeight={600} className="asistencia astensiaAcena">
              Asistencia a la cena
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "20px",
                width: "50%",
                margin:1,
                ':hover':{
                  backgroundColor:"white",
                  color:'black',
                  transitionDuration:'1s ,0.5s'
                }
              }}
              className="button-asistencia"
            >
              CONFIRMAR ASISTENCIA
            </Button>
            <Typography variant="body1" component="h2" >
              Cuanta alegría me dará verte ahí.
            </Typography>
          </Grid>
          <Grid
            xs={6}
            item
            sx={{
              textAlign: "center",
              color: "black",
              borderLeft: "solid black 2px",
            }}
            className="content-asistencia-brindis"
          >
            <Typography variant="h3" component="h2" fontSize={40} fontFamily={"Scotch Text"} fontWeight={600} className="asistencia">
              Asistencia después de cena
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "20px",
                width: "50%",
                margin:1,
                ':hover':{
                  backgroundColor:"white",
                  color:'black',
                  transitionDuration:'1s ,0.5s'
                }
              }}
              className="button-asistencia"
            >
              CONFIRMAR ASISTENCIA{" "}
            </Button>
            <Typography variant="body1" component="h2" className="text">
              Cuanta alegría me dará verte ahí.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container sx={{ textAlign: "center", backgroundColor: "black",pt:'50px',pb:'50px' }}>
          <Grid item xs={4}>
            <Box>
              <Image
                src={Idea}
                alt={"EventUp"}
                style={{ width: "25%", height: "25%" }}
                className="img-regalo"
              ></Image>
              <Typography variant="h3" component="h2" fontFamily={'Scotch Text'}pb={2} fontSize={26} className="datos">
                Datos útiles
              </Typography>
              <BasicModal width="80%" text={'¿DÓNDE ME PUEDO ALOJAR?'} buttonAction={open} dataTitle={"HOTELES"} dataDescription={"- Mayoral y Apart 3 hotel"} fontSize={'10px'}></BasicModal>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Image
                src={DressCode}
                alt={"EventUp"}
                style={{ width: "25%", height: "25%" }}
                className="img-regalo"
              ></Image>
              <Typography variant="h3" component="h2" fontFamily={'Scotch Text'}pb={2} fontSize={26} className="datos">
                Dress code
              </Typography>
              <Button variant="contained"  sx={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "20px",
                width: "80%",
                fontSize:'12px',
                fontWeight:900,
                ':hover':{
                  backgroundColor:'#F4E0D3'
                }
              }}
              className="data-button">
                ELEGANTE Y COLORIDO <br />
                ¡EL COLOR NEGRO ES DE LA CUMPLAÑERA!
              </Button>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Image
                src={Spotify}
                alt={"EventUp"}
                style={{ width: "25%", height: "25%" }}
                className="img-regalo"
              ></Image>
              <Typography variant="h3" component="h2" fontFamily={'Scotch Text'} pb={2} fontSize={26} className="datos">
                Spotify
              </Typography>
              <Button variant="contained"  sx={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "20px",
                width: "80%",
                fontSize:'12px',
                fontWeight:900,
                ':hover':{
                  backgroundColor:'#F4E0D3'
                }
              }} 
              className="data-button"
              href="https://open.spotify.com/playlist/5uK9wRDEPX7vFZbNaFQ1e6?si=hmxMASXQTrylCUmNwDmvTw&utm_source=whatsapp&nd=1">
                ¿QUÉ CANCIONES NO PUEDEN FALTAR EN LA FIESTA?{" "}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container>
          <Grid
            item
            xs={12}
            style={{ textAlign: "center", position: "relative" }}
            className="instagram"
          >
            {" "}
            <Image
              src={FondoInsta}
              alt={"EventUp"}
              style={{ height: "70vh", width: "100%", objectFit: "cover" }}
            />
            <Box marginTop={"-60vh"} pb={"0vh"} className={"insta-content"} >
              <Instagram sx={{fontSize:'100px'}} ></Instagram>
              <Typography variant="h3" component="h2" className="text" >
                @GUAAADA_H
              </Typography>
              <Typography variant="h3" component="h2" fontSize={18} pb={2} className="text">
                ¡Preparate para esta gran fiesta!<br/>
                Seguime en mi cuenta de instagram y etiquetame en tus fotos y videos.
              </Typography>
              <Button variant="contained"  sx={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "20px",
                width: "40%",
                ':hover':{
                  backgroundColor:"white",
                  color:'black',
                  transitionDuration:'1s ,0.5s'
                }
              }}  href="https://www.instagram.com/guaaada_h/">VER INSTAGRAM</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ backgroundColor: "black", textAlign: "center",p:'50px' }} className="regalo">
        <Image
          src={Regalo}
          alt="EventUp"
          style={{ width: "10%", height: "10%" }}
          className="img-regalo"
        ></Image>
        <Typography variant="h3" component="h2" fontFamily={'Scotch Text'} fontSize={40} className="text-regalo">
          Si deseás regalarme algo podés colaborar con mis sueños y anhelos
        </Typography>
        <Typography variant="body1" component="h2" fontSize={20} m={1} className="text-regalo"> 
          Te comparto mi alias para que transfieras
        </Typography>
              <BasicModal  width="50%" text={"Transferir"} buttonAction={open} dataDescription="ALIAS:herrera.guada.885" dataTitle="MIS DATOS"></BasicModal>
      </Box>
      <Box sx={{ color: "black", textAlign: "center", pt:7 ,pb:7}} className="footer" >
        <Typography variant="body1" component="h2" className="text-regalo">
          Ante cualquier consulta
        </Typography>
        <Typography variant="h4" component="h2" margin={1} fontWeight={900} className="text-regalo">
          +54 9 3571 457 290 <br/>
          +54 9 3571 639 800
        </Typography>
        <Typography variant="h6" component="h2" fontWeight={600} className="text-regalo-footer">
          guadalupeatanasoff@gmail.com <br/>
          atanasoffyamile@gmail.com
        </Typography>
      </Box>
      <Box>

      </Box>
    </div>
  );
};
