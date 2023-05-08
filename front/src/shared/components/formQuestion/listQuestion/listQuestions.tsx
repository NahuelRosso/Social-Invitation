import React from "react";
import { IQuestion } from "../model/question";
import { ListItems } from "../../list/list";
import QuestionForm from "../form-question";


const clients: IQuestion[] = [
  {
    id:"",
    question:""
  },
  {
    id:"",
    question:""
  },
  {
    id:"",
    question:""
  },
  {
    id:"",
    question:""
  },
];



export const ListClient = () => {
    const action = (item: IQuestion) => {
      console.log(item);
    };
  
    return (
      <div>
        <ListItems
          items={clients}
          renderItem={QuestionForm}
          handleItemClick={(item: IQuestion) => {
            action(item);
          }}
        ></ListItems>
      </div>
    );
  };
  