import Link from 'next/link';

// Photographie culinaire associée à chaque type de cuisine
const cuisineImage = {
  'Sénégalaise traditionnelle': '/images/cuisine-traditional.png',
  'Africaine fusion': '/images/cuisine-fusion.png',
  'Grillades sénégalaises': '/images/cuisine-grill.png',
  'Fruits de mer': '/images/cuisine-seafood.png',
  'Café & snacks': '/images/cuisine-cafe.png',
};

export default function RestaurantCard({ restaurant }) {
  const image = cuisineImage[restaurant.cuisine] || '/images/plat-principal.png';

  return (
    <Link href={`/restaurants/${restaurant._id}`}>
      <div className="restaurant-card">
        <div
          className="restaurant-card-image"
          style={{ backgroundImage: `url('${image}')` }}
          role="img"
          aria-label={`Plat représentatif — ${restaurant.cuisine}`}
        />
        <div className="restaurant-card-body">
          <h3>{restaurant.nom}</h3>
          <p className="restaurant-card-cuisine">{restaurant.cuisine}</p>
          <p className="restaurant-card-address">{restaurant.adresse}</p>
          <div className="restaurant-card-footer">
            <span className="restaurant-card-note">★ {restaurant.note}/5</span>
            <span
              className={`restaurant-card-status ${
                restaurant.estOuvert ? 'status-open' : 'status-closed'
              }`}
            >
              {restaurant.estOuvert ? 'Ouvert' : 'Fermé'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
