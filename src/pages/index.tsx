import { HomeContainer, Product } from '@/styles/pages/home'
import Head from 'next/head'
import Image from 'next/image'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import { stripe } from '@/lib/stripe'
import Link from 'next/link'
import Stripe from 'stripe'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(products => {
          return (
            <Link
              key={products.id}
              href={`/product/${products.id}`}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image
                  src={products.imageUrl}
                  alt=""
                  width={520}
                  height={480}
                />
                <footer>
                  <strong>{products.name}</strong>
                  <span>{products.price}</span>
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(products => {
    const price = products.default_price as Stripe.Price
    return {
      id: products.id,
      name: products.name,
      imageUrl: products.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount! / 100)
    }
  })

  return {
    props: {
      products
    }
  }
}
