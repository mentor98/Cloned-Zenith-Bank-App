'use client';

export default function ZenithLogo({ size = 'medium', dark = false }) {
  const isLarge = size === 'large';
  const isSmall = size === 'small';

  const markSize = isLarge ? 64 : isSmall ? 28 : 36;
  const fontSize = isLarge ? 38 : isSmall ? 18 : 22;

  return (
    <div className={`zenith-logo ${isLarge ? 'logo-large' : isSmall ? 'logo-small' : ''}`}>
      <div 
        className="zenith-mark"
        style={{
          width: markSize,
          height: markSize,
          minWidth: markSize,
        }}
      >
        <span 
          className="zenith-mark-z" 
          style={{ fontSize }}
        >
          Z
        </span>
      </div>
      <div className="zenith-text-block">
        <span className={`zenith-name ${dark ? 'text-white' : 'text-gray-900'}`}>
          ZENITH
        </span>
        {isLarge && (
          <span className="zenith-subtext">
            PEOPLE • TECHNOLOGY • SERVICE
          </span>
        )}
      </div>
    </div>
  );
}
