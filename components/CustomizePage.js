'use client';

import { useState } from 'react';
import {
  Home,
  Receipt,
  Smartphone,
  ArrowLeftRight,
  CreditCard,
  MapPin,
  Users,
  BadgeDollarSign,
  Layers,
  PieChart,
  Compass,
  Settings,
  Bell,
  QrCode,
  User,
  CalendarClock,
  Sliders,
  Check,
} from 'lucide-react';
import MobileHeader from './MobileHeader';
import BottomNav from './BottomNav';
import ServiceActionModal from './ServiceActionModal';

export default function CustomizePage({ onNavigate }) {
  const [activeModalService, setActiveModalService] = useState(null);
  const [customizingMode, setCustomizingMode] = useState(false);
  const [pinnedServices, setPinnedServices] = useState([
    'home', 'bills', 'airtime', 'transfer', 'cards', 'products', 'lifestyle', 'forex'
  ]);

  const services = [
    { id: 'home', label: 'Home', icon: Home, nav: 'welcome' },
    { id: 'bills', label: 'Pay Bills', icon: Receipt, isBill: true },
    { id: 'airtime', label: 'Airtime', icon: Smartphone, isAirtime: true },
    { id: 'transfer', label: 'Transfer', icon: ArrowLeftRight, isTransfer: true },
    { id: 'cards', label: 'Cards', icon: CreditCard },
    { id: 'locate', label: 'Locate Us', icon: MapPin },
    { id: 'beneficiaries', label: 'Manage Beneficiaries', icon: Users },
    { id: 'forex', label: 'Forex', icon: BadgeDollarSign },
    { id: 'products', label: 'Product & Services', icon: Layers, nav: 'products' },
    { id: 'pfm', label: 'Personal Finance Manager', icon: PieChart },
    { id: 'lifestyle', label: 'LifeStyle', icon: Compass, nav: 'lifestyle' },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'alerts', label: 'Alerts', icon: Bell },
    { id: 'qr', label: 'QR Payments', icon: QrCode },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'upcoming', label: 'Upcoming Payment', icon: CalendarClock },
  ];

  const handleCardClick = (item) => {
    if (customizingMode) {
      if (pinnedServices.includes(item.id)) {
        setPinnedServices(pinnedServices.filter((s) => s !== item.id));
      } else {
        setPinnedServices([...pinnedServices, item.id]);
      }
      return;
    }

    if (item.nav) {
      onNavigate?.(item.nav);
    } else {
      setActiveModalService({
        name: item.label,
        icon: item.icon,
        isTransfer: item.isTransfer,
        isAirtime: item.isAirtime,
      });
    }
  };

  return (
    <div className="mobile-frame customize-screen">
      <MobileHeader 
        title="Customize Page" 
        onBack={() => onNavigate?.('welcome')}
        rightAction={
          <button 
            type="button" 
            className={`customize-toggle-pill ${customizingMode ? 'active' : ''}`}
            onClick={() => setCustomizingMode(!customizingMode)}
            title="Toggle customize layout mode"
          >
            <Sliders size={16} />
            <span>{customizingMode ? 'Done' : 'Edit'}</span>
          </button>
        }
      />

      <div className="customize-banner">
        <p className="customize-hint-text">
          {customizingMode 
            ? 'Tap tiles to add or remove them from your quick dashboard' 
            : 'Select a service to initiate or navigate to Zenith features'}
        </p>
      </div>

      <div className="service-grid">
        {services.map((item) => {
          const IconComp = item.icon;
          const isPinned = pinnedServices.includes(item.id);

          return (
            <button
              key={item.id}
              type="button"
              className={`service-card ${isPinned ? 'is-pinned' : ''} ${customizingMode ? 'edit-mode' : ''}`}
              onClick={() => handleCardClick(item)}
            >
              {customizingMode && (
                <div className={`tile-pin-check ${isPinned ? 'checked' : ''}`}>
                  {isPinned ? <Check size={12} strokeWidth={3} /> : null}
                </div>
              )}
              <div className="service-icon-wrap">
                <IconComp className="service-icon" size={26} strokeWidth={2.1} />
              </div>
              <span className="service-card-label">{item.label}</span>
            </button>
          );
        })}
      </div>

      <BottomNav onNavigate={onNavigate} active="home" />

      {activeModalService && (
        <ServiceActionModal
          service={activeModalService}
          onClose={() => setActiveModalService(null)}
        />
      )}
    </div>
  );
}
