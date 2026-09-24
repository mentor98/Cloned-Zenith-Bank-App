'use client';

export default function BottomNav({ onNavigate, active='home' }) {
  const items = [
    ['home','⌂','Home'],['bills','▣','Pay Bills'],['airtime','▯','Airtime'],['transfer','↗','Transfer'],['more','▦','More']
  ];
  return <nav className="bottom-nav">{items.map(([id,icon,label]) => <button key={id} className={active===id?'active':''} onClick={() => onNavigate?.(id)}><span>{icon}</span><small>{label}</small></button>)}</nav>;
}
