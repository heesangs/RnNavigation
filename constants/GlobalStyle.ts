// 색상 정의
const Colors = {
  // 배경색
  primary: '#381703',       // 기본 네비게이션 배경색
  primaryDark: '#281103',   // 페이지 배경색, 드로어 배경색
  primaryMedium: '#3e2111', // 드로어 활성 배경색
  //primary
  pri10: '#290F00',
  pri20: '#4A2611',
  // pri30: '#913500',
  // pri40: '#C94A00',
  // pri50: '#FF5E00',
  // pri60: '#FF7B2E',
  // pri70: '#FF9B61',
  pri80: '#FFBD96',
  pri90: '#F9DBCA',
  pri95: '#FEEEE5',
  pri99: '#FFFAF7',


  // 글씨/아이콘 색상
  white: 'white',           // 기본 텍스트, 아이콘 색상
  accent: '#e4baa1',        // 드로어 비활성 텍스트 색상
  accentSecondary: '#e2b497', // 상세정보 텍스트 색상

  // 그림자
  shadowColor: 'black',     // 그림자 색상
  rippleColor: 'rgba(0, 0, 0, 0.15)', // 안드로이드 리플 효과 색상

  // 카드/컴포넌트 색상
  cardBackground: 'white',  // 카드 배경색
  cardShadow: '#ccc',       // 카드 그림자색
};

// 간격/크기 정의
const Spacing = {
  // 마진/패딩
  small: 8,
  medium: 16,
  large: 32,

  // 보더 반경
  borderRadius: 8,
  borderRadiusMedium: 10,

  // 그림자
  shadow: {
    elevation: 4,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },

  // 컴포넌트 크기
  mealItemHeight: 200,
  gridItemHeight: 150,
  iconSize: 24,
};

// 타이포그래피 정의
const Typography = {
  // 폰트 크기
  small: 16,
  medium: 18,
  large: 24,

  // 폰트 스타일
  bold: 'bold' as 'bold',

  // 텍스트 정렬
  center: 'center' as 'center',
};

// 전역 스타일 객체
const GlobalStyle = {
  Colors,
  Spacing,
  Typography,
};

export default GlobalStyle;