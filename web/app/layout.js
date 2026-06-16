import './globals.css';
import Header from '../components/Header';

export const metadata = {
  title: 'TerrangaFood — Commandez vos plats préférés à Dakar',
  description: 'Plateforme de commande de plats auprès de restaurants dakarois.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <footer className="footer">
          <p>🍛 TerrangaFood —les-sentinelles</p>
        </footer>
      </body>
    </html>
  );
}
