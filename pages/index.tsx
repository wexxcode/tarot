import Head from 'next/head'
import Image from 'next/image'

import styles from '@/pages/index.module.css'
import CardLIst from './CardList'
import Header from '@/components/Header'

export default function Home() {
  return (
    <div className={`${styles.container} container-fluid`}>
      <Header titulo="MEU TAROT" name="Lazaro" />
      <main>  
        <CardLIst />
      </main>
    </div>
  )
}
