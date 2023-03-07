import { Card, CardMedia, CardContent, Typography, Box, Button, } from '@mui/material'
import { bgcolor } from '@mui/system';
import Image,{ StaticImageData } from 'next/image';
import React from 'react'

export interface ICard{ 
    image:StaticImageData;
    title:string;
    icono?: JSX.Element;
    description?:string;
    class?:string;
    button?:boolean;
    urlButton?:string;
    bgColor:string;
    bgcButton?:string;
    textButton?:string;
}


export const CardItem = (props:ICard) => {
  return (
    <Box textAlign={'center'} paddingTop={10}>
        <Card sx={{minHeight:250, maxWidth: 345,margin:'auto', alignContent:'center',textAlign: "center", bgcolor:props.bgColor}} elevation={5}>
            <Image
              src={props.image}
              alt=""
              width={350}
            />
            <CardContent >
            {props.icono}
              <Typography gutterBottom variant="h6" component="div" color={'white'}>
                {props.title}
              </Typography>
              <Typography color={'#dddddd'} variant="body2" >
          {props.description}              </Typography> 
              {props.button ==true 
              ?<Box >
                <Button 
                sx={{backgroundColor:props.bgcButton, marginTop:'4px'}}
                  href={props.urlButton}
                  variant="contained"
                >
                  {props.textButton}
                </Button>
              </Box>
              :<Box>
                
              </Box> 
        }
            </CardContent>
          </Card>
    </Box>
  )
}
