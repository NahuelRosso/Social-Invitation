import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, IconButton } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';

export interface IPropsDialogMercadoPago {    
    open:boolean
    handleClose:()=>{}
    handleAgree:()=>{}
    handleDisagree:()=>{}
 }

export default function DialogMercadoPago(props: IPropsDialogMercadoPago) {
  
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"¿Querés pagar tu invitación? Te dejamos el link"}
        </DialogTitle>
        <Grid container justifyContent={"center"}>
          <Grid container justifyContent={"center"} item xs={12} md={6}>
            <IconButton href="https://mpago.la/2SQP6Up">
                <PaymentIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
        <DialogActions>
          <Button onClick={props.handleDisagree}>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

