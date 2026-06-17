// 섹션 높이 조절
function equalizeRows() {
  const cards = document.querySelectorAll('.card-body');
  if (cards.length < 2) return;
  const left = cards[0].querySelectorAll('.section');
  const right = cards[1].querySelectorAll('.section');
  const count = Math.min(left.length, right.length);
  for (let i = 0; i < count; i++) {
    left[i].style.minHeight = '';
    right[i].style.minHeight = '';
  }
  for (let i = 0; i < count; i++) {
    const h = Math.max(left[i].offsetHeight, right[i].offsetHeight);
    left[i].style.minHeight = h + 'px';
    right[i].style.minHeight = h + 'px';
  }
}
window.addEventListener('load', equalizeRows);
window.addEventListener('resize', equalizeRows);
if (document.fonts) {
  document.fonts.ready.then(equalizeRows);
}


// 인테리어
function rsTab(tab) {
  ['house','room','wolf'].forEach(function(t) {
    document.getElementById('rs-' + t).style.display = t === tab ? '' : 'none';
    var btn = document.getElementById('rs-t-' + t);
    if (t === tab) {
      btn.style.background = '#7a1e2b';
      btn.style.color = '#f5dde0';
      btn.style.border = '1px solid #7a1e2b';
    } else {
      btn.style.background = 'transparent';
      btn.style.color = '#7a1e2b';
      btn.style.border = '1px solid rgba(122,30,43,.4)';
    }
  });
}

// 디데이
(function() {
  const START = new Date('2025-02-02');

  function diffDays(a, b) { return Math.round((b - a) / 86400000); }
  function fmt(d) {
    return d.getFullYear() + '. '
      + String(d.getMonth()+1).padStart(2,'0') + '. '
      + String(d.getDate()).padStart(2,'0');
  }

  function getList() {
    const today = new Date(); today.setHours(0,0,0,0);
    const list = [];

    // 주년 (1~5) 항상 포함
    for (let y = 1; y <= 5; y++) {
      const d = new Date(START);
      d.setFullYear(d.getFullYear() + y);
      list.push({ label: y + '주년', date: d, type: 'year' });
    }

    // 100일 단위
    // 규칙: 과거는 모두 포함, 미래는 30일 이내 + 바로 다음 하나만
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

  function render() {
    const today = new Date(); today.setHours(0,0,0,0);
    const list = getList();
    const wrap = document.getElementById('anno-timeline');
    if (!wrap) return;

    const ITEM_W = 110;   // 아이템 간격
    const LINE_Y = 80;    // 가로선 Y위치
    const TOTAL_W = Math.max(600, list.length * ITEM_W + 60);
    wrap.style.height = '180px';
    wrap.style.position = 'relative';
    wrap.style.minWidth = TOTAL_W + 'px';

    // 가로 기준선
    const line = document.createElement('div');
    line.style.cssText = 'position:absolute;left:30px;right:30px;top:' + LINE_Y + 'px;height:2px;background:linear-gradient(to right,#7a1e2b,#3a5f8a);';
    wrap.appendChild(line);

    // 화살표
    const arrow = document.createElement('div');
    arrow.style.cssText = 'position:absolute;right:24px;top:' + (LINE_Y - 5) + 'px;width:0;height:0;border-left:10px solid #3a5f8a;border-top:6px solid transparent;border-bottom:6px solid transparent;';
    wrap.appendChild(arrow);

    list.forEach((item, i) => {
      const x = 30 + i * ITEM_W + ITEM_W / 2;
      const diff = diffDays(today, item.date);
      const isPast = diff < 0;
      const isToday = diff === 0;
      const isFuture = diff > 0;
      const isUp = i % 2 === 0;   // 위아래 교차

      const dotColor = isToday ? '#b52d3e'
        : isPast ? 'rgba(255,255,255,.18)'
        : (diff <= 30 ? '#c89050' : '#6b9fd4');

      const labelColor = isToday ? '#b52d3e'
        : isPast ? 'rgba(255,255,255,.28)'
        : (diff <= 30 ? '#c89050' : '#e8e6e2');

      // 연결 수직선
      const stem = document.createElement('div');
      const stemH = 28;
      stem.style.cssText = [
        'position:absolute',
        'left:' + x + 'px',
        'width:1px',
        isUp ? 'top:' + (LINE_Y - stemH) + 'px' : 'top:' + LINE_Y + 'px',
        'height:' + stemH + 'px',
        'background:' + (isToday ? '#b52d3e' : dotColor),
        'transform:translateX(-50%)'
      ].join(';');
      wrap.appendChild(stem);

      // 점 또는 하트
      const dot = document.createElement('div');
      if (isToday) {
        dot.style.cssText = [
          'position:absolute',
          'left:' + x + 'px',
          'top:' + (LINE_Y - 9) + 'px',
          'transform:translateX(-50%)',
          'font-size:17px',
          'color:#b52d3e',
          'line-height:1',
          'animation:pulse 1.8s ease-in-out infinite',
          'z-index:2'
        ].join(';');
        dot.textContent = '♥';
        // 글로우
        const glow = document.createElement('div');
        glow.style.cssText = 'position:absolute;left:' + (x - 14) + 'px;top:' + (LINE_Y - 14) + 'px;width:28px;height:28px;border-radius:50%;background:rgba(181,45,62,.18);z-index:1;';
        wrap.appendChild(glow);
      } else {
        dot.style.cssText = [
          'position:absolute',
          'left:' + x + 'px',
          'top:' + (LINE_Y - 5) + 'px',
          'transform:translateX(-50%)',
          'width:10px',
          'height:10px',
          'border-radius:50%',
          'background:' + dotColor,
          'z-index:2'
        ].join(';');
        // 30일 이내 미래 — 외곽 링
        if (isFuture && diff <= 30) {
          dot.style.boxShadow = '0 0 0 3px rgba(200,144,80,.3)';
        }
      }
      wrap.appendChild(dot);

      // 텍스트 블록
      const txt = document.createElement('div');
      const TEXT_H = 60;
      txt.style.cssText = [
        'position:absolute',
        'left:' + x + 'px',
        'transform:translateX(-50%)',
        isUp ? 'bottom:' + (180 - LINE_Y + stemH) + 'px' : 'top:' + (LINE_Y + stemH + 2) + 'px',
        'text-align:center',
        'white-space:nowrap'
      ].join(';');

      // D라벨
      let dStr = '';
      if (isToday) dStr = '<div style="color:#b52d3e;font-weight:700;font-size:.68rem;margin-top:2px;">D-DAY</div>';
      else if (isFuture && diff <= 30) dStr = '<div style="color:#c89050;font-size:.64rem;margin-top:2px;">D-' + diff + '</div>';
      else if (isFuture) dStr = '<div style="color:#6b9fd4;font-size:.64rem;margin-top:2px;">D-' + diff + '</div>';
      else dStr = '<div style="color:rgba(255,255,255,.22);font-size:.62rem;margin-top:2px;">+' + Math.abs(diff) + '일</div>';

      txt.innerHTML = [
        '<div style="font-family:var(--font-serif);font-size:.85rem;color:' + labelColor + ';line-height:1.2;">' + item.label + '</div>',
        '<div style="font-size:.62rem;color:rgba(255,255,255,.3);margin-top:2px;">' + fmt(item.date) + '</div>',
        dStr
      ].join('');

      wrap.appendChild(txt);
    });
  }

  document.addEventListener('DOMContentLoaded', render);
})();