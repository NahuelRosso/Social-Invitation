import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material'
import React from 'react'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { IQuestion, Preguntas } from '../model/question';
export const ItemQuestion = (props:string) => {
  
  return (
  <>
        <ListItemAvatar>
            <Avatar>
                <QuestionMarkIcon />
            </Avatar>
        </ListItemAvatar>
        <ListItemText style={{color:'black'}} primary={props}  />
 </>


      

  )
}
