"use client";
import ImageHeader from "../../public/header.jpg";
import { Template1 } from "@/shared/templates/template-fiesta-15/template1/template1";
import Image1 from "../../public/image1.jpg";
import Image2 from "../../public/image2.jpg";
import Image3 from "../../public/image3.jpg";
import Image4 from "../../public/image4.jpg";
import Image5 from "../../public/image5.jpg";
import Image6 from "../../public/image6.jpg";
import Image7 from "../../public/image7.jpg";
import ImageInstagram from "../../public/instagram.jpg";
import { MuiColorInput } from "mui-color-input";
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
import { set } from "firebase/database";

export default function Page() {
  const [openModal, setOpenModal] = React.useState(true);
  const [colorPrimary, setColorPrimary] = React.useState("rgb(255,255,255)");
  const [colorSecundary, setColorSecundary] = React.useState("rgb(0,0,0");
  const [tipography, setTipography] = React.useState("");
  const [template, setTemplate] = React.useState("");

  const CARRUSEL = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];


  const handleChangeTipography = (event: SelectChangeEvent) => {
    setTipography(event.target.value as string);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChangeColor = (event: SelectChangeEvent) => {
    setTemplate(event.target.value as string);

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

  return (
    <main>
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
                  value={template}
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
            </Box>
            <DialogContentText
              id="alert-dialog-slide-description"
              textAlign={"center"}
            >
              Esta sección
            </DialogContentText>
          </DialogContent>
        </Dialog>
        <Template1
          colorPrimary={colorPrimary}
          colorSecundary={colorSecundary}
          tipography={tipography}
          dateBirth={"08/05"}
          music={"audio/music-fondo.mp3"}
          imageHeader={ImageHeader}
          nameBirthdayGirl={"SOFIA"}
          dayAndHour={"Sábado 5 de agosto - 21:30hs"}
          place={"Campo Romero"}
          locationOnMap={"https://www.google.com.ar/maps/place/Campo+Romero/@-32.1873757,-64.0989851,17z/data=!3m1!4b1!4m6!3m5!1s0x95cd6f1c347f767b:0x2771a170cea7e967!8m2!3d-32.1873803!4d-64.0964102!16s%2Fg%2F11gd0k_f6d?entry=ttu"}
          carruselImages={[]}
          beforeDinnerButton={"https://docs.google.com/forms/d/e/1FAIpQLSfbN7PUugPGDDnt5B7LrIEnVuBVoidVr1wlBwlnPseMGr4ooA/viewform"}
          afterDinnerButton={""}
          hotels={"Apart tres"}
          dressCode={'"Elegante Sport"' }
          spotify={"https://open.spotify.com/playlist/2Ivndr7fWTtlSkSkUr4mAY?si=kEsxZJGtTeKml9gYmJJr7g"}
          imageInstagram={ImageInstagram}
          arrobaInstagram={"@PAPINISOFI"}
          urlInstagram={"https://www.instagram.com/papinisofi/"}
          alias={"LISBOA.CANELA.SOFA"}
          phone={"+54 9 3571-417940"}
          email={"odlerdam@gmail.com "}
        ></Template1>
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
    </main>
  );
}
