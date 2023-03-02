import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export interface IPropsDialogLocation {    
    open:boolean
    locationAddress:string,
    handleClose:()=>{}
    handleAgree:()=>{}
    handleDisagree:()=>{}
 }

export default function DialogLocation(props: IPropsDialogLocation) {
  
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Te dejamos la ubicación del evento"}
        </DialogTitle>
        <DialogContent>
            <Grid container justifyContent={"center"}>
              <Grid container justifyContent={"center"} item xs={12} md={6}>
                <IconButton href={"https://www.google.com.ar/maps/dir/Tu+ubicación/"+props.locationAddress+"/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x95cd68ca4f27c03d:0x9ce2d9c06d92846d!2m2!1d-64.1217734!2d-32.1597139"}>
                  <LocationOnIcon fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>   
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleDisagree}>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
