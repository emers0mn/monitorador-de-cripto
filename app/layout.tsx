import './globals.css';
import Header from './_components/header';
import Footer from './_components/footer';
import { GoogleAnalytcs, GAdense, HotjarC } from './_components/(SEO)/seo';

export const metadata = {
  metadataBase: new URL('https://monitorador-de-cripto-lpk7.vercel.app/'),
  title: 'Entenda o seu câmbio em Pesos - Vai ter muita coisa por vir',
  description: 'Projeto pessoal do Emerson para poder conter a ansiedade das variações cambiais da Argentina',
  alternates: {
    canonical: 'https://monitorador-de-cripto-lpk7.vercel.app/',
  },
  openGraph: {
    title: 'pesos argentinos Hoje - sua rotina em pesos',
    description: 'Entenda sua rotina em pesos argentinos.',
    siteName: 'pesos argentinos Hoje',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'pesos argentinos Hoje Open Graph Image',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {/* <GAdense id="9369699891562807" /> 
        <GoogleAnalytcs id="0GB0JFQ17F" />
        <HotjarC id="5192902" />
        */}
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
