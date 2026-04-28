'use client';

// ========================================
// Mappings Statut
// ========================================

const STATUT_CLASSES = {
  'en attente': 'statut-en-attente',
  'confirmée': 'statut-confirmee',
  'en livraison': 'statut-en-livraison',
  'livrée': 'statut-livree',
  'annulée': 'statut-annulee',
};

const STATUT_EMOJIS = {
  'en attente': '⏳',
  'confirmée': '✅',
  'en livraison': '🚚',
  'livrée': '📦',
  'annulée': '❌',
};

// ========================================
// Composant StatutBadge
// ========================================

export default function StatutBadge({ statut }) {
  const classe = STATUT_CLASSES[statut] || '';
  const emoji = STATUT_EMOJIS[statut] || '';

  return (
    <span className={`statut-badge ${classe}`}>
      {emoji} {statut}
    </span>
  );
}
