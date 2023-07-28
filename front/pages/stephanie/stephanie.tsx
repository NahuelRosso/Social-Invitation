import { Box, Button, Card, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import SemiCirculo from "../../public/semiCirculo.png";
import fondoCinta from "../../public/goldenFlow.png";
import fondo from "../../public/fondoDorado.png";
import "./stephanie.css";
export const Stephanie = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      {/* <Grid container spacing={3}>
            <Grid item xs={3}> 

            </Grid>
            <Grid item xs={6}> 
              <ReactPlayer 
              url={''}
              playing={true}
              loop={true}
              controls={true}
              />
            </Grid>
            <Grid item xs={3}>

            </Grid>
        </Grid> */}
      <Box 
      className="fondoCinta contentHeader"
        sx={{ flexGrow: 1, textAlign: "center", height: 200, m: "auto",paddingTop:'10vh', zIndex:200}}
      >
        <Typography variant="h1" component="h1" gutterBottom className="fontPrimary title" sx={{color: "white"}} >
          GOLD LINE
        </Typography>
        <Typography variant="h4" component="h4" gutterBottom className="fontSecundary" sx={{color: "white"}}>
          SkinCare presentation
        </Typography>
      </Box>
      <Box width={'100%'} height={'100%'} marginTop={'-62vh'} className="contentImg"> 
      <Image src={fondoCinta} alt="Picture of the author" style={{width:'130%',height:'50%',marginLeft:'-15%'}}/>
      </Box>
      <Grid
        container
        spacing={0}
        textAlign={"center"}
        alignItems={"center"}
        justifyContent={"center"}
        zIndex={20}
        className="containerGrid"
      >
        <Grid
          item
          xs={3}
          textAlign={"center"}
          alignItems={"center"}
          justifyContent={"center"}
          zIndex={20}
          className="grid"
        >
            <Image
              src={SemiCirculo}
              alt="Picture of the author"
              width={200}
            height={130}
              style={{
                zIndex: -100,
                textAlign:'center',
                margin:'auto'
              }}
            />
            <Card
              sx={{
                maxWidth: 250,
                m: "auto",
                bgcolor: "black",
                border: 0.5,
                borderColor: "white",
                borderRadius: "10px",
                height: 200,
                zIndex: 30,
                marginTop: "-1%",
              padding: '2%'
              }}
              className='card'
            >
              <Box textAlign={'center'} >
              <Typography
                variant="h4"
                component="div"
                gutterBottom
                sx={{ color: "white",m:'auto' }}
                className="fontCard2"
                
              >
                Dress Code
              </Typography>
              <Typography variant="h4" sx={{ color: "white",m:'auto',fontSize:'1.5em',marginTop:'1em' }} className="fontCard">
                ¡GALA NIGHT!
              </Typography>
              <Typography variant="body2" sx={{ color: "white",m:'auto',marginTop:'1.5em' }}>
                Black, White & Gold
              </Typography>
              </Box>
            </Card>
        </Grid>
        <Grid
          item
          xs={3}
          textAlign={"center"}
          alignItems={"center"}
          justifyContent={"center"}
          zIndex={20}
          className="grid"
        >
          <Image
            src={SemiCirculo}
            alt="Picture of the author"
            width={200}
            height={130}
            style={{
              zIndex: -100,
            }}
          />
          <Card
            sx={{
              maxWidth: 250,
              m: "auto",
              bgcolor: "black",
              border: 0.5,
              borderColor: "white",
              borderRadius: "10px",
              height: 200,
              marginTop: "-1%",
              padding: '2%'
            }}
            className='card'
          >
            <Typography
              variant="h4"
              component="div"
              gutterBottom
              sx={{ color: "white" }}
              className="fontCard2"
            >
              Location
            </Typography>
            <Typography variant="body2" sx={{ color: "white",paddingLeft:'5%',paddingRight:'5%' }} className="fontCard">
              800 Silks Run #1350, Hallandale Beach, FL 3300 9 in front of
              bowling
            </Typography>
            <Button
              variant="contained"
              href=""
              sx={{fontWeight:'900', bgcolor: "white", color: "black",textTransform:'none',width:'90%',position:'relative',top:'15%',fontSize:'1.5em',':hover':{backgroundColor:'white',color:'black',width:'95%',height:'30%'} }}
              className="fontCard2"
            >
              see map
            </Button>
          </Card>
        </Grid>
        <Grid
          item
          xs={3}
          textAlign={"center"}
          alignItems={"center"}
          justifyContent={"center"}
          zIndex={20}
          className="grid"
        >
          <Image
            src={SemiCirculo}
            alt="Picture of the author"
            width={200}
            height={130}
            style={{}}
          />
          <Card
            sx={{
              maxWidth: 250,
              m: "auto",
              bgcolor: "black",
              border: 0.5,
              borderColor: "white",
              borderRadius: "10px",
              height: 200,
              marginTop: "-1%",
              padding: '2%'
            }}
            className='card'
          >
            <Typography
              variant="h4"
              component="div"
              gutterBottom
              sx={{ color: "white" }}
              className="fontCard2"
            >
              Schedule
            </Typography>
            <Typography variant="body1" sx={{ color: "white" }} className="fontCard">
              Saturday, Sep 16th at 7:30p.m.
            </Typography>
          </Card>
        </Grid>

        <Paper
          className="fondoCard"
          sx={{
            p: 10,
            margin: "20px",
            width: "80%",
            marginTop: "-20vh",
            zIndex: 2,
          }}
        />
      </Grid>
    </div>
  );
};
