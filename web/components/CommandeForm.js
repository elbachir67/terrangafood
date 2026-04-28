'use client';

import { useState } from 'react';
import { creerCommande } from '../lib/api';

export default function CommandeForm({ restaurant, plats }) {
  const [client, setClient] = useState('');
  const [telephone, setTelephone] = useState('');
  const [adresse, setAdresse] = useState('');
  const [commentaire, setCommentaire] = useState('');
  const [platsChoisis, setPlatsChoisis] = useState([]);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Cocher / décocher un plat
  const togglePlat = (platId) => {
    setPlatsChoisis((prev) =>
      prev.includes(platId)
        ? prev.filter((id) => id !== platId)
        : [...prev, platId]
    );
  };

  // Calculer le total
  const total = plats
    .filter((p) => platsChoisis.includes(p._id))
    .reduce((sum, p) => sum + p.prix, 0);

  // Soumettre la commande
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    try {
      await creerCommande({
        client,
        telephone,
        adresseLivraison: adresse,
        restaurant: restaurant._id,
        plats: platsChoisis,
        montantTotal: total,
        commentaire,
      });

      setMessage({
        type: 'success',
        text: 'Commande envoyée avec succès !',
      });

      // reset
      setClient('');
      setTelephone('');
      setAdresse('');
      setCommentaire('');
      setPlatsChoisis([]);
    } catch (err) {
      setMessage({
        type: 'error',
        text: err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="commande-form">
      <h2>Commander chez {restaurant.nom}</h2>

      {message && (
        <div className={`form-message ${message.type}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Votre nom</label>
          <input
            type="text"
            value={client}
            onChange={(e) => setClient(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Téléphone</label>
          <input
            type="tel"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Adresse de livraison</label>
          <input
            type="text"
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Choisissez vos plats ({platsChoisis.length})</label>

          {plats.map((plat) => (
            <label key={plat._id}>
              <input
                type="checkbox"
                checked={platsChoisis.includes(plat._id)}
                onChange={() => togglePlat(plat._id)}
              />
              {plat.nom} - {plat.prix} FCFA
            </label>
          ))}
        </div>

        <div className="form-group">
          <label>Commentaire</label>
          <textarea
            value={commentaire}
            onChange={(e) => setCommentaire(e.target.value)}
          />
        </div>

        <p>Total : {total} FCFA</p>

        <button type="submit" disabled={loading || platsChoisis.length === 0}>
          {loading ? 'Envoi...' : 'Commander'}
        </button>
      </form>
    </div>
  );
}