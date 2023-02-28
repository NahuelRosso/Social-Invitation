"use client"
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Paper } from "@mui/material";

export interface BottomItem{
  icon:JSX.Element,
  label:string,
  route?:string,
  action:()=>{}
}

export interface PropsIFooter {
  bottomItems:BottomItem[]
}

function IFooter(props: PropsIFooter) { 

const [value, setValue] = React.useState(0);
  return (
       <Paper sx={{ position: 'fixed', bottom: 10, left: 0, right: 0, alignContent:'center' }} elevation={5}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event: any , newValue: any) => {
              console.log(newValue)   
              setValue(newValue)         
              props.bottomItems[newValue].action()                
            }}
          >{
            props.bottomItems.map((item:BottomItem) => {
              return <BottomNavigationAction label={item.label} icon={item.icon}/>
            })
          }
          </BottomNavigation>
      </Paper>
  );
}

export default IFooter;
