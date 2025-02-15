import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Home - Aula Next JS do zero!',
  description: 'Aprendendo Next JS do zero',
  openGraph: {
    title: 'Aprendendo Next JS com Sujeito no Youtube',
    description: 'Aprendendo Next JS com Sujeito Programador!'
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
}

export default function Home() {
  return (
    <div>
      <h1>Pagina home</h1>
    </div>
  )
}