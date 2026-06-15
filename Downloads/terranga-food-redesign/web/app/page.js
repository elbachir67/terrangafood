import Link from 'next/link';
import RestaurantCard from '../components/RestaurantCard';
import { getRestaurants } from '../lib/api';

export default async function HomePage() {
  let restaurants = [];
  let error = null;

  try {
    restaurants = await getRestaurants();
  } catch (err) {
    error = err.message;
  }

  return (
    <>
      <section className="hero">
        <span className="hero-eyebrow">Saveurs de Dakar</span>
        <h1>
          Bienvenue sur <span className="accent">TerrangaFood</span>
        </h1>
        <p>
          Découvrez les meilleurs restaurants de Dakar et commandez vos plats
          préférés en quelques clics.
        </p>
        <Link href="#restaurants" className="hero-cta">
          Explorer les restaurants
        </Link>
      </section>

      <div className="section-title" id="restaurants">
        <h2>
          Nos <span className="accent">restaurants</span>
        </h2>
        <p>Une sélection des meilleures tables de la capitale sénégalaise.</p>
      </div>

      <section className="container" style={{ padding: 0 }}>
        {error ? (
          <div className="error">
            <p>{error}</p>
            <p style={{ fontSize: '0.9rem', marginTop: '8px', color: 'var(--text-light)' }}>
              Vérifiez que l&apos;API est lancée sur le port 3001.
            </p>
          </div>
        ) : restaurants.length === 0 ? (
          <div className="loading">
            <p>Aucun restaurant trouvé.</p>
            <p style={{ fontSize: '0.9rem', marginTop: '8px', color: 'var(--text-light)' }}>
              Lancez <code>npm run seed</code> dans le dossier <code>api/</code> pour
              ajouter des données.
            </p>
          </div>
        ) : (
          <div className="restaurants-grid">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant._id} restaurant={restaurant} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
