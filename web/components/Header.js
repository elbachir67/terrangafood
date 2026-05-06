import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link href="/" className="header-logo">
          🍛 Terranga<span>Food</span>
        </Link>
        <nav className="header-nav">
          <Link href="/">Restaurants</Link>
          <Link
  href="/mes-commandes"
  style={{
    background: 'linear-gradient(135deg, #52B788, #2D6A4F)',
    color: 'white',
    padding: '10px 18px',
    borderRadius: '999px',
    fontWeight: '600',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    transition: 'all 0.2s ease',
    textDecoration: 'none'
  }}
>
  📦 Mes commandes
</Link>
        </nav>
      </div>
    </header>
  );
}
