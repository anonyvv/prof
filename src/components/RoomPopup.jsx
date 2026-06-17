import { useState } from 'react';
import { roomSContent, roomEContent } from '../data/roomContent';

function Modal({ id, title, titleColor, children, onClose }) {
  return (
    <div
      className="room-overlay open"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="room-modal" style={{ maxWidth: id === 'room-s' ? '820px' : '700px' }}>
        <button className="room-modal-close" onClick={onClose}>✕</button>
        <p className="room-modal-title" style={{ color: titleColor }}>{title}</p>
        {children}
      </div>
    </div>
  );
}

// 차수혁 공간 — 탭 구조
function SuhyeokRoom({ onClose }) {
  const [tab, setTab] = useState('house');

  const tabs = [
    { id: 'house', label: '집' },
    { id: 'room', label: '방' },
    { id: 'wolf', label: '늑대굴' },
  ];

  return (
    <Modal id="room-s" title="차수혁의 공간" titleColor="#b52d3e" onClose={onClose}>
      {/* 탭 버튼 */}
      <div style={{
        display: 'flex', gap: '.5rem', marginBottom: '1.2rem',
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

      {/* 탭 패널 */}
      {tabs.map(t => (
        <div key={t.id} style={{ display: tab === t.id ? '' : 'none' }}>
          <div className="room-svg-wrap"
            dangerouslySetInnerHTML={{ __html: roomSContent[t.id].svg }}
          />
          <div className="room-legend">
            {roomSContent[t.id].legend.map((item, i) => (
              <div key={i} className="room-legend-item">
                <div className="room-legend-dot" style={item.style} />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      ))}
    </Modal>
  );
}

// 지은호 공간
function EunhoRoom({ onClose }) {
  return (
    <Modal id="room-e" title="지은호의 집" titleColor="#6b9fd4" onClose={onClose}>
      <div className="room-svg-wrap"
        dangerouslySetInnerHTML={{ __html: roomEContent.svg }}
      />
      <div className="room-legend">
        {roomEContent.legend.map((item, i) => (
          <div key={i} className="room-legend-item">
            <div className="room-legend-dot" style={item.style} />
            {item.text}
          </div>
        ))}
      </div>
    </Modal>
  );
}

export function RoomButton({ type }) {
  const [open, setOpen] = useState(false);
  const isS = type === 's';

  return (
    <>
      <button
        className="room-btn"
        onClick={() => setOpen(true)}
      >▣ 공간 보기</button>
      {open && (
        isS
          ? <SuhyeokRoom onClose={() => setOpen(false)} />
          : <EunhoRoom onClose={() => setOpen(false)} />
      )}
    </>
  );
}
