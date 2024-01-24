import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from './_components/header'
import Footer from './_components/footer'

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]  })


export const metadata: Metadata = {
  title: 'Entenda o seu cambio em Pesos - Vai ter muita coisa por vir',
  description: 'Projeto pessoal do Emerson para poder conter a ansiedade das variações cambiarias da Argentina',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="Pt-br">
      <body className={poppins.className}>
        <Header/>
        {children}
        <Footer />
        </body>
    </html>
  )
}
