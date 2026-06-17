import { useEffect, useRef } from 'react';

const START = new Date('2025-02-02');

function diffDays(a, b) { return Math.round((b - a) / 86400000); }
function fmt(d) {
  return d.getFullYear() + '. '
    + String(d.getMonth() + 1).padStart(2, '0') + '. '
    + String(d.getDate()).padStart(2, '0');
}

function getList() {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const list = [];

  for (let y = 1; y <= 5; y++) {
    const d = new Date(START);
    d.setFullYear(d.getFullYear() + y);
    list.push({ label: y + '주년', date: d, type: 'year' });
  }

  let addedFuture = 0;
  for (let n = 100; n <= 5000; n += 100) {
    const d = new Date(START.getTime() + (n - 1) * 86400000);
    const diff = diffDays(today, d);
    if (diff <= 0) {
      list.push({ label: n + '일', date: d, type: 'day' });
    } else if (diff <= 30) {
      list.push({ label: n + '일', date: d, type: 'day' });
    } else if (addedFuture === 0) {
      list.push({ label: n + '일', date: d, type: 'day' });
      addedFuture++;
    }
  }

  list.sort((a, b) => a.date - b.date);
  return list;
}

export default function Anniversary() {
  const wrapRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const today = new Date(); today.setHours(0, 0, 0, 0);
    const list = getList();

    const ITEM_W = 110;
    const LINE_Y = 80;
    const TOTAL_W = Math.max(600, list.length * ITEM_W + 60);

    wrap.style.height = '180px';
    wrap.style.position = 'relative';
    wrap.style.minWidth = TOTAL_W + 'px';
    wrap.innerHTML = '';

    // 기준선
    const line = document.createElement('div');
    line.style.cssText = `position:absolute;left:30px;right:30px;top:${LINE_Y}px;height:2px;background:linear-gradient(to right,#7a1e2b,#3a5f8a);`;
    wrap.appendChild(line);

    // 화살표
    const arrow = document.createElement('div');
    arrow.style.cssText = `position:absolute;right:24px;top:${LINE_Y - 5}px;width:0;height:0;border-left:10px solid #3a5f8a;border-top:6px solid transparent;border-bottom:6px solid transparent;`;
    wrap.appendChild(arrow);

    list.forEach((item, i) => {
      const x = 30 + i * ITEM_W + ITEM_W / 2;
      const diff = diffDays(today, item.date);
      const isPast = diff < 0;
      const isToday = diff === 0;
      const isFuture = diff > 0;
      const isUp = i % 2 === 0;
      const stemH = 28;

      const dotColor = isToday ? '#b52d3e'
        : isPast ? 'rgba(255,255,255,.18)'
        : (diff <= 30 ? '#c89050' : '#6b9fd4');

      const labelColor = isToday ? '#b52d3e'
        : isPast ? 'rgba(255,255,255,.28)'
        : (diff <= 30 ? '#c89050' : '#e8e6e2');

      // 수직 연결선
      const stem = document.createElement('div');
      stem.style.cssText = [
        'position:absolute',
        `left:${x}px`,
        'width:1px',
        isUp ? `top:${LINE_Y - stemH}px` : `top:${LINE_Y}px`,
        `height:${stemH}px`,
        `background:${isToday ? '#b52d3e' : dotColor}`,
        'transform:translateX(-50%)'
      ].join(';');
      wrap.appendChild(stem);

      // 점 / 하트
      const dot = document.createElement('div');
      if (isToday) {
        dot.style.cssText = [
          'position:absolute',
          `left:${x}px`,
          `top:${LINE_Y - 9}px`,
          'transform:translateX(-50%)',
          'font-size:17px',
          'color:#b52d3e',
          'line-height:1',
          'animation:pulse 1.8s ease-in-out infinite',
          'z-index:2'
        ].join(';');
        dot.textContent = '♥';
        const glow = document.createElement('div');
        glow.style.cssText = `position:absolute;left:${x - 14}px;top:${LINE_Y - 14}px;width:28px;height:28px;border-radius:50%;background:rgba(181,45,62,.18);z-index:1;`;
        wrap.appendChild(glow);
      } else {
        dot.style.cssText = [
          'position:absolute',
          `left:${x}px`,
          `top:${LINE_Y - 5}px`,
          'transform:translateX(-50%)',
          'width:10px',
          'height:10px',
          'border-radius:50%',
          `background:${dotColor}`,
          'z-index:2'
        ].join(';');
        if (isFuture && diff <= 30) {
          dot.style.boxShadow = '0 0 0 3px rgba(200,144,80,.3)';
        }
      }
      wrap.appendChild(dot);

      // 텍스트
      let dStr = '';
      if (isToday) dStr = `<div style="color:#b52d3e;font-weight:700;font-size:.68rem;margin-top:2px;">D-DAY</div>`;
      else if (isFuture && diff <= 30) dStr = `<div style="color:#c89050;font-size:.64rem;margin-top:2px;">D-${diff}</div>`;
      else if (isFuture) dStr = `<div style="color:#6b9fd4;font-size:.64rem;margin-top:2px;">D-${diff}</div>`;
      else dStr = `<div style="color:rgba(255,255,255,.22);font-size:.62rem;margin-top:2px;">+${Math.abs(diff)}일</div>`;

      const txt = document.createElement('div');
      txt.style.cssText = [
        'position:absolute',
        `left:${x}px`,
        'transform:translateX(-50%)',
        isUp ? `bottom:${180 - LINE_Y + stemH}px` : `top:${LINE_Y + stemH + 2}px`,
        'text-align:center',
        'white-space:nowrap'
      ].join(';');

      txt.innerHTML = [
        `<div style="font-family:var(--font-serif);font-size:.85rem;color:${labelColor};line-height:1.2;">${item.label}</div>`,
        `<div style="font-size:.62rem;color:rgba(255,255,255,.3);margin-top:2px;">${fmt(item.date)}</div>`,
        dStr
      ].join('');

      wrap.appendChild(txt);
    });
  }, []);

  return (
    <div style={{
      maxWidth: '1100px', margin: '1.2rem auto 0',
      background: 'var(--surface)', border: '1px solid var(--border)',
      borderRadius: '2px', padding: '1.4rem 2rem 2rem'
    }}>
      <p style={{
        fontSize: '.58rem', letterSpacing: '.18em', textTransform: 'uppercase',
        color: 'var(--neutral)', marginBottom: '1.8rem'
      }}>기념일</p>
      <div style={{ overflowX: 'auto', overflowY: 'visible', paddingBottom: '1rem' }}>
        <div ref={wrapRef} />
      </div>
    </div>
  );
}
