import Header from '@/components/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import SectionBanner from '@/components/SectionBanner';
import SectionPersona from '@/components/SectionPersona';
import ClienteProvider from '@/contexts/cliente';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Eliane Seifert',
  description: 'Massoteraupeta',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className='!scroll-smooth'>
      <body>
        <ClienteProvider>
          <Header />
          {children}
        </ClienteProvider>
      </body>
    </html>
  );
}
