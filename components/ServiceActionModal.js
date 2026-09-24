'use client';

import { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ServiceActionModal({ service, onClose }) {
  const [step, setStep] = useState('form');
  const [amount, setAmount] = useState('5,000.00');
  const [beneficiary, setBeneficiary] = useState('0219883412 - Zenith Bank');
  const [note, setNote] = useState('');
  const [pin, setPin] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!service) return null;

  const handleConfirm = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('success');
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#E31B23', '#222222', '#FFFFFF', '#F59E0B'],
        });
      } catch (err) {
        // ignore
      }
    }, 700);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-header">
          <div className="modal-title-wrap">
            <div className="modal-badge-icon">
              {service.icon ? <service.icon size={20} className="text-zenith-red" /> : null}
            </div>
            <div>
              <h3 className="modal-title">{service.name || 'Zenith Service'}</h3>
              <p className="modal-subtitle">Zenith Direct Banking Operation</p>
            </div>
          </div>
          <button 
            type="button" 
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {step === 'form' ? (
            <form onSubmit={handleConfirm} className="modal-form">
              <div className="account-summary-pill">
                <div className="acc-info">
                  <span className="acc-type">SAVINGS ACCOUNT</span>
                  <span className="acc-num">2109845123 • Adewale O.</span>
                </div>
                <div className="acc-bal">
                  <small>Available</small>
                  <strong>₦ 1,842,500.00</strong>
                </div>
              </div>

              {service.isTransfer && (
                <>
                  <div className="form-group">
                    <label>Destination Account</label>
                    <select 
                      className="form-input"
                      value={beneficiary}
                      onChange={(e) => setBeneficiary(e.target.value)}
                    >
                      <option value="0219883412 - Zenith Bank">0219883412 - Funke Akindele (Zenith)</option>
                      <option value="0124859302 - GTBank">0124859302 - Babatunde Raji (GTBank)</option>
                      <option value="2034928174 - Access Bank">2034928174 - Kemi Adeosun (Access)</option>
                      <option value="new">+ Enter New Beneficiary</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Amount (NGN)</label>
                    <input 
                      type="text" 
                      className="form-input amount-input"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                    />
                  </div>
                </>
              )}

              {service.isAirtime && (
                <>
                  <div className="form-group">
                    <label>Network Provider</label>
                    <div className="network-pills">
                      <button type="button" className="network-pill active">MTN</button>
                      <button type="button" className="network-pill">Airtel</button>
                      <button type="button" className="network-pill">Glo</button>
                      <button type="button" className="network-pill">9mobile</button>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Mobile Number</label>
                    <input 
                      type="tel" 
                      className="form-input" 
                      defaultValue="0803 456 7890" 
                    />
                  </div>
                  <div className="form-group">
                    <label>Recharge Amount (NGN)</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                </>
              )}

              {!service.isTransfer && !service.isAirtime && (
                <div className="service-details-card">
                  <div className="service-detail-desc">
                    {service.description || `Submit your request for ${service.name}. Our 24/7 Zenith Customer Service will process it immediately.`}
                  </div>
                  <div className="form-group" style={{ marginTop: '16px' }}>
                    <label>Remarks / Reference</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. Urgent request, Delivery to Victoria Island branch"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    />
                  </div>
                </div>
              )}

              <div className="form-group">
                <label className="pin-label">
                  <span>Enter 4-Digit Transaction PIN</span>
                  <span className="secure-badge"><ShieldCheck size={14} /> Encrypted</span>
                </label>
                <input 
                  type="password"
                  maxLength={4}
                  className="form-input pin-input"
                  placeholder="••••"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  required
                />
              </div>

              <button 
                type="submit" 
                className="submit-action-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : (
                  <>
                    <span>Confirm & Execute</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="modal-success-view">
              <div className="success-icon-wrap">
                <CheckCircle2 size={54} className="text-emerald-500" />
              </div>
              <h4 className="success-title">Request Successful!</h4>
              <p className="success-msg">
                Your request for <strong>{service.name}</strong> has been authorized and queued with Zenith Core Banking.
              </p>
              <div className="receipt-box">
                <div className="receipt-row">
                  <span>Reference ID</span>
                  <strong>ZNT-{Math.floor(100000000 + Math.random() * 900000000)}</strong>
                </div>
                <div className="receipt-row">
                  <span>Timestamp</span>
                  <span>{new Date().toLocaleTimeString()} • Today</span>
                </div>
                <div className="receipt-row">
                  <span>Status</span>
                  <span className="status-tag-pill">AUTHORIZED</span>
                </div>
              </div>

              <button 
                type="button" 
                className="submit-action-btn"
                onClick={onClose}
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
