# 원티드 프리온보딩 프론트엔드 인턴십 3주차 개인 과제

<br>

## 프로젝트 소개

💡 목표<br>
주어진 mock data를 기반으로 시계열 차트 만들기

<br>
<br>

## ✔️ 배포

`Netlify` [🔗Link](https://pre-onboarding-12th-week4.netlify.app/)

<br/>
<br/>

## 📈 결과물 보기

![ezgif com-video-to-gif](https://github.com/jade0819/pre-onboarding-12th-04/assets/88275787/c6468127-2150-485c-9f18-e943fe6f0d31)

<br/>
<br/>

## 🛫 시작 가이드

- 실행을 위해 다음 Node version이 필요합니다.
  [Node.js 18.17.0](https://nodejs.org/ca/blog/release/v18.17.0/)

```
git clone https://github.com/jade0819/pre-onboarding-12th-04.git
cd pre-onboarding-12th-04
npm install
npm run dev
```

<br/>
<br/>

## 🚀 요구사항

검색창에 질환명 검색 시 API 호출을 통한 `추천 검색어` 표시 기능을 구현

- [x] 주어진 데이터를 기반으로 시계열 차트 만들기
- [x] 호버 기능 구현
- [x] 필터링 기능 구현

<br/>
<br/>

## 🏅 Best Practice

### 1. 시계열 차트 만들기

- ㄹㅇㄹㄴㅇㄹ!!! `react-chartjs-2`를 사용하여 시계열 차트를 구현했습니다. React와 통합성, 쉬운 사용성, 커스터마이징 가능성 이라는 장점을 가지고 기준으로 고려했을 때 쉬운 API를 제공하기 때문에 요구사항에 맞는 커스텀이 가능하며, 2가지의 y축 데이터를 표현하기 위해 멀티 차트 구성이 쉬운 react-chartjs-2를 사용하여 시계열 차트를 구현했습니다.

- 차트 데이터 분석

  - 2023-02-01 날짜의 데이터만 존재
  - y축은 bar_value, bar_area 두 가지 데이터를 기반으로 멀티 차트 구성
  - bar_value 데이터와 bar_area 데이터의 값 범위가 상이하며, 양수 값만 존재
  - 지역은 성북구, 강남구, 노원구, 중랑구 4곳

- 데이터 구조화<br>
  차트 데이터에 적합한 형태로 데이터를 구조화 했습니다.
  ```jsx
  {
    region: "성북구",
    value_area: 46,
    value_bar: 13111,
    timestamp: "2023-02-01 14:32:00",
    date: "2023-02-01",
    time: "14:32:00",
  }
  ```
  <br>

### 2. 호버 기능 구현

- 마우스 호버 시 차트 tooltip을 표시하며 필터링 조건이 특정 지역별인 것을 고려해 tooltip에 지역을 표시하여 사용자 편의성을 높였습니다.

<br/>

### 3. 필터링 기능 구현

- 필터링 버튼 클릭 혹은 특정 데이터 구역 클릭 시 해당 데이터를 하이라이트 하는 방식으로 필터링 기능을 적용했습니다. 필터링 버튼에 **토글** 기능과, 필터 조건 **다중 선택** 기능을 구현하였습니다.

<br/>

### 4. API 호출 기능 구현

- API 호출 시 로딩과 에러 상태를 useReducer 훅으로 관리했으며, httpClient 클래스를 구현함으로써 관심사 분리를 통한 유지보수성과 재사용성을 높였습니다.
- 관심사 분리 원칙에 따라 API 호출 관련 로직을 커스텀훅으로 분리했습니다.
- 에러 페이지에 다시 시도 버튼을 배치하여 사용자가 API 재요청을 할수있도록 구현했습니다.

### 5. UI/UX

- 필터링된 데이터의 색상을 진하게 표시함으로써 가독성을 높였습니다.
- 필터링 버튼의 토글 기능과, 선택된 버튼 색상을 진하게 표시함으로써 사용자 편의성을 높였습니다.

### 6. 코드

- 차트 컴포넌트의 데이터와 옵션 객체를 분리하여 가시성을 높이고, 차트 관련 유틸 함수들을 따로 분리해서 유지보수성을 높였습니다.

  ```jsx
  utils/
  ├── chart/
  │   ├── extractedArrayChartData.js
  │   ├── extractedRegionData.js
  │   ├── getAxisNumberRange.js
  │   ├── getChartColors.js
  │   ├── getChartDataset.js
  │   ├── getChartOptions.js
  │   └── structuredChartData.js
  ├── isEmpty.js
  └── uniqueArray.js
  ```

<br/>
<br/>

## 🛠️ 사용한 기술 스택

#### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Git hub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)
![Source Tree](https://img.shields.io/badge/SOURCE%20TREE-blue?style=for-the-badge&logo=sourcetree)

#### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

#### Build Tool

<img src= "https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">

#### Development

![HTML5](https://img.shields.io/badge/HTML-%23F5AF64?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/CSS-%230A82FF?style=for-the-badge&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=black)
<img src="https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=000"/>
<img src="https://img.shields.io/badge/Chart.js-43436B?style=for-the-badge&logo=Chart.js&logoColor=white">

#### Styling

<img src="https://img.shields.io/badge/TailwindCSS-2D79C7?style=for-the-badge&logo=tailwindcss&logoColor=white">

<br/>
<br/>

## 🌲프로젝트 구조

```
📦
├─ public
│  ├─ data
│  │  └─ mock_data.json
├─ src
│  ├─ App.jsx
│  ├─ api
│  │  ├─ chartData.js
│  │  └─ httpClient.js
│  ├─ components
│  │  ├─ chart
│  │  │  ├─ Chart.jsx
│  │  │  ├─ FilterButton.jsx
│  │  │  ├─ FilterButtonList.jsx
│  │  │  └─ MultiChart.jsx
│  │  ├─ header
│  │  │  └─ Header.jsx
│  │  └─ ui
│  │     ├─ Button.jsx
│  │     ├─ Error.jsx
│  │     └─ Loading.jsx
│  ├─ constants
│  │  └─ colors.js
│  ├─ hooks
│  │  └─ useChartData.jsx
│  ├─ layout
│  │  └─ ContentLayout.jsx
│  ├─ reducer
│  │  └─ chartReducer.js
│  ├─ utils
│  │  ├─ chart
│  │  │  ├─ extractedArrayChartData.js
│  │  │  ├─ extractedRegionData.js
│  │  │  ├─ getAxisNumberRange.js
│  │  │  ├─ getChartColors.js
│  │  │  ├─ getChartDataset.js
│  │  │  ├─ getChartOptions.js
│  │  │  └─ structuredChartData.js
│  │  ├─ isEmpty.js
│  │  └─ uniqueArray.js
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
└─ index.html
```
