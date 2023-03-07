import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Counter from '@/shared/components/contador/contador_regresivo/contador';
import { ContadorProgrsivo } from '@/shared/components/contador/contador normal/contador_progrsivo';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {         
  return (
    <main className={styles.main}>
      
      <Counter date={"2024-01-01T00:00:00.000Z"}/>  
      
      <ContadorProgrsivo/>    
    </main>


  )
}
