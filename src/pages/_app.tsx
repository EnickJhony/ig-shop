import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'
import { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import LogoImg from '../assets/logo.svg'

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container className={roboto.className}>
      <Header>
        <Link href="/">
          <Image src={LogoImg} alt="" />
        </Link>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
