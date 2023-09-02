import React, { useEffect } from 'react';
import { 
  defaultDarkModeOverride,
  Badge,
  Divider,
  Flex,
  Heading,
  Text,
  Theme,
  ThemeProvider,
  View
} from '@aws-amplify/ui-react';
import './App.css'
import photo_sample_1 from './img/photo_sample_1.png';
import map from './img/map.png';

function App() {

  useEffect(() => {
    const mapDiv = document.getElementById("naverMap");
    const map = new window.naver.maps.Map(mapDiv);
  }, []);

  // fun points
  // first load - show video?
  // until the day - show the wedding invitation context
  // after the day - hide the wedding invitation

  // const colorMode = 'dark';
  // const theme: Theme = {
  //   name: 'my-theme',
  //   overrides: [
  //     defaultDarkModeOverride,
  //     {
  //       colorMode: 'dark',
  //       tokens: {
  //         colors: {
  //           font: {
  //             primary: { value: '{colors.pink.100}' },
  //             secondary: { value: '{colors.pink.90}' },
  //             tertiary: { value: '{colors.pink.80}' },
  //           },
  //           background: {
  //             primary: { value: '{colors.purple.10}' },
  //             secondary: { value: '{colors.purple.20}' },
  //             tertiary: { value: '{colors.purple.40}' },
  //           },
  //           border: {
  //             primary: { value: '{colors.pink.60}' },
  //             secondary: { value: '{colors.pink.40}' },
  //             tertiary: { value: '{colors.pink.20}' },
  //           },
  //         },
  //       },
  //     },
  //   ],
  // };

  const isShowing = Date.now() < Date.parse('2023-10-22T00:00:00+09:00');

  return (
    isShowing
    ? <ThemeProvider>
      <Flex
        direction='column'
        alignItems='center'
        backgroundColor='background.tertiary'
      >
        <Heading level={3} className='heading'>성보와 세란의 결혼식에 초대합니다</Heading>

        <img src={photo_sample_1} className='MainPhoto' />
        
        <Flex
          direction='column'
          alignItems='center'
          gap='0rem'
        >
          <Text as='p'>강성보 ﹒ 맹세란</Text>
          <Text as='p'>2023년 10월 20일 금요일 17:00</Text>
          <Text as='p'>트라디노이 6층</Text>
        </Flex>

        <Flex className='context'>
          두 사람, 서로에게 위로와 감동이 되어주고자 합니다.
          저희의 소중한 날에 함께해 주세요.
        </Flex>

        <Flex direction='row' justifyContent='space-around'>
          <Text>강범원 ﹒ 변해숙의 장남 🤵🏻 강성보</Text>
          <Divider orientation='vertical'/>
          <Text>임경순 ﹒ 민태자의 장녀 👰🏻 맹세란</Text>
        </Flex>

        <View className='context'>
          <Badge>화환은 정중히 사양합니다. 감사한 마음만 받겠습니다.</Badge>
        </View>

        <Divider />

        <View textAlign='center'>
          <Heading level={5}>오시는 길</Heading>
          <Flex
            direction='column'
            alignItems='center'
            gap='0rem'
          >
            <Text>📍 서울특별시 강남구 도곡로 99길 16, 6층 트라디노이 (T. 02-567-9916)</Text>
            <Text>🚊 삼성역 3번출구 또는 학여울역 1번출구 도보로 8분</Text>
            <Text>🚌 마을버스 강남 01, 06 / 간선 401 / 지선 4318, 4319 대치2동 주민센터 하차후 도보로 1-2분</Text>
            <Text>🚙 트라디노이 건물 1층 주차장 이용 / 만차시 대치2동 문화센터 공용주차장 이용</Text>
          </Flex>
        </View>

        <img src={map} className='MainPhoto' />

        <div id="naverMap" style={{ width: "400px", height: "400px" }} />

        <Divider />

        <Flex
          direction='column'
          alignItems='center'
          gap='0rem'
        >
          <Heading level={5}>마음 전하실 곳</Heading>
          <Text>변해숙 119-168643-00107 KEB하나은행</Text>
          <Text>민태자 469302-01-019772 KB국민은행</Text>
        </Flex>
      </Flex>
    </ThemeProvider>
    
    // TODO
    : <Heading level={3}>참석해주셔서 감사합니다</Heading>
  )
}

export default App;
