// SVG 공간 데이터 — roomContent.js

export const roomSContent = {

  // ── 집 전체 구조도 ──────────────────────────────────────────────
  house: {
    svg: `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" style="background:#07070e;">
<defs>
  <pattern id="gs" width="24" height="24" patternUnits="userSpaceOnUse">
    <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(181,45,62,.1)" stroke-width=".6"/>
  </pattern>
  <linearGradient id="gBed" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#1a0810"/>
    <stop offset="100%" stop-color="#0e0508"/>
  </linearGradient>
  <linearGradient id="gWolf" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#2a0510"/>
    <stop offset="100%" stop-color="#160208"/>
  </linearGradient>
</defs>
<rect width="800" height="600" fill="url(#gs)"/>

<!-- 타이틀 -->
<text x="400" y="22" text-anchor="middle" font-size="9.5" fill="#c8a0a8" font-family="sans-serif" letter-spacing="6">CHA SUHYEOK · VILLA · FLOOR PLAN</text>
<line x1="40" y1="28" x2="760" y2="28" stroke="rgba(181,45,62,.3)" stroke-width=".8"/>

<!-- 외벽 -->
<rect x="40" y="36" width="720" height="530" fill="none" stroke="#b52d3e" stroke-width="2.5"/>
<rect x="43" y="39" width="714" height="524" fill="none" stroke="rgba(181,45,62,.22)" stroke-width="1"/>

<!-- 층 구분선 -->
<line x1="40" y1="306" x2="760" y2="306" stroke="#b52d3e" stroke-width="1.5" stroke-dasharray="8,4"/>
<text x="760" y="303" text-anchor="end" font-size="7.5" fill="#b52d3e" font-family="sans-serif">─── 1F / 2F</text>

<!-- ════ 2F ════ -->
<text x="400" y="54" text-anchor="middle" font-size="9" fill="#c8707a" font-family="sans-serif" letter-spacing="5">2 F — 차수혁 전용 사적 영역</text>

<!-- 2F 복도 -->
<rect x="43" y="60" width="714" height="28" fill="rgba(20,6,12,.7)" stroke="#5a2030" stroke-width="1"/>
<text x="400" y="78" text-anchor="middle" font-size="8" fill="#c87888" font-family="sans-serif" letter-spacing="5">복  도</text>

<!-- ── 침실 (좌측) ── -->
<rect x="43" y="90" width="210" height="205" fill="url(#gBed)" stroke="#b52d3e" stroke-width="2.2"/>
<rect x="45" y="92" width="206" height="201" fill="none" stroke="rgba(181,45,62,.18)" stroke-width="1"/>
<!-- 침대 심볼 -->
<rect x="58" y="102" width="95" height="80" fill="rgba(55,12,26,.9)" stroke="#b52d3e" stroke-width="1.5" rx="2"/>
<rect x="58" y="102" width="95" height="20" fill="rgba(75,15,32,.9)" stroke="#9a2a3a" stroke-width="1" rx="1"/>
<circle cx="84" cy="112" r="5" fill="none" stroke="#c84060" stroke-width="1.8"/>
<circle cx="105" cy="112" r="5" fill="none" stroke="#c84060" stroke-width="1.8"/>
<!-- 협탁 -->
<rect x="160" y="108" width="38" height="32" fill="rgba(35,8,18,.9)" stroke="#7a2a3a" stroke-width="1" rx="1"/>
<text x="179" y="128" text-anchor="middle" font-size="6.5" fill="#c87888" font-family="sans-serif">협탁</text>
<!-- 라벨 -->
<text x="148" y="215" text-anchor="middle" font-size="12" fill="#e8707a" font-family="sans-serif" font-weight="500">침 실</text>
<text x="148" y="232" text-anchor="middle" font-size="7.5" fill="#c87888" font-family="sans-serif">킹 사이즈 · 암막 이중 커튼</text>
<text x="148" y="247" text-anchor="middle" font-size="7" fill="#a86070" font-family="sans-serif">장식 오브제 없음 · 천장 조명 없음</text>
<!-- 루프 테라스 연결 표시 -->
<line x1="43" y1="280" x2="180" y2="280" stroke="#7a2030" stroke-width="1" stroke-dasharray="4,3"/>
<text x="110" y="292" text-anchor="middle" font-size="6.5" fill="#7a4050" font-family="sans-serif">루프 테라스 진입 ↑</text>

<!-- ── 욕실 (침실 우측 인접) ── -->
<rect x="255" y="90" width="135" height="100" fill="rgba(14,5,10,.85)" stroke="#7a3040" stroke-width="1.8"/>
<!-- 욕조 -->
<rect x="266" y="100" width="55" height="40" fill="rgba(25,8,16,.8)" stroke="#5a2030" stroke-width="1.2" rx="3"/>
<ellipse cx="293" cy="120" rx="20" ry="14" fill="rgba(181,45,62,.08)" stroke="#5a1828" stroke-width=".8"/>
<!-- 샤워 -->
<rect x="330" y="100" width="48" height="48" fill="rgba(18,5,12,.8)" stroke="#4a1828" stroke-width="1" rx="2"/>
<circle cx="354" cy="124" r="14" fill="none" stroke="#4a1828" stroke-width="1" stroke-dasharray="2,2"/>
<!-- 라벨 -->
<text x="322" y="158" text-anchor="middle" font-size="10" fill="#d06878" font-family="sans-serif">욕 실</text>
<text x="322" y="172" text-anchor="middle" font-size="7" fill="#a85868" font-family="sans-serif">욕조 + 샤워 분리</text>
<!-- 침실↔욕실 연결 -->
<line x1="253" y1="130" x2="255" y2="130" stroke="#b52d3e" stroke-width="3"/>
<text x="254" y="127" text-anchor="middle" font-size="7" fill="#b52d3e" font-family="sans-serif">◀</text>

<!-- ── 드레스룸 수혁 (욕실 아래) ── -->
<rect x="255" y="192" width="135" height="103" fill="rgba(18,6,12,.85)" stroke="#8a2a3a" stroke-width="1.8"/>
<!-- 행거 선반 -->
<line x1="265" y1="218" x2="380" y2="218" stroke="#6a2030" stroke-width="1.2"/>
<line x1="265" y1="234" x2="380" y2="234" stroke="#6a2030" stroke-width="1.2"/>
<!-- 옷들 -->
<rect x="267" y="219" width="6" height="14" rx="1" fill="#111"/>
<rect x="275" y="219" width="6" height="14" rx="1" fill="#6b1525"/>
<rect x="283" y="219" width="6" height="14" rx="1" fill="#111"/>
<rect x="291" y="219" width="6" height="14" rx="1" fill="#0a0a18"/>
<rect x="299" y="219" width="6" height="14" rx="1" fill="#111"/>
<rect x="307" y="219" width="6" height="14" rx="1" fill="#1a1a1a"/>
<!-- 전신 거울 -->
<rect x="368" y="200" width="8" height="80" fill="#040408" stroke="#b52d3e" stroke-width="1.5"/>
<text x="372" y="244" text-anchor="middle" font-size="6.5" fill="#b52d3e" font-family="sans-serif" transform="rotate(90,372,244)">전신 거울</text>
<!-- 라벨 -->
<text x="308" y="262" text-anchor="middle" font-size="10" fill="#d06878" font-family="sans-serif">드레스룸</text>
<text x="308" y="276" text-anchor="middle" font-size="7" fill="#a85868" font-family="sans-serif">수혁 · 모노크롬 수트</text>
<!-- 욕실↔드레스룸 연결 -->
<line x1="290" y1="190" x2="290" y2="192" stroke="#b52d3e" stroke-width="2"/>

<!-- ── 드레스룸 은호 (수혁 드레스룸 우측) ── -->
<rect x="392" y="192" width="120" height="103" fill="rgba(12,14,26,.82)" stroke="#3a5070" stroke-width="1.5" stroke-dasharray="5,2"/>
<!-- 행거 -->
<line x1="402" y1="218" x2="502" y2="218" stroke="#2a3a55" stroke-width="1.2"/>
<line x1="402" y1="234" x2="502" y2="234" stroke="#2a3a55" stroke-width="1.2"/>
<!-- 옷들 (수혁이 골라준 뉴트럴 톤) -->
<rect x="404" y="219" width="6" height="14" rx="1" fill="#1a1818"/>
<rect x="412" y="219" width="6" height="14" rx="1" fill="#2a2828"/>
<rect x="420" y="219" width="6" height="14" rx="1" fill="#1a1a22"/>
<rect x="428" y="219" width="6" height="14" rx="1" fill="#222028"/>
<rect x="436" y="219" width="6" height="14" rx="1" fill="#181818"/>
<!-- 거울 없음 표시 -->
<line x1="498" y1="200" x2="506" y2="290" stroke="#3a3a5a" stroke-width="1" stroke-dasharray="2,3"/>
<text x="500" y="244" text-anchor="middle" font-size="6" fill="#4a4a6a" font-family="sans-serif" transform="rotate(90,500,244)">거울 없음</text>
<!-- 라벨 -->
<text x="452" y="262" text-anchor="middle" font-size="10" fill="#8090b8" font-family="sans-serif">드레스룸</text>
<text x="452" y="276" text-anchor="middle" font-size="7" fill="#5a6a90" font-family="sans-serif">은호 · 거울 없음</text>
<!-- 수혁↔은호 연결 -->
<line x1="390" y1="243" x2="392" y2="243" stroke="#5a6a90" stroke-width="2.5"/>
<text x="391" y="241" text-anchor="middle" font-size="7" fill="#5a6a90" font-family="sans-serif">◀</text>

<!-- ── 늑대굴 (우측 끝) ── -->
<rect x="515" y="90" width="239" height="205" fill="url(#gWolf)" stroke="#b52d3e" stroke-width="2.8"/>
<rect x="518" y="93" width="233" height="199" fill="none" stroke="rgba(181,45,62,.28)" stroke-width="1.2"/>
<!-- 내부 암시 -->
<line x1="530" y1="105" x2="742" y2="105" stroke="rgba(181,45,62,.12)" stroke-width=".8"/>
<!-- 미러 월 암시 -->
<rect x="516" y="92" width="8" height="200" fill="rgba(6,6,16,.95)" stroke="#2a2a3a" stroke-width="1"/>
<!-- 벨벳 패널 암시 -->
<rect x="746" y="92" width="8" height="200" fill="rgba(28,4,10,.95)" stroke="#6b1525" stroke-width="1"/>
<!-- 메인 베드 암시 -->
<rect x="580" y="130" width="130" height="100" fill="rgba(40,8,18,.7)" stroke="#9a2030" stroke-width="1.5" rx="2"/>
<circle cx="610" cy="140" r="5" fill="none" stroke="#c84060" stroke-width="1.5"/>
<circle cx="635" cy="140" r="5" fill="none" stroke="#c84060" stroke-width="1.5"/>
<circle cx="660" cy="140" r="5" fill="none" stroke="#c84060" stroke-width="1.5"/>
<!-- 체어 암시 -->
<rect x="530" y="165" width="45" height="45" fill="rgba(35,5,14,.8)" stroke="#7a1525" stroke-width="1.2" rx="2"/>
<!-- 라벨 -->
<text x="634" y="255" text-anchor="middle" font-size="13" fill="#ff5060" font-family="sans-serif" font-weight="500">늑대굴</text>
<text x="634" y="272" text-anchor="middle" font-size="7.5" fill="#c84050" font-family="sans-serif">복도 끝 · 내부 연결 · 번호+지문 이중 잠금</text>
<text x="634" y="286" text-anchor="middle" font-size="7" fill="#9a2030" font-family="sans-serif">완전 방음 · 창문 없음 · 기계 환기</text>
<!-- 늑대굴 탭 안내 -->
<rect x="590" y="292" width="90" height="16" fill="rgba(181,45,62,.15)" stroke="#b52d3e" stroke-width="1" rx="1"/>
<text x="635" y="303" text-anchor="middle" font-size="8" fill="#e05060" font-family="sans-serif">▶ 늑대굴 탭</text>
<!-- 복도↔늑대굴 연결 -->
<line x1="575" y1="88" x2="575" y2="90" stroke="#b52d3e" stroke-width="2.5"/>

<!-- ════ 1F ════ -->
<text x="400" y="322" text-anchor="middle" font-size="9" fill="#8a4050" font-family="sans-serif" letter-spacing="5">1 F — 공용 영역</text>

<!-- 1F: 거실 -->
<rect x="43" y="330" width="280" height="195" fill="rgba(14,4,9,.7)" stroke="#4a1828" stroke-width="1.5"/>
<text x="183" y="385" text-anchor="middle" font-size="12" fill="#b05060" font-family="sans-serif">거 실</text>
<text x="183" y="401" text-anchor="middle" font-size="7.5" fill="#8a3848" font-family="sans-serif">창 면 전체 통유리</text>
<text x="183" y="415" text-anchor="middle" font-size="7" fill="#6a2838" font-family="sans-serif">소파·테이블 최소</text>
<!-- 소파 -->
<rect x="65" y="435" width="140" height="52" fill="rgba(30,7,16,.85)" stroke="#4a1020" stroke-width="1.2" rx="3"/>
<rect x="65" y="435" width="140" height="18" fill="rgba(42,9,20,.85)" stroke="#3a0e1a" stroke-width="1" rx="2"/>
<text x="135" y="468" text-anchor="middle" font-size="7" fill="#6a2030" font-family="sans-serif">소파</text>
<!-- 통유리 표현 -->
<line x1="43" y1="330" x2="323" y2="330" stroke="rgba(181,45,62,.3)" stroke-width="2"/>
<text x="183" y="342" text-anchor="middle" font-size="6.5" fill="#7a3040" font-family="sans-serif">통유리</text>

<!-- 1F: 주방 -->
<rect x="325" y="330" width="200" height="130" fill="rgba(11,3,7,.7)" stroke="#3a1018" stroke-width="1.2"/>
<text x="425" y="378" text-anchor="middle" font-size="12" fill="#9a3848" font-family="sans-serif">주 방</text>
<text x="425" y="394" text-anchor="middle" font-size="7.5" fill="#7a2838" font-family="sans-serif">블랙 대리석 아일랜드</text>
<!-- 아일랜드 -->
<rect x="345" y="405" width="155" height="38" fill="rgba(22,5,12,.85)" stroke="#4a1020" stroke-width="1.2" rx="1"/>
<text x="422" y="429" text-anchor="middle" font-size="7" fill="#6a2030" font-family="sans-serif">아일랜드</text>
<text x="422" y="441" text-anchor="middle" font-size="6.5" fill="#4a1020" font-family="sans-serif">수혁 거의 사용 안 함</text>

<!-- 1F: 다이닝 -->
<rect x="325" y="462" width="200" height="63" fill="rgba(9,2,6,.65)" stroke="#280e14" stroke-width="1"/>
<text x="425" y="497" text-anchor="middle" font-size="10" fill="#7a2838" font-family="sans-serif">다이닝 코너</text>
<text x="425" y="511" text-anchor="middle" font-size="7" fill="#501828" font-family="sans-serif">조도 낮은 펜던트 1개</text>

<!-- 1F: 현관 -->
<rect x="527" y="330" width="157" height="105" fill="rgba(9,2,6,.65)" stroke="#280e14" stroke-width="1.2"/>
<text x="605" y="378" text-anchor="middle" font-size="10.5" fill="#8a3040" font-family="sans-serif">현관 · 포치</text>
<text x="605" y="394" text-anchor="middle" font-size="7" fill="#5a1e28" font-family="sans-serif">넓고 비어 있음</text>
<text x="605" y="407" text-anchor="middle" font-size="7" fill="#4a1820" font-family="sans-serif">신발 없음</text>

<!-- 1F: 사용인실 -->
<rect x="527" y="437" width="157" height="88" fill="rgba(8,2,5,.6)" stroke="#200a10" stroke-width="1"/>
<text x="605" y="478" text-anchor="middle" font-size="9.5" fill="#6a2030" font-family="sans-serif">사용인실 · 유틸</text>
<text x="605" y="493" text-anchor="middle" font-size="7" fill="#441020" font-family="sans-serif">청소·세탁 · 상주 아님</text>
<text x="605" y="506" text-anchor="middle" font-size="7" fill="#3a0e1a" font-family="sans-serif">은호가 일정 조율</text>

<!-- 정문 -->
<rect x="355" y="559" width="90" height="7" fill="#07070e"/>
<line x1="355" y1="559" x2="355" y2="566" stroke="#b52d3e" stroke-width="2.5"/>
<line x1="445" y1="559" x2="445" y2="566" stroke="#b52d3e" stroke-width="2.5"/>
<path d="M 355 559 Q 400 532 445 559" fill="rgba(181,45,62,.07)" stroke="#b52d3e" stroke-width="1.2" stroke-dasharray="3,2"/>
<text x="400" y="582" text-anchor="middle" font-size="9" fill="#c84050" font-family="sans-serif">정문 — 강남구 청담동 인근</text>
<text x="400" y="595" text-anchor="middle" font-size="7" fill="#7a2030" font-family="sans-serif">노출 콘크리트 + 철제 · 간판·명패 없음</text>

<!-- N -->
<text x="752" y="48" font-size="11" fill="#c84050" font-family="sans-serif" font-weight="bold">N</text>
<line x1="752" y1="53" x2="752" y2="70" stroke="#c84050" stroke-width="1.5"/>
<polygon points="747,70 752,82 757,70" fill="#c84050"/>
</svg>`,
    legend: [
      { style: { background: '#b52d3e' }, text: '2F — 차수혁 전용 사적 영역' },
      { style: { background: '#45051296', border: '2px solid #b52d3e' }, text: '늑대굴 — 복도 끝 내부 연결 · 번호+지문 이중 잠금' },
      { style: { background: '#3a4a6a', border: '1px dashed #6090b0' }, text: '은호 드레스룸 — 수혁 방 인접 · 거울 없음' },
      { style: { background: '#2a0e18' }, text: '1F — 공용 공간 (거실·주방·현관)' },
      { style: { color: '#555568', fontStyle: 'italic', background: 'transparent' }, text: '"1층은 볼 거 없음" — 차수혁 본인 발언' },
    ]
  },

  // ── 침실 상세 ──────────────────────────────────────────────────
  room: {
    svg: `<svg viewBox="0 0 680 520" xmlns="http://www.w3.org/2000/svg" style="background:#07070e;">
  <defs>
    <pattern id="gr" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(181,45,62,.1)" stroke-width=".6"/>
    </pattern>
  </defs>
  <rect width="680" height="520" fill="url(#gr)"/>

  <!-- 타이틀 -->
  <text x="340" y="24" text-anchor="middle" font-size="10" fill="rgba(181,45,62,.5)" font-family="sans-serif" letter-spacing="5">2F BEDROOM · DETAIL</text>
  <line x1="40" y1="30" x2="640" y2="30" stroke="rgba(181,45,62,.2)" stroke-width=".8"/>

  <!-- 외벽 -->
  <rect x="40" y="40" width="600" height="450" fill="none" stroke="#b52d3e" stroke-width="2.5"/>
  <rect x="43" y="43" width="594" height="444" fill="none" stroke="rgba(181,45,62,.25)" stroke-width="1"/>

  <!-- 상단: 암막 커튼 + 통창 -->
  <rect x="43" y="43" width="420" height="20" fill="rgba(8,3,6,.96)" stroke="#3a1018" stroke-width="1"/>
  <text x="253" y="57" text-anchor="middle" font-size="8" fill="#7a2a38" font-family="sans-serif" letter-spacing="3">암막 이중 커튼 — 통창</text>

  <!-- 드레스룸 (우상단) -->
  <rect x="465" y="40" width="175" height="185" fill="rgba(22,7,14,.88)" stroke="#7a1e2b" stroke-width="2"/>
  <text x="552" y="95" text-anchor="middle" font-size="10.5" fill="#c05070" font-family="sans-serif">드레스룸</text>
  <text x="552" y="112" text-anchor="middle" font-size="7.5" fill="#8a2a40" font-family="sans-serif">모노크롬 수트 정렬</text>
  <!-- 옷장 행거 선반 -->
  <line x1="476" y1="130" x2="630" y2="130" stroke="#5a2030" stroke-width="1.2"/>
  <line x1="476" y1="150" x2="630" y2="150" stroke="#5a2030" stroke-width="1.2"/>
  <line x1="476" y1="170" x2="630" y2="170" stroke="#5a2030" stroke-width="1.2"/>
  <!-- 옷들 (블랙·차콜·버건디) -->
  <rect x="478" y="131" width="7" height="18" rx="1" fill="#111111"/>
  <rect x="487" y="131" width="7" height="18" rx="1" fill="#1a1a1a"/>
  <rect x="496" y="131" width="7" height="18" rx="1" fill="#6b1525"/>
  <rect x="505" y="131" width="7" height="18" rx="1" fill="#0a0a16"/>
  <rect x="514" y="131" width="7" height="18" rx="1" fill="#111111"/>
  <rect x="523" y="131" width="7" height="18" rx="1" fill="#1a1818"/>
  <rect x="532" y="131" width="7" height="18" rx="1" fill="#111111"/>
  <!-- 슬라이딩 도어 -->
  <line x1="465" y1="225" x2="595" y2="225" stroke="#b52d3e" stroke-width="2.2"/>
  <line x1="530" y1="213" x2="595" y2="213" stroke="#7a1e2b" stroke-width="1.2"/>
  <text x="530" y="205" text-anchor="middle" font-size="7.5" fill="#7a2a38" font-family="sans-serif">슬라이딩 도어</text>

  <!-- 블랙 미러 (우측 벽) -->
  <rect x="632" y="240" width="8" height="210" fill="#040408" stroke="#b52d3e" stroke-width="1.8"/>
  <rect x="635" y="245" width="4" height="200" fill="#060608" stroke="#7a1e2b" stroke-width=".6" opacity=".6"/>
  <text x="636" y="350" text-anchor="middle" font-size="8" fill="#b52d3e" font-family="sans-serif" transform="rotate(90,636,350)">블랙 미러 (전신) — 드레스룸 연결</text>

  <!-- 간접 조명 레일 -->
  <rect x="150" y="43" width="260" height="8" fill="rgba(181,45,62,.15)" stroke="#3a1018" stroke-width=".8" rx="1"/>
  <text x="280" y="38" text-anchor="middle" font-size="7.5" fill="#7a2030" font-family="sans-serif">간접 조명 매립 — 전면 디밍</text>

  <!-- 침대 (중앙 메인) -->
  <rect x="150" y="155" width="280" height="265" fill="rgba(28,8,18,.92)" stroke="#b52d3e" stroke-width="2.8" rx="4"/>
  <!-- 헤드보드 -->
  <rect x="150" y="155" width="280" height="34" fill="rgba(48,12,26,.95)" stroke="#b52d3e" stroke-width="1.5" rx="3"/>
  <text x="290" y="177" text-anchor="middle" font-size="9" fill="#e05070" font-family="sans-serif">블랙 패브릭 헤드보드</text>
  <!-- 매트리스 -->
  <rect x="160" y="196" width="260" height="215" fill="rgba(20,6,14,.5)" stroke="#4a1e28" stroke-width="1" rx="2"/>
  <!-- 베개 수혁 (왼쪽 · 벽 쪽) -->
  <rect x="170" y="204" width="108" height="36" fill="rgba(40,10,22,.75)" stroke="#3a1018" stroke-width="1" rx="3"/>
  <text x="224" y="226" text-anchor="middle" font-size="7" fill="#7a2030" font-family="sans-serif">수혁 (벽 쪽)</text>
  <!-- 베개 은호 (오른쪽 · 문 쪽) -->
  <rect x="292" y="204" width="108" height="36" fill="rgba(30,8,18,.65)" stroke="#2a3a50" stroke-width="1" rx="3"/>
  <text x="346" y="226" text-anchor="middle" font-size="7" fill="#4a6080" font-family="sans-serif">은호 (문 쪽)</text>
  <!-- 침구 표현 -->
  <text x="290" y="330" text-anchor="middle" font-size="10" fill="#e05070" font-family="sans-serif">킹 사이즈</text>
  <text x="290" y="348" text-anchor="middle" font-size="7.5" fill="#9a3050" font-family="sans-serif">그레이·화이트 리넨</text>
  <text x="290" y="364" text-anchor="middle" font-size="7" fill="#6a2030" font-family="sans-serif">여름에도 이불 덮음 (체온 낮음)</text>

  <!-- 협탁 수혁 (왼쪽) -->
  <rect x="55" y="200" width="88" height="88" fill="rgba(24,7,14,.82)" stroke="#7a1e2b" stroke-width="1.8" rx="2"/>
  <text x="99" y="235" text-anchor="middle" font-size="8.5" fill="#c05070" font-family="sans-serif">협탁</text>
  <text x="99" y="250" text-anchor="middle" font-size="7" fill="#9a2040" font-family="sans-serif">수혁</text>
  <text x="99" y="265" text-anchor="middle" font-size="6.5" fill="#7a1e2b" font-family="sans-serif">물 · 약 · 시계</text>
  <!-- 독서등 -->
  <circle cx="130" cy="208" r="5" fill="rgba(181,45,62,.35)" stroke="#7a1e2b" stroke-width="1"/>

  <!-- 협탁 은호 (오른쪽) -->
  <rect x="438" y="200" width="88" height="88" fill="rgba(16,5,10,.75)" stroke="#2a3a55" stroke-width="1.5" rx="2"/>
  <text x="482" y="235" text-anchor="middle" font-size="8.5" fill="#6090b8" font-family="sans-serif">협탁</text>
  <text x="482" y="250" text-anchor="middle" font-size="7" fill="#4a6888" font-family="sans-serif">은호</text>
  <text x="482" y="265" text-anchor="middle" font-size="6.5" fill="#3a5070" font-family="sans-serif">쌓이는 것들</text>

  <!-- 출입구 (하단 좌측) -->
  <rect x="40" y="420" width="8" height="70" fill="#07070e"/>
  <line x1="48" y1="420" x2="48" y2="490" stroke="#b52d3e" stroke-width="2.5"/>
  <path d="M 48 420 Q 48 455 110 455" fill="rgba(181,45,62,.07)" stroke="#b52d3e" stroke-width="1.2" stroke-dasharray="4,2"/>
  <text x="80" y="410" text-anchor="middle" font-size="8.5" fill="#b52d3e" font-family="sans-serif">출입구</text>

  <!-- 주석 -->
  <text x="80" y="475" text-anchor="middle" font-size="7.5" fill="#5a1e28" font-family="sans-serif">장식 오브제 없음</text>
  <text x="80" y="490" text-anchor="middle" font-size="7" fill="#4a1820" font-family="sans-serif">천장 조명 없음</text>

  <!-- N -->
  <text x="654" y="55" font-size="11" fill="#b52d3e" font-family="sans-serif" font-weight="bold">N</text>
  <line x1="654" y1="60" x2="654" y2="78" stroke="#b52d3e" stroke-width="1.5"/>
  <polygon points="649,78 654,90 659,78" fill="#b52d3e"/>

  <!-- 하단 주석 -->
  <text x="340" y="505" text-anchor="middle" font-size="8" fill="#4a1828" font-family="sans-serif">2F 침실 상세 · 드레스룸·욕실 연결 구조 · 장식 일체 없음</text>
</svg>`,
    legend: [
      { style: { background: '#b52d3e' }, text: '킹 사이즈 침대 — 블랙 패브릭 헤드보드 · 그레이 리넨' },
      { style: { background: '#7a1e2b' }, text: '드레스룸 (슬라이딩 도어 연결) — 모노크롬 수트 정렬' },
      { style: { background: '#040408', border: '1px solid #b52d3e' }, text: '블랙 미러 (전신) — 드레스룸 측면 고정' },
      { style: { background: '#2a3a55' }, text: '은호 협탁 — 문 쪽 배치 (경호 반사)' },
      { style: { color: '#555568', fontStyle: 'italic', background: 'transparent' }, text: '※ 지은호 미방문 (캐논)' },
    ]
  },

  // ── 늑대굴 ─────────────────────────────────────────────────────
  wolf: {
    svg: `<svg viewBox="0 0 1060 800" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="iF" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1a1018"/><stop offset="100%" stop-color="#0d0a0e"/></linearGradient>
  <linearGradient id="iWL" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#0e0c14"/><stop offset="100%" stop-color="#16121e"/></linearGradient>
  <linearGradient id="iWR" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#1a0a10"/><stop offset="100%" stop-color="#120810"/></linearGradient>
  <linearGradient id="iWaL" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#0c0e18"/><stop offset="100%" stop-color="#121422"/></linearGradient>
  <linearGradient id="iWaR" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#0e1018"/><stop offset="100%" stop-color="#0a0c14"/></linearGradient>
  <linearGradient id="iVel" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#5a1020"/><stop offset="100%" stop-color="#2e0810"/></linearGradient>
  <linearGradient id="iBed" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1a0e14"/><stop offset="100%" stop-color="#120a10"/></linearGradient>
  <linearGradient id="iCh" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#5a1020"/><stop offset="100%" stop-color="#380a14"/></linearGradient>
  <linearGradient id="iMir" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1e2030"/><stop offset="100%" stop-color="#0e1018"/></linearGradient>
  <linearGradient id="iRug" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3a0e18"/><stop offset="100%" stop-color="#1e0810"/></linearGradient>
  <linearGradient id="iBm" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#2a2a3a"/><stop offset="100%" stop-color="#1a1a28"/></linearGradient>
  <linearGradient id="iWF" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#141820"/><stop offset="100%" stop-color="#0e1018"/></linearGradient>
  <linearGradient id="iR1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#6b1525"/><stop offset="100%" stop-color="#3a0a14"/></linearGradient>
  <linearGradient id="iR2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#1a1828"/><stop offset="100%" stop-color="#0e0c16"/></linearGradient>
  <radialGradient id="iAmb" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#c8843a" stop-opacity="0.2"/><stop offset="100%" stop-color="#c8843a" stop-opacity="0"/></radialGradient>
  <radialGradient id="iJw" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#c83050" stop-opacity="0.5"/><stop offset="100%" stop-color="#c83050" stop-opacity="0"/></radialGradient>
  <filter id="fg"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>

<!-- FLOOR -->
<polygon points="90,440 430,600 830,408 490,248" fill="url(#iF)" stroke="#2a1820" stroke-width="1"/>
<g stroke="#1e1218" stroke-width="0.5" opacity="0.28">
  <line x1="160" y1="408" x2="558" y2="282"/><line x1="230" y1="442" x2="626" y2="316"/>
  <line x1="300" y1="476" x2="694" y2="350"/><line x1="370" y1="510" x2="762" y2="384"/>
  <line x1="185" y1="488" x2="440" y2="256"/><line x1="270" y1="535" x2="525" y2="303"/>
  <line x1="355" y1="580" x2="610" y2="348"/><line x1="440" y1="600" x2="695" y2="368"/>
  <line x1="525" y1="572" x2="780" y2="340"/>
</g>

<!-- WALLS -->
<polygon points="90,192 90,440 430,600 430,352" fill="url(#iWL)" stroke="#1a1425" stroke-width="1"/>
<polygon points="430,352 430,600 830,408 830,160" fill="url(#iWR)" stroke="#200e18" stroke-width="1"/>
<polygon points="90,192 430,40 830,160 490,312" fill="#0d0a12" stroke="#1a1428" stroke-width="1" opacity="0.6"/>

<!-- WASHROOM — 우측 상단으로 이동 -->
<polygon points="640,160 640,330 830,248 830,160" fill="url(#iWaR)" stroke="#181828" stroke-width="1" opacity="0.9"/>
<polygon points="640,330 830,248 830,408 640,490" fill="url(#iWF)" stroke="#181828" stroke-width="0.8"/>
<!-- washroom floor tiles -->
<g stroke="#1a1c28" stroke-width="0.5" opacity="0.4">
  <line x1="660" y1="345" x2="820" y2="270"/><line x1="660" y1="370" x2="820" y2="295"/>
  <line x1="660" y1="395" x2="820" y2="320"/><line x1="660" y1="420" x2="820" y2="345"/>
  <line x1="700" y1="330" x2="700" y2="488"/><line x1="740" y1="312" x2="740" y2="470"/>
  <line x1="780" y1="295" x2="780" y2="453"/>
</g>
<!-- partition wall -->
<polygon points="640,160 640,330 650,335 650,164" fill="#0e0c18" stroke="#3a3858" stroke-width="1.2"/>
<!-- washroom sink iso -->
<polygon points="660,330 660,352 710,328 710,306" fill="#181c28" stroke="#303848" stroke-width="0.7"/>
<ellipse cx="685" cy="328" rx="20" ry="9" fill="#12161e" stroke="#404858" stroke-width="0.8"/>
<line x1="687" y1="320" x2="687" y2="308" stroke="#607080" stroke-width="1.8"/>
<!-- washroom shower area -->
<polygon points="740,296 740,408 820,370 820,258" fill="#0e1018" stroke="#1a2028" stroke-width="0.6"/>
<g stroke="#303848" stroke-width="0.5" opacity="0.6">
  <line x1="760" y1="300" x2="760" y2="400"/><line x1="780" y1="290" x2="780" y2="390"/>
  <line x1="800" y1="280" x2="800" y2="380"/>
</g>

<!-- VELVET PANEL — right wall, lower section -->
<polygon points="430,352 430,600 640,490 640,360" fill="url(#iVel)" stroke="#4a0e1a" stroke-width="0.8"/>
<g stroke="#7a1830" stroke-width="0.6" opacity="0.3">
  <line x1="462" y1="360" x2="462" y2="590"/><line x1="496" y1="374" x2="496" y2="578"/>
  <line x1="530" y1="388" x2="530" y2="566"/><line x1="564" y1="402" x2="564" y2="554"/>
  <line x1="598" y1="416" x2="598" y2="542"/><line x1="632" y1="430" x2="632" y2="492"/>
</g>

<!-- MIRROR PANEL — left wall -->
<polygon points="180,208 180,400 380,506 380,315" fill="url(#iMir)" stroke="#1e2030" stroke-width="1"/>
<polygon points="192,220 192,387 367,492 367,327" fill="none" stroke="#303858" stroke-width="0.5" opacity="0.5"/>
<line x1="198" y1="244" x2="358" y2="340" stroke="#303858" stroke-width="0.4" opacity="0.28"/>


<!-- MIRROR CURTAIN RAIL — 커튼 레일 (거울 위) -->
<line x1="178" y1="206" x2="382" y2="313" stroke="#2a2840" stroke-width="2.5" stroke-linecap="round"/>
<g fill="#3a3860" stroke="#4a4878" stroke-width="0.6">
  <circle cx="195" cy="213" r="3.5"/>
  <circle cx="220" cy="225" r="3.5"/>
  <circle cx="245" cy="237" r="3.5"/>
  <circle cx="270" cy="249" r="3.5"/>
  <circle cx="295" cy="261" r="3.5"/>
  <circle cx="320" cy="273" r="3.5"/>
  <circle cx="345" cy="285" r="3.5"/>
  <circle cx="370" cy="297" r="3.5"/>
</g>
<!-- curtain fabric (partially open) -->
<polygon points="178,210 205,300 230,310 195,215" fill="#0d0c18" stroke="#1a1828" stroke-width="0.6" opacity="0.85"/>
<polygon points="352,282 370,300 382,316 365,294" fill="#0d0c18" stroke="#1a1828" stroke-width="0.6" opacity="0.85"/>
<!-- WALL RACK — left wall, spread evenly -->
<!-- rack top rail -->
<polygon points="95,200 95,212 415,365 415,353" fill="#2a2838" stroke="#3a3858" stroke-width="0.8"/>
<!-- rack mid rail -->
<polygon points="95,310 95,320 415,473 415,463" fill="#2a2838" stroke="#3a3858" stroke-width="0.8"/>
<!-- rack bottom shelf -->
<polygon points="95,385 95,400 415,553 415,538" fill="#221e2e" stroke="#2a2438" stroke-width="0.8"/>

<!-- ROPE ROLLS — 상단 레일 (균등 배치) -->
<g><!-- rope 1 버건디 -->
  <ellipse cx="140" cy="232" rx="16" ry="7" fill="url(#iR1)" stroke="#5a1020" stroke-width="0.8"/>
  <rect x="124" y="229" width="32" height="6" fill="#5a1020" stroke="#4a0e18" stroke-width="0.4"/>
  <ellipse cx="140" cy="229" rx="16" ry="7" fill="#3a0a14" stroke="#2a0810" stroke-width="0.6"/>
</g>
<g><!-- rope 2 블랙 -->
  <ellipse cx="198" cy="256" rx="16" ry="7" fill="url(#iR2)" stroke="#2a2838" stroke-width="0.8"/>
  <rect x="182" y="253" width="32" height="6" fill="#1a1828" stroke="#141620" stroke-width="0.4"/>
  <ellipse cx="198" cy="253" rx="16" ry="7" fill="#0e0c16" stroke="#080a12" stroke-width="0.6"/>
</g>
<g><!-- rope 3 딥레드 -->
  <ellipse cx="256" cy="280" rx="16" ry="7" fill="#5a1020" stroke="#3a0810" stroke-width="0.8"/>
  <rect x="240" y="277" width="32" height="6" fill="#4a0e18" stroke="#380a14" stroke-width="0.4"/>
  <ellipse cx="256" cy="277" rx="16" ry="7" fill="#380a14" stroke="#2a0810" stroke-width="0.6"/>
</g>

<!-- 콜라 3종 hanging -->
<g>
  <ellipse cx="310" cy="300" rx="14" ry="6" fill="#1a0e10" stroke="#3a1820" stroke-width="1"/>
  <circle cx="320" cy="300" r="3" fill="none" stroke="#808090" stroke-width="1.2"/>
</g>
<g>
  <ellipse cx="340" cy="315" rx="14" ry="6" fill="#1a1010" stroke="#3a2820" stroke-width="1.2"/>
  <circle cx="350" cy="315" r="3" fill="none" stroke="#808090" stroke-width="1.2"/>
  <g fill="#2a1818"><circle cx="328" cy="315" r="1.5"/><circle cx="336" cy="315" r="1.5"/><circle cx="344" cy="315" r="1.5"/></g>
</g>
<g>
  <rect x="356" y="318" width="30" height="12" fill="#1a1010" stroke="#302020" stroke-width="0.8" rx="2"/>
  <circle cx="378" cy="324" r="3" fill="none" stroke="#808090" stroke-width="1.2"/>
</g>

<!-- 리드줄 hanging -->
<g stroke="#707885" stroke-width="1.2" fill="none">
  <ellipse cx="380" cy="340" rx="4" ry="2"/><ellipse cx="380" cy="346" rx="4" ry="2"/>
  <ellipse cx="380" cy="352" rx="4" ry="2"/><ellipse cx="380" cy="358" rx="4" ry="2"/>
  <ellipse cx="380" cy="364" rx="4" ry="2"/>
</g>

<!-- 크롭·케인 세로 거치 — 중단 (균등) -->
<g stroke="#252330" stroke-width="1.5" stroke-linecap="round" opacity="0.85">
  <line x1="115" y1="325" x2="117" y2="405"/>
  <line x1="135" y1="334" x2="137" y2="414"/>
  <line x1="155" y1="343" x2="157" y2="423"/>
  <line x1="175" y1="352" x2="177" y2="432"/>
</g>
<g stroke="#9a7830" stroke-width="1.5" stroke-linecap="round" opacity="0.85">
  <line x1="200" y1="362" x2="202" y2="442"/>
  <line x1="220" y1="371" x2="222" y2="451"/>
  <line x1="240" y1="380" x2="242" y2="460"/>
</g>
<g stroke="#1a0e10" stroke-width="3.5" stroke-linecap="round" opacity="0.8">
  <line x1="268" y1="390" x2="268" y2="460"/>
  <line x1="286" y1="399" x2="286" y2="469"/>
  <line x1="304" y1="408" x2="304" y2="478"/>
</g>

<!-- 패들·오브제 하단 선반 -->
<g fill="#141010" stroke="#2a1818" stroke-width="0.7">
  <rect x="105" y="375" width="16" height="24" rx="2" transform="skewY(14)"/>
  <rect x="128" y="386" width="16" height="22" rx="2" transform="skewY(14)"/>
  <rect x="150" y="397" width="14" height="20" rx="2" transform="skewY(14)"/>
  <rect x="170" y="407" width="12" height="18" rx="2" transform="skewY(14)"/>
</g>
<!-- 주얼 플러그 -->
<ellipse cx="208" cy="425" rx="8" ry="4" fill="#6b1525" stroke="#4a0e1a" stroke-width="0.8"/>
<ellipse cx="208" cy="425" rx="11" ry="7" fill="url(#iJw)" opacity="0.6"/>
<!-- 꼬리 플러그 hanging -->
<g stroke="#1a1820" stroke-width="0.9" fill="none" opacity="0.7">
  <path d="M 245,400 Q 243,416 244,432 Q 245,444 246,454"/>
  <path d="M 250,398 Q 250,415 250,431 Q 250,443 250,455"/>
  <path d="M 255,400 Q 257,416 256,432 Q 255,444 254,454"/>
</g>
<ellipse cx="250" cy="396" rx="8" ry="4" fill="#1a1010" stroke="#282020" stroke-width="0.7"/>

<!-- CEILING RIG -->
<rect x="330" y="76" width="355" height="16" rx="2" fill="url(#iBm)" transform="rotate(-18,507,84)" stroke="#2a2a42" stroke-width="0.8"/>
<g fill="none" stroke="#909098" stroke-width="2">
  <ellipse cx="372" cy="112" rx="7" ry="3.5" transform="rotate(-18,372,112)"/>
  <ellipse cx="444" cy="94" rx="7" ry="3.5" transform="rotate(-18,444,94)"/>
  <ellipse cx="517" cy="76" rx="7" ry="3.5" transform="rotate(-18,517,76)"/>
  <ellipse cx="589" cy="59" rx="7" ry="3.5" transform="rotate(-18,589,59)"/>
</g>
<g stroke="#606068" stroke-width="0.9" stroke-dasharray="2,2">
  <line x1="372" y1="116" x2="372" y2="155"/><line x1="444" y1="98" x2="444" y2="138"/><line x1="517" y1="80" x2="517" y2="120"/>
</g>
<ellipse cx="382" cy="175" rx="36" ry="15" fill="url(#iAmb)" opacity="0.5"/>
<ellipse cx="508" cy="148" rx="30" ry="13" fill="url(#iAmb)" opacity="0.4"/>

<!-- RUG -->
<ellipse cx="500" cy="470" rx="178" ry="73" fill="url(#iRug)" stroke="#6a1828" stroke-width="1.4" opacity="0.88"/>
<ellipse cx="500" cy="470" rx="163" ry="65" fill="none" stroke="#3a0a14" stroke-width="0.7" opacity="0.5"/>

<!-- BED -->
<polygon points="438,490 438,558 645,460 645,392" fill="#0e0a10" stroke="#1e1420" stroke-width="0.8"/>
<polygon points="438,490 645,392 665,380 456,478" fill="#1a1220" stroke="#1a1220" stroke-width="0.8"/>
<polygon points="456,478 665,380 665,392 645,392 438,490" fill="url(#iBed)" stroke="#241828" stroke-width="0.8"/>
<polygon points="461,442 648,348 652,392 461,488" fill="#160e1e" stroke="#201428" stroke-width="0.5"/>
<polygon points="535,360 625,318 627,335 537,377" fill="#1a1228" stroke="#241832" stroke-width="0.5"/>
<polygon points="463,402 535,360 537,377 465,419" fill="#1a1228" stroke="#241832" stroke-width="0.5"/>
<polygon points="425,434 425,502 463,484 463,416" fill="#0e0a12" stroke="#1a1422" stroke-width="0.8"/>
<polygon points="425,434 463,416 466,413 428,431" fill="#181424" stroke="#1a1422" stroke-width="0.8"/>
<circle cx="443" cy="456" r="5.5" fill="none" stroke="#808090" stroke-width="2"/>
<circle cx="443" cy="430" r="5.5" fill="none" stroke="#808090" stroke-width="2"/>

<!-- CHAIR — 중앙 좌측 -->
<polygon points="280,472 280,514 342,548 342,506" fill="#0e0a10" stroke="#1e1420" stroke-width="0.8"/>
<polygon points="274,452 274,472 342,506 342,486" fill="url(#iCh)" stroke="#3a0a14" stroke-width="0.8"/>
<polygon points="274,452 342,486 350,481 280,446" fill="#4a1018" stroke="#3a0a14" stroke-width="0.8"/>
<polygon points="274,370 274,452 282,446 282,365" fill="url(#iCh)" stroke="#3a0a14" stroke-width="0.8"/>
<polygon points="274,370 282,365 344,394 336,400" fill="#4a1018" stroke="#3a0a14" stroke-width="0.8"/>
<polygon points="282,365 344,394 344,480 342,486 342,400 282,446 282,365" fill="#380a14" stroke="#3a0a14" stroke-width="0.6"/>
<polygon points="274,408 274,418 304,434 304,424" fill="#5a1020" stroke="#3a0a14" stroke-width="0.6"/>
<line x1="286" y1="426" x2="301" y2="433" stroke="#b09050" stroke-width="2"/>

<!-- CABINET -->
<polygon points="96,310 96,440 196,492 196,362" fill="#141018" stroke="#2a2038" stroke-width="0.8"/>
<polygon points="96,310 196,362 216,350 116,298" fill="#1e1a24" stroke="#2a2038" stroke-width="0.8"/>
<polygon points="196,362 196,492 216,480 216,350" fill="#181420" stroke="#2a2038" stroke-width="0.8"/>
<line x1="126" y1="318" x2="192" y2="368" stroke="#3a3050" stroke-width="0.8"/>
<line x1="126" y1="400" x2="192" y2="438" stroke="#3a3050" stroke-width="0.8"/>
<circle cx="182" cy="404" r="4" fill="#707080"/>
<circle cx="182" cy="342" r="4" fill="#707080"/>

<!-- SIDE TABLE -->
<polygon points="368,418 368,452 414,474 414,440" fill="#0e0a12" stroke="#2a2030" stroke-width="0.7"/>
<polygon points="368,418 414,440 418,437 372,414" fill="#181420" stroke="#2a2030" stroke-width="0.7"/>
<rect x="384" y="406" width="3.5" height="11" fill="#4a4068" rx="1"/>
<ellipse cx="385" cy="405" rx="2.5" ry="1.2" fill="#e8a050" opacity="0.95" filter="url(#fg)"/>
<ellipse cx="385" cy="410" rx="15" ry="8" fill="#c8843a" opacity="0.08"/>

<!-- WALL SCONCE right wall -->
<ellipse cx="770" cy="242" rx="6" ry="3" fill="#c8843a" opacity="0.95" filter="url(#fg)"/>
<polygon points="764,244 776,244 772,258 768,258" fill="#c8843a" opacity="0.45"/>
<ellipse cx="770" cy="252" rx="24" ry="30" fill="#c8843a" opacity="0.055"/>

<!-- ═══ LABELS ═══ -->
<g font-family="Inter,'Noto Sans KR',sans-serif" font-size="13" font-weight="400">
  <rect x="487" y="566" width="90" height="20" rx="3" fill="#0a0808" opacity="0.9"/>
  <text x="532" y="581" fill="#e0c060" text-anchor="middle">① 메인 베드</text>
  <line x1="532" y1="565" x2="532" y2="540" stroke="#e0c060" stroke-width="0.7" stroke-dasharray="3,2" opacity="0.5"/>

  <rect x="205" y="526" width="64" height="20" rx="3" fill="#0a0808" opacity="0.9"/>
  <text x="237" y="541" fill="#e0c060" text-anchor="middle">② 체어</text>
  <line x1="275" y1="525" x2="300" y2="498" stroke="#e0c060" stroke-width="0.7" stroke-dasharray="3,2" opacity="0.5"/>

  <rect x="55" y="500" width="102" height="20" rx="3" fill="#0a0808" opacity="0.9"/>
  <text x="106" y="515" fill="#e0c060" text-anchor="middle">③ 수납 캐비닛</text>
  <line x1="106" y1="499" x2="145" y2="476" stroke="#e0c060" stroke-width="0.7" stroke-dasharray="3,2" opacity="0.5"/>

  <rect x="148" y="552" width="80" height="20" rx="3" fill="#0a0808" opacity="0.9"/>
  <text x="188" y="567" fill="#7ab0e8" text-anchor="middle">④ 미러 월 (커튼)</text>
  <line x1="188" y1="551" x2="248" y2="498" stroke="#7ab0e8" stroke-width="0.7" stroke-dasharray="3,2" opacity="0.5"/>

  <rect x="448" y="612" width="92" height="20" rx="3" fill="#0a0808" opacity="0.9"/>
  <text x="494" y="627" fill="#d07090" text-anchor="middle">⑤ 벨벳 패널</text>
  <line x1="494" y1="611" x2="520" y2="578" stroke="#d07090" stroke-width="0.7" stroke-dasharray="3,2" opacity="0.5"/>

  <rect x="400" y="142" width="96" height="20" rx="3" fill="#0a0808" opacity="0.9"/>
  <text x="448" y="157" fill="#a898d8" text-anchor="middle">⑥ 천장 리그</text>
  <line x1="448" y1="141" x2="448" y2="116" stroke="#a898d8" stroke-width="0.7" stroke-dasharray="3,2" opacity="0.5"/>

  <rect x="585" y="566" width="58" height="20" rx="3" fill="#0a0808" opacity="0.9"/>
  <text x="614" y="581" fill="#d07090" text-anchor="middle">⑦ 러그</text>

  <rect x="310" y="482" width="106" height="20" rx="3" fill="#0a0808" opacity="0.9"/>
  <text x="363" y="497" fill="#e0c060" text-anchor="middle">⑧ 사이드 테이블</text>

  <rect x="668" y="426" width="76" height="20" rx="3" fill="#0a0808" opacity="0.9"/>
  <text x="706" y="441" fill="#6aaed0" text-anchor="middle">⑨ 워시룸</text>
  <line x1="706" y1="425" x2="720" y2="400" stroke="#6aaed0" stroke-width="0.7" stroke-dasharray="3,2" opacity="0.5"/>

  <rect x="646" y="186" width="98" height="20" rx="3" fill="#0a0808" opacity="0.9"/>
  <text x="695" y="201" fill="#6aaed0" text-anchor="middle">⑩ 파티션 도어</text>
  <line x1="695" y1="185" x2="648" y2="245" stroke="#6aaed0" stroke-width="0.7" stroke-dasharray="3,2" opacity="0.5"/>

  <rect x="55" y="226" width="100" height="20" rx="3" fill="#0a0808" opacity="0.9"/>
  <text x="105" y="241" fill="#c8a050" text-anchor="middle">⑪ 로프 3종</text>
  <line x1="155" y1="236" x2="170" y2="245" stroke="#c8a050" stroke-width="0.7" stroke-dasharray="3,2" opacity="0.5"/>

  <rect x="55" y="340" width="108" height="20" rx="3" fill="#0a0808" opacity="0.9"/>
  <text x="109" y="355" fill="#c8a050" text-anchor="middle">⑫ 크롭·케인·스트랩</text>

  <rect x="55" y="418" width="108" height="20" rx="3" fill="#0a0808" opacity="0.9"/>
  <text x="109" y="433" fill="#c8a050" text-anchor="middle">⑬ 패들·오브제 선반</text>
  <line x1="163" y1="428" x2="175" y2="418" stroke="#c8a050" stroke-width="0.7" stroke-dasharray="3,2" opacity="0.5"/>
</g>

<!-- scale -->
<g transform="translate(42,720)">
  <line x1="0" y1="0" x2="90" y2="0" stroke="#6a5868" stroke-width="1.3"/>
  <line x1="0" y1="-5" x2="0" y2="5" stroke="#6a5868" stroke-width="1.3"/>
  <line x1="90" y1="-5" x2="90" y2="5" stroke="#6a5868" stroke-width="1.3"/>
  <line x1="45" y1="-3" x2="45" y2="3" stroke="#6a5868" stroke-width="1"/>
  <text x="45" y="17" font-size="12" fill="#8a7888" text-anchor="middle" font-family="Inter,'Noto Sans KR',sans-serif">0 ———— 4m</text>
</g>
</svg>`,
    legend: [
      { style: { background: '#6b1525' }, text: '메인 베드 (헤드보드 링 3개 · 스프레더 바)' },
      { style: { background: '#1a0308', border: '1px solid #6b1525' }, text: '벨벳 패널 — 딥 버건디 (차수혁의 색)' },
      { style: { background: '#060610', border: '1px solid #3a3a5a' }, text: '미러 월 — 블랙 미러 + 암막 커튼' },
      { style: { background: '#3a0a14' }, text: '수납 캐비닛 3단 (로프·콜라·리드 / 크롭·케인 / 패들·오브제)' },
      { style: { background: '#1a1c28' }, text: '워시룸 — 우측 상단 · 싱크+샤워 · 슬라이딩 파티션' },
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