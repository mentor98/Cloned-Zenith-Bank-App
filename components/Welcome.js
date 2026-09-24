'use client';

import { useState } from 'react';
import { Fingerprint, Lock, ShieldAlert, ArrowRight, UserCheck, PhoneCall } from 'lucide-react';
import StatusBar from './StatusBar';
import ZenithLogo from './ZenithLogo';

export default function Welcome({ onLogin, onOpenAccount }) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState('adewale.o');
  const [password, setPassword] = useState('••••••••');
  const [loading, setLoading] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);

  const handlePerformLogin = (e) => {
    e?.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowLoginModal(false);
      onLogin?.();
    }, 600);
  };

  return (
    <div className="mobile-frame welcome-screen">
      <StatusBar theme="dark" />

      {/* Top Ambient Glow & Brand Hero */}
      <div className="welcome-hero">
        <div className="zenith-emblem-container">
          <div className="zenith-glow-ring" />
          <div className="zenith-emblem-box">
            <span className="zenith-emblem-letter">Z</span>
          </div>
        </div>

        <div className="welcome-brand-text">
          <h2 className="welcome-brand-title">ZENITH</h2>
          <p className="welcome-brand-subtitle">PEOPLE • TECHNOLOGY • SERVICE</p>
        </div>
      </div>

      {/* Bottom Copy & CTA Section */}
      <div className="welcome-copy">
        <div className="welcome-typography">
          <h1 className="welcome-headline">Making Life Simple</h1>
          <p className="welcome-subtext">
            Experience the freedom of banking<br />on your own terms
          </p>
        </div>

        <div className="welcome-actions">
          <button 
            type="button" 
            className="welcome-btn primary-btn"
            onClick={() => setShowLoginModal(true)}
          >
            <span>Login</span>
            <ArrowRight size={18} />
          </button>

          <button 
            type="button" 
            className="welcome-btn secondary-btn"
            onClick={() => setShowAccountModal(true)}
          >
            Open an account
          </button>

          <button 
            type="button" 
            className="welcome-biometric-btn"
            onClick={handlePerformLogin}
            title="Authenticate with TouchID / FaceID"
          >
            <Fingerprint size={22} className="text-zenith-red" />
            <span>Quick Login with Biometrics</span>
          </button>
        </div>

        <div className="welcome-footer">
          <span className="helpline-text">
            <PhoneCall size={12} className="inline mr-1" />
            24/7 ZenithDirect: +234 1 278 7000
          </span>
        </div>
      </div>

      {/* Interactive Login Modal */}
      {showLoginModal && (
        <div className="modal-backdrop" onClick={() => setShowLoginModal(false)}>
          <div 
            className="modal-container login-sheet"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
          >
            <div className="sheet-handle" />
            <div className="sheet-header">
              <ZenithLogo size="small" />
              <button 
                type="button" 
                className="modal-close-btn"
                onClick={() => setShowLoginModal(false)}
              >
                ✕
              </button>
            </div>

            <div className="sheet-body">
              <h3 className="sheet-title">Sign in to Zenith Mobile</h3>
              <p className="sheet-subtitle">Access your accounts, transfers, cards & lifestyle</p>

              <form onSubmit={handlePerformLogin} className="sheet-form">
                <div className="form-group">
                  <label>Account Number or Username</label>
                  <input 
                    type="text" 
                    className="form-input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Password / Mobile PIN</label>
                  <div className="input-with-icon">
                    <Lock size={16} className="input-icon" />
                    <input 
                      type="password" 
                      className="form-input pl-10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="quick-account-hint">
                  <div className="hint-pill">
                    <UserCheck size={14} className="text-emerald-500" />
                    <span>Demo Profile: Adewale Okonkwo (Active)</span>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="submit-action-btn"
                  disabled={loading}
                >
                  {loading ? 'Authenticating...' : 'Sign In Securely'}
                </button>

                <div className="sheet-extra-links">
                  <button type="button" className="link-btn">Forgot Password?</button>
                  <span className="dot-sep">•</span>
                  <button type="button" className="link-btn">Register Token</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Account Opening Modal */}
      {showAccountModal && (
        <div className="modal-backdrop" onClick={() => setShowAccountModal(false)}>
          <div 
            className="modal-container"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
          >
            <div className="modal-header">
              <div>
                <h3 className="modal-title">Open a Zenith Account</h3>
                <p className="modal-subtitle">Instant setup with your BVN / Phone Number</p>
              </div>
              <button 
                type="button" 
                className="modal-close-btn"
                onClick={() => setShowAccountModal(false)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <div className="account-tier-card">
                <div className="tier-badge">TIER 1 INSTANT</div>
                <h4>Zenith Aspire / Individual Savings</h4>
                <p>Zero opening balance, instant debit card, unlimited mobile banking.</p>
              </div>
              <div className="form-group">
                <label>Bank Verification Number (BVN)</label>
                <input type="text" className="form-input" placeholder="22000000000" defaultValue="22198048291" />
              </div>
              <div className="form-group">
                <label>Phone Number (Linked to BVN)</label>
                <input type="tel" className="form-input" placeholder="0803 000 0000" defaultValue="0802 345 6789" />
              </div>
              <button 
                type="button"
                className="submit-action-btn"
                onClick={() => {
                  setShowAccountModal(false);
                  onLogin?.();
                }}
              >
                Continue to Verification
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
