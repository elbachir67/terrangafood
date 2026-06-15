// Photographie culinaire associée à chaque catégorie de plat
const categorieImage = {
  'plat principal': '/images/plat-principal.png',
  'entrée': '/images/plat-entree.png',
  'dessert': '/images/plat-dessert.png',
  'boisson': '/images/plat-boisson.png',
};

export default function PlatCard({ plat }) {
  const image = categorieImage[plat.categorie] || '/images/plat-principal.png';

  return (
    <div className="plat-card">
      <div
        className="plat-card-image"
        style={{ backgroundImage: `url('${image}')` }}
        role="img"
        aria-label={`Photo du plat — ${plat.nom}`}
      />
      <div className="plat-card-body">
        <span className="plat-card-categorie">{plat.categorie}</span>
        <h4>{plat.nom}</h4>
        <p className="plat-card-description">{plat.description}</p>
        <div className="plat-card-footer">
          <span className="plat-card-prix">
            {plat.prix.toLocaleString('fr-SN')} <small>FCFA</small>
          </span>
          <span
            className={`plat-card-dispo ${plat.disponible ? 'status-open' : 'status-closed'}`}
          >
            {plat.disponible ? 'Disponible' : 'Indisponible'}
          </span>
        </div>
      </div>
    </div>
  );
}
