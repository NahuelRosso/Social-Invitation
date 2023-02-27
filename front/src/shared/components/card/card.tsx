"use client"
useState
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Slide } from "@mui/material";
import React, { useState } from "react";
import style from "src/shared/components/card/card.module.css"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { TransitionProps } from "@mui/material/transitions";
import { blue } from "@mui/material/colors";

export interface Props {
  guestName: string;
  date: string;
  time: number;
  hostName: string;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Invitation(props: Props) {
  const [openBar, setOpenBar] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);
  const [openPhone, setOpenPhone] = useState(false);

  const handleClickOpenBar = () => {
    setOpenBar(true);
  };

  const handleCloseBar = () => {
    setOpenBar(false);
  };

  const handleClickOpenLocation = () => {
    setOpenLocation(true);
  };

  const handleCloseLocation = () => {
    setOpenLocation(false);
  };

  const handleClickOpenPhone = () => {
    setOpenPhone(true);
  };

  const handleClosePhone = () => {
    setOpenPhone(false);
  };

  return (
    <div className={style.body}>
      <h1 className={style.titule}>CATA DE VINOS MENDOCINOS</h1>
      <p className={style.pr1}>¡Hola {props.guestName}!</p>
      <p className={style.pr2}>¡Te invitamos a nuestra cata de vinos!</p>
      <p className={style.pr3}>¡En los iconos tienes toda la información!</p>
      <p className={style.pr4}>¡Esperamos verte allí!</p>
      <Grid container spacing={2}>
        <Grid item xs={1} md={1} className={style.bar}>
          <Button variant="outlined" onClick={handleClickOpenBar} sx={{ borderColor: 'transparent' }}>
            <LocalBarIcon fontSize="large" sx={{color:"white"}}/>
          </Button>
          <Dialog
            open={openBar}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleCloseBar}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"VINOS"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
             -VINO MALBEC
             </DialogContentText>
             <DialogContentText id="alert-dialog-slide-description">
             -VINO CABERNET
             </DialogContentText>
             <DialogContentText id="alert-dialog-slide-description">
             -VINO BLANCO
             </DialogContentText>
             <DialogContentText id="alert-dialog-slide-description">
             -VINO SOUVIGNON
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseBar}>ENTENDIDO</Button>
            </DialogActions>
          </Dialog>
        </Grid>
        <Grid item xs={1} md={1} className={style.location}><Button variant="outlined" onClick={handleClickOpenLocation} sx={{ borderColor: 'transparent' }}>
          <LocationOnIcon fontSize="large" sx={{color: "white"}} />  </Button>
          <Dialog
            open={openLocation}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleCloseLocation}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"UBICACION"}</DialogTitle>
<DialogContent>
<DialogContentText id="alert-dialog-slide-description">
La ubicacion del lugar es en ...
</DialogContentText>
</DialogContent>
<DialogActions>
<Button onClick={handleCloseLocation}>ENTENDIDO</Button>
</DialogActions>
</Dialog>
</Grid>
<Grid item xs={1} md={1} className={style.phone}><Button variant="outlined" onClick={handleClickOpenPhone} sx={{ borderColor: 'transparent' }}>
<LocalPhoneIcon fontSize="large"sx={{color:"white"}}/></Button>
<Dialog
         open={openPhone}
         TransitionComponent={Transition}
         keepMounted
         onClose={handleClosePhone}
         aria-describedby="alert-dialog-slide-description"
       >
<DialogTitle>{"RESERVA"}</DialogTitle>
<DialogContent>
<DialogContentText id="alert-dialog-slide-description">
El numero para reservar es: 3571-639438
</DialogContentText>
<DialogContentText id="alert-dialog-slide-description">
Tienes tiempo hasta el 13/03/2023
</DialogContentText>
</DialogContent>
<DialogActions>
<Button onClick={handleClosePhone}>ENTENDIDO</Button>
</DialogActions>
</Dialog>
</Grid>
</Grid>
<p className={style.pr5}>{props.hostName}</p>
</div>
);
}

export default Invitation;