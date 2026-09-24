'use client';

import { useState } from 'react';
import {
  Plane,
  Building2,
  Car,
  Sparkles,
  ShieldCheck,
  Check,
  Calendar,
  MapPin,
  Users,
  Search,
  ArrowRight,
  Clock,
  Crown,
  ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DesktopLifestyle() {
  const [activeCategory, setActiveCategory] = useState('flights'); // flights, hotels, transport
  const [bookingOrigin, setBookingOrigin] = useState('Lagos (LOS)');
  const [bookingDestination, setBookingDestination] = useState('London Heathrow (LHR)');
  const [bookingDate, setBookingDate] = useState('2026-10-15');
  const [passengers, setPassengers] = useState('1 Adult, Business Class');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const perks = [
    'Complimentary Zenith Platinum Airport Lounge Access (500+ global lounges)',
    'Up to 15% instant discount applied at checkout with Zenith Visa/Mastercard',
    'Dedicated 24/7 Zenith Concierge & VIP Fast-Track airport clearance',
    'Free cancellation up to 48 hours before scheduled departure',
  ];

  const handleBookNow = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E31B23', '#F59E0B', '#111827'],
      });
    } catch (err) {}
  };

  return (
    <div className="desktop-lifestyle-page">
      {/* Hero Banner */}
      <div className="lifestyle-hero-banner">
        <div className="lifestyle-hero-inner">
          <div className="lifestyle-hero-kicker">
            <Crown size={14} className="text-amber-400" />
            <span>ZENITH PRIVILEGE CONCIERGE & TRAVEL</span>
          </div>
          <h2 className="lifestyle-hero-title">Elevate Your World in Uncompromising Luxury</h2>
          <p className="lifestyle-hero-desc">
            As a valued Zenith cardholder, unlock preferential corporate fares, complimentary 5-star hotel upgrades, and executive chauffeur services across the globe.
          </p>

          <div className="lifestyle-perks-inline">
            {perks.map((perk, i) => (
              <div key={i} className="perk-inline-item">
                <Check size={14} className="text-emerald-400 shrink-0" />
                <span>{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Booking Search Widget */}
      <div className="lifestyle-booking-bar">
        <div className="booking-tabs-row">
          <button
            type="button"
            className={`booking-tab-btn ${activeCategory === 'flights' ? 'active' : ''}`}
            onClick={() => {
              setActiveCategory('flights');
              setBookingSuccess(false);
            }}
          >
            <Plane size={16} />
            <span>Flights</span>
          </button>
          <button
            type="button"
            className={`booking-tab-btn ${activeCategory === 'hotels' ? 'active' : ''}`}
            onClick={() => {
              setActiveCategory('hotels');
              setBookingSuccess(false);
            }}
          >
            <Building2 size={16} />
            <span>5-Star Hotels</span>
          </button>
          <button
            type="button"
            className={`booking-tab-btn ${activeCategory === 'transport' ? 'active' : ''}`}
            onClick={() => {
              setActiveCategory('transport');
              setBookingSuccess(false);
            }}
          >
            <Car size={16} />
            <span>Executive Transport</span>
          </button>
        </div>

        {bookingSuccess ? (
          <div className="booking-confirmed-box">
            <div className="confirmed-check-wrap">
              <Check size={28} className="text-emerald-500" />
            </div>
            <h4>Zenith Privilege Reservation Initiated!</h4>
            <p>
              Your reservation request for <strong>{bookingOrigin} → {bookingDestination}</strong> has been logged. Our VIP Concierge desk will send confirmed tickets & itinerary to your Zenith registered email within 15 minutes.
            </p>
            <div className="booking-coupon-chip">PROMO APPLIED: ZENITHVIP-15% OFF</div>
            <button
              type="button"
              className="btn-book-another"
              onClick={() => setBookingSuccess(false)}
            >
              Book Another Service
            </button>
          </div>
        ) : (
          <form onSubmit={handleBookNow} className="booking-form-grid">
            <div className="booking-field">
              <label>Origin / Pick-up</label>
              <div className="booking-input-wrap">
                <MapPin size={16} className="text-gray-400" />
                <input
                  type="text"
                  value={bookingOrigin}
                  onChange={(e) => setBookingOrigin(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="booking-field">
              <label>Destination / Property</label>
              <div className="booking-input-wrap">
                <MapPin size={16} className="text-gray-400" />
                <input
                  type="text"
                  value={bookingDestination}
                  onChange={(e) => setBookingDestination(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="booking-field">
              <label>Travel Date</label>
              <div className="booking-input-wrap">
                <Calendar size={16} className="text-gray-400" />
                <input
                  type="date"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="booking-field">
              <label>Travelers / Class</label>
              <div className="booking-input-wrap">
                <Users size={16} className="text-gray-400" />
                <input
                  type="text"
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="booking-btn-wrap">
              <button type="submit" className="btn-search-lifestyle">
                <Search size={16} />
                <span>Search VIP Rates</span>
              </button>
            </div>
          </form>
        )}
      </div>

      {/* The 3 Figma Luxury Deck Cards (Desktop 3-Column Display) */}
      <div className="lifestyle-cards-deck">
        {/* Card 1: Flights */}
        <div className="luxury-deck-card">
          <div className="deck-card-top">
            <div className="deck-icon-badge">
              <Plane size={24} className="text-amber-400" />
            </div>
            <div className="deck-discount-badge">Up to 15% Off</div>
          </div>

          <div className="deck-card-content">
            <span className="deck-kicker">PREMIER AIRLINE PARTNERS</span>
            <h3 className="deck-title">Flights & Private Aviation</h3>
            <p className="deck-desc">
              Preferred partner fares with Emirates, British Airways, Virgin Atlantic, Qatar Airways, and chartered private jet hire.
            </p>

            <div className="deck-feature-list">
              <div className="deck-feature-item">
                <Check size={14} className="text-amber-400" />
                <span>Fast-track check-in & priority boarding</span>
              </div>
              <div className="deck-feature-item">
                <Check size={14} className="text-amber-400" />
                <span>Extra 23kg baggage allowance on partner routes</span>
              </div>
              <div className="deck-feature-item">
                <Check size={14} className="text-amber-400" />
                <span>Airport lounge pass with free champagne</span>
              </div>
            </div>
          </div>

          <div className="deck-card-footer">
            <button
              type="button"
              className="btn-deck-action"
              onClick={() => {
                setActiveCategory('flights');
                window.scrollTo({ top: 200, behavior: 'smooth' });
              }}
            >
              <span>Explore Flight Fares</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Card 2: Hotels */}
        <div className="luxury-deck-card">
          <div className="deck-card-top">
            <div className="deck-icon-badge">
              <Building2 size={24} className="text-amber-400" />
            </div>
            <div className="deck-discount-badge">VIP Upgrade</div>
          </div>

          <div className="deck-card-content">
            <span className="deck-kicker">GLOBAL LUXURY HOSPITALITY</span>
            <h3 className="deck-title">5-Star Hotels & Resorts</h3>
            <p className="deck-desc">
              Exclusive privileges at Marriott Luxury Collection, Four Seasons, Transcorp Hilton, and boutique private villas.
            </p>

            <div className="deck-feature-list">
              <div className="deck-feature-item">
                <Check size={14} className="text-amber-400" />
                <span>Complimentary room upgrade upon arrival</span>
              </div>
              <div className="deck-feature-item">
                <Check size={14} className="text-amber-400" />
                <span>Daily gourmet breakfast for two guests</span>
              </div>
              <div className="deck-feature-item">
                <Check size={14} className="text-amber-400" />
                <span>Guaranteed 4:00 PM late check-out privilege</span>
              </div>
            </div>
          </div>

          <div className="deck-card-footer">
            <button
              type="button"
              className="btn-deck-action"
              onClick={() => {
                setActiveCategory('hotels');
                window.scrollTo({ top: 200, behavior: 'smooth' });
              }}
            >
              <span>Reserve 5-Star Stay</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Card 3: Transportation */}
        <div className="luxury-deck-card">
          <div className="deck-card-top">
            <div className="deck-icon-badge">
              <Car size={24} className="text-amber-400" />
            </div>
            <div className="deck-discount-badge">Priority Chauffeur</div>
          </div>

          <div className="deck-card-content">
            <span className="deck-kicker">EXECUTIVE MOBILITY</span>
            <h3 className="deck-title">Chauffeur & Mobility</h3>
            <p className="deck-desc">
              Chauffeured Mercedes S-Class, armored VIP SUVs, and global Hertz/Sixt premium car rental rates in 120+ countries.
            </p>

            <div className="deck-feature-list">
              <div className="deck-feature-item">
                <Check size={14} className="text-amber-400" />
                <span>Airport curbside VIP pickup & baggage handling</span>
              </div>
              <div className="deck-feature-item">
                <Check size={14} className="text-amber-400" />
                <span>Vetted, security-trained professional chauffeurs</span>
              </div>
              <div className="deck-feature-item">
                <Check size={14} className="text-amber-400" />
                <span>Flat corporate rates with zero surge pricing</span>
              </div>
            </div>
          </div>

          <div className="deck-card-footer">
            <button
              type="button"
              className="btn-deck-action"
              onClick={() => {
                setActiveCategory('transport');
                window.scrollTo({ top: 200, behavior: 'smooth' });
              }}
            >
              <span>Book Chauffeur Ride</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
