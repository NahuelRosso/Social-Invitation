import ImageHeader from "../../public/header.jpg";
import { Template1 } from "@/shared/templates/template-fiesta-15/template1/template1";
import ImageInstagram from "../../public/instagram.jpg";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  MenuItem,
  Box, 
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  Fab,
  colors,
  Card,
  Typography,
  DialogActions,
  Button,
} from "@mui/material";
import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Color,
  TemplateColor1,
  TemplateColor2,
  TemplateColor3,
  TemplateColor4,
  TemplateColor5,
  TemplateColor6,
  TemplateColor7,
  TemplateColor8,
} from "../../src/shared/models/colorTemplate15";
import { Template2 } from "@/shared/templates/template-fiesta-15/template2/template2";
import { Template3 } from "@/shared/templates/template-fiesta-15/template3/template3";
import {
  doc,
  collection,
  getDocs,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/app/api/firebase";

export default function FIESTADE15() {
  const [openModal, setOpenModal] = React.useState(true);
  const [colorPrimary, setColorPrimary] = React.useState("rgb(255,255,255)");
  const [colorSecundary, setColorSecundary] = React.useState("rgb(0,0,0");
  const [tipography, setTipography] = React.useState("");
  const [templateColor, setTemplateColor] = React.useState("");
  const [template, setTemplate] = React.useState("");


  const handleChangeTipography = (event: SelectChangeEvent) => {
    setTipography(event.target.value as string);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

const handelChangeTemplate=(event: SelectChangeEvent)=>{
  setTemplate(event.target.value as string);
}

  const handleChangeColor = (event: SelectChangeEvent) => {
    setTemplateColor(event.target.value as string);

    if (event.target.value == Color.Template1) {
      setColorPrimary(TemplateColor1.PrimaryColor);
      setColorSecundary(TemplateColor1.SecondaryColor);
    } else if (event.target.value == Color.Template2) {
      setColorPrimary(TemplateColor2.PrimaryColor);
      setColorSecundary(TemplateColor2.SecondaryColor);
    } else if (event.target.value == Color.Template3) {
      setColorPrimary(TemplateColor3.PrimaryColor);
      setColorSecundary(TemplateColor3.SecondaryColor);
    } else if (event.target.value == Color.Template4) {
      setColorPrimary(TemplateColor4.PrimaryColor);
      setColorSecundary(TemplateColor4.SecondaryColor);
    } else if (event.target.value == Color.Template5) {
      setColorPrimary(TemplateColor5.PrimaryColor);
      setColorSecundary(TemplateColor5.SecondaryColor);
    } else if (event.target.value == Color.Template6) {
      setColorPrimary(TemplateColor6.PrimaryColor);
      setColorSecundary(TemplateColor6.SecondaryColor);
    } else if (event.target.value == Color.Template7) {    
      setColorPrimary(TemplateColor7.PrimaryColor);
      setColorSecundary(TemplateColor7.SecondaryColor);
    } else {
      setColorPrimary(TemplateColor8.PrimaryColor);
      setColorSecundary(TemplateColor8.SecondaryColor);
    }
  };

 const handleSave=()=>{
    setDoc(doc(db, "template", "template"), { 
      templateColor:templateColor,
      tipography:tipography,
      template:template
    })
 }


  return (
      <div className="container">
        <Dialog
          open={openModal}
          keepMounted
          onClose={handleCloseModal}
          aria-describedby="alert-dialog-slide-description"
          style={{ zIndex: "2" }}
        >
          <DialogTitle
            bgcolor={"black"}
            color={"white"}
            textAlign={"center"}
            className="title-modal"
          >
            {"Selecciona color y tipografia para ver un adelanto de como queda"}
          </DialogTitle>
          <DialogContent style={{ backgroundColor: "#f4e0d3" ,alignItems:"center",justifyContent:'center'}}>
            <Box sx={{alignItems:'center'}}>
              <FormControl sx={{ m: 1, minWidth: "40%" }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  COLOR TARJETA
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  onChange={handleChangeColor}
                  value={templateColor}
                >
                  <MenuItem value={Color.Template1}>Template 1</MenuItem>
                  <MenuItem value={Color.Template2}>Template 2</MenuItem>
                  <MenuItem value={Color.Template3}>Template 3</MenuItem>
                  <MenuItem value={Color.Template4}>Template 4</MenuItem>
                  <MenuItem value={Color.Template5}>Template 5</MenuItem>
                  <MenuItem value={Color.Template6}>Template 6</MenuItem>
                  <MenuItem value={Color.Template7}>Template 7</MenuItem>
                  <MenuItem value={Color.Template8}>Template 8</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: "40%" }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Tipografía
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={tipography}
                  onChange={handleChangeTipography}
                >
                  <MenuItem value="DM Serif Display regular">
                    Tipogrfía 1
                  </MenuItem>
                  <MenuItem value="Bree Serif">Tipogrfía 2</MenuItem>
                  <MenuItem value="Playfair">Tipogrfía 3</MenuItem>
                  <MenuItem value="Geologica">Tipogrfía 4</MenuItem>
                  <MenuItem value="Open Sans">Tipogrfía 5</MenuItem>
                  <MenuItem value="Raleway">Tipogrfía 6</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: "40%" }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  PLANTILLA A ELEGIR
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  onChange={handelChangeTemplate}
                  value={template}
                >
                  <MenuItem value={"1"}>Template 1</MenuItem>
                  <MenuItem value={"2"}>Template 2</MenuItem>
                  <MenuItem value={"3"}>Template 3</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <DialogActions ><Button onClick={handleSave} >ACEPTAR</Button></DialogActions>
            <DialogContentText
              id="alert-dialog-slide-description"
              textAlign={"center"}
            >
              Esta sección
            </DialogContentText>
            
          </DialogContent>
        </Dialog>
  


  
{template == "1"?<Template1 colorPrimary={""} colorSecundary={""} tipography={""} dateBirth={""} music={""} imageHeader={ImageHeader} nameBirthdayGirl={""} dayAndHour={""} place={""} locationOnMap={""} carruselImages={[]} beforeDinnerButton={""} afterDinnerButton={""} hotels={""} dressCode={""} spotify={""} imageInstagram={ImageInstagram} arrobaInstagram={""} urlInstagram={""} alias={""} phone={""} email={""}></Template1>:<Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
    PORFAVOR SELECCIONE UNA PLANTILLA
  </Typography>}
{template == "2"?  <Template2></Template2>:<Box></Box>}
 
{template=="3"?<Template3></Template3>:<Box></Box>}





        <Box
          sx={{
            "& > :not(style)": { m: 1 },
            position: "fixed",
            bottom: 0,
            right: 0,
            zIndex: 3,
          }}
        >
          <Fab
            color="primary"
            aria-label="add"
            onClick={() => setOpenModal(!openModal)}
          >
            <SettingsIcon />
          </Fab>
        </Box>
      </div>

  );
}
