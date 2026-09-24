'use client';

import { useState, useEffect } from 'react';
import { Smartphone, Monitor, LogOut, ArrowLeftRight } from 'lucide-react';
import ZenithLogo from '../components/ZenithLogo';

// Desktop Components
import DesktopNav from '../components/DesktopNav';
import DesktopSidebar from '../components/DesktopSidebar';
import DesktopDashboard from '../components/DesktopDashboard';
import DesktopProducts from '../components/DesktopProducts';
import DesktopLifestyle from '../components/DesktopLifestyle';
import DesktopCards from '../components/DesktopCards';
import DesktopWelcome from '../components/DesktopWelcome';
import ServiceActionModal from '../components/ServiceActionModal';

// Mobile Figma Components
import Welcome from '../components/Welcome';
import CustomizePage from '../components/CustomizePage';
import ProductServices from '../components/ProductServices';
import Lifestyle from '../components/Lifestyle';

export default function Home() {
  const [viewMode, setViewMode] = useState('desktop'); // 'desktop' or 'mobile'
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState({
    name: 'Adewale Okonkwo',
    accountNumber: '2109845123',
    tier: 'Platinum Individual',
  });

  // Desktop active tab
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard', 'customize', 'products', 'lifestyle', 'cards', 'statements'
  const [activeAccount, setActiveAccount] = useState('savings');

  // Mobile active screen
  const [mobileScreen, setMobileScreen] = useState('customize'); // 'welcome', 'customize', 'products', 'lifestyle'

  // Global modal state for quick actions
  const [modalService, setModalService] = useState(null);

  // Auto-detect viewport on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) {
        setViewMode('mobile');
      }
    }
  }, []);

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    if (userData?.name) {
      setUser((prev) => ({ ...prev, ...userData }));
    }
    setActiveTab('dashboard');
    setMobileScreen('customize');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setMobileScreen('welcome');
  };

  const handleOpenService = (serviceData) => {
    if (typeof serviceData === 'string') {
      if (serviceData === 'transfer') {
        setModalService({ name: 'Bank Transfer', isTransfer: true });
      } else if (serviceData === 'bills') {
        setModalService({ name: 'Pay Bills & Utilities', isBill: true });
      } else if (serviceData === 'airtime') {
        setModalService({ name: 'Airtime & Mobile Data', isAirtime: true });
      } else if (serviceData === 'beneficiaries') {
        setModalService({ name: 'Saved Beneficiaries', description: 'Manage saved beneficiaries for fast transfers without token input.' });
      } else {
        setModalService({ name: serviceData });
      }
    } else {
      setModalService(serviceData);
    }
  };

  const handleQuickTransfer = () => {
    setModalService({ name: 'Quick Transfer', isTransfer: true });
  };

  // Switch between tabs in desktop
  const handleSelectTab = (tabId) => {
    if (tabId === 'customize') {
      setActiveTab('customize');
    } else {
      setActiveTab(tabId);
    }
  };

  // Mobile navigation helper
  const openMobileScreen = (target) => {
    if (target === 'home') {
      setMobileScreen('customize');
    } else {
      setMobileScreen(target);
    }
  };

  return (
    <div className={`zenith-app-root ${viewMode === 'desktop' ? 'root-desktop' : 'root-mobile'}`}>
      {/* ========================================================
          DESKTOP VIEW: WORLD-CLASS ONLINE BANKING WEB PLATFORM
         ======================================================== */}
      {viewMode === 'desktop' && (
        <div className="desktop-portal-layout">
          {!isLoggedIn ? (
            <DesktopWelcome
              onLogin={handleLogin}
              onOpenAccount={() => handleLogin({ name: 'Adewale Okonkwo' })}
              onToggleViewMode={setViewMode}
              viewMode={viewMode}
            />
          ) : (
            <div className="portal-authenticated-shell">
              {/* Desktop Topbar */}
              <DesktopNav
                user={user}
                onLogout={handleLogout}
                viewMode={viewMode}
                onToggleViewMode={setViewMode}
                onQuickTransfer={handleQuickTransfer}
                activeAccount={activeAccount}
                onSelectAccount={setActiveAccount}
              />

              <div className="portal-body-layout">
                {/* Left Sidebar */}
                <DesktopSidebar
                  activeTab={activeTab}
                  onSelectTab={handleSelectTab}
                  onLogout={handleLogout}
                  onOpenService={handleOpenService}
                />

                {/* Main Content Workspace */}
                <main className="portal-workspace-content" id="main-content">
                  {(activeTab === 'dashboard' || activeTab === 'customize') && (
                    <DesktopDashboard
                      onOpenService={handleOpenService}
                      onNavigateTab={handleSelectTab}
                      activeAccount={activeAccount}
                      onSelectAccount={setActiveAccount}
                    />
                  )}

                  {activeTab === 'products' && (
                    <DesktopProducts
                      onOpenService={handleOpenService}
                    />
                  )}

                  {activeTab === 'lifestyle' && (
                    <DesktopLifestyle />
                  )}

                  {activeTab === 'cards' && (
                    <DesktopCards />
                  )}

                  {activeTab === 'statements' && (
                    <DesktopProducts
                      onOpenService={handleOpenService}
                    />
                  )}
                </main>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================
          MOBILE VIEW: AUTHENTIC 390px FIGMA SCREENS WITH SWITCHER
         ======================================================== */}
      {viewMode === 'mobile' && (
        <div className="mobile-figma-environment">
          {/* Top Bar for Switcher & Mobile Inspection */}
          <div className="mobile-inspector-bar">
            <div className="inspector-left">
              <ZenithLogo size="small" />
              <span className="mobile-badge-label">Mobile App (390px)</span>
            </div>

            <nav className="mobile-frame-nav" aria-label="Figma Frames">
              <button
                type="button"
                className={`frame-btn ${mobileScreen === 'welcome' && !isLoggedIn ? 'active' : ''}`}
                onClick={() => {
                  setIsLoggedIn(false);
                  setMobileScreen('welcome');
                }}
              >
                04 Login
              </button>
              <button
                type="button"
                className={`frame-btn ${mobileScreen === 'customize' && isLoggedIn ? 'active' : ''}`}
                onClick={() => {
                  setIsLoggedIn(true);
                  setMobileScreen('customize');
                }}
              >
                01 Customize
              </button>
              <button
                type="button"
                className={`frame-btn ${mobileScreen === 'products' ? 'active' : ''}`}
                onClick={() => {
                  setIsLoggedIn(true);
                  setMobileScreen('products');
                }}
              >
                02 Products
              </button>
              <button
                type="button"
                className={`frame-btn ${mobileScreen === 'lifestyle' ? 'active' : ''}`}
                onClick={() => {
                  setIsLoggedIn(true);
                  setMobileScreen('lifestyle');
                }}
              >
                03 LifeStyle
              </button>
            </nav>

            <div className="inspector-right">
              <button
                type="button"
                className="btn-switch-to-desktop"
                onClick={() => setViewMode('desktop')}
                title="Switch to full Desktop Online Banking Web Portal"
              >
                <Monitor size={15} />
                <span>Desktop Web Portal</span>
              </button>
            </div>
          </div>

          {/* Centered Mobile Device Preview Frame */}
          <div className="mobile-device-centering-container">
            <div className="mobile-device-frame">
              {mobileScreen === 'welcome' && (
                <Welcome 
                  onLogin={() => handleLogin({ name: 'Adewale Okonkwo' })} 
                  onOpenAccount={() => handleLogin({ name: 'Adewale Okonkwo' })} 
                />
              )}

              {mobileScreen === 'customize' && (
                <CustomizePage 
                  onNavigate={openMobileScreen} 
                />
              )}

              {mobileScreen === 'products' && (
                <ProductServices 
                  onBack={() => openMobileScreen('customize')} 
                  onNavigate={openMobileScreen} 
                />
              )}

              {mobileScreen === 'lifestyle' && (
                <Lifestyle 
                  onBack={() => openMobileScreen('customize')} 
                  onNavigate={openMobileScreen} 
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Global Interactive Modal */}
      {modalService && (
        <ServiceActionModal
          service={modalService}
          onClose={() => setModalService(null)}
        />
      )}
    </div>
  );
}
