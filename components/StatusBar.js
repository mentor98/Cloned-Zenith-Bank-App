'use client';

import { useEffect, useState } from 'react';
import { Wifi } from 'lucide-react';

export default function StatusBar({ theme = 'light' }) {
  const [time, setTime] = useState('9:41');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`status-bar ${theme === 'dark' ? 'status-dark' : 'status-light'}`}>
      <div className="status-time">
        <span>{time}</span>
      </div>

      <div className="status-notch">
        <div className="dynamic-island" />
      </div>

      <div className="status-icons">
        {/* Cellular 4 bars */}
        <div className="cellular-bars" title="Full 5G signal">
          <span className="bar bar-1 active" />
          <span className="bar bar-2 active" />
          <span className="bar bar-3 active" />
          <span className="bar bar-4 active" />
        </div>
        {/* WiFi */}
        <Wifi className="status-wifi-icon" size={15} strokeWidth={2.4} />
        {/* Battery */}
        <div className="battery-indicator" title="Battery 98%">
          <div className="battery-shell">
            <div className="battery-level" style={{ width: '90%' }} />
          </div>
          <div className="battery-cap" />
        </div>
      </div>
    </div>
  );
}
