'use client'
import styles from './page.module.css'

import IFooter, { BottomItem } from "@/shared/components/footer/footer";
import { Template1 } from '@/shared/templates/template-fiesta-15/template1/template1';
import { Amcecis } from "pages/amcecis/amcecis";


export default function Home() {         
  return (
    <main>
      <div >
      <Template1/>
      </div>
    </main>
  );
}
