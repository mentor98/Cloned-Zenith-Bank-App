'use client';

import { Home, Receipt, Smartphone, ArrowLeftRight, LayoutGrid } from 'lucide-react';

export default function BottomNav({ onNavigate, active = 'home' }) {
  const items = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'bills', label: 'Pay Bills', icon: Receipt },
    { id: 'airtime', label: 'Airtime', icon: Smartphone },
    { id: 'transfer', label: 'Transfer', icon: ArrowLeftRight },
    { id: 'more', label: 'More', icon: LayoutGrid },
  ];

  return (
    <nav className="bottom-nav" aria-label="Bottom Navigation">
      {items.map((item) => {
        const IconComponent = item.icon;
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            type="button"
            className={`bottom-nav-item ${isActive ? 'active' : ''}`}
            onClick={() => onNavigate?.(item.id)}
            aria-current={isActive ? 'page' : undefined}
          >
            <div className="nav-icon-wrap">
              <IconComponent size={22} strokeWidth={isActive ? 2.4 : 1.8} />
              {isActive && <span className="nav-indicator-dot" />}
            </div>
            <small className="nav-label">{item.label}</small>
          </button>
        );
      })}
    </nav>
  );
}
