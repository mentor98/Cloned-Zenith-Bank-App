'use client';

import {
  LayoutDashboard,
  Grid,
  Layers,
  Compass,
  CreditCard,
  Users,
  Receipt,
  Smartphone,
  ArrowLeftRight,
  ShieldCheck,
  FileBarChart,
  Headphones,
  Settings,
  LogOut,
  PhoneCall
} from 'lucide-react';

export default function DesktopSidebar({ 
  activeTab, 
  onSelectTab, 
  onLogout,
  onOpenService
}) {
  const primaryNav = [
    { id: 'dashboard', label: 'Accounts Overview', icon: LayoutDashboard, badge: null },
    { id: 'customize', label: 'Quick Services Hub', icon: Grid, badge: '16' },
    { id: 'products', label: 'Products & Services', icon: Layers, badge: '7' },
    { id: 'lifestyle', label: 'Zenith LifeStyle', icon: Compass, badge: 'Privilege' },
    { id: 'cards', label: 'Cards & Limits', icon: CreditCard, badge: null },
    { id: 'statements', label: 'Statements & Reports', icon: FileBarChart, badge: null },
  ];

  const quickTransfers = [
    { id: 'transfer', label: 'Bank Transfer', icon: ArrowLeftRight },
    { id: 'bills', label: 'Pay Bills & Utilities', icon: Receipt },
    { id: 'airtime', label: 'Airtime & Data', icon: Smartphone },
    { id: 'beneficiaries', label: 'Saved Beneficiaries', icon: Users },
  ];

  return (
    <aside className="portal-sidebar" aria-label="Main Navigation">
      <div className="sidebar-inner">
        {/* Navigation Category: Banking Modules */}
        <div className="sidebar-nav-section">
          <span className="sidebar-section-title">MAIN BANKING</span>
          <nav className="sidebar-nav-list">
            {primaryNav.map((item) => {
              const IconComp = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`sidebar-nav-item ${isActive ? 'active' : ''}`}
                  onClick={() => onSelectTab(item.id)}
                >
                  <div className="sidebar-icon-wrap">
                    <IconComp size={18} strokeWidth={isActive ? 2.4 : 1.8} />
                  </div>
                  <span className="sidebar-item-label">{item.label}</span>
                  {item.badge && (
                    <span className={`sidebar-item-badge ${item.badge === 'Privilege' ? 'badge-gold' : ''}`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Navigation Category: Payments & Transfers */}
        <div className="sidebar-nav-section">
          <span className="sidebar-section-title">PAYMENTS & TRANSFERS</span>
          <nav className="sidebar-nav-list">
            {quickTransfers.map((item) => {
              const IconComp = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  className="sidebar-nav-item secondary"
                  onClick={() => onOpenService(item.id)}
                >
                  <div className="sidebar-icon-wrap">
                    <IconComp size={17} />
                  </div>
                  <span className="sidebar-item-label">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Help & 24/7 Zenith Support Box */}
        <div className="sidebar-support-card">
          <div className="support-card-header">
            <Headphones size={18} className="text-zenith-red" />
            <span className="support-card-title">24/7 ZenithDirect</span>
          </div>
          <p className="support-card-desc">
            Need emergency card freeze or transaction assistance?
          </p>
          <a href="tel:+23412787000" className="support-phone-link">
            <PhoneCall size={13} />
            <span>+234 1 278 7000</span>
          </a>
        </div>

        {/* Bottom User Controls */}
        <div className="sidebar-bottom-block">
          <div className="sidebar-compliance-badge">
            <ShieldCheck size={14} className="text-emerald-500" />
            <span>NDIC Insured • CBN Licensed</span>
          </div>
          <button 
            type="button"
            className="sidebar-logout-button"
            onClick={onLogout}
          >
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
