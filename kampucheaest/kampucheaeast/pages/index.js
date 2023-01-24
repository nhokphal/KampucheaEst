import { Inter } from '@next/font/google'
import About from './about'
import Index from './Dashboard'
import App from './_app'
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <main>

    <Index/>

    </main>
    </>
  )
}
