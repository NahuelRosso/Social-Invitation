import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export interface IData{
    text:string,
    buttonAction:boolean,
    dataTitle:string,
    dataDescription:string,
    width?:string,
    fontSize?:string
}

export default function BasicModal(props:IData) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(props.buttonAction);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} sx={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "20px",
                width: props.width ? props.width :"50%",
                fontSize:props.fontSize?props.fontSize:'12px',
               fontWeight:900, 
                ':hover':{
                  backgroundColor:"white",
                  color:'black',
                  transitionDuration:'1s ,0.5s'
                }
              }}>{props.text}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2" color={'black'}>
            {props.dataTitle}
          </Typography>
          <Typography id="modal-modal-description" variant="h6" component="h2" sx={{ mt: 2 }} color={'black'}>
           {props.dataDescription}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}