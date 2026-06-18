import { useState } from 'react';

function Modal({ title, titleColor, children, onClose }) {
  return (
    <div
      className="room-overlay open"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="room-modal" style={{ maxWidth: '900px' }}>
        <button className="room-modal-close" onClick={onClose}>✕</button>
        <p className="room-modal-title" style={{ color: titleColor }}>{title}</p>
        {children}
      </div>
    </div>
  );
}

function SuhyeokRoom({ onClose }) {
  const [tab, setTab] = useState('house');

  const tabs = [
    { id: 'house', label: '집', src: '/villa_floorplan.html' },
    { id: 'wolf', label: '늑대굴', src: '/wolfden_v5.html' },
  ];

  return (
    <Modal title="차수혁의 공간" titleColor="#b52d3e" onClose={onClose}>
      <div style={{
        display: 'flex', gap: '.5rem', marginBottom: '1rem',
        borderBottom: '1px solid rgba(255,255,255,.08)', paddingBottom: '.6rem'
      }}>
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              fontSize: '.68rem', letterSpacing: '.1em', padding: '.25rem .7rem',
              border: tab === t.id ? '1px solid #7a1e2b' : '1px solid rgba(122,30,43,.4)',
              borderRadius: '1px',
              background: tab === t.id ? '#7a1e2b' : 'transparent',
              color: tab === t.id ? '#f5dde0' : '#7a1e2b',
              cursor: 'pointer'
            }}
          >{t.label}</button>
        ))}
      </div>
      {tabs.map(t => (
        <div key={t.id} style={{ display: tab === t.id ? '' : 'none' }}>
          <iframe
            src={t.src}
            style={{ width: '100%', height: '580px', border: 'none', borderRadius: '2px' }}
            title={t.label}
          />
        </div>
      ))}
    </Modal>
  );
}

function EunhoRoom({ onClose }) {
  return (
    <Modal title="지은호의 집" titleColor="#6b9fd4" onClose={onClose}>
      <iframe
        src="/eunho_apartment.html"
        style={{ width: '100%', height: '580px', border: 'none', borderRadius: '2px' }}
        title="지은호 아파트"
      />
    </Modal>
  );
}

export function RoomButton({ type }) {
  const [open, setOpen] = useState(false);
  const isS = type === 's';

  return (
    <>
      <button className="room-btn" onClick={() => setOpen(true)}>▣ 공간 보기</button>
      {open && (
        isS
          ? <SuhyeokRoom onClose={() => setOpen(false)} />
          : <EunhoRoom onClose={() => setOpen(false)} />
      )}
    </>
  );
}