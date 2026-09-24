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
  Clock,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  MapPin,
  Building,
} from 'lucide-react';
import MobileHeader from './MobileHeader';
import BottomNav from './BottomNav';
import ServiceActionModal from './ServiceActionModal';

export default function ProductServices({ onBack, onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModal, setActiveModal] = useState(null);

  const products = [
    {
      id: 'open-acc',
      label: 'Open Additional Account',
      icon: UserPlus,
      desc: 'Open a dedicated Savings, Target, or Domiciliary USD/GBP/EUR account instantly without paperwork.',
    },
    {
      id: 'loan',
      label: 'Request Loan',
      icon: Coins,
      desc: 'Zenith Payday Loan, Term Loans, or SME facility with competitive single-digit interest rates.',
    },
    {
      id: 'cheques',
      label: 'Cheques',
      icon: CheckSquare,
      desc: 'Order new cheque leaves, stop payment on a cheque, or confirm issued cheques online.',
    },
    {
      id: 'bank-draft',
      label: 'Bank Draft Request',
      icon: FileText,
      desc: 'Request a guaranteed Zenith Bank manager cheque or draft for collection at any branch.',
    },
    {
      id: 'statement',
      label: 'My Bank Statement',
      icon: FileBarChart,
      desc: 'Generate embassy-grade official PDF bank statements with automated verification QR codes.',
    },
    {
      id: 'visa',
      label: 'Dubai Visa',
      icon: PlaneTakeoff,
      desc: 'Fast-track UAE tourism and transit visa processing via Zenith Travel Advisory partners.',
    },
    {
      id: 'transfer-limits',
      label: 'Manage Transfer Limits',
      icon: SlidersHorizontal,
      desc: 'Increase or modify daily NGN and FX transfer thresholds with your Zenith hardware token.',
    },
  ];

  const initialActivities = [
    {
      id: 'act-1',
      title: 'Modify Address',
      date: 'August 19, 2021',
      icon: MapPin,
      status: 'Completed',
      category: 'Profile Update',
      ref: 'REF-2021-8841',
    },
    {
      id: 'act-2',
      title: 'Statement Request',
      date: 'August 19, 2021',
      icon: FileBarChart,
      status: 'Processed',
      category: 'Official Document',
      ref: 'REF-2021-9920',
    },
    {
      id: 'act-3',
      title: 'Transfer Limit Increase',
      date: 'July 14, 2021',
      icon: ShieldCheck,
      status: 'Approved',
      category: 'Security',
      ref: 'REF-2021-4412',
    },
  ];

  const filteredActivities = initialActivities.filter((act) => {
    const q = searchQuery.toLowerCase();
    return (
      act.title.toLowerCase().includes(q) ||
      act.date.toLowerCase().includes(q) ||
      act.category.toLowerCase().includes(q)
    );
  });

  return (
    <div className="mobile-frame products-screen">
      <MobileHeader 
        title="Product & Services" 
        onBack={onBack} 
      />

      {/* Top Products Grid */}
      <div className="product-grid">
        {products.map((p) => {
          const IconComp = p.icon;
          return (
            <button
              key={p.id}
              type="button"
              className="product-card"
              onClick={() =>
                setActiveModal({
                  name: p.label,
                  icon: p.icon,
                  description: p.desc,
                })
              }
            >
              <div className="product-icon-wrap">
                <IconComp className="product-icon" size={24} strokeWidth={2.2} />
              </div>
              <span className="product-label">{p.label}</span>
            </button>
          );
        })}
      </div>

      {/* Recent Activities Section */}
      <section className="activities-section">
        <div className="activities-header">
          <h2 className="activities-heading">Recent Activities</h2>
          <span className="activities-badge">{filteredActivities.length} items</span>
        </div>

        {/* Search Bar */}
        <div className="search-bar-wrap">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search activities by title, date, or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className="search-clear-btn"
              onClick={() => setSearchQuery('')}
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Activity Rows */}
        <div className="activity-list">
          {filteredActivities.length > 0 ? (
            filteredActivities.map((act) => {
              const IconComp = act.icon;
              return (
                <div
                  key={act.id}
                  className="activity-item-card"
                  onClick={() =>
                    setActiveModal({
                      name: act.title,
                      icon: act.icon,
                      description: `Activity details for ${act.title} requested on ${act.date}. Reference: ${act.ref}. Status: ${act.status}.`,
                    })
                  }
                >
                  <div className="activity-icon-box">
                    <IconComp size={18} className="text-zenith-red" />
                  </div>
                  <div className="activity-details">
                    <span className="activity-title">{act.title}</span>
                    <div className="activity-meta">
                      <time className="activity-date">{act.date}</time>
                      <span className="meta-sep">•</span>
                      <span className="activity-category">{act.category}</span>
                    </div>
                  </div>
                  <div className="activity-status-col">
                    <span className="activity-status-tag">{act.status}</span>
                    <ChevronRight size={16} className="text-gray-400" />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="empty-activities-state">
              <Clock size={32} className="text-gray-300" />
              <p>No activities matching &quot;{searchQuery}&quot;</p>
            </div>
          )}
        </div>
      </section>

      <BottomNav onNavigate={onNavigate || onBack} active="more" />

      {activeModal && (
        <ServiceActionModal
          service={activeModal}
          onClose={() => setActiveModal(null)}
        />
      )}
    </div>
  );
}
