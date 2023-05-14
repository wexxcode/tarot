import Head from 'next/head'

import CardLIst from './CardList'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tarot</title>
        <meta name="description" content="Aplicação para ver suas cartas de Tarot" />
      </Head>
      <div className={`container-fluid px-0`}>
        <Header title="Tarot"/>
        <main className="w-100">  
          <CardLIst />
        </main>
      </div>
    </>
  )
}
