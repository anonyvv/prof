// src/components/KinkSection.jsx
// 성적 취향 · 페티시 섹션
// 미각 선호도 섹션 바로 다음에 배치
// App.jsx에서: import KinkSection from './components/KinkSection'
// 렌더링: <KinkSection type="s" /> 또는 <KinkSection type="e" />

import { useState } from 'react'

// ── 데이터 ──────────────────────────────────────────────────────

// 각 항목은 캐릭터별로 독립된 값만 가짐 — 서로 참조하지 않음
// pos: 0~100, 본인 성향이 스펙트럼 위 어디쯔음 있는지 (그래프용 위치값)
const SPECTRUM_S = [
  { label: '역할', pos: 95, text: 'Dom' },
  { label: '구속 강도', pos: 88, text: '직접 설계' },
  { label: '타격', pos: 80, text: '크롭·케인·패들' },
  { label: '감각 차단', pos: 85, text: '시각 제거 선호' },
  { label: '호칭 위계', pos: 92, text: '고수' },
  { label: '언어 사용', pos: 30, text: '절제·뜸 들임' },
  { label: '통증 반응', pos: 75, text: '가함' },
  { label: '애프터케어', pos: 60, text: '행동으로' },
]

const SPECTRUM_E = [
  { label: '역할', pos: 5, text: 'Sub' },
  { label: '구속 강도', pos: 72, text: '전위임' },
  { label: '타격', pos: 60, text: '수용' },
  { label: '감각 차단', pos: 78, text: '청각·촉각 극대화' },
  { label: '호칭 위계', pos: 90, text: '스스로 지킴' },
  { label: '언어 사용', pos: 70, text: '충동적 솔직함' },
  { label: '통증 반응', pos: 20, text: '참는 데 익숙' },
  { label: '애프터케어', pos: 80, text: '존재 자체로 충분' },
]

// 교집합 — 공유 요소
const SHARED = [
  { term: '세이프워드', desc: '설정됨 · 안전 가위 상시 비치' },
  { term: '목줄 · 콜라', desc: '형태 있는 것과 없는 것 둘 다' },
  { term: '호칭', desc: '늑대굴 안 — 도련님 · 멍멍이' },
  { term: '공간', desc: '늑대굴 — 수혁이 열어야 시작' },
  { term: '케어 키트', desc: '손 닿는 위치에 항상' },
]

// 개인 특성
const SOLO_S = [
  '버건디 — 공간·도구 전체의 포인트 컬러',
  '블랙 미러 — 지은호가 자신을 직면하게',
  '뜸 들이는 방식 — 직접적이지 않게',
  '오버헤드 바 + 헤드보드 링 3개 매립',
]

const SOLO_E = [
  '풀려나도 그 감각을 오래 유지하려 함',
  '눈물 — 이 공간만의 허락',
  '수혁 목소리·체온이 유일한 기준점',
  '소유됨에서 안정감을 찾음',
]

// 태그 용어 설명 — 설명 팝업에서 사용
const GLOSSARY = [
  { term: '역할 (Dom / Sub)', desc: '관계 안에서 주도권의 방향. Dom은 이끄는 쪽, Sub는 따르는 쪽을 가리킴.' },
  { term: '구속 강도', desc: '로프·커프 등 신체적 구속을 어느 정도까지 쓰는지, 그 설계를 누가 주도하는지.' },
  { term: '타격', desc: '크롭·케인·패들 등 도구로 주는 자극의 강도와 그것을 받아들이는 방식.' },
  { term: '감각 차단', desc: '시각·청각 등 특정 감각을 일부러 막아 다른 감각을 더 또렷하게 만드는 방식.' },
  { term: '호칭 위계', desc: '도련님·멍멍이처럼 관계 안에서 쓰는 호칭이 드러내는 위계 구조.' },
  { term: '언어 사용', desc: '감정과 의사를 표현하는 방식 — 절제되어 있는지, 충동적으로 솔직한지.' },
  { term: '통증 반응', desc: '통증을 주는 쪽과 받는 쪽 각각의 성향과 반응.' },
  { term: '애프터케어', desc: '행위가 끝난 뒤 정서적·신체적으로 서로를 돌보는 방식.' },
  { term: '세이프워드', desc: '한계에 닿았을 때 즉시 멈추자는 뜻을 전하는 약속된 단어. 안전 가위도 항상 곁에 둠.' },
  { term: '목줄 · 콜라', desc: '소유와 신뢰, 귀속을 나타내는 물건 — 실제로 존재하는 것과 마음속에만 있는 것 둘 다.' },
  { term: '늑대굴', desc: '두 사람만의 사적 공간. 수혁이 열어야만 시작되는 곳.' },
]

