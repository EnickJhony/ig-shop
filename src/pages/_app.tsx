import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'
import { AppProps } from 'next/app'
import Image from 'next/image'
import Link from 'next/link'
import LogoImg from '../assets/logo.svg'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={LogoImg} alt="" />
        </Link>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
