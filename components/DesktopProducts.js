'use client';

import { useState } from 'react';
import {
  UserPlus,
  Coins,
  CheckSquare,
  FileText,
  FileBarChart,
  PlaneTakeoff,
  SlidersHorizontal,
  Search,
  X,
  Filter,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ChevronRight,
  Download,
  Building,
  HelpCircle,
  Calendar
} from 'lucide-react';
import ServiceActionModal from './ServiceActionModal';

export default function DesktopProducts({ onOpenService }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModal, setActiveModal] = useState(null);

  // 7 Figma Products
  const products = [
    {
      id: 'open-acc',
      title: 'Open Additional Account',
      category: 'Accounts',
      icon: UserPlus,
      highlight: 'Zero minimum balance • Instant virtual debit card',
      description: 'Open a dedicated Savings, Target, or Domiciliary (USD/GBP/EUR) account in 60 seconds with no paperwork.',
      actionText: 'Open New Account',
      badge: 'Instant Setup',
    },
    {
      id: 'loan',
      title: 'Request Loan',
      category: 'Credit & Loans',
      icon: Coins,
      highlight: 'From 9.5% APR • Up to ₦10,000,000',
      description: 'Instant Zenith Payday Loan, Term Financing, or SME Asset Loan with automated approval against your salary cash flow.',
      actionText: 'Check Loan Eligibility',
      badge: 'Fast Approval',
    },
    {
      id: 'cheques',
      title: 'Cheques & Booklets',
      category: 'Operations',
      icon: CheckSquare,
      highlight: '25 or 50 leaf booklets • Courier delivery',
      description: 'Order new cheque leaves, track existing issuances, stop payment on a cheque leaf, or confirm issued cheques online.',
      actionText: 'Manage Cheques',
      badge: 'Secure Clearing',
    },
    {
      id: 'bank-draft',
      title: 'Bank Draft Request',
      category: 'Operations',
      icon: FileText,
      highlight: 'Guaranteed funds • Same-day branch pickup',
      description: 'Order a guaranteed Zenith Bank Manager Cheque / Bank Draft for official transactions, real estate, or educational fees.',
      actionText: 'Request Draft',
      badge: 'Guaranteed',
    },
    {
      id: 'statement',
      title: 'My Bank Statement',
      category: 'Statements',
      icon: FileBarChart,
      highlight: 'Official PDF with verification QR code',
      description: 'Generate embassy-grade official bank statements directly stamped with verifiable cryptographic QR code.',
      actionText: 'Generate Statement',
      badge: 'Embassy Grade',
    },
    {
      id: 'visa',
      title: 'Dubai Visa & Travel Advisory',
      category: 'Travel & Lifestyle',
      icon: PlaneTakeoff,
      highlight: 'Fast-track 48h UAE visa processing',
      description: 'Seamless tourist and business visa processing for the UAE in direct partnership with Zenith Travel Advisory.',
      actionText: 'Apply for Visa',
      badge: 'Partner Service',
    },
    {
      id: 'transfer-limits',
      title: 'Manage Transfer Limits',
      category: 'Security',
      icon: SlidersHorizontal,
      highlight: 'Up to ₦50M daily with Zenith Hardware Token',
      description: 'Increase or customize your daily NIP, FX, and card transaction thresholds instantly using hardware token authorization.',
      actionText: 'Adjust Limits',
      badge: 'Security',
    },
  ];

  // Activities from Figma frame 02
  const initialActivities = [
    {
      id: 'act-1',
      title: 'Modify Address',
      date: 'August 19, 2021',
      category: 'Profile Update',
      ref: 'REF-2021-8841',
      status: 'Completed',
      notes: 'Victoria Island address verified via utility bill.',
    },
    {
      id: 'act-2',
      title: 'Statement Request',
      date: 'August 19, 2021',
      category: 'Official Document',
      ref: 'REF-2021-9920',
      status: 'Processed',
      notes: '6-Month stamped PDF dispatched to email.',
    },
    {
      id: 'act-3',
      title: 'Transfer Limit Increase',
      date: 'July 14, 2021',
      category: 'Security & Limits',
      ref: 'REF-2021-4412',
      status: 'Approved',
      notes: 'Daily NIP transfer ceiling elevated to ₦10,000,000.',
    },
    {
      id: 'act-4',
      title: 'Cheque Confirmation - Leaf #00491',
      date: 'June 02, 2021',
      category: 'Operations',
      ref: 'REF-2021-1205',
      status: 'Completed',
      notes: '₦450,000 payment to Berger Paints confirmed.',
    },
  ];

  const filteredActivities = initialActivities.filter((act) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      act.title.toLowerCase().includes(q) ||
      act.ref.toLowerCase().includes(q) ||
      act.category.toLowerCase().includes(q) ||
      act.date.toLowerCase().includes(q);

    if (selectedCategory === 'all') return matchesSearch;
    return matchesSearch && act.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  return (
    <div className="desktop-products-page">
      {/* Top Banner */}
      <div className="products-hero-banner">
        <div className="products-hero-text">
          <div className="hero-kicker">ZENITH CORPORATE & RETAIL SOLUTIONS</div>
          <h2 className="products-hero-title">Product & Services Suite</h2>
          <p className="products-hero-desc">
            Explore dedicated banking products, embassy-certified statements, instant credit lines, and operations management.
          </p>
        </div>
        <div className="products-hero-stats">
          <div className="hero-stat-box">
            <strong className="stat-num">7</strong>
            <span className="stat-label">Active Core Products</span>
          </div>
          <div className="hero-stat-box">
            <strong className="stat-num">24/7</strong>
            <span className="stat-label">Automated Processing</span>
          </div>
        </div>
      </div>

      {/* 7 Figma Products Showcase Cards Grid */}
      <div className="products-cards-grid">
        {products.map((p) => {
          const IconComp = p.icon;
          return (
            <div key={p.id} className="desktop-product-card">
              <div className="prod-card-top">
                <div className="prod-icon-box">
                  <IconComp size={22} className="text-zenith-red" />
                </div>
                <span className="prod-badge-tag">{p.badge}</span>
              </div>

              <div className="prod-card-body">
                <h4 className="prod-card-title">{p.title}</h4>
                <p className="prod-card-highlight">{p.highlight}</p>
                <p className="prod-card-desc">{p.description}</p>
              </div>

              <div className="prod-card-footer">
                <button
                  type="button"
                  className="btn-prod-action"
                  onClick={() =>
                    setActiveModal({
                      name: p.title,
                      icon: p.icon,
                      description: p.description,
                    })
                  }
                >
                  <span>{p.actionText}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activities Section (From Figma 02) */}
      <section className="activities-full-section">
        <div className="activities-section-top">
          <div>
            <h3 className="activities-section-title">Recent Service Requests & Activities</h3>
            <p className="activities-section-subtitle">
              Audit trail of your recent profile updates, statement dispatches, and limit approvals
            </p>
          </div>

          <div className="activities-top-actions">
            <div className="activities-search-field">
              <Search size={15} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search activities by title, reference, or date..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="activity-search-input"
              />
              {searchQuery && (
                <button 
                  type="button" 
                  onClick={() => setSearchQuery('')}
                  className="clear-search-btn"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Desktop Activities Table */}
        <div className="activities-table-wrap">
          <table className="activities-table">
            <thead>
              <tr>
                <th>Service / Request Name</th>
                <th>Category</th>
                <th>Reference ID</th>
                <th>Request Date</th>
                <th>Status</th>
                <th>Remarks</th>
                <th className="text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredActivities.length > 0 ? (
                filteredActivities.map((act) => (
                  <tr key={act.id} className="activity-row">
                    <td>
                      <strong className="activity-item-title">{act.title}</strong>
                    </td>
                    <td>
                      <span className="activity-category-tag">{act.category}</span>
                    </td>
                    <td>
                      <code className="activity-ref-code">{act.ref}</code>
                    </td>
                    <td>
                      <span className="activity-date-text">{act.date}</span>
                    </td>
                    <td>
                      <span className="status-chip completed">
                        <CheckCircle2 size={13} className="text-emerald-500" />
                        <span>{act.status}</span>
                      </span>
                    </td>
                    <td>
                      <span className="activity-notes-text">{act.notes}</span>
                    </td>
                    <td className="text-right">
                      <button
                        type="button"
                        className="btn-view-activity-doc"
                        onClick={() =>
                          setActiveModal({
                            name: act.title,
                            description: `Document & request history for ${act.title}. Ref: ${act.ref}, Date: ${act.date}. Status: ${act.status}.`,
                          })
                        }
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="activities-empty-row">
                    <Clock size={32} className="text-gray-300 mx-auto mb-2" />
                    <p>No activity records match &quot;{searchQuery}&quot;</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Interactive Modal */}
      {activeModal && (
        <ServiceActionModal
          service={activeModal}
          onClose={() => setActiveModal(null)}
        />
      )}
    </div>
  );
}
