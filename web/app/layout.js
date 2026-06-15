import './globals.css';
import { Sora, Inter } from 'next/font/google';
import Header from '../components/Header';

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'TerrangaFood — Commandez vos plats préférés à Dakar',
  description: 'Plateforme de commande de plats auprès de restaurants dakarois.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${sora.variable} ${inter.variable}`}>
      <body>
        <div className="bg-ambient" aria-hidden="true" />
        <Header />
        <main>{children}</main>
        <footer className="footer">
          <div className="footer-inner">
            <span className="footer-logo">
              Terranga<span>Food</span>
            </span>
            <p>Projet Architecture Logicielle 2 — UCAD / ESP</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
