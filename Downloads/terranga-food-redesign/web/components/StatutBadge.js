// Mapping statut → classe CSS
const statutClasses = {
  'en attente': 'statut-en-attente',
  'confirmée': 'statut-confirmee',
  'en livraison': 'statut-en-livraison',
  'livrée': 'statut-livree',
  'annulée': 'statut-annulee',
};

export default function StatutBadge({ statut }) {
  const classe = statutClasses[statut] || '';

  return (
    <span className={`statut-badge ${classe}`}>
      {statut}
    </span>
  );
}
