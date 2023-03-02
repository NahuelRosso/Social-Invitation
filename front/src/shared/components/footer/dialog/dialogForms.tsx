import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, IconButton } from '@mui/material';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';

export interface IPropsAlertGoogleForm {    
    open:boolean
    handleClose:()=>{}
    handleAgree:()=>{}
    handleDisagree:()=>{}
 }

export default function AlertGoogleForm(props: IPropsAlertGoogleForm) {
  
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Te dejamos un formulario para que completes"}
        </DialogTitle>
        <Grid container justifyContent={"center"}>
          <Grid container justifyContent={"center"} item xs={12} md={6}>
            <IconButton href={"https://forms.gle/waBTaQv3rodR7fMU8"}>
                <DynamicFormIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
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
