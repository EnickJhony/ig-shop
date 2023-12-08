import {
  ImageContainer,
  ProductContainer,
  ProductDetails
} from '@/styles/pages/product'

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta x</h1>
        <span>R$ 29,90</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque
          neque modi, minus molestias hic temporibus eos magni ratione alias
          labore reiciendis, iste vero quae exercitationem obcaecati repudiandae
          voluptatem! Voluptatum?
        </p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
