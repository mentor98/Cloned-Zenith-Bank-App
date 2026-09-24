'use client';

import { useState } from 'react';
import {
  CreditCard,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Copy,
  Check,
  ShieldCheck,
  Sliders,
  Plus,
  RefreshCw,
  AlertTriangle,
  Globe,
  Radio
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DesktopCards() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [showCardNumber, setShowCardNumber] = useState(false);
  const [copiedCard, setCopiedCard] = useState(false);
  const [isFrozen, setIsFrozen] = useState(false);

  // Limit state
  const [posLimit, setPosLimit] = useState(1500000);
  const [atmLimit, setAtmLimit] = useState(500000);
  const [webLimit, setWebLimit] = useState(2000000);
  const [limitsSaved, setLimitsSaved] = useState(false);

  const cards = [
    {
      id: 'card-1',
      name: 'Adewale Okonkwo',
      type: 'Zenith Visa Platinum Debit',
      num: '4214 •••• •••• 9081',
      fullNum: '4214 8839 2019 9081',
      expiry: '09/29',
      cvv: '842',
      variant: 'platinum-red',
      currency: 'NGN',
    },
    {
      id: 'card-2',
      name: 'Adewale Okonkwo',
      type: 'Zenith World Elite Mastercard (USD)',
      num: '5399 •••• •••• 4421',
      fullNum: '5399 7120 4018 4421',
      expiry: '11/30',
      cvv: '319',
      variant: 'world-obsidian',
      currency: 'USD',
    },
  ];

  const currentCard = cards[activeCardIndex];

  const handleCopyCard = (num) => {
    navigator.clipboard?.writeText(num);
    setCopiedCard(true);
    setTimeout(() => setCopiedCard(false), 2000);
  };

  const handleSaveLimits = (e) => {
    e.preventDefault();
    setLimitsSaved(true);
    try {
      confetti({ particleCount: 35, spread: 50 });
    } catch (err) {}
    setTimeout(() => setLimitsSaved(false), 3000);
  };

  return (
    <div className="desktop-cards-page">
      {/* Top Banner */}
      <div className="cards-header-banner">
        <div>
          <h2 className="cards-header-title">Card Security & Spending Controls</h2>
          <p className="cards-header-desc">
            Instantly freeze cards, manage online spending limits, and reveal virtual credentials with 256-bit biometrics.
          </p>
        </div>
        <div className="card-selector-tabs">
          {cards.map((c, idx) => (
            <button
              key={c.id}
              type="button"
              className={`card-tab-button ${activeCardIndex === idx ? 'active' : ''}`}
              onClick={() => {
                setActiveCardIndex(idx);
                setIsFrozen(false);
              }}
            >
              <CreditCard size={15} />
              <span>{c.type}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="cards-management-grid">
        {/* Left Column: Visual Card Canvas */}
        <div className="card-visual-column">
          <div className={`interactive-bank-card ${currentCard.variant} ${isFrozen ? 'card-frozen' : ''}`}>
            {isFrozen && (
              <div className="frozen-overlay-banner">
                <Lock size={20} />
                <span>CARD TEMPORARILY FROZEN</span>
              </div>
            )}

            <div className="card-visual-top">
              <div className="card-zenith-mark">
                <span className="card-bank-name">ZENITH BANK</span>
                <span className="card-chip-symbol">EMV</span>
              </div>
              <div className="card-contactless-icon">
                <Radio size={18} />
              </div>
            </div>

            <div className="card-number-row">
              <span className="card-full-digits tabular-nums">
                {showCardNumber ? currentCard.fullNum : currentCard.num}
              </span>
              <button
                type="button"
                className="btn-card-reveal"
                onClick={() => setShowCardNumber(!showCardNumber)}
                title={showCardNumber ? 'Hide full number' : 'Show full number'}
              >
                {showCardNumber ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
              <button
                type="button"
                className="btn-card-reveal"
                onClick={() => handleCopyCard(currentCard.fullNum)}
                title="Copy Card Number"
              >
                {copiedCard ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              </button>
            </div>

            <div className="card-visual-bottom">
              <div>
                <span className="card-meta-label">CARDHOLDER</span>
                <strong className="card-holder-name">{currentCard.name}</strong>
              </div>
              <div>
                <span className="card-meta-label">EXPIRES</span>
                <strong className="card-meta-val tabular-nums">{currentCard.expiry}</strong>
              </div>
              <div>
                <span className="card-meta-label">CVV</span>
                <strong className="card-meta-val tabular-nums">
                  {showCardNumber ? currentCard.cvv : '•••'}
                </strong>
              </div>
              <div className="card-brand-network">
                {currentCard.type.includes('Visa') ? 'VISA' : 'Mastercard'}
              </div>
            </div>
          </div>

          {/* Quick Security Toggles */}
          <div className="card-security-toggles">
            <button
              type="button"
              className={`toggle-action-box ${isFrozen ? 'is-active-freeze' : ''}`}
              onClick={() => setIsFrozen(!isFrozen)}
            >
              <div className="toggle-icon-wrap">
                {isFrozen ? <Unlock size={18} /> : <Lock size={18} />}
              </div>
              <div className="toggle-text-wrap">
                <strong>{isFrozen ? 'Unfreeze Card' : 'Freeze Card'}</strong>
                <span>{isFrozen ? 'Restore all transactions' : 'Instantly block all POS & web charges'}</span>
              </div>
            </button>

            <button
              type="button"
              className="toggle-action-box"
              onClick={() => alert('Zenith ATM PIN Reset instructions sent to your registered SMS phone.')}
            >
              <div className="toggle-icon-wrap">
                <RefreshCw size={18} />
              </div>
              <div className="toggle-text-wrap">
                <strong>Reset PIN Online</strong>
                <span>Change 4-digit ATM & POS security PIN</span>
              </div>
            </button>
          </div>
        </div>

        {/* Right Column: Spending Thresholds & Limits Form */}
        <div className="card-limits-column">
          <div className="limits-card-panel">
            <div className="panel-title-block">
              <Sliders size={18} className="text-zenith-red" />
              <div>
                <h4 className="panel-heading">Daily Transaction Limits ({currentCard.currency})</h4>
                <p className="panel-sub">Fine-tune the maximum expenditure allowed per 24-hour cycle.</p>
              </div>
            </div>

            {limitsSaved && (
              <div className="limits-saved-banner">
                <Check size={16} />
                <span>Limits updated and synchronized with Zenith switch!</span>
              </div>
            )}

            <form onSubmit={handleSaveLimits} className="limits-form">
              {/* POS Terminal Limit */}
              <div className="limit-slider-group">
                <div className="slider-header-row">
                  <label>POS In-Store Shopping Limit</label>
                  <strong className="slider-val tabular-nums">
                    ₦ {posLimit.toLocaleString()}
                  </strong>
                </div>
                <input
                  type="range"
                  min={100000}
                  max={5000000}
                  step={50000}
                  value={posLimit}
                  onChange={(e) => setPosLimit(Number(e.target.value))}
                  className="zenith-range-slider"
                />
                <div className="slider-range-labels">
                  <span>₦100K</span>
                  <span>₦5.0M</span>
                </div>
              </div>

              {/* ATM Cash Withdrawal Limit */}
              <div className="limit-slider-group">
                <div className="slider-header-row">
                  <label>ATM Daily Cash Withdrawal</label>
                  <strong className="slider-val tabular-nums">
                    ₦ {atmLimit.toLocaleString()}
                  </strong>
                </div>
                <input
                  type="range"
                  min={50000}
                  max={1000000}
                  step={50000}
                  value={atmLimit}
                  onChange={(e) => setAtmLimit(Number(e.target.value))}
                  className="zenith-range-slider"
                />
                <div className="slider-range-labels">
                  <span>₦50K</span>
                  <span>₦1.0M (Regulatory Max)</span>
                </div>
              </div>

              {/* Online / Web Payments Limit */}
              <div className="limit-slider-group">
                <div className="slider-header-row">
                  <label>Online Web & International Payments</label>
                  <strong className="slider-val tabular-nums">
                    ₦ {webLimit.toLocaleString()}
                  </strong>
                </div>
                <input
                  type="range"
                  min={200000}
                  max={10000000}
                  step={100000}
                  value={webLimit}
                  onChange={(e) => setWebLimit(Number(e.target.value))}
                  className="zenith-range-slider"
                />
                <div className="slider-range-labels">
                  <span>₦200K</span>
                  <span>₦10.0M</span>
                </div>
              </div>

              <div className="limits-btn-row">
                <button type="submit" className="btn-save-limits">
                  Save New Daily Limits
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
