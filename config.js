// ===== 여기만 수정하면 됩니다 =====
window.TRACKER_CONFIG = {
  // Apps Script 웹 앱 URL (…/exec). 비어 있으면 대시보드는 비어 있는 상태로 표시됩니다.
  ENDPOINT: 'https://script.google.com/macros/s/AKfycbxVJyujR1koFh5kvEYKYVfYAY85agrYJILNu4-imEqC47BqOFwq-gXgnCBRNPoV5rmj/exec',

  // 최종 목적지 (구글폼)
  FORM_URL: 'https://forms.gle/KV4Uh4EEtXZEifnu5',

  // (선택) 구글폼에 유입 경로를 응답으로도 남기고 싶다면
  // 폼에 단답형 질문을 하나 만들고 "미리 채워진 링크 가져오기"로 얻은 entry ID 를 넣으세요. 예: 'entry.123456789'
  PREFILL_ENTRY: '',

  // 포스터/채널 목록. code 가 링크의 ?p= 값이 됩니다.
  // image: 포스터 이미지, qr: QR 이미지, short: 현재 인쇄/바이오에 쓰는 단축 링크
  POSTERS: [
    { code: 'official', label: '정식 포스터',  source: 'poster',    medium: 'offline', image: 'posters/official.png', qr: 'qr/official.png', short: 'https://tinyurl.com/vt26-official' },
    { code: 'meme1',    label: '밈 포스터 1',  source: 'poster',    medium: 'offline', image: 'posters/meme1.png',    qr: 'qr/meme1.png',    short: 'https://tinyurl.com/vt26-meme1' },
    { code: 'meme2',    label: '밈 포스터 2',  source: 'poster',    medium: 'offline', image: 'posters/meme2.png',    qr: 'qr/meme2.png',    short: 'https://tinyurl.com/vt26-meme2' },
    { code: 'etc1',     label: '기타 포스터 1', source: 'poster',    medium: 'offline', image: '',                     qr: 'qr/etc1.png',     short: 'https://tinyurl.com/vt26-etc1' },
    { code: 'etc2',     label: '기타 포스터 2', source: 'poster',    medium: 'offline', image: '',                     qr: 'qr/etc2.png',     short: 'https://tinyurl.com/vt26-etc2' },
    { code: 'ig',       label: '인스타그램',   source: 'instagram', medium: 'social',  image: 'posters/ig.png',       qr: 'qr/ig.png',       short: 'https://tinyurl.com/vt26-ig' }
  ],
  CAMPAIGN: 'vt_form_2026'
};
