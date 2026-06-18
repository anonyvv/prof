import './index.css'
import { RoomButton } from './components/RoomPopup'
import Anniversary from './components/Anniversary'
import TasteRadar from './components/TasteRadar'
import KinkSection from './components/KinkSection'
import { suhyeokCardHTML, eunhoCardHTML, bannerHTML, vocabHTML } from './data/profileData'

// HTML 문자열에서 섹션별로 분리
function parseSections(html) {
  const results = []
  const sectionRegex = /<div class="section">([\s\S]*?)<\/div>\s*(?=<div class="section">|<\/div>\s*<\/div>|$)/g
  let match
  while ((match = sectionRegex.exec(html)) !== null) {
    results.push(match[0])
  }
  return results
}

function parseHead(html) {
  const start = html.indexOf('<div class="card-head">')
  const end = html.indexOf('</div>', start) + 6
  // card-head는 내부에 여러 태그가 있으니 닫는 태그 정확히 찾기
  let depth = 0
  let i = start
  while (i < html.length) {
    if (html.slice(i, i + 4) === '<div') depth++
    if (html.slice(i, i + 6) === '</div>') { depth--; if (depth === 0) { i += 6; break } }
    i++
  }
  return html.slice(start, i)
}

export default function App() {
  const sHead = parseHead(suhyeokCardHTML)
  const eHead = parseHead(eunhoCardHTML)

  // 미각/공간 섹션은 각각 React 컴포넌트로 별도 렌더링하므로
  // 일반 섹션 파싱에서는 그 앞부분만 사용한다
  const [sBeforeRoom] = suhyeokCardHTML.split('<!-- 공간 · 인테리어 -->')
  const [eBeforeRoom] = eunhoCardHTML.split('<!-- 공간 · 인테리어 -->')
  const [sBeforeTaste] = sBeforeRoom.split('<!-- 미각 레이더 -->')
  const [eBeforeTaste] = eBeforeRoom.split('<!-- 미각 레이더 -->')
  const sSections = parseSections(sBeforeTaste)
  const eSections = parseSections(eBeforeTaste)

  // 공간 섹션 ul 내용 추출
  const sRoomList = extractUlContent(suhyeokCardHTML)
  const eRoomList = extractUlContent(eunhoCardHTML)

  return (
    <>
      <header>
        <p className="header-label">캐릭터 프로필 · Character Profiles</p>
        <h1 className="header-title">차수혁 &amp; 지은호</h1>
        <p className="header-sub">태건 그룹 × 개인 경호 · 연인 관계</p>
        <div className="header-divider"></div>
      </header>

      {/* 핵심: 두 카드를 하나의 grid로 */}
      <div className="profile-grid">
        {/* 헤더 행 */}
        <div className="card card-s pcard-head" dangerouslySetInnerHTML={{ __html: sHead }} />
        <div className="card card-e pcard-head" dangerouslySetInnerHTML={{ __html: eHead }} />

        {/* 섹션 행들 */}
        {sSections.map((s, i) => (
          <>
            <div key={`s-${i}`} className="card card-s psection"
              dangerouslySetInnerHTML={{ __html: s }} />
            <div key={`e-${i}`} className="card card-e psection"
              dangerouslySetInnerHTML={{ __html: eSections[i] || '' }} />
          </>
        ))}

        {/* 미각 선호도 행 */}
        <div className="card card-s psection">
          <TasteRadar type="s" />
        </div>
        <div className="card card-e psection">
          <TasteRadar type="e" />
        </div>

        {/* 성적 취향 · 페티시 행 */}
        <div className="card card-s psection">
          <KinkSection type="s" />
        </div>
        <div className="card card-e psection">
          <KinkSection type="e" />
        </div>

        {/* 공간 섹션 행 */}
        <div className="card card-s psection">
          <div className="section">
            <p className="section-label">공간 · 인테리어</p>
            <RoomButton type="s" />
            <ul className="kw-list" style={{ marginTop: '.75rem' }}
              dangerouslySetInnerHTML={{ __html: sRoomList }} />
          </div>
        </div>
        <div className="card card-e psection">
          <div className="section">
            <p className="section-label">공간 · 인테리어</p>
            <RoomButton type="e" />
            <ul className="kw-list" style={{ marginTop: '.75rem' }}
              dangerouslySetInnerHTML={{ __html: eRoomList }} />
          </div>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: bannerHTML }} />
      <VocabSection />
      <Anniversary />
    </>
  )
}

function extractUlContent(html) {
  const roomIdx = html.indexOf('<!-- 공간 · 인테리어 -->')
  if (roomIdx === -1) return ''
  const ulStart = html.indexOf('<li', roomIdx)
  const ulEnd = html.indexOf('</ul>', roomIdx) 
  return html.slice(ulStart, ulEnd)
}

function VocabSection() {
  const cutIdx = vocabHTML.indexOf('<!-- ── 커플 기념일 ── -->')
  const cleanVocab = cutIdx !== -1 ? vocabHTML.slice(0, cutIdx) : vocabHTML
  return <div dangerouslySetInnerHTML={{ __html: cleanVocab }} />
}