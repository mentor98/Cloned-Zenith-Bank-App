'use client';

import { useState } from 'react';
import {
  Lock,
  User,
  KeyRound,
  ShieldCheck,
  TrendingUp,
  PhoneCall,
  Smartphone,
  Monitor,
  CheckCircle2,
  ArrowRight,
  Eye,
  EyeOff,
  Sparkles
} from 'lucide-react';
import ZenithLogo from './ZenithLogo';

export default function DesktopWelcome({ 
  onLogin, 
  onOpenAccount,
  onToggleViewMode,
  viewMode 
}) {
  const [accountNumber, setAccountNumber] = useState('2109845123');
  const [password, setPassword] = useState('••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [useToken, setUseToken] = useState(false);
  const [tokenCode, setTokenCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin({
        name: 'Adewale Okonkwo',
        accountNumber: accountNumber || '2109845123',
      });
    }, 400);
  };

  const handleQuickDemoLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin({
        name: 'Adewale Okonkwo',
        accountNumber: '2109845123',
      });
    }, 300);
  };

  return (
    <div className="desktop-welcome-wrapper">
      {/* Top Utility Bar */}
      <div className="welcome-top-utility">
        <div className="welcome-utility-left">
          <div className="utility-badge">
            <ShieldCheck size={14} className="text-emerald-500" />
            <span>Official Zenith Bank Plc Secure Internet Banking Portal</span>
          </div>
        </div>

        <div className="welcome-utility-right">
          {/* Switch to Mobile View Toggle */}
          <div className="device-mode-segmented">
            <button
              type="button"
              className={`device-btn ${viewMode === 'desktop' ? 'active' : ''}`}
              onClick={() => onToggleViewMode('desktop')}
            >
              <Monitor size={14} />
              <span>Desktop Portal</span>
            </button>
            <button
              type="button"
              className={`device-btn ${viewMode === 'mobile' ? 'active' : ''}`}
              onClick={() => onToggleViewMode('mobile')}
            >
              <Smartphone size={14} />
              <span>Mobile Figma (390px)</span>
            </button>
          </div>

          <div className="utility-help">
            <PhoneCall size={14} className="text-zenith-red" />
            <span>24/7 Helpline: <strong>+234 1 278 7000</strong></span>
          </div>
        </div>
      </div>

      {/* Main Split Hero & Login Section */}
      <div className="welcome-main-split">
        {/* Left Side: Brand Story & Values */}
        <div className="welcome-brand-column">
          <div className="brand-emblem-cluster">
            <ZenithLogo size="large" />
          </div>

          <div className="welcome-headline-group">
            <span className="welcome-kicker">INTERNET BANKING PLATFORM</span>
            <h1 className="welcome-hero-headline">
              Making Life Simple.
            </h1>
            <p className="welcome-hero-sub">
              Experience the freedom of banking on your own terms. Manage multi-currency accounts, instant transfers, commercial drafts, and concierge travel with bank-grade 256-bit encryption.
            </p>
          </div>

          {/* Security & Regulatory Accreditations */}
          <div className="welcome-accreditations-grid">
            <div className="accreditation-box">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <div>
                <strong>CBN Licensed</strong>
                <span>Fully regulated by Central Bank of Nigeria</span>
              </div>
            </div>
            <div className="accreditation-box">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <div>
                <strong>NDIC Insured</strong>
                <span>All customer deposits guaranteed</span>
              </div>
            </div>
            <div className="accreditation-box">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <div>
                <strong>ISO/IEC 27001</strong>
                <span>Global benchmark information security</span>
              </div>
            </div>
            <div className="accreditation-box">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <div>
                <strong>Zero-Trust Architecture</strong>
                <span>Hardware token & biometric validation</span>
              </div>
            </div>
          </div>

          {/* Live Market FX Ticker */}
          <div className="welcome-fx-box">
            <div className="welcome-fx-header">
              <TrendingUp size={14} className="text-emerald-400" />
              <span>INDICATIVE INTERBANK FX RATES (CBN)</span>
            </div>
            <div className="welcome-fx-grid">
              <div className="welcome-fx-item">
                <span className="fx-pair">USD / NGN</span>
                <strong className="fx-val tabular-nums">₦ 1,510.50</strong>
              </div>
              <div className="welcome-fx-item">
                <span className="fx-pair">GBP / NGN</span>
                <strong className="fx-val tabular-nums">₦ 1,985.20</strong>
              </div>
              <div className="welcome-fx-item">
                <span className="fx-pair">EUR / NGN</span>
                <strong className="fx-val tabular-nums">₦ 1,675.00</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Secure Authentication Card */}
        <div className="welcome-form-column">
          <div className="auth-portal-card">
            <div className="auth-card-header">
              <div className="auth-icon-badge">
                <Lock size={20} className="text-zenith-red" />
              </div>
              <div>
                <h3 className="auth-card-title">Sign in to Zenith Internet Banking</h3>
                <p className="auth-card-subtitle">Enter your NUBAN account number or internet banking username</p>
              </div>
            </div>

            {/* Quick Demo Login Banner */}
            <div className="demo-account-banner">
              <div className="demo-banner-text">
                <Sparkles size={16} className="text-zenith-red shrink-0" />
                <div>
                  <strong>Demo Mode Active</strong>
                  <p>Click below to sign in immediately with sample account credentials.</p>
                </div>
              </div>
              <button
                type="button"
                className="btn-demo-quick-login"
                onClick={handleQuickDemoLogin}
                disabled={loading}
              >
                {loading ? 'Entering...' : 'Instant 1-Click Demo Login'}
              </button>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="auth-form-group">
                <label className="auth-label">Account Number or Username</label>
                <div className="auth-input-wrapper">
                  <User size={16} className="auth-field-icon" />
                  <input
                    type="text"
                    className="auth-input-field"
                    placeholder="Enter 10-digit NUBAN"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="auth-form-group">
                <div className="password-header-row">
                  <label className="auth-label">Internet Banking Password</label>
                  <a href="#forgot" onClick={(e) => { e.preventDefault(); alert('Password reset initiated. An SMS OTP has been sent to your registered phone.'); }} className="forgot-link">
                    Forgot Password?
                  </a>
                </div>
                <div className="auth-input-wrapper">
                  <KeyRound size={16} className="auth-field-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="auth-input-field"
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="btn-toggle-pw"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              {/* Hardware Token Toggle */}
              <div className="token-toggle-row">
                <label className="token-checkbox-label">
                  <input
                    type="checkbox"
                    checked={useToken}
                    onChange={(e) => setUseToken(e.target.checked)}
                  />
                  <span>Authenticate with Zenith Hardware Token</span>
                </label>
              </div>

              {useToken && (
                <div className="auth-form-group">
                  <label className="auth-label">Enter 6-Digit Token OTP</label>
                  <input
                    type="text"
                    maxLength={6}
                    className="auth-input-field token-input"
                    placeholder="e.g. 849201"
                    value={tokenCode}
                    onChange={(e) => setTokenCode(e.target.value)}
                    required
                  />
                </div>
              )}

              <button
                type="submit"
                className="btn-submit-login"
                disabled={loading}
              >
                {loading ? 'Authenticating...' : 'Sign In to Zenith Web'}
              </button>
            </form>

            <div className="auth-card-footer">
              <div className="new-user-row">
                <span>Don&apos;t have a Zenith account?</span>
                <button
                  type="button"
                  className="btn-open-acc-link"
                  onClick={onOpenAccount}
                >
                  <span>Open an account online</span>
                  <ArrowRight size={14} />
                </button>
              </div>

              <div className="auth-security-notice">
                <ShieldCheck size={14} className="text-gray-400 shrink-0" />
                <span>Zenith Bank will never ask for your full 16-digit card PIN or online banking token over email, phone, or SMS.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
