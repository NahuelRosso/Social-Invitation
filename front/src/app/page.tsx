'use client'
import styles from './page.module.css'

import IFooter, { BottomItem } from "@/shared/components/footer/footer";
import { Amcecis } from "pages/amcecis/amcecis";
import ContactForm from '@/shared/components/form_contact/form-contact';


export default function Home() {         
  return (
    <main>
      <div >
      <ContactForm/>
       
      </div>
    </main>
  );
}
