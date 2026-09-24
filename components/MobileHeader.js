'use client';

import { ChevronLeft, HelpCircle } from 'lucide-react';
import StatusBar from './StatusBar';

export default function MobileHeader({ title, onBack, rightAction, showHelp = false }) {
  return (
    <>
      <StatusBar theme="red-header" />
      <header className="mobile-header">
        <button 
          type="button"
          onClick={onBack} 
          aria-label="Go back"
          className="header-back-btn"
        >
          <ChevronLeft size={28} strokeWidth={2.4} />
        </button>
        <h1 className="header-title">{title}</h1>
        <div className="header-right-action">
          {rightAction || (
            showHelp ? (
              <button type="button" className="header-icon-btn" title="Help & Support">
                <HelpCircle size={20} />
              </button>
            ) : (
              <div className="header-brand-badge">
                <span>Z</span>
              </div>
            )
          )}
        </div>
      </header>
    </>
  );
}
