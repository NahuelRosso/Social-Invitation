import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import { CardContent, TextField } from '@mui/material';

export interface actionDialog {    
    open:boolean
    handleClose:()=>{}
    handleAgree:()=>{}
    handleDisagree:()=>{}
 }

export default function AlertDialog(props: actionDialog) {
  
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"¿Querés confirmar tu asistencia?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              <CardContent sx={{p:1}}>
                <Box>
                  <TextField 
                  label="Nombre y apellido" 
                  sx={{ m: 1, width: '40ch' }} 
                  type="text" 
                  name="Nombre y apellido"/>
                </Box>
                <Box>
                  <TextField 
                  label="Teléfono" 
                  sx={{ m: 1, width: '40ch' }} 
                  type="phone" 
                  name="Phone"/>
                </Box> 
                <Box>
                  <TextField 
                  label="Email" 
                  sx={{ m: 1, width: '40ch' }} 
                  type="email" 
                  name="Email"/>
                </Box>
              </CardContent>   
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleDisagree}>
              Cancelar
          </Button>
          <Button onClick={props.handleAgree} autoFocus>
              Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

