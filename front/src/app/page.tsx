'use client'
import styles from './page.module.css'

import IFooter, { BottomItem } from "@/shared/components/footer/footer";
import QuestionForm from '@/shared/components/formQuestion/form-question';
import { List } from '@mui/material';
import { Amcecis } from "pages/amcecis/amcecis";


export default function Home() {         
  return (
    <main>
      <div >
      <Amcecis/>
       <QuestionForm></QuestionForm>
      </div>
    </main>
  );
}
