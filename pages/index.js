import Head from 'next/head'
import Link from 'next/link'
import styles from '../scss/test.scss';

function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.someScssClass}>
          <a className={styles.test}>Hannah is great!</a>
          <br></br>
          <Link href="/daniel">
            <a>Daniel</a>
          </Link>
          <br></br>
          <Link href="/blog">
            <a>Zum Blog</a>
          </Link>
        </h1>
      </main>

    </div>
  )
}

export default Home