export default function MobileHeader({ title, onBack }) {
  return <><div className="status-bar"><span>12:28</span><span>▮▮▮  ◉  ▰</span></div><header className="mobile-header"><button onClick={onBack} aria-label="Back">‹</button><h1>{title}</h1></header></>;
}
