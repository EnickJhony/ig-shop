import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'
import { AppProps } from 'next/app'
import Image from 'next/image'
import LogoImg from '../assets/logo.svg'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={LogoImg} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
