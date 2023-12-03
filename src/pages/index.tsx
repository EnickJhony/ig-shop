import { styled } from '@/styles'

const Button = styled('button', {
  backgroundColor: '$green300',
  borderRadius: 4,
  border: 0,
})

export default function Home() {
  return (
    <main>
      <Button>Enviar</Button>
    </main>
  )
}
