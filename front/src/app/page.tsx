'use client'
import styles from './page.module.css'

import IFooter, { BottomItem } from "@/shared/components/footer/footer";
import { Amcecis } from "pages/amcecis/amcecis";


export default function Home() {         
  return (
    <main>
      <div >
      <Amcecis/>
       
      </div>
    </main>
  );
}
