import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" /> 
      </Head>

      <div className={styles.container}>
      
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Ex aliquip tempor ullamco proident aliqua proident ex non labore ex irure consectetur. Occaecat eiusmod nostrud incididunt non amet non excepteur nisi fugiat anim aute tempor tempor veniam. Consectetur amet do sunt incididunt excepteur pariatur pariatur ullamco tempor ad ullamco consectetur id.</p>
        <Link href="/ninjas"><a className={styles.btn} >See Ninja Listing</a></Link>
      
      </div>
    </>
  )
}
