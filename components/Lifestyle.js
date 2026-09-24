'use client';

import { useState } from 'react';
import {
  Plane,
  Building2,
  Car,
  Compass,
  ArrowRight,
  Sparkles,
  MapPin,
  Calendar,
  Users,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import MobileHeader from './MobileHeader';
import BottomNav from './BottomNav';
import confetti from 'canvas-confetti';

export default function Lifestyle({ onBack, onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [destination, setDestination] = useState('London Heathrow (LHR)');
  const [dates, setDates] = useState('Oct 12 - Oct 20, 2026');
  const [tierDiscount, setTierDiscount] = useState('15% Platinum Saver');

  const cards = [
    {
      id: 'flights',
      title: 'Flights',
      desc: 'Book and manage flights',
      icon: Plane,
      tag: 'AIRLINES PARTNER',
      highlight: 'Up to 15% discount on international flights with Zenith Platinum cards',
      popular: 'London, Dubai, New York, Accra, Paris',
    },
    {
      id: 'hotels',
      title: 'Hotels',
      desc: 'Find and reserve hotels',
      icon: Building2,
      tag: '5-STAR HOSPITALITY',
      highlight: 'Complimentary breakfast, late check-out & exclusive room upgrades',
      popular: 'Marriott, Radisson Blu, Hilton, Eko Hotels',
    },
    {
      id: 'transportation',
      title: 'Transportation',
      desc: 'Explore transportation options',
      icon: Car,
      tag: 'PREMIUM MOBILITY',
      highlight: 'Priority airport transfers, chauffeur service & worldwide car rentals',
      popular: 'Airport Shuttles, Chauffeur Drive, Self-Drive SUVs',
    },
  ];

  const handleBook = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#E31B23', '#F59E0B', '#10B981'],
      });
    } catch (err) {
      // ignore
    }
  };

  return (
    <div className="mobile-frame lifestyle-screen">
      <MobileHeader 
        title="LifeStyle" 
        onBack={onBack} 
      />

      <div className="lifestyle-intro">
        <div className="lifestyle-perk-badge">
          <Sparkles size={14} className="text-amber-400" />
          <span>ZENITH PRIVILEGE CLUB</span>
        </div>
        <p className="lifestyle-intro-text">
          Curated travel, hospitality, and concierge benefits tailored for you.
        </p>
      </div>

      <div className="lifestyle-cards">
        {cards.map((c) => {
          const IconComponent = c.icon;
          return (
            <button
              key={c.id}
              type="button"
              className="lifestyle-card"
              onClick={() => {
                setSelectedCategory(c);
                setBookingConfirmed(false);
              }}
            >
              <div className="lifestyle-card-backdrop" />
              <div className="lifestyle-card-content">
                <div className="lifestyle-header-row">
                  <div className="lifestyle-icon-badge">
                    <IconComponent size={24} className="lifestyle-icon" />
                  </div>
                  <span className="lifestyle-tag">{c.tag}</span>
                </div>

                <div className="lifestyle-card-text">
                  <strong className="lifestyle-card-title">{c.title}</strong>
                  <small className="lifestyle-card-desc">{c.desc}</small>
                  <p className="lifestyle-card-perk">{c.highlight}</p>
                </div>

                <div className="lifestyle-card-footer">
                  <span className="lifestyle-action-label">Explore Offers</span>
                  <div className="lifestyle-arrow-btn">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <BottomNav onNavigate={onNavigate || onBack} active="more" />

      {/* Interactive Booking Modal */}
      {selectedCategory && (
        <div className="modal-backdrop" onClick={() => setSelectedCategory(null)}>
          <div 
            className="modal-container lifestyle-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
          >
            <div className="modal-header">
              <div className="modal-title-wrap">
                <div className="modal-badge-icon">
                  <selectedCategory.icon size={22} className="text-zenith-red" />
                </div>
                <div>
                  <h3 className="modal-title">Zenith {selectedCategory.title} Concierge</h3>
                  <p className="modal-subtitle">{selectedCategory.desc}</p>
                </div>
              </div>
              <button 
                type="button" 
                className="modal-close-btn"
                onClick={() => setSelectedCategory(null)}
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              {!bookingConfirmed ? (
                <form onSubmit={handleBook} className="modal-form">
                  <div className="lifestyle-offer-banner">
                    <Sparkles size={16} className="text-amber-300" />
                    <span>Exclusive Zenith Cardholder Fare Applied (-15%)</span>
                  </div>

                  <div className="form-group">
                    <label>Destination / City</label>
                    <div className="input-with-icon">
                      <MapPin size={16} className="input-icon" />
                      <input 
                        type="text" 
                        className="form-input pl-10"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Travel Dates</label>
                    <div className="input-with-icon">
                      <Calendar size={16} className="input-icon" />
                      <input 
                        type="text" 
                        className="form-input pl-10"
                        value={dates}
                        onChange={(e) => setDates(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Cardholder Benefit Tier</label>
                    <select 
                      className="form-input"
                      value={tierDiscount}
                      onChange={(e) => setTierDiscount(e.target.value)}
                    >
                      <option value="15% Platinum Saver">Zenith Platinum Visa (15% Cash rebate)</option>
                      <option value="20% Infinite Luxury">Zenith Visa Infinite (20% Off + Lounge access)</option>
                      <option value="10% Gold Standard">Zenith Gold Mastercard (10% Off)</option>
                    </select>
                  </div>

                  <div className="partner-logos-row">
                    <small>Partnered with Emirates, British Airways, Qatar Airways, Marriott & Hertz</small>
                  </div>

                  <button type="submit" className="submit-action-btn">
                    <span>Search & Reserve with Zenith Perks</span>
                    <ArrowRight size={18} />
                  </button>
                </form>
              ) : (
                <div className="modal-success-view">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={54} className="text-emerald-500" />
                  </div>
                  <h4 className="success-title">Reservation Confirmed!</h4>
                  <p className="success-msg">
                    Your {selectedCategory.title.toLowerCase()} booking to <strong>{destination}</strong> has been secured with your Zenith Cardholder privilege discount.
                  </p>
                  <div className="receipt-box">
                    <div className="receipt-row">
                      <span>Booking Ref</span>
                      <strong>Z-LIFE-{Math.floor(100000 + Math.random() * 900000)}</strong>
                    </div>
                    <div className="receipt-row">
                      <span>Dates</span>
                      <span>{dates}</span>
                    </div>
                    <div className="receipt-row">
                      <span>Card Discount</span>
                      <span className="text-emerald-600 font-semibold">{tierDiscount}</span>
                    </div>
                  </div>
                  <button 
                    type="button" 
                    className="submit-action-btn"
                    onClick={() => setSelectedCategory(null)}
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
