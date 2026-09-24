'use client';
import MobileHeader from './MobileHeader';
import BottomNav from './BottomNav';
const cards=[['Flights','Book and manage flights','✈'],['Hotels','Find and reserve hotels','▱'],['Transportation','Explore transportation options','▰']];
export default function Lifestyle({onBack}){return <div className="mobile-frame lifestyle-screen"><MobileHeader title="LifeStyle" onBack={onBack}/><div className="lifestyle-cards">{cards.map(([title,desc,icon])=><button className="lifestyle-card" key={title}><span className="lifestyle-icon">{icon}</span><div><strong>{title}</strong><small>{desc}</small></div></button>)}</div><BottomNav onNavigate={()=>{}}/></div>}
