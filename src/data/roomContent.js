// 자동 추출 — SVG 데이터

export const roomSContent = {
  house: {
    svg: `<svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg" style="background:#07070e;">
  <defs><pattern id="gs" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(181,45,62,.06)" stroke-width=".5"/></pattern></defs>
  <rect width="640" height="480" fill="url(#gs)"/>
  <!-- 외벽 -->
  <rect x="30" y="30" width="580" height="420" fill="none" stroke="#b52d3e" stroke-width="2.5"/>
  <rect x="34" y="34" width="572" height="412" fill="none" stroke="rgba(181,45,62,.15)" stroke-width="1"/>
  <!-- 1층 구분선 -->
  <line x1="30" y1="265" x2="610" y2="265" stroke="#7a1e2b" stroke-width="1.5" stroke-dasharray="6,3"/>
  <!-- 1층 라벨 -->
  <text x="320" y="370" text-anchor="middle" font-size="11" fill="rgba(181,45,62,.25)" font-family="sans-serif" letter-spacing="4">1 F — 공용 공간</text>
  <!-- 2층 라벨 -->
  <text x="320" y="55" text-anchor="middle" font-size="11" fill="rgba(181,45,62,.25)" font-family="sans-serif" letter-spacing="4">2 F — 차수혁 전용</text>

  <!-- 2층: 차수혁 방 (복도 안쪽 두번째) -->
  <rect x="300" y="45" width="160" height="110" fill="rgba(20,8,14,.8)" stroke="#b52d3e" stroke-width="1.5"/>
  <text x="380" y="90" text-anchor="middle" font-size="9" fill="#b52d3e" font-family="sans-serif">차수혁 방</text>
  <text x="380" y="106" text-anchor="middle" font-size="7" fill="#7a1e2b" font-family="sans-serif">복도 안쪽 두 번째</text>
  <!-- 드레스룸 연결 표시 -->
  <rect x="460" y="65" width="70" height="70" fill="rgba(15,6,10,.8)" stroke="#4a1e28" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="495" y="105" text-anchor="middle" font-size="7.5" fill="#4a1e28" font-family="sans-serif">드레스룸</text>

  <!-- 2층: 복도 -->
  <rect x="34" y="45" width="260" height="35" fill="rgba(12,5,9,.6)" stroke="#3a1018" stroke-width="1"/>
  <text x="164" y="67" text-anchor="middle" font-size="8" fill="#4a1e28" font-family="sans-serif" letter-spacing="2">복 도</text>
  <!-- 방 2개 더 (2층) -->
  <rect x="34" y="82" width="120" height="90" fill="rgba(12,5,9,.5)" stroke="#2a0e18" stroke-width="1"/>
  <text x="94" y="132" text-anchor="middle" font-size="8" fill="#2a0e18" font-family="sans-serif">기타 방</text>
  <rect x="158" y="82" width="140" height="90" fill="rgba(12,5,9,.5)" stroke="#2a0e18" stroke-width="1"/>
  <text x="228" y="132" text-anchor="middle" font-size="8" fill="#2a0e18" font-family="sans-serif">기타 방</text>
  <!-- 2층 계단 -->
  <rect x="534" y="45" width="76" height="90" fill="rgba(10,4,8,.7)" stroke="#3a1018" stroke-width="1"/>
  <line x1="534" y1="60" x2="610" y2="60" stroke="#3a1018" stroke-width=".8"/>
  <line x1="534" y1="75" x2="610" y2="75" stroke="#3a1018" stroke-width=".8"/>
  <line x1="534" y1="90" x2="610" y2="90" stroke="#3a1018" stroke-width=".8"/>
  <line x1="534" y1="105" x2="610" y2="105" stroke="#3a1018" stroke-width=".8"/>
  <text x="572" y="130" text-anchor="middle" font-size="7.5" fill="#3a1018" font-family="sans-serif">계단</text>

  <!-- 1층: 넓은 홀 -->
  <rect x="34" y="278" width="300" height="160" fill="rgba(12,5,9,.5)" stroke="#2a0e18" stroke-width="1"/>
  <text x="184" y="360" text-anchor="middle" font-size="10" fill="rgba(181,45,62,.2)" font-family="sans-serif" letter-spacing="3">넓은 홀</text>
  <!-- 소파/의자 (홀) -->
  <rect x="55" y="310" width="80" height="40" fill="rgba(20,8,14,.7)" stroke="#3a1018" stroke-width="1" rx="2"/>
  <text x="95" y="334" text-anchor="middle" font-size="7" fill="#3a1018" font-family="sans-serif">소파</text>
  <!-- 1층: 주방 -->
  <rect x="338" y="278" width="142" height="100" fill="rgba(10,4,8,.6)" stroke="#2a0e18" stroke-width="1"/>
  <text x="409" y="332" text-anchor="middle" font-size="8" fill="#2a0e18" font-family="sans-serif">주방</text>
  <!-- 1층: 기타 -->
  <rect x="484" y="278" width="126" height="100" fill="rgba(10,4,8,.5)" stroke="#2a0e18" stroke-width="1"/>
  <text x="547" y="332" text-anchor="middle" font-size="8" fill="#2a0e18" font-family="sans-serif">기타 공간</text>
  <!-- 1층: 하단 -->
  <rect x="34" y="378" width="576" height="60" fill="rgba(10,4,8,.5)" stroke="#2a0e18" stroke-width="1"/>
  <text x="322" y="413" text-anchor="middle" font-size="8" fill="#2a0e18" font-family="sans-serif">입구 홀 / 현관</text>

  <!-- 입구 -->
  <rect x="270" y="436" width="100" height="14" fill="#07070e" stroke="none"/>
  <line x1="270" y1="436" x2="270" y2="450" stroke="#b52d3e" stroke-width="2"/>
  <line x1="370" y1="436" x2="370" y2="450" stroke="#b52d3e" stroke-width="2"/>
  <text x="320" y="468" text-anchor="middle" font-size="9" fill="#b52d3e" font-family="sans-serif">정문</text>

  <!-- N -->
  <text x="615" y="50" font-size="10" fill="#b52d3e" font-family="sans-serif" font-weight="bold">N</text>
  <line x1="615" y1="54" x2="615" y2="70" stroke="#b52d3e" stroke-width="1.5"/>
  <polygon points="610,70 615,82 620,70" fill="#b52d3e"/>

  <!-- 안내 -->
  <text x="380" y="196" text-anchor="middle" font-size="7.5" fill="#b52d3e" font-family="sans-serif">▶ 방 탭에서 상세 보기</text>
</svg>`,
    legend: [
      { style: { background: '#b52d3e' }, text: '2층 — 차수혁 전용 구역' },
      { style: { background: '#2a0e18' }, text: '1층 — 공용 공간 (홀·주방·현관)' },
      { style: { color: '#555568', fontStyle: 'italic', background: 'transparent' }, text: '1층은 볼 거 없음 (차수혁 본인 발언)' },
    ]
  },
  room: {
    svg: `<svg viewBox="0 0 640 500" xmlns="http://www.w3.org/2000/svg" style="background:#07070e;">
  <defs><pattern id="gr" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(181,45,62,.06)" stroke-width=".5"/></pattern></defs>
  <rect width="640" height="500" fill="url(#gr)"/>
  <rect x="40" y="30" width="560" height="430" fill="none" stroke="#b52d3e" stroke-width="2.5"/>
  <rect x="44" y="34" width="552" height="422" fill="none" stroke="rgba(181,45,62,.15)" stroke-width="1"/>

  <!-- 드레스룸 (우상단) -->
  <rect x="440" y="30" width="160" height="160" fill="rgba(15,6,10,.85)" stroke="#7a1e2b" stroke-width="1.5"/>
  <text x="520" y="112" text-anchor="middle" font-size="9" fill="#7a1e2b" font-family="sans-serif">드레스룸</text>
  <!-- 옷장 선반들 -->
  <line x1="450" y1="50" x2="590" y2="50" stroke="#3a1018" stroke-width=".8"/>
  <line x1="450" y1="70" x2="590" y2="70" stroke="#3a1018" stroke-width=".8"/>
  <line x1="450" y1="90" x2="590" y2="90" stroke="#3a1018" stroke-width=".8"/>
  <line x1="450" y1="110" x2="590" y2="110" stroke="#3a1018" stroke-width=".8"/>
  <!-- 옷들 (색상 막대) -->
  <rect x="450" y="51" width="6" height="18" rx="1" fill="#1a1a1a" opacity=".8"/>
  <rect x="458" y="51" width="6" height="18" rx="1" fill="#1a1a1a" opacity=".6"/>
  <rect x="466" y="51" width="6" height="18" rx="1" fill="#6b1525" opacity=".6"/>
  <rect x="474" y="51" width="6" height="18" rx="1" fill="#1a1a1a" opacity=".7"/>
  <!-- 슬라이딩 도어 -->
  <line x1="440" y1="190" x2="560" y2="190" stroke="#b52d3e" stroke-width="1.8"/>
  <line x1="500" y1="178" x2="560" y2="178" stroke="#7a1e2b" stroke-width="1"/>
  <text x="500" y="142" text-anchor="middle" font-size="7.5" fill="#4a1e28" font-family="sans-serif">슬라이딩 도어</text>

  <!-- 거울 (우측 벽) -->
  <rect x="594" y="200" width="6" height="180" fill="#080810" stroke="#b52d3e" stroke-width="1.2"/>
  <text x="600" y="295" text-anchor="middle" font-size="7.5" fill="#7a1e2b" font-family="sans-serif" transform="rotate(90,600,295)">블랙 미러 (전신)</text>

  <!-- 침대 (중앙) -->
  <rect x="200" y="200" width="230" height="200" fill="rgba(18,7,13,.85)" stroke="#b52d3e" stroke-width="2" rx="3"/>
  <!-- 헤드보드 -->
  <rect x="200" y="200" width="230" height="28" fill="rgba(35,10,20,.85)" stroke="#7a1e2b" stroke-width="1.2" rx="2"/>
  <text x="315" y="218" text-anchor="middle" font-size="8.5" fill="#b52d3e" font-family="sans-serif">헤드보드</text>
  <!-- 매트리스 -->
  <rect x="208" y="235" width="214" height="157" fill="rgba(22,8,16,.5)" stroke="#4a1e28" stroke-width="1" rx="2"/>
  <!-- 베개 -->
  <rect x="218" y="242" width="85" height="30" fill="rgba(30,10,18,.7)" stroke="#3a1018" stroke-width="1" rx="2"/>
  <rect x="313" y="242" width="100" height="30" fill="rgba(30,10,18,.7)" stroke="#3a1018" stroke-width="1" rx="2"/>
  <text x="315" y="340" text-anchor="middle" font-size="9" fill="#b52d3e" font-family="sans-serif">침대</text>
  <text x="315" y="356" text-anchor="middle" font-size="7" fill="#7a1e2b" font-family="sans-serif">몇 없는 가구 중 주요 가구</text>

  <!-- 사이드 테이블 -->
  <rect x="440" y="240" width="50" height="50" fill="rgba(14,5,10,.7)" stroke="#4a1e28" stroke-width="1" rx="1"/>
  <text x="465" y="270" text-anchor="middle" font-size="7" fill="#4a1e28" font-family="sans-serif">사이드</text>

  <!-- 출입구 -->
  <rect x="50" y="150" width="12" height="1" fill="#07070e" stroke="none"/>
  <rect x="40" y="150" width="12" height="100" fill="#07070e" stroke="none"/>
  <line x1="40" y1="150" x2="40" y2="250" stroke="none"/>
  <line x1="52" y1="150" x2="52" y2="250" stroke="#b52d3e" stroke-width="2"/>
  <path d="M 52 150 Q 52 200 100 200" fill="rgba(107,21,37,.08)" stroke="#7a1e2b" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="75" y="145" text-anchor="middle" font-size="8" fill="#7a1e2b" font-family="sans-serif">출입구</text>

  <!-- 바닥 텍스처 (모노톤 느낌) -->
  <rect x="44" y="34" width="395" height="156" fill="rgba(10,4,8,.3)" stroke="none"/>
  <text x="240" y="120" text-anchor="middle" font-size="8.5" fill="rgba(181,45,62,.15)" font-family="sans-serif" letter-spacing="3">깔끔한 모노톤 인테리어</text>
  <text x="240" y="138" text-anchor="middle" font-size="7.5" fill="rgba(181,45,62,.1)" font-family="sans-serif">온기가 느껴지지 않는 듯한 공간</text>

  <!-- N -->
  <text x="615" y="50" font-size="10" fill="#b52d3e" font-family="sans-serif" font-weight="bold">N</text>
  <line x1="615" y1="54" x2="615" y2="70" stroke="#b52d3e" stroke-width="1.5"/>
  <polygon points="610,70 615,82 620,70" fill="#b52d3e"/>
</svg>`,
    legend: [
      { style: { background: '#b52d3e' }, text: '침대 (주요 가구)' },
      { style: { background: '#7a1e2b' }, text: '드레스룸 (슬라이딩 도어 연결)' },
      { style: { background: '#080810', border: '1px solid #b52d3e' }, text: '블랙 미러 (전신 거울)' },
      { style: { color: '#555568', fontStyle: 'italic', background: 'transparent' }, text: '※ 지은호 미방문 (캐논)' },
    ]
  },
  wolf: {
    svg: `<svg viewBox="0 0 700 520" xmlns="http://www.w3.org/2000/svg" style="background:#07070e;">
  <defs>
    <pattern id="gw" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(181,45,62,.07)" stroke-width=".5"/></pattern>
    <radialGradient id="rug-g" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#6b1525" stop-opacity=".25"/>
      <stop offset="100%" stop-color="#6b1525" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="700" height="520" fill="url(#gw)"/>

  <!-- 외벽 -->
  <rect x="30" y="30" width="640" height="460" fill="none" stroke="#b52d3e" stroke-width="3"/>
  <rect x="34" y="34" width="632" height="452" fill="none" stroke="rgba(181,45,62,.18)" stroke-width="1"/>

  <!-- ④ 미러 월 (좌측 벽) — 차가운 스틸·블랙 -->
  <rect x="30" y="30" width="14" height="460" fill="rgba(8,8,18,.95)" stroke="#2a2a3a" stroke-width="1"/>
  <rect x="34" y="40" width="6" height="440" fill="#060610" stroke="#3a3a4a" stroke-width=".8"/>
  <text x="42" y="265" text-anchor="middle" font-size="8" fill="#3a3a5a" font-family="sans-serif" transform="rotate(-90,42,265)">④ 미러 월 — 콜드 스틸 · 블랙 미러</text>

  <!-- ⑤ 벨벳 패널 (우측 벽) — 딥 버건디 -->
  <rect x="656" y="30" width="14" height="460" fill="rgba(30,5,12,.95)" stroke="#6b1525" stroke-width="1"/>
  <rect x="660" y="40" width="6" height="440" fill="#1a0308" stroke="#6b1525" stroke-width=".8"/>
  <text x="664" y="265" text-anchor="middle" font-size="8" fill="#6b1525" font-family="sans-serif" transform="rotate(90,664,265)">⑤ 벨벳 패널 — 딥 버건디</text>

  <!-- 워시룸 (우상단) -->
  <rect x="480" y="34" width="176" height="170" fill="rgba(12,4,8,.9)" stroke="#4a1e28" stroke-width="1.5"/>
  <text x="568" y="65" text-anchor="middle" font-size="8.5" fill="#4a1e28" font-family="sans-serif">⑨ 워시룸</text>
  <!-- 샤워 -->
  <rect x="492" y="45" width="70" height="70" fill="none" stroke="#3a1018" stroke-width="1" rx="2"/>
  <circle cx="527" cy="80" r="20" fill="none" stroke="#3a1018" stroke-width="1" stroke-dasharray="2,2"/>
  <circle cx="527" cy="80" r="5" fill="rgba(181,45,62,.3)"/>
  <text x="527" y="128" text-anchor="middle" font-size="7.5" fill="#3a1018" font-family="sans-serif">샤워</text>
  <!-- 싱크 -->
  <rect x="578" y="45" width="65" height="55" fill="none" stroke="#3a1018" stroke-width="1" rx="2"/>
  <circle cx="610" cy="72" r="12" fill="none" stroke="#3a1018" stroke-width="1"/>
  <text x="610" y="115" text-anchor="middle" font-size="7.5" fill="#3a1018" font-family="sans-serif">싱크</text>
  <!-- 슬라이딩 도어 -->
  <line x1="480" y1="204" x2="640" y2="204" stroke="#b52d3e" stroke-width="2"/>
  <line x1="560" y1="192" x2="640" y2="192" stroke="#7a1e2b" stroke-width="1"/>
  <text x="568" y="155" text-anchor="middle" font-size="7.5" fill="#4a1e28" font-family="sans-serif">슬라이딩 도어</text>

  <!-- ③ 수납 캐비닛 (좌측) -->
  <rect x="44" y="34" width="115" height="300" fill="rgba(10,4,8,.95)" stroke="#7a1e2b" stroke-width="1.5"/>
  <!-- 상단 레일 -->
  <rect x="48" y="38" width="107" height="75" fill="rgba(14,5,10,.8)" stroke="#4a1e28" stroke-width="1"/>
  <text x="101" y="60" text-anchor="middle" font-size="8" fill="#b52d3e" font-family="sans-serif">상단 레일</text>
  <!-- 컬러 점 (버건디, 블랙, 실크, 콜라3종) -->
  <circle cx="62" cy="88" r="6" fill="#6b1525"/>
  <circle cx="78" cy="88" r="6" fill="#1a1a1a"/>
  <circle cx="94" cy="88" r="6" fill="#c8a0a0"/>
  <circle cx="110" cy="88" r="6" fill="#888"/>
  <text x="101" y="108" text-anchor="middle" font-size="6.5" fill="#4a1e28" font-family="sans-serif">넥 콜라 · 리드줄 · 로프 3종</text>
  <!-- 구분 -->
  <line x1="48" y1="118" x2="155" y2="118" stroke="#3a1018" stroke-width="1"/>
  <!-- 중단 홀더 -->
  <rect x="48" y="118" width="107" height="100" fill="rgba(12,4,8,.7)" stroke="#3a1018" stroke-width="1"/>
  <text x="101" y="138" text-anchor="middle" font-size="7.5" fill="#b52d3e" font-family="sans-serif">중단 홀더</text>
  <text x="101" y="154" text-anchor="middle" font-size="7" fill="#4a1e28" font-family="sans-serif">크롭 · 케인 · 스트랩</text>
  <!-- 수직 막대 -->
  <line x1="70" y1="165" x2="70" y2="214" stroke="#b52d3e" stroke-width="2.5" opacity=".6"/>
  <line x1="90" y1="165" x2="90" y2="214" stroke="#b52d3e" stroke-width="2.5" opacity=".5"/>
  <line x1="110" y1="165" x2="110" y2="214" stroke="#7a1e2b" stroke-width="2.5" opacity=".4"/>
  <!-- 구분 -->
  <line x1="48" y1="218" x2="155" y2="218" stroke="#3a1018" stroke-width="1"/>
  <!-- 하단 선반 -->
  <rect x="48" y="218" width="107" height="112" fill="rgba(10,4,8,.7)" stroke="#3a1018" stroke-width="1"/>
  <text x="101" y="238" text-anchor="middle" font-size="7.5" fill="#b52d3e" font-family="sans-serif">하단 선반</text>
  <text x="101" y="254" text-anchor="middle" font-size="7" fill="#4a1e28" font-family="sans-serif">패들 · 주얼 · 테일 플러그</text>
  <!-- 패들 -->
  <ellipse cx="67" cy="290" rx="13" ry="6" fill="rgba(107,21,37,.5)" stroke="#7a1e2b" stroke-width="1"/>
  <ellipse cx="92" cy="290" rx="13" ry="6" fill="rgba(50,10,20,.5)" stroke="#4a1e28" stroke-width="1"/>
  <ellipse cx="116" cy="292" rx="10" ry="5" fill="rgba(30,8,14,.5)" stroke="#3a1018" stroke-width="1"/>
  <!-- 캐비닛 라벨 -->
  <text x="101" y="346" text-anchor="middle" font-size="8" fill="#b52d3e" font-family="sans-serif">③ 수납 캐비닛</text>
  <text x="101" y="360" text-anchor="middle" font-size="6.5" fill="#4a1e28" font-family="sans-serif">무광 블랙 · 버건디 라이너</text>

  <!-- 벽면 거치대 (상단 중앙) -->
  <rect x="200" y="34" width="100" height="24" fill="rgba(60,20,30,.3)" stroke="#7a1e2b" stroke-width="1" rx="1"/>
  <text x="250" y="50" text-anchor="middle" font-size="7.5" fill="#b52d3e" font-family="sans-serif">벽면 거치대</text>

  <!-- ⑥ 천장 리그 빔 -->
  <ellipse cx="350" cy="270" rx="170" ry="150" fill="rgba(107,21,37,.06)" stroke="#b52d3e" stroke-width="1" stroke-dasharray="6,4"/>
  <text x="350" y="110" text-anchor="middle" font-size="8" fill="#b52d3e" font-family="sans-serif">⑥ 천장 리그 빔</text>
  <!-- 리그 포인트 -->
  <circle cx="230" cy="148" r="8" fill="none" stroke="#b52d3e" stroke-width="1.5"/>
  <line x1="226" y1="144" x2="234" y2="152" stroke="#b52d3e" stroke-width="1.2"/>
  <line x1="234" y1="144" x2="226" y2="152" stroke="#b52d3e" stroke-width="1.2"/>
  <circle cx="360" cy="132" r="8" fill="none" stroke="#b52d3e" stroke-width="1.5"/>
  <line x1="356" y1="128" x2="364" y2="136" stroke="#b52d3e" stroke-width="1.2"/>
  <line x1="364" y1="128" x2="356" y2="136" stroke="#b52d3e" stroke-width="1.2"/>
  <circle cx="478" cy="148" r="8" fill="none" stroke="#b52d3e" stroke-width="1.5"/>
  <line x1="474" y1="144" x2="482" y2="152" stroke="#b52d3e" stroke-width="1.2"/>
  <line x1="482" y1="144" x2="474" y2="152" stroke="#b52d3e" stroke-width="1.2"/>
  <circle cx="360" cy="392" r="8" fill="none" stroke="#b52d3e" stroke-width="1.5"/>
  <line x1="356" y1="388" x2="364" y2="396" stroke="#b52d3e" stroke-width="1.2"/>
  <line x1="364" y1="388" x2="356" y2="396" stroke="#b52d3e" stroke-width="1.2"/>

  <!-- ② 체어 (좌중단) -->
  <rect x="170" y="285" width="80" height="80" fill="rgba(25,8,16,.85)" stroke="#b52d3e" stroke-width="1.5" rx="3"/>
  <rect x="177" y="292" width="66" height="66" fill="rgba(45,12,22,.5)" stroke="#7a1e2b" stroke-width="1" rx="2"/>
  <!-- 스트랩 포인트 -->
  <rect x="172" y="287" width="10" height="10" fill="none" stroke="#b52d3e" stroke-width="1.2" rx="1"/>
  <rect x="238" y="287" width="10" height="10" fill="none" stroke="#b52d3e" stroke-width="1.2" rx="1"/>
  <rect x="172" y="353" width="10" height="10" fill="none" stroke="#b52d3e" stroke-width="1.2" rx="1"/>
  <rect x="238" y="353" width="10" height="10" fill="none" stroke="#b52d3e" stroke-width="1.2" rx="1"/>
  <!-- 감각차단 -->
  <circle cx="210" cy="325" r="9" fill="none" stroke="#7a1e2b" stroke-width="1"/>
  <line x1="203" y1="325" x2="217" y2="325" stroke="#7a1e2b" stroke-width="1.2"/>
  <text x="210" y="378" text-anchor="middle" font-size="8.5" fill="#b52d3e" font-family="sans-serif">② 체어</text>

  <!-- ⑧ 사이드 테이블 -->
  <rect x="272" y="355" width="70" height="65" fill="rgba(15,5,10,.7)" stroke="#7a1e2b" stroke-width="1" rx="2"/>
  <!-- 핀 휠 -->
  <circle cx="297" cy="388" rx="11" r="11" fill="none" stroke="#b52d3e" stroke-width="1"/>
  <line x1="289" y1="380" x2="305" y2="396" stroke="#b52d3e" stroke-width="1"/>
  <line x1="305" y1="380" x2="289" y2="396" stroke="#b52d3e" stroke-width="1"/>
  <circle cx="297" cy="388" r="3.5" fill="rgba(181,45,62,.5)"/>
  <text x="307" y="408" text-anchor="middle" font-size="7.5" fill="#7a1e2b" font-family="sans-serif">⑧ 사이드 테이블</text>

  <!-- ① 메인 베드 (중앙) + 러그 -->
  <ellipse cx="385" cy="295" rx="155" ry="135" fill="url(#rug-g)"/>
  <rect x="340" y="190" width="210" height="210" fill="rgba(15,5,10,.85)" stroke="#b52d3e" stroke-width="2" rx="3"/>
  <!-- 헤드보드 -->
  <rect x="340" y="190" width="210" height="30" fill="rgba(35,8,18,.85)" stroke="#7a1e2b" stroke-width="1.2" rx="2"/>
  <!-- 금속링 -->
  <circle cx="372" cy="205" r="7" fill="none" stroke="#b52d3e" stroke-width="1.5"/>
  <circle cx="445" cy="205" r="7" fill="none" stroke="#b52d3e" stroke-width="1.5"/>
  <circle cx="518" cy="205" r="7" fill="none" stroke="#b52d3e" stroke-width="1.5"/>
  <!-- 매트리스 -->
  <rect x="348" y="227" width="194" height="166" fill="rgba(20,7,14,.5)" stroke="#4a1e28" stroke-width="1" rx="2"/>
  <!-- 스프레더 바 -->
  <line x1="368" y1="376" x2="522" y2="376" stroke="#b52d3e" stroke-width="2.5"/>
  <circle cx="368" cy="376" r="5.5" fill="rgba(181,45,62,.5)" stroke="#b52d3e" stroke-width="1.2"/>
  <circle cx="522" cy="376" r="5.5" fill="rgba(181,45,62,.5)" stroke="#b52d3e" stroke-width="1.2"/>
  <text x="445" y="395" text-anchor="middle" font-size="7.5" fill="#b52d3e" font-family="sans-serif">스프레더 바</text>
  <text x="445" y="310" text-anchor="middle" font-size="9" fill="#b52d3e" font-family="sans-serif">① 메인 베드</text>
  <text x="445" y="326" text-anchor="middle" font-size="7" fill="#7a1e2b" font-family="sans-serif">헤드보드 금속링 매립</text>

  <!-- 입구 -->
  <rect x="274" y="476" width="100" height="14" fill="#07070e" stroke="none"/>
  <line x1="274" y1="476" x2="274" y2="490" stroke="#b52d3e" stroke-width="2"/>
  <line x1="374" y1="476" x2="374" y2="490" stroke="#b52d3e" stroke-width="2"/>
  <path d="M 274 476 Q 324 436 374 476" fill="rgba(107,21,37,.08)" stroke="#7a1e2b" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="324" y="510" text-anchor="middle" font-size="9" fill="#b52d3e" font-family="sans-serif">입구</text>

  <!-- 치수 -->
  <line x1="30" y1="502" x2="670" y2="502" stroke="#3a1018" stroke-width="1"/>
  <text x="350" y="516" text-anchor="middle" font-size="8" fill="#7a1e2b" font-family="sans-serif">총 폭 — 약 7m</text>
  <line x1="12" y1="30" x2="12" y2="490" stroke="#3a1018" stroke-width="1"/>
  <text x="6" y="265" text-anchor="middle" font-size="8" fill="#7a1e2b" font-family="sans-serif" transform="rotate(-90,6,265)">길이 — 약 6m</text>

  <!-- 범례 -->
  <rect x="44" y="338" width="120" height="122" fill="rgba(8,3,6,.92)" stroke="#3a1018" stroke-width="1" rx="1"/>
  <text x="104" y="356" text-anchor="middle" font-size="7.5" fill="#b52d3e" font-family="sans-serif">도구 기호</text>
  <rect x="52" y="364" width="8" height="8" fill="none" stroke="#b52d3e" stroke-width="1.2"/>
  <text x="65" y="372" font-size="7" fill="#888" font-family="sans-serif">구속 (커프·콜라)</text>
  <line x1="52" y1="385" x2="62" y2="380" stroke="#b52d3e" stroke-width="1.5"/>
  <text x="65" y="388" font-size="7" fill="#888" font-family="sans-serif">타격 (크롭·패들)</text>
  <circle cx="57" cy="400" r="5" fill="none" stroke="#b52d3e" stroke-width="1"/>
  <line x1="52" y1="400" x2="62" y2="400" stroke="#b52d3e" stroke-width="1"/>
  <text x="65" y="404" font-size="7" fill="#888" font-family="sans-serif">감각 차단</text>
  <line x1="52" y1="418" x2="62" y2="418" stroke="#b52d3e" stroke-width="2.5"/>
  <circle cx="52" cy="418" r="3" fill="rgba(181,45,62,.5)" stroke="#b52d3e" stroke-width="1"/>
  <text x="65" y="422" font-size="7" fill="#888" font-family="sans-serif">스프레더 바</text>
  <circle cx="57" cy="436" r="5" fill="none" stroke="#b52d3e" stroke-width="1.5"/>
  <line x1="54" y1="433" x2="60" y2="439" stroke="#b52d3e" stroke-width="1"/>
  <line x1="60" y1="433" x2="54" y2="439" stroke="#b52d3e" stroke-width="1"/>
  <text x="65" y="440" font-size="7" fill="#888" font-family="sans-serif">리깅 포인트</text>
  <text x="65" y="454" font-size="6.5" fill="#555" font-family="sans-serif" font-style="italic">※ 별도 위치</text>

  <!-- N -->
  <text x="680" y="50" font-size="10" fill="#b52d3e" font-family="sans-serif" font-weight="bold">N</text>
  <line x1="680" y1="54" x2="680" y2="70" stroke="#b52d3e" stroke-width="1.5"/>
  <polygon points="675,70 680,82 685,70" fill="#b52d3e"/>
</svg>`,
    legend: [
      { style: { background: '#b52d3e' }, text: '메인 베드 (헤드보드 금속링·스프레더 바)' },
      { style: { background: '#7a1e2b' }, text: '수납 캐비닛 (상단 레일·중단 홀더·하단 선반)' },
      { style: { background: '#b52d3e', opacity: '0.5' }, text: '천장 리그 빔 (리깅 포인트 4개)' },
      { style: { background: '#1a1a24', border: '1px solid #3a3a5a' }, text: '미러 월 (콜드 스틸·블랙)' },
      { style: { background: '#1a0308', border: '1px solid #6b1525' }, text: '벨벳 패널 (딥 버건디)' },
      { style: { background: '#1a1a24' }, text: '워시룸 (슬라이딩 도어)' },
    ]
  },
};

