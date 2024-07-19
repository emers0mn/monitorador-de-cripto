import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './_components/header';
import Footer from './_components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Entenda o seu câmbio em Pesos - Vai ter muita coisa por vir',
  description: 'Projeto pessoal do Emerson para poder conter a ansiedade das variações cambiais da Argentina',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