// ── 컴포넌트 ────────────────────────────────────────────────────

export default function KinkSection({ type }) {
  const isS = type === 's'
  const accent = isS ? 'var(--s-gold)' : 'var(--e-blue)'
  const [glossaryOpen, setGlossaryOpen] = useState(false)

  return (
    <div className="section" style={{ padding: '1.4rem 2rem' }}>
      <p className="section-label">
        성적 취향 · 페티시
        <button
          type="button"
          onClick={() => setGlossaryOpen(true)}
          style={{
            marginLeft: '.5rem', fontSize: '.62rem', letterSpacing: '.04em',
            padding: '.1rem .5rem', borderRadius: '1px', cursor: 'pointer',
            background: 'transparent', color: accent,
            border: `1px solid ${accent}`, opacity: .75, flexShrink: 0
          }}
        >ⓘ 태그 설명</button>
      </p>

      {/* 성향 스펙트럼 슬라이더 — 본인 값만 표시 */}
      <SpectrumSliders type={type} />

      {/* 개인 특성 */}
      <SoloTraits type={type} accent={accent} />

      {glossaryOpen && <GlossaryModal onClose={() => setGlossaryOpen(false)} accent={accent} />}
    </div>
  )
}

// ── 성향 스펙트럼 슬라이더 ─────────────────────────────────────────

function SpectrumSliders({ type }) {
  const isS = type === 's'
  const rows = isS ? SPECTRUM_S : SPECTRUM_E
  const accent = isS ? 'var(--s-gold)' : 'var(--e-blue)'

  return (
    <div style={{ marginBottom: '1.4rem' }}>
      <p style={{
        fontSize: '.58rem', letterSpacing: '.16em', textTransform: 'uppercase',
        color: 'rgba(170,170,187,.5)', marginBottom: '.85rem'
      }}>성향 스펙트럼 · {isS ? '차수혁' : '지은호'}</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '.55rem' }}>
        {rows.map((row, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '.7rem' }}>
            <span style={{
              width: '64px', flexShrink: 0,
              fontSize: '.62rem', color: 'rgba(170,170,187,.7)',
              textAlign: 'right', letterSpacing: '.02em'
            }}>{row.label}</span>

            <div style={{
              flex: 1, height: '4px', borderRadius: '2px',
              background: 'rgba(255,255,255,.08)',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute', left: 0, top: 0, bottom: 0,
                width: `${row.pos}%`, background: accent, opacity: .22,
                borderRadius: '2px'
              }} />
              <div style={{
                position: 'absolute', left: `${row.pos}%`, top: '50%',
                transform: 'translate(-50%,-50%)',
                width: '11px', height: '11px', borderRadius: '50%',
                background: accent,
                boxShadow: `0 0 0 3px rgba(0,0,0,.6), 0 0 8px ${accent}55`
              }} />
            </div>

            <span style={{
              width: '106px', flexShrink: 0,
              fontSize: '.62rem', color: accent, opacity: .85, letterSpacing: '.01em'
            }}>{row.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── 개인 특성 태그 ───────────────────────────────────────────────

function SoloTraits({ type, accent }) {
  const traits = type === 's' ? SOLO_S : SOLO_E

  return (
    <div>
      <p style={{
        fontSize: '.58rem', letterSpacing: '.16em', textTransform: 'uppercase',
        color: 'rgba(170,170,187,.5)', marginBottom: '.75rem'
      }}>개인 특성</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '.45rem' }}>
        {traits.map((t, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'flex-start', gap: '.5rem',
            fontSize: '.76rem', color: 'rgba(200,197,192,.75)', lineHeight: 1.65
          }}>
            <span style={{ color: accent, opacity: .6, marginTop: '.1rem', flexShrink: 0 }}>—</span>
            {t}
          </div>
        ))}
      </div>
    </div>
  )
}

