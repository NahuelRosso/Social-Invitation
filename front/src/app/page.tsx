import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Icountdown from "react-countdown";
import Counter from '@/shared/components/contador_regresivo/contador';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {         
  return (
    <main className={styles.main}>
      <Counter date={"2024-01-01T00:00:00.000Z"}/>
    </main>
  )
}
