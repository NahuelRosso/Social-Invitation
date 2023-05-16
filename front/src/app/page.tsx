'use client'
import styles from './page.module.css'

import IFooter, { BottomItem } from "@/shared/components/footer/footer";
import QuestionForm from '@/shared/components/formQuestion/form-question';
import { Slider } from '@/shared/components/slider/slider';
import { Box, List } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import QuestionListPage from 'pages/questionList/questionList';
import Slider1 from '../../public/SLIDERS WEB 02-02 (1).png'
import Slider2 from '../../public/SLIDERS WEB 02-03 (1).png'
import Slider3 from '../../public/SLIDERS WEB 02-01 (1).png'
import Slider1Cel from '../../public/SLIDERS WEB_Mesa de trabajo 1.png'
import Slider2Cel from '../../public/SLIDERS WEB-02.png'
import Slider3Cel from '../../public/SLIDERS WEB-03.png'
export default function Page() {    
       
  return (
    <main>
      <div className='container'>
      {/* <Box className={"slider1"}>
      <Slider images={[Slider1, Slider2, Slider3]} autoPlay={true} showButtons={false} />
    </Box><Box className={"slider2"}>
        <Slider images={[Slider1Cel, Slider2Cel, Slider3Cel]} autoPlay={true} showButtons={false} />
      </Box> */}
        <QuestionForm ></QuestionForm>
      </div>
    </main>
  );
}