export const roomEContent = {
  svg: `<svg viewBox="0 0 640 460" xmlns="http://www.w3.org/2000/svg" style="background:#07070e;">
  <defs>
    <linearGradient id="eg1" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#6b9fd4" stop-opacity=".15"/>
      <stop offset="100%" stop-color="#6b9fd4" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="eg2" x1="1" y1="0" x2="0" y2="0">
      <stop offset="0%" stop-color="#6b9fd4" stop-opacity=".1"/>
      <stop offset="100%" stop-color="#6b9fd4" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- 배경 그라데이션 -->
  <rect x="0" y="0" width="640" height="460" fill="url(#eg1)"/>

  <!-- 공간 타이틀 라인 -->
  <line x1="40" y1="40" x2="600" y2="40" stroke="rgba(107,159,212,.2)" stroke-width=".8"/>
  <text x="320" y="35" text-anchor="middle" font-size="9" fill="rgba(107,159,212,.35)" font-family="sans-serif" letter-spacing="5">EUNHO'S APARTMENT</text>

  <!-- ─── 좌측: 공간 구성도 (박스 레이아웃) ─── -->
  <!-- 거실 블록 -->
  <rect x="40" y="55" width="280" height="185" fill="rgba(10,16,26,.7)" stroke="#3a5f8a" stroke-width="1.5" rx="2"/>
  <text x="180" y="80" text-anchor="middle" font-size="10" fill="rgba(107,159,212,.4)" font-family="sans-serif" letter-spacing="3">거실</text>

  <!-- 소파 (거실 내) -->
  <rect x="55" y="90" width="130" height="55" fill="rgba(20,35,55,.8)" stroke="#6b9fd4" stroke-width="1.5" rx="3"/>
  <rect x="55" y="90" width="130" height="16" fill="rgba(30,50,80,.8)" stroke="#3a5f8a" stroke-width="1" rx="2"/>
  <rect x="62" y="110" width="38" height="28" fill="rgba(35,60,90,.5)" stroke="#3a5f8a" stroke-width=".8" rx="1"/>
  <rect x="104" y="110" width="38" height="28" fill="rgba(35,60,90,.5)" stroke="#3a5f8a" stroke-width=".8" rx="1"/>
  <rect x="146" y="110" width="32" height="28" fill="rgba(35,60,90,.5)" stroke="#3a5f8a" stroke-width=".8" rx="1"/>
  <text x="120" y="160" text-anchor="middle" font-size="8" fill="#3a5f8a" font-family="sans-serif">소파 (널찍한)</text>

  <!-- CD장 (거실 좌측 벽 전체) -->
  <rect x="40" y="55" width="12" height="185" fill="rgba(12,20,34,.95)" stroke="#3a5f8a" stroke-width="1.5"/>
  <line x1="40" y1="95" x2="52" y2="95" stroke="#2a3d55" stroke-width=".8"/>
  <line x1="40" y1="130" x2="52" y2="130" stroke="#2a3d55" stroke-width=".8"/>
  <line x1="40" y1="165" x2="52" y2="165" stroke="#2a3d55" stroke-width=".8"/>
  <line x1="40" y1="200" x2="52" y2="200" stroke="#2a3d55" stroke-width=".8"/>
  <rect x="43" y="60" width="4" height="30" rx="1" fill="#6b9fd4" opacity=".5"/>
  <rect x="43" y="95" width="4" height="30" rx="1" fill="#6b9fd4" opacity=".35"/>
  <rect x="43" y="130" width="4" height="30" rx="1" fill="#3a5f8a" opacity=".5"/>
  <rect x="43" y="165" width="4" height="30" rx="1" fill="#6b9fd4" opacity=".3"/>
  <text x="46" y="155" text-anchor="middle" font-size="7" fill="#3a5f8a" font-family="sans-serif" transform="rotate(-90,46,155)">CD장 — 벽 전체</text>

  <!-- 오디오 (거실 내, 소파 옆) -->
  <rect x="55" y="175" width="88" height="38" fill="rgba(14,22,36,.9)" stroke="#6b9fd4" stroke-width="1.2" rx="2"/>
  <rect x="62" y="182" width="74" height="24" fill="rgba(18,28,46,.7)" stroke="#3a5f8a" stroke-width=".8" rx="1"/>
  <!-- 표시등 ON -->
  <circle cx="74" cy="193" r="4" fill="#6b9fd4" opacity=".95"/>
  <circle cx="74" cy="193" r="7" fill="none" stroke="#6b9fd4" stroke-width=".6" opacity=".35"/>
  <!-- VU 미터 -->
  <rect x="84" y="186" width="3" height="13" rx="1" fill="#6b9fd4" opacity=".55"/>
  <rect x="89" y="188" width="3" height="11" rx="1" fill="#6b9fd4" opacity=".45"/>
  <rect x="94" y="185" width="3" height="14" rx="1" fill="#6b9fd4" opacity=".65"/>
  <rect x="99" y="187" width="3" height="12" rx="1" fill="#6b9fd4" opacity=".4"/>
  <rect x="104" y="184" width="3" height="15" rx="1" fill="#6b9fd4" opacity=".5"/>
  <!-- 볼륨 노브 -->
  <circle cx="120" cy="194" r="6" fill="#3a5f8a" stroke="#6b9fd4" stroke-width=".8"/>
  <line x1="120" y1="188" x2="120" y2="192" stroke="#6b9fd4" stroke-width="1.2"/>
  <text x="80" y="224" text-anchor="middle" font-size="7.5" fill="#6b9fd4" font-family="sans-serif">오디오 (상시 ON)</text>

  <!-- 침실 블록 -->
  <rect x="330" y="55" width="270" height="145" fill="rgba(8,14,22,.7)" stroke="#2a3d55" stroke-width="1.2" rx="2"/>
  <text x="465" y="78" text-anchor="middle" font-size="9" fill="rgba(107,159,212,.3)" font-family="sans-serif" letter-spacing="2">침실</text>
  <!-- 침대 -->
  <rect x="345" y="88" width="115" height="100" fill="rgba(14,22,36,.8)" stroke="#2a3d55" stroke-width="1" rx="2"/>
  <rect x="345" y="88" width="115" height="22" fill="rgba(20,32,52,.7)" stroke="#2a3d55" stroke-width=".8" rx="1"/>
  <rect x="353" y="116" width="99" height="65" fill="rgba(18,28,48,.4)" stroke="#1e2a3a" stroke-width=".7" rx="1"/>
  <!-- 사이드 테이블 -->
  <rect x="475" y="110" width="35" height="35" fill="rgba(12,18,30,.7)" stroke="#1e2a3a" stroke-width=".8" rx="1"/>
  <text x="400" y="178" text-anchor="middle" font-size="7.5" fill="#2a3d55" font-family="sans-serif">침대</text>

  <!-- 운동기구 방 블록 -->
  <rect x="330" y="208" width="270" height="130" fill="rgba(8,12,20,.7)" stroke="#2a3d55" stroke-width="1.2" rx="2"/>
  <text x="465" y="230" text-anchor="middle" font-size="9" fill="rgba(107,159,212,.25)" font-family="sans-serif" letter-spacing="2">운동기구 방</text>
  <!-- 바벨 랙 -->
  <rect x="348" y="242" width="55" height="30" fill="rgba(14,22,36,.7)" stroke="#1e2a3a" stroke-width="1" rx="1"/>
  <line x1="351" y1="257" x2="400" y2="257" stroke="#3a5f8a" stroke-width="2"/>
  <circle cx="351" cy="257" r="6" fill="rgba(25,40,65,.5)" stroke="#2a3d55" stroke-width="1"/>
  <circle cx="400" cy="257" r="6" fill="rgba(25,40,65,.5)" stroke="#2a3d55" stroke-width="1"/>
  <!-- 덤벨 -->
  <rect x="416" y="242" width="65" height="20" fill="rgba(14,22,36,.7)" stroke="#1e2a3a" stroke-width="1" rx="1"/>
  <circle cx="428" cy="252" r="6" fill="rgba(20,34,56,.5)" stroke="#1e2a3a" stroke-width="1"/>
  <circle cx="444" cy="252" r="6" fill="rgba(20,34,56,.5)" stroke="#1e2a3a" stroke-width="1"/>
  <circle cx="460" cy="252" r="6" fill="rgba(20,34,56,.5)" stroke="#1e2a3a" stroke-width="1"/>
  <!-- 매트 -->
  <rect x="348" y="282" width="238" height="44" fill="rgba(12,18,32,.5)" stroke="#1e2a3a" stroke-width="1" rx="2"/>
  <text x="467" y="310" text-anchor="middle" font-size="7.5" fill="#1e2a3a" font-family="sans-serif">매트</text>
  <text x="465" y="326" text-anchor="middle" font-size="7.5" fill="#2a3d55" font-family="sans-serif">바벨 · 덤벨 · 매트</text>

  <!-- 주방 블록 -->
  <rect x="40" y="250" width="280" height="130" fill="rgba(8,12,20,.6)" stroke="#1e2030" stroke-width="1" rx="2"/>
  <text x="180" y="272" text-anchor="middle" font-size="9" fill="rgba(107,159,212,.2)" font-family="sans-serif" letter-spacing="2">주방</text>
  <!-- 식탁 -->
  <rect x="65" y="285" width="90" height="60" fill="rgba(14,20,34,.7)" stroke="#2a3d55" stroke-width="1" rx="2"/>
  <!-- 의자 -->
  <rect x="50" y="295" width="16" height="40" fill="rgba(18,26,44,.6)" stroke="#1e2a3a" stroke-width="1" rx="1"/>
  <rect x="154" y="295" width="16" height="40" fill="rgba(18,26,44,.6)" stroke="#1e2a3a" stroke-width="1" rx="1"/>
  <text x="110" y="320" text-anchor="middle" font-size="7.5" fill="#2a3d55" font-family="sans-serif">2인 식탁</text>
  <text x="110" y="334" text-anchor="middle" font-size="6.5" fill="#1e2030" font-family="sans-serif">(거의 안 씀)</text>
  <!-- 냉장고 -->
  <rect x="185" y="265" width="55" height="90" fill="rgba(12,18,32,.8)" stroke="#2a3d55" stroke-width="1.2" rx="2"/>
  <line x1="185" y1="310" x2="240" y2="310" stroke="#1e2030" stroke-width=".8"/>
  <rect x="192" y="270" width="41" height="34" fill="rgba(16,24,44,.5)" stroke="#1e2a3a" stroke-width=".7" rx="1"/>
  <!-- 생수·맥주 -->
  <rect x="196" y="274" width="5" height="18" rx="2" fill="#6b9fd4" opacity=".5"/>
  <rect x="203" y="274" width="5" height="18" rx="2" fill="#6b9fd4" opacity=".35"/>
  <rect x="210" y="276" width="5" height="16" rx="2" fill="#3a5f8a" opacity=".5"/>
  <rect x="217" y="276" width="5" height="16" rx="2" fill="#3a5f8a" opacity=".4"/>
  <text x="212" y="323" text-anchor="middle" font-size="6.5" fill="#2a3d55" font-family="sans-serif">생수·맥주만</text>
  <text x="212" y="340" text-anchor="middle" font-size="8" fill="#2a3d55" font-family="sans-serif">냉장고</text>

  <!-- ─── 우측: 공간 키워드 카드 ─── -->
  <!-- 오디오 키워드 강조 -->
  <rect x="40" y="395" width="560" height="1" fill="rgba(107,159,212,.15)"/>

  <!-- 공간 특징 키워드 -->
  <text x="320" y="418" text-anchor="middle" font-size="8" fill="rgba(107,159,212,.5)" font-family="sans-serif" letter-spacing="2">SPACE CHARACTER</text>

  <text x="80" y="442" text-anchor="middle" font-size="8" fill="#3a5f8a" font-family="sans-serif">진한 그레이 톤</text>
  <text x="185" y="442" text-anchor="middle" font-size="8" fill="#6b9fd4" font-family="sans-serif">항상 켜진 오디오</text>
  <text x="295" y="442" text-anchor="middle" font-size="8" fill="#3a5f8a" font-family="sans-serif">CD장 — 벽 전체</text>
  <text x="415" y="442" text-anchor="middle" font-size="8" fill="#3a5f8a" font-family="sans-serif">운동기구 방 별도</text>
  <text x="545" y="442" text-anchor="middle" font-size="7" fill="#2a3040" font-family="sans-serif" font-style="italic">차수혁 미방문 (캐논)</text>

  <line x1="40" y1="450" x2="600" y2="450" stroke="rgba(107,159,212,.1)" stroke-width=".8"/>
</svg>`,
  legend: [
    { style: { background: '#6b9fd4' }, text: '소파 (거실 중심, 3인용)' },
    { style: { background: '#3a5f8a' }, text: 'CD장 (좌측 벽 전체 차지)' },
    { style: { background: '#6b9fd4', opacity: '0.7' }, text: '오디오 (상시 ON · VU 표시등)' },
    { style: { background: '#1e2a3a' }, text: '침실 + 운동기구 방 (별도 구획)' },
    { style: { background: '#1a2030', border: '1px solid #2a3d55' }, text: '냉장고 (생수·맥주만 정렬)' },
  ]
};