// ── 태그 설명 팝업 ──────────────────────────────────────────────

function GlossaryModal({ onClose, accent }) {
  return (
    <div
      className="room-overlay open"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="room-modal" style={{ maxWidth: '600px' }}>
        <button className="room-modal-close" onClick={onClose}>✕</button>
        <p className="room-modal-title" style={{ color: accent }}>태그 설명</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.8rem' }}>
          {GLOSSARY.map((g, i) => (
            <div key={i}>
              <div style={{ fontSize: '.82rem', fontWeight: 500, color: '#edeae5', marginBottom: '.2rem' }}>{g.term}</div>
              <div style={{ fontSize: '.76rem', color: 'rgba(200,197,192,.75)', lineHeight: 1.6 }}>{g.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── 벤 다이어그램 (커플 공용, 별도 렌더링) ──────────────────────
// App.jsx에서: import { KinkVenn } from './components/KinkSection'
// 렌더링: 두 카드 아래, 커플 배너 위에

export function KinkVenn() {
  const [hovered, setHovered] = useState(null)

  return (
    <div style={{
      maxWidth: '1100px', margin: '0 auto',
      background: 'var(--surface)', border: '1px solid var(--border)',
      borderRadius: '2px', padding: '1.6rem 2rem'
    }}>
      <p style={{
        fontSize: '.58rem', letterSpacing: '.18em', textTransform: 'uppercase',
        color: 'var(--neutral)', marginBottom: '1.4rem'
      }}>관계 구조 · 공유 요소</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        gap: '0',
        alignItems: 'start'
      }}>
        {/* 수혁 단독 */}
        <div style={{ padding: '0 1rem 0 0' }}>
          <p style={{
            fontSize: '.62rem', letterSpacing: '.14em', textTransform: 'uppercase',
            color: 'var(--s-gold-dim)', marginBottom: '.8rem'
          }}>차수혁</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
            {SOLO_S.map((t, i) => (
              <div key={i} style={{
                fontSize: '.7rem', color: 'rgba(200,197,192,.65)', lineHeight: 1.6,
                paddingLeft: '.6rem',
                borderLeft: '1px solid rgba(181,45,62,.25)'
              }}>{t}</div>
            ))}
          </div>
        </div>

        {/* 교집합 */}
        <div style={{
          minWidth: '160px',
          background: 'linear-gradient(180deg, rgba(181,45,62,.06), rgba(107,159,212,.06))',
          border: '1px solid rgba(255,255,255,.06)',
          borderRadius: '2px',
          padding: '1rem .8rem',
          display: 'flex', flexDirection: 'column', gap: '.5rem',
          alignSelf: 'stretch', justifyContent: 'center'
        }}>
          <p style={{
            fontSize: '.58rem', letterSpacing: '.14em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,.25)', marginBottom: '.4rem', textAlign: 'center'
          }}>공유</p>
          {SHARED.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                padding: '.35rem .5rem',
                borderRadius: '1px',
                background: hovered === i ? 'rgba(255,255,255,.04)' : 'transparent',
                cursor: 'default',
                transition: 'background .2s'
              }}
            >
              <div style={{
                fontSize: '.72rem', color: '#e8e6e2', fontWeight: 500,
                textAlign: 'center'
              }}>{item.term}</div>
              {hovered === i && (
                <div style={{
                  fontSize: '.62rem', color: 'rgba(170,170,187,.6)',
                  textAlign: 'center', marginTop: '.2rem', lineHeight: 1.5
                }}>{item.desc}</div>
              )}
            </div>
          ))}
        </div>

        {/* 은호 단독 */}
        <div style={{ padding: '0 0 0 1rem' }}>
          <p style={{
            fontSize: '.62rem', letterSpacing: '.14em', textTransform: 'uppercase',
            color: 'var(--e-blue-dim)', marginBottom: '.8rem'
          }}>지은호</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
            {SOLO_E.map((t, i) => (
              <div key={i} style={{
                fontSize: '.7rem', color: 'rgba(200,197,192,.65)', lineHeight: 1.6,
                paddingLeft: '.6rem',
                borderLeft: '1px solid rgba(107,159,212,.25)'
              }}>{t}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
