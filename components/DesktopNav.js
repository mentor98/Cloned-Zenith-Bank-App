'use client';

import { useState } from 'react';
import { 
  Search, 
  Bell, 
  HelpCircle, 
  ArrowLeftRight, 
  TrendingUp, 
  ShieldCheck, 
  LogOut, 
  Smartphone, 
  Monitor,
  Check,
  ChevronDown
} from 'lucide-react';
import ZenithLogo from './ZenithLogo';

export default function DesktopNav({ 
  user, 
  onLogout, 
  viewMode, 
  onToggleViewMode,
  onQuickTransfer,
  onSearch,
  activeAccount,
  onSelectAccount
}) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  const notifications = [
    { id: 1, title: 'Inflow: ₦250,000.00', time: '10 mins ago', desc: 'Transfer from CHEVRON NIGERIA LTD' },
    { id: 2, title: 'Scheduled Bill Due', time: '2 hours ago', desc: 'Eko Electricity Distribution (EKEDC) due in 3 days' },
    { id: 3, title: 'Security Alert', time: 'Yesterday', desc: 'New login from Chrome on Windows 11 (Victoria Island)' },
  ];

  const accounts = [
    { id: 'savings', name: 'Zenith Classic Savings', num: '2109845123', balance: '₦ 1,842,500.00' },
    { id: 'domiciliary', name: 'Zenith Domiciliary (USD)', num: '5070192834', balance: '$ 14,850.00' },
    { id: 'corporate', name: 'Zenith Aspire Corporate', num: '1002938475', balance: '₦ 4,650,200.00' },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchVal);
  };

  return (
    <header className="portal-header">
      {/* Left: Brand & Currency Ticker */}
      <div className="portal-header-left">
        <div className="portal-brand-block">
          <ZenithLogo size="medium" />
        </div>

        {/* Live FX Rates Ticker */}
        <div className="fx-rates-ticker">
          <div className="fx-ticker-badge">
            <TrendingUp size={13} className="text-emerald-500" />
            <span>FX RATES</span>
          </div>
          <div className="fx-rates-list">
            <span className="fx-rate-item">USD/NGN <strong>₦1,510.50</strong></span>
            <span className="fx-divider">|</span>
            <span className="fx-rate-item">GBP/NGN <strong>₦1,985.20</strong></span>
            <span className="fx-divider">|</span>
            <span className="fx-rate-item">EUR/NGN <strong>₦1,675.00</strong></span>
          </div>
        </div>
      </div>

      {/* Center: Global Search */}
      <div className="portal-header-center">
        <form onSubmit={handleSearchSubmit} className="portal-search-form">
          <Search size={16} className="search-icon-muted" />
          <input
            type="text"
            className="portal-search-input"
            placeholder="Search transfers, bills, beneficiaries, or services..."
            value={searchVal}
            onChange={(e) => {
              setSearchVal(e.target.value);
              if (onSearch) onSearch(e.target.value);
            }}
          />
        </form>
      </div>

      {/* Right: Actions, Notifications, Account Switcher & View Mode Toggle */}
      <div className="portal-header-right">
        {/* Device Mode Switcher */}
        <div className="device-mode-segmented">
          <button
            type="button"
            className={`device-btn ${viewMode === 'desktop' ? 'active' : ''}`}
            onClick={() => onToggleViewMode('desktop')}
            title="Desktop Online Banking Portal"
          >
            <Monitor size={15} />
            <span>Web Portal</span>
          </button>
          <button
            type="button"
            className={`device-btn ${viewMode === 'mobile' ? 'active' : ''}`}
            onClick={() => onToggleViewMode('mobile')}
            title="Mobile Banking App (Figma 390px)"
          >
            <Smartphone size={15} />
            <span>Mobile App</span>
          </button>
        </div>

        {/* Quick Transfer Button */}
        <button 
          type="button"
          className="btn-portal-primary"
          onClick={onQuickTransfer}
        >
          <ArrowLeftRight size={15} />
          <span>Quick Transfer</span>
        </button>

        {/* Notifications Dropdown */}
        <div className="relative">
          <button
            type="button"
            className="portal-icon-button"
            onClick={() => setShowNotifications(!showNotifications)}
            title="Notifications"
          >
            <Bell size={18} />
            <span className="portal-badge-dot" />
          </button>

          {showNotifications && (
            <div className="portal-dropdown-menu notifications-menu">
              <div className="dropdown-menu-header">
                <strong>Notifications</strong>
                <span className="text-xs text-zenith-red font-medium cursor-pointer">Mark all read</span>
              </div>
              <div className="dropdown-items-list">
                {notifications.map((n) => (
                  <div key={n.id} className="notification-row">
                    <div className="notif-title-row">
                      <span className="notif-title">{n.title}</span>
                      <span className="notif-time">{n.time}</span>
                    </div>
                    <p className="notif-desc">{n.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Security Trust Indicator */}
        <div className="security-indicator" title="256-Bit SSL Bank Grade Encryption Active">
          <ShieldCheck size={16} className="text-emerald-500" />
          <span className="security-text">Secure 256-Bit</span>
        </div>

        {/* Active Account Switcher */}
        <div className="relative">
          <button
            type="button"
            className="account-switcher-btn"
            onClick={() => setShowAccountDropdown(!showAccountDropdown)}
          >
            <div className="user-avatar-initials">AO</div>
            <div className="user-text-col">
              <span className="user-full-name">{user?.name || 'Adewale Okonkwo'}</span>
              <span className="user-account-sub">NUBAN: 2109845123</span>
            </div>
            <ChevronDown size={14} className="text-gray-400" />
          </button>

          {showAccountDropdown && (
            <div className="portal-dropdown-menu account-menu">
              <div className="dropdown-menu-header">
                <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Switch Account</span>
              </div>
              {accounts.map((acc) => (
                <button
                  key={acc.id}
                  type="button"
                  className={`account-menu-item ${activeAccount === acc.id ? 'active' : ''}`}
                  onClick={() => {
                    if (onSelectAccount) onSelectAccount(acc.id);
                    setShowAccountDropdown(false);
                  }}
                >
                  <div className="acc-item-left">
                    <span className="acc-item-title">{acc.name}</span>
                    <span className="acc-item-num">{acc.num}</span>
                  </div>
                  <strong className="acc-item-bal">{acc.balance}</strong>
                </button>
              ))}
              <div className="dropdown-menu-footer">
                <button
                  type="button"
                  className="logout-menu-btn"
                  onClick={onLogout}
                >
                  <LogOut size={15} />
                  <span>Sign Out of Zenith Web</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
