'use client';

import { useState } from 'react';
import {
  Eye,
  EyeOff,
  Copy,
  Check,
  ArrowUpRight,
  ArrowDownLeft,
  ArrowLeftRight,
  Receipt,
  Smartphone,
  CreditCard,
  QrCode,
  FileBarChart,
  Sliders,
  Search,
  Filter,
  Download,
  Calendar,
  Sparkles,
  MapPin,
  Users,
  BadgeDollarSign,
  Layers,
  PieChart,
  Compass,
  Settings,
  Bell,
  User,
  CalendarClock,
  ShieldCheck,
  ChevronRight,
  Plane,
  Building2,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DesktopDashboard({ 
  onOpenService, 
  onNavigateTab,
  activeAccount,
  onSelectAccount
}) {
  const [hideBalance, setHideBalance] = useState(false);
  const [copiedAcc, setCopiedAcc] = useState(false);
  const [customizingGrid, setCustomizingGrid] = useState(false);
  const [pinnedServices, setPinnedServices] = useState([
    'transfer', 'bills', 'airtime', 'cards', 'beneficiaries', 'forex', 'products', 'lifestyle'
  ]);
  const [txSearch, setTxSearch] = useState('');
  const [txFilter, setTxFilter] = useState('all'); // all, inflow, outflow, bills, airtime

  // Quick Transfer Widget State
  const [transferDest, setTransferDest] = useState('0219883412 - Zenith Bank');
  const [transferAmount, setTransferAmount] = useState('15,000.00');
  const [transferPin, setTransferPin] = useState('');
  const [transferSuccess, setTransferSuccess] = useState(false);
  const [transferLoading, setTransferLoading] = useState(false);

  // Quick Airtime Widget State
  const [airtimeNet, setAirtimeNet] = useState('MTN');
  const [airtimePhone, setAirtimePhone] = useState('0803 456 7890');
  const [airtimeAmt, setAirtimeAmt] = useState('2,000');
  const [airtimeSuccess, setAirtimeSuccess] = useState(false);

  // Copy NUBAN Handler
  const handleCopyNuban = (num) => {
    navigator.clipboard?.writeText(num);
    setCopiedAcc(true);
    setTimeout(() => setCopiedAcc(false), 2000);
  };

  // Quick Transfer submit
  const handleQuickTransfer = (e) => {
    e.preventDefault();
    if (!transferPin || transferPin.length < 4) return;
    setTransferLoading(true);
    setTimeout(() => {
      setTransferLoading(false);
      setTransferSuccess(true);
      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#E31B23', '#10B981', '#111827'],
        });
      } catch (err) {}
      setTimeout(() => {
        setTransferSuccess(false);
        setTransferPin('');
      }, 4000);
    }, 600);
  };

  // Quick Airtime submit
  const handleQuickAirtime = (e) => {
    e.preventDefault();
    setAirtimeSuccess(true);
    try {
      confetti({ particleCount: 40, spread: 50 });
    } catch (err) {}
    setTimeout(() => setAirtimeSuccess(false), 3500);
  };

  // The 16 Figma services
  const allServices = [
    { id: 'transfer', label: 'Transfer', icon: ArrowLeftRight, isTransfer: true, category: 'Payments' },
    { id: 'bills', label: 'Pay Bills', icon: Receipt, isBill: true, category: 'Payments' },
    { id: 'airtime', label: 'Airtime & Data', icon: Smartphone, isAirtime: true, category: 'Payments' },
    { id: 'cards', label: 'Cards', icon: CreditCard, nav: 'cards', category: 'Banking' },
    { id: 'beneficiaries', label: 'Manage Beneficiaries', icon: Users, category: 'Payments' },
    { id: 'forex', label: 'Forex (FX)', icon: BadgeDollarSign, category: 'Banking' },
    { id: 'products', label: 'Product & Services', icon: Layers, nav: 'products', category: 'Banking' },
    { id: 'lifestyle', label: 'LifeStyle', icon: Compass, nav: 'lifestyle', category: 'Privilege' },
    { id: 'pfm', label: 'Personal Finance', icon: PieChart, category: 'Insights' },
    { id: 'qr', label: 'QR Payments', icon: QrCode, category: 'Payments' },
    { id: 'upcoming', label: 'Upcoming Payment', icon: CalendarClock, category: 'Payments' },
    { id: 'statement', label: 'My Bank Statement', icon: FileBarChart, nav: 'products', category: 'Banking' },
    { id: 'locate', label: 'Locate Us', icon: MapPin, category: 'Support' },
    { id: 'alerts', label: 'Alerts', icon: Bell, category: 'Security' },
    { id: 'profile', label: 'Profile', icon: User, category: 'Security' },
    { id: 'settings', label: 'Settings', icon: Settings, category: 'Security' },
  ];

  // Transactions ledger data
  const initialTransactions = [
    {
      id: 'TXN-90218491',
      desc: 'Chevron Nigeria Ltd - Dividend Q3',
      category: 'Inflow',
      type: 'inflow',
      date: 'Today, 11:24 AM',
      amount: '+ ₦ 250,000.00',
      status: 'Successful',
      ref: 'ZEN-DIV-882194',
    },
    {
      id: 'TXN-90218489',
      desc: 'Transfer to Funke Akindele (Zenith)',
      category: 'Transfer',
      type: 'outflow',
      date: 'Today, 09:12 AM',
      amount: '- ₦ 45,000.00',
      status: 'Successful',
      ref: 'ZNT-99823412',
    },
    {
      id: 'TXN-90218450',
      desc: 'MTN VTU Airtime Recharge',
      category: 'Airtime',
      type: 'airtime',
      date: 'Yesterday, 06:40 PM',
      amount: '- ₦ 5,000.00',
      status: 'Successful',
      ref: 'VTU-2026-9921',
    },
    {
      id: 'TXN-90218412',
      desc: 'Eko Electricity Distribution (EKEDC)',
      category: 'Bills',
      type: 'bills',
      date: 'Sep 22, 2026',
      amount: '- ₦ 28,500.00',
      status: 'Successful',
      ref: 'BILL-EKEDC-0021',
    },
    {
      id: 'TXN-90218388',
      desc: 'Inward Wire: Stripe Payments UK',
      category: 'Forex Inflow',
      type: 'inflow',
      date: 'Sep 20, 2026',
      amount: '+ $ 1,450.00',
      status: 'Successful',
      ref: 'SWIFT-LON-44912',
    },
    {
      id: 'TXN-90218310',
      desc: 'Zenith POS Purchase - Shoprite Palms VI',
      category: 'Card POS',
      type: 'outflow',
      date: 'Sep 18, 2026',
      amount: '- ₦ 38,200.00',
      status: 'Successful',
      ref: 'POS-09923841',
    },
  ];

  const filteredTransactions = initialTransactions.filter((tx) => {
    const matchesSearch = 
      tx.desc.toLowerCase().includes(txSearch.toLowerCase()) ||
      tx.ref.toLowerCase().includes(txSearch.toLowerCase()) ||
      tx.category.toLowerCase().includes(txSearch.toLowerCase());
    
    if (txFilter === 'all') return matchesSearch;
    if (txFilter === 'inflow') return matchesSearch && tx.type === 'inflow';
    if (txFilter === 'outflow') return matchesSearch && tx.type === 'outflow';
    if (txFilter === 'bills') return matchesSearch && tx.type === 'bills';
    if (txFilter === 'airtime') return matchesSearch && tx.type === 'airtime';
    return matchesSearch;
  });

  const togglePin = (id) => {
    if (pinnedServices.includes(id)) {
      setPinnedServices(pinnedServices.filter((s) => s !== id));
    } else {
      setPinnedServices([...pinnedServices, id]);
    }
  };

  return (
    <div className="desktop-dashboard">
      {/* 1. Account Balances Cards Row */}
      <div className="dashboard-accounts-section">
        <div className="accounts-section-header">
          <div>
            <h2 className="dashboard-section-title">My Accounts & Portfolios</h2>
            <p className="dashboard-section-subtitle">Real-time balances across domestic and foreign currency accounts</p>
          </div>
          <div className="accounts-header-controls">
            <button
              type="button"
              className="balance-visibility-btn"
              onClick={() => setHideBalance(!hideBalance)}
              title={hideBalance ? 'Show balance' : 'Hide balance'}
            >
              {hideBalance ? <Eye size={16} /> : <EyeOff size={16} />}
              <span>{hideBalance ? 'Show Balances' : 'Hide Balances'}</span>
            </button>
          </div>
        </div>

        <div className="accounts-cards-grid">
          {/* Main Savings Card */}
          <div className="account-card primary-card">
            <div className="account-card-top">
              <div>
                <span className="account-tier-label">ZENITH INDIVIDUAL SAVINGS</span>
                <div className="account-nuban-row">
                  <span className="nuban-text">NUBAN: 2109845123</span>
                  <button 
                    type="button" 
                    className="copy-nuban-btn"
                    onClick={() => handleCopyNuban('2109845123')}
                    title="Copy Account Number"
                  >
                    {copiedAcc ? <Check size={13} className="text-emerald-300" /> : <Copy size={13} />}
                  </button>
                </div>
              </div>
              <div className="account-badge-chip">Active</div>
            </div>

            <div className="account-balance-area">
              <span className="balance-currency-label">Available Balance</span>
              <strong className="balance-figure tabular-nums">
                {hideBalance ? '₦ •••••••••••' : '₦ 1,842,500.00'}
              </strong>
              <span className="book-balance-sub">Book Balance: ₦ 1,842,500.00</span>
            </div>

            <div className="account-card-actions">
              <button 
                type="button" 
                className="acc-action-btn"
                onClick={() => onOpenService({ name: 'Transfer Funds', isTransfer: true })}
              >
                <ArrowUpRight size={15} />
                <span>Transfer</span>
              </button>
              <button 
                type="button" 
                className="acc-action-btn"
                onClick={() => onOpenService({ name: 'Fund Account', description: 'Instant account funding via card, USSD *966#, or direct bank debit.' })}
              >
                <ArrowDownLeft size={15} />
                <span>Fund</span>
              </button>
              <button 
                type="button" 
                className="acc-action-btn"
                onClick={() => onNavigateTab('products')}
              >
                <FileBarChart size={15} />
                <span>Statement</span>
              </button>
            </div>
          </div>

          {/* Domiciliary USD Account */}
          <div className="account-card domiciliary-card">
            <div className="account-card-top">
              <div>
                <span className="account-tier-label">DOMICILIARY USD ACCOUNT</span>
                <div className="account-nuban-row">
                  <span className="nuban-text">NUBAN: 5070192834</span>
                  <button 
                    type="button" 
                    className="copy-nuban-btn"
                    onClick={() => handleCopyNuban('5070192834')}
                    title="Copy Account Number"
                  >
                    <Copy size={13} />
                  </button>
                </div>
              </div>
              <div className="fx-currency-pill">USD ($)</div>
            </div>

            <div className="account-balance-area">
              <span className="balance-currency-label">Foreign Currency Balance</span>
              <strong className="balance-figure tabular-nums">
                {hideBalance ? '$ •••••••' : '$ 14,850.00'}
              </strong>
              <span className="book-balance-sub">≈ ₦ 22,430,925.00 Equivalent</span>
            </div>

            <div className="account-card-actions">
              <button 
                type="button" 
                className="acc-action-btn"
                onClick={() => onOpenService({ name: 'Forex Wire Transfer', description: 'Direct offshore wire transfer via SWIFT / correspondent banking.' })}
              >
                <ArrowUpRight size={15} />
                <span>SWIFT Wire</span>
              </button>
              <button 
                type="button" 
                className="acc-action-btn"
                onClick={() => onOpenService({ name: 'FX Conversion', description: 'Real-time FX swap from USD into NGN at official Zenith interbank rate.' })}
              >
                <BadgeDollarSign size={15} />
                <span>FX Swap</span>
              </button>
            </div>
          </div>

          {/* Aspire Corporate / Current */}
          <div className="account-card corporate-card">
            <div className="account-card-top">
              <div>
                <span className="account-tier-label">ZENITH CURRENT / SME</span>
                <div className="account-nuban-row">
                  <span className="nuban-text">NUBAN: 1002938475</span>
                  <button 
                    type="button" 
                    className="copy-nuban-btn"
                    onClick={() => handleCopyNuban('1002938475')}
                    title="Copy Account Number"
                  >
                    <Copy size={13} />
                  </button>
                </div>
              </div>
              <div className="account-badge-chip">Corporate</div>
            </div>

            <div className="account-balance-area">
              <span className="balance-currency-label">Operating Capital</span>
              <strong className="balance-figure tabular-nums">
                {hideBalance ? '₦ •••••••••••' : '₦ 4,650,200.00'}
              </strong>
              <span className="book-balance-sub">Overdraft Limit: ₦ 10,000,000.00</span>
            </div>

            <div className="account-card-actions">
              <button 
                type="button" 
                className="acc-action-btn"
                onClick={() => onOpenService({ name: 'Corporate Payroll / Batch Transfer', isTransfer: true })}
              >
                <ArrowUpRight size={15} />
                <span>Payroll</span>
              </button>
              <button 
                type="button" 
                className="acc-action-btn"
                onClick={() => onNavigateTab('products')}
              >
                <FileBarChart size={15} />
                <span>Audit Report</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Two-Column Layout */}
      <div className="dashboard-grid-layout">
        {/* Left Column: Quick Services Hub & Recent Transactions */}
        <div className="dashboard-main-column">
          {/* Quick Services Hub (The 16 Figma Services) */}
          <section className="dashboard-panel services-panel">
            <div className="panel-header">
              <div className="panel-title-wrap">
                <h3 className="panel-title">Quick Services Hub</h3>
                <span className="panel-subtitle">Access all 16 core Zenith banking operations and customer portals</span>
              </div>
              <div className="panel-controls">
                <button
                  type="button"
                  className={`btn-customize-toggle ${customizingGrid ? 'active' : ''}`}
                  onClick={() => setCustomizingGrid(!customizingGrid)}
                >
                  <Sliders size={14} />
                  <span>{customizingGrid ? 'Done Editing' : 'Customize Tiles'}</span>
                </button>
              </div>
            </div>

            {customizingGrid && (
              <div className="customize-banner-box">
                <span>Select or uncheck tiles below to customize your favorite quick access shortcuts.</span>
              </div>
            )}

            <div className="desktop-services-grid">
              {allServices.map((item) => {
                const IconComp = item.icon;
                const isPinned = pinnedServices.includes(item.id);

                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`desktop-service-tile ${isPinned ? 'is-pinned' : ''} ${customizingGrid ? 'edit-mode' : ''}`}
                    onClick={() => {
                      if (customizingGrid) {
                        togglePin(item.id);
                        return;
                      }
                      if (item.nav) {
                        onNavigateTab(item.nav);
                      } else {
                        onOpenService({
                          name: item.label,
                          icon: item.icon,
                          isTransfer: item.isTransfer,
                          isAirtime: item.isAirtime,
                        });
                      }
                    }}
                  >
                    {customizingGrid && (
                      <div className={`tile-pin-check ${isPinned ? 'checked' : ''}`}>
                        {isPinned ? <Check size={11} strokeWidth={3} /> : null}
                      </div>
                    )}
                    <div className="service-tile-icon-box">
                      <IconComp size={24} className="service-tile-icon" />
                    </div>
                    <span className="service-tile-name">{item.label}</span>
                    <span className="service-tile-category">{item.category}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Recent Transactions & Activities Table */}
          <section className="dashboard-panel transactions-panel">
            <div className="panel-header">
              <div>
                <h3 className="panel-title">Recent Transactions & Ledger</h3>
                <span className="panel-subtitle">Live statement feed with real-time status and downloadable receipts</span>
              </div>
              <div className="panel-controls">
                <button 
                  type="button" 
                  className="btn-download-statement"
                  onClick={() => onNavigateTab('products')}
                >
                  <Download size={14} />
                  <span>Export CSV / PDF</span>
                </button>
              </div>
            </div>

            {/* Filter Tabs & Search Row */}
            <div className="tx-filter-bar">
              <div className="tx-segmented-tabs">
                {[
                  { id: 'all', label: 'All Operations' },
                  { id: 'inflow', label: 'Inflows' },
                  { id: 'outflow', label: 'Transfers' },
                  { id: 'bills', label: 'Bills' },
                  { id: 'airtime', label: 'Airtime' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    className={`tx-tab-btn ${txFilter === tab.id ? 'active' : ''}`}
                    onClick={() => setTxFilter(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="tx-search-box">
                <Search size={14} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Filter transactions..."
                  value={txSearch}
                  onChange={(e) => setTxSearch(e.target.value)}
                  className="tx-search-input"
                />
              </div>
            </div>

            {/* Transactions Table */}
            <div className="tx-table-container">
              <table className="tx-table">
                <thead>
                  <tr>
                    <th>Description & Category</th>
                    <th>Date & Time</th>
                    <th>Reference</th>
                    <th>Status</th>
                    <th className="text-right">Amount</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.length > 0 ? (
                    filteredTransactions.map((tx) => (
                      <tr key={tx.id} className="tx-row">
                        <td>
                          <div className="tx-desc-cell">
                            <div className={`tx-type-icon ${tx.type}`}>
                              {tx.type === 'inflow' ? (
                                <ArrowDownLeft size={16} className="text-emerald-600" />
                              ) : (
                                <ArrowUpRight size={16} className="text-zenith-red" />
                              )}
                            </div>
                            <div>
                              <strong className="tx-name">{tx.desc}</strong>
                              <span className="tx-cat">{tx.category}</span>
                            </div>
                          </div>
                        </td>
                        <td className="tx-date-cell">
                          <span>{tx.date}</span>
                        </td>
                        <td className="tx-ref-cell">
                          <code>{tx.ref}</code>
                        </td>
                        <td>
                          <span className="tx-status-badge successful">
                            <span className="status-dot" />
                            <span>{tx.status}</span>
                          </span>
                        </td>
                        <td className="text-right">
                          <strong className={`tx-amount-value tabular-nums ${tx.type === 'inflow' ? 'positive' : 'negative'}`}>
                            {tx.amount}
                          </strong>
                        </td>
                        <td className="text-center">
                          <button
                            type="button"
                            className="btn-view-receipt"
                            onClick={() =>
                              onOpenService({
                                name: `Transaction Details: ${tx.ref}`,
                                description: `${tx.desc} on ${tx.date}. Amount: ${tx.amount}. Status: ${tx.status}.`,
                              })
                            }
                          >
                            Receipt
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="tx-empty-state">
                        <Clock size={32} className="text-gray-300" />
                        <p>No transactions matching &quot;{txSearch}&quot;</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Right Column: Quick Transfer Widget, Airtime & Lifestyle Spotlight */}
        <div className="dashboard-side-column">
          {/* Quick Transfer Widget */}
          <div className="side-widget-panel">
            <div className="widget-header">
              <div className="widget-icon-pill">
                <ArrowLeftRight size={16} className="text-zenith-red" />
              </div>
              <div>
                <h4 className="widget-title">Instant Quick Transfer</h4>
                <span className="widget-subtitle">Direct Zenith interbank & NIP transfer</span>
              </div>
            </div>

            {transferSuccess ? (
              <div className="quick-transfer-success">
                <div className="success-pulse-check">
                  <Check size={28} className="text-emerald-500" />
                </div>
                <h5>Transfer Completed!</h5>
                <p>₦{transferAmount} successfully sent to {transferDest}</p>
                <div className="receipt-ref-code">REF-ZEN-{Math.floor(10000000 + Math.random() * 90000000)}</div>
                <button
                  type="button"
                  className="btn-new-transfer"
                  onClick={() => setTransferSuccess(false)}
                >
                  Make Another Transfer
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuickTransfer} className="widget-form">
                <div className="widget-form-group">
                  <label>Pay From</label>
                  <select className="widget-select">
                    <option>Zenith Savings - ₦1,842,500.00 (2109845123)</option>
                    <option>Zenith Current - ₦4,650,200.00 (1002938475)</option>
                  </select>
                </div>

                <div className="widget-form-group">
                  <label>Beneficiary</label>
                  <select 
                    className="widget-select"
                    value={transferDest}
                    onChange={(e) => setTransferDest(e.target.value)}
                  >
                    <option value="0219883412 - Zenith Bank">0219883412 - Funke Akindele (Zenith)</option>
                    <option value="0124859302 - GTBank">0124859302 - Babatunde Raji (GTBank)</option>
                    <option value="2034928174 - Access Bank">2034928174 - Kemi Adeosun (Access)</option>
                  </select>
                </div>

                <div className="widget-form-group">
                  <label>Amount (NGN)</label>
                  <div className="widget-input-prefix">
                    <span className="currency-prefix">₦</span>
                    <input
                      type="text"
                      className="widget-input"
                      value={transferAmount}
                      onChange={(e) => setTransferAmount(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="widget-form-group">
                  <div className="pin-title-row">
                    <label>4-Digit Transaction PIN</label>
                    <span className="ssl-secure-text"><ShieldCheck size={12} /> Encrypted</span>
                  </div>
                  <input
                    type="password"
                    maxLength={4}
                    className="widget-input pin-field"
                    placeholder="••••"
                    value={transferPin}
                    onChange={(e) => setTransferPin(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn-widget-submit"
                  disabled={transferLoading}
                >
                  {transferLoading ? 'Authorizing...' : 'Send Transfer Now'}
                </button>
              </form>
            )}
          </div>

          {/* Quick Airtime & Data Widget */}
          <div className="side-widget-panel">
            <div className="widget-header">
              <div className="widget-icon-pill">
                <Smartphone size={16} className="text-zenith-red" />
              </div>
              <div>
                <h4 className="widget-title">Quick Airtime & Data</h4>
                <span className="widget-subtitle">Zero fee instant mobile recharge</span>
              </div>
            </div>

            {airtimeSuccess ? (
              <div className="quick-transfer-success">
                <Check size={28} className="text-emerald-500" />
                <h5>Recharge Successful!</h5>
                <p>₦{airtimeAmt} sent to {airtimePhone} ({airtimeNet})</p>
              </div>
            ) : (
              <form onSubmit={handleQuickAirtime} className="widget-form">
                <div className="network-selectors">
                  {['MTN', 'Airtel', 'Glo', '9mobile'].map((net) => (
                    <button
                      key={net}
                      type="button"
                      className={`network-chip ${airtimeNet === net ? 'active' : ''}`}
                      onClick={() => setAirtimeNet(net)}
                    >
                      {net}
                    </button>
                  ))}
                </div>

                <div className="widget-form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    className="widget-input"
                    value={airtimePhone}
                    onChange={(e) => setAirtimePhone(e.target.value)}
                    required
                  />
                </div>

                <div className="widget-form-group">
                  <label>Recharge Amount (NGN)</label>
                  <div className="widget-input-prefix">
                    <span className="currency-prefix">₦</span>
                    <input
                      type="text"
                      className="widget-input"
                      value={airtimeAmt}
                      onChange={(e) => setAirtimeAmt(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="btn-widget-secondary">
                  Recharge ₦{airtimeAmt}
                </button>
              </form>
            )}
          </div>

          {/* Zenith Lifestyle Spotlight Banner */}
          <div className="lifestyle-spotlight-card">
            <div className="spotlight-badge">
              <Sparkles size={13} className="text-amber-300" />
              <span>ZENITH PRIVILEGE CLUB</span>
            </div>
            <h4 className="spotlight-title">Fly Global with 15% Privilege Rebate</h4>
            <p className="spotlight-desc">
              Book international flights on Emirates, British Airways & Qatar Airways with your Zenith Platinum card.
            </p>
            <div className="spotlight-action-row">
              <button
                type="button"
                className="btn-spotlight"
                onClick={() => onNavigateTab('lifestyle')}
              >
                <span>Explore Travel Concierge</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
