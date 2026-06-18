// 미각 선호도 레이더 차트 — 7축(감칠맛·단맛·신맛·매운맛·쓴맛·짠맛·느끼함) 정헵타곤
// 기존 인라인 SVG는 6각형 격자에 7개 값을 억지로 매핑해 감칠맛 축이 빠지고
// 라벨이 viewBox 밖으로 잘리는 문제가 있었음 — 좌표를 직접 계산해 해결

const ORDER = ['감칠맛', '단맛', '신맛', '매운맛', '쓴맛', '짠맛', '느끼함']

const TASTE_S = { 감칠맛: 8.5, 단맛: 6.0, 신맛: 4.5, 매운맛: 5.4, 쓴맛: 0, 짠맛: 3.0, 느끼함: 1.5 }
const TASTE_E = { 감칠맛: 8.0, 단맛: 5.0, 신맛: 6.0, 매운맛: 8.0, 쓴맛: 4.0, 짠맛: 3.0, 느끼함: 5.0 }

const CX = 140
const CY = 140
const MAX_R = 85
const LABEL_R = 105
const RING_VALUES = [2, 4, 6, 8, 10]

function pointFor(i, r) {
  const angle = (i * 2 * Math.PI) / ORDER.length - Math.PI / 2
  return { x: CX + r * Math.cos(angle), y: CY + r * Math.sin(angle) }
}

function polygonStr(points) {
  return points.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
}

function anchorFor(i) {
  if (i === 3 || i === 4) return 'middle'
  if (i === 1 || i === 2) return 'start'
  if (i === 5 || i === 6) return 'end'
  return 'middle'
}

export default function TasteRadar({ type }) {
  const isS = type === 's'
  const data = isS ? TASTE_S : TASTE_E
  const color = isS ? '#b52d3e' : '#6b9fd4'
  const fillColor = isS ? 'rgba(181,45,62,0.25)' : 'rgba(107,159,212,0.25)'
  const gridColor = isS ? 'rgba(181,45,62,0.15)' : 'rgba(107,159,212,0.15)'
  const axisColor = isS ? 'rgba(181,45,62,0.3)' : 'rgba(107,159,212,0.3)'

  const dataPolygon = polygonStr(
    ORDER.map((label, i) => pointFor(i, (data[label] / 10) * MAX_R))
  )

  const sortedLabels = [...ORDER].sort((a, b) => data[b] - data[a])

  return (
    <div className="section">
      <p className="section-label">미각 선호도</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
        <svg viewBox="0 0 280 280" width="200" height="200" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
          {RING_VALUES.map((v, idx) => (
            <polygon
              key={idx}
              points={polygonStr(ORDER.map((_, i) => pointFor(i, (v / 10) * MAX_R)))}
              fill="none" stroke={gridColor} strokeWidth="1"
            />
          ))}
          {ORDER.map((_, i) => {
            const p = pointFor(i, MAX_R)
            return <line key={i} x1={CX} y1={CY} x2={p.x} y2={p.y} stroke={axisColor} strokeWidth="1" />
          })}
          <polygon points={dataPolygon} fill={fillColor} stroke={color} strokeWidth="1.5" />
          {ORDER.map((label, i) => {
            const p = pointFor(i, LABEL_R)
            return (
              <text
                key={label} x={p.x} y={p.y}
                textAnchor={anchorFor(i)} dominantBaseline="middle"
                fontSize="10.5" fill="#d8d5d0" fontFamily="sans-serif"
              >{label}</text>
            )
          })}
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem', fontSize: '.72rem' }}>
          {sortedLabels.map(label => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              <span style={{ width: '50px', color: '#aaaabb' }}>{label}</span>
              <div style={{
                width: `${Math.max(data[label] * 9, 2)}px`, height: '6px',
                background: color, borderRadius: '2px',
                opacity: data[label] === 0 ? 0.35 : 0.8
              }} />
              <span style={{ color: '#edeae5' }}>{data[label].toFixed(1)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
