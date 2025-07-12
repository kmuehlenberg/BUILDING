
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Valestra | Luxe Gifting</title>
      </Head>
      <header>
        <h1>Valestra</h1>
        <nav>
          <Link href="/drop">Luxe Drop</Link> | 
          <Link href="/ambassador">Ambassador</Link>
        </nav>
      </header>
      <main>
        <h2>Welcome to the Vault</h2>
        <p>Luxury gift bundles. Prestige-only access.</p>
      </main>
    </div>
  )
}
