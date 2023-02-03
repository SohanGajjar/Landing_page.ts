import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'
import Service from './Components/Service'
import Aboutus from './Components/Aboutus'
import Contactus from './Components/Contactus'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Darwin Lab</title>
        <meta name="description" content="Machine learning platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* inter and quicksand fonts start*/}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&family=Quicksand:wght@300;400;500&display=swap" rel="stylesheet" />
        {/* inter and quicksand fonts finished */}

      </Head>
      <Navbar />
      <Homepage/>
      <Service/>
      <Aboutus/>
      <Contactus/>
    </>
  )
}
