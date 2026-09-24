'use client';
import MobileHeader from './MobileHeader';
import BottomNav from './BottomNav';

const services = [
 ['⌂','Home','home'],['▣','Pay Bills','bills'],['▯','Airtime','airtime'],['↕','Transfer'],['▤','Cards'],['●','Locate Us'],['☻','Manage Beneficiaries'],['₦','Forex'],['☷','Product & Services','products'],['▥','Personal Finance Manager'],['⌁','LifeStyle','lifestyle'],['⚙','Settings'],['♟','Alerts'],['▧','QR Payments'],['●','Profile'],['▦','Upcoming Payment']
];
export default function CustomizePage({onNavigate}) {
 return <div className="mobile-frame customize-screen"><MobileHeader title="Customize Page" onBack={()=>onNavigate?.('welcome')} /><div className="service-grid">{services.map(([icon,label,id],i)=><button className="service-card" key={i} onClick={()=>id&&onNavigate?.(id)}><span className="service-icon">{icon}</span><span>{label}</span></button>)}</div><BottomNav onNavigate={onNavigate}/></div>;
}
