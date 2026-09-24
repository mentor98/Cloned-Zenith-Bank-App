'use client';

import { useState } from 'react';
import CustomizePage from '../components/CustomizePage';
import ProductServices from '../components/ProductServices';
import Lifestyle from '../components/Lifestyle';
import Welcome from '../components/Welcome';

export default function Home() {
  const [screen, setScreen] = useState('welcome');
  const [loggedIn, setLoggedIn] = useState(false);

  const open = (name) => setScreen(name);

  if (!loggedIn) {
    return <Welcome onLogin={() => { setLoggedIn(true); setScreen('customize'); }} onOpenAccount={() => setScreen('customize')} />;
  }

  return (
    <main className="app-shell">
      <div className="desktop-topbar">
        <div className="brand"><span className="brand-mark">Z</span><span>ZENITH BANK</span></div>
        <nav>
          <button onClick={() => open('customize')}>Home</button>
          <button onClick={() => open('products')}>Products &amp; Services</button>
          <button onClick={() => open('lifestyle')}>Lifestyle</button>
        </nav>
        <button className="desktop-login" onClick={() => setLoggedIn(false)}>Logout</button>
      </div>
      <section className="web-content">
        {screen === 'customize' && <CustomizePage onNavigate={open} />}
        {screen === 'products' && <ProductServices onBack={() => open('customize')} />}
        {screen === 'lifestyle' && <Lifestyle onBack={() => open('customize')} />}
      </section>
    </main>
  );
}
