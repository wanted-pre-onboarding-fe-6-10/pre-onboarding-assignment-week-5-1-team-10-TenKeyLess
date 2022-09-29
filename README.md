# pre-onboarding-assignment-week-5-1-team-10-TenKeyLess

원티드 프리온보딩 프론트엔드 6차 10팀 추천 검색어 과제

## 🌏 배포링크

http://wanted610.s3-website.ap-northeast-2.amazonaws.com/

## 👋 팀원소개

<table>
    <tr>
        <td height="140px" align="center"> <a href="https://github.com/HE-SW">
            <img src="https://avatars.githubusercontent.com/HE-SW" width="140px" /> <br>김한얼</a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/eazae">
            <img src="https://avatars.githubusercontent.com/eazae" width="140px" /> <br>신이재</a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/blackgar">
            <img src="https://avatars.githubusercontent.com/blackgar" width="140px" /> <br>윤관 </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/jihyun-jeon">
          <img src="https://avatars.githubusercontent.com/jihyun-jeon" width="140px" /> <br> 전지현</a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/Dev-jwJeong">
            <img src="https://avatars.githubusercontent.com/Dev-jwJeong" width="140px" /> <br>정재욱</a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/qkrwlstjd">
            <img src="https://avatars.githubusercontent.com/qkrwlstjd" width="140px" /> <br> 박진성 </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/seungyeonchoo">
            <img src="https://avatars.githubusercontent.com/seungyeonchoo" width="140px" /> <br> 추승연 </a> <br></td>
    </tr>
<tr>
        <td align="center"></td>
        <td align="center"></td>
        <td align="center">팀장 </td>
        <td align="center"></td>
        <td align="center"></td>
        <td align="center"></td>
        <td align="center"></td>
    </tr>
</table>
<br>

> ## 목차

- [프로젝트 개요](#프로젝트-개요)
- [폴더 구조](#폴더-구조)
- [기능별 설명 / Best Practice](#기능별-설명--best-practice)
- [미구현 내용](#미구현-내용)
- [회고](#회고)

<br>

> ## 프로젝트 개요

- 아래 사이트의 검색영역을 클론하기
  [한국임상정보](https://clinicaltrialskorea.com/)
- 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현

> ## 프로젝트 진행방법

- 이번 과제의 경우 협업하기에 양이 조금 적기도 하고 Typescript를 적용하고 ContextAPI도 직접 활용해보면서 실습과 학습을 병행하기 위해 이번 과제에서는 각자 이 과제를 수행하도록 진행했다.

1. 각 팀원별로 필수 기능을 구현한 뒤 코드 리뷰를 진행하고 추가 기능을 구현하도록 진행했다.
2. 추가 기능 구현 뒤, Best Practice를 논의한 뒤 선정하여 메인 브랜치에 병합했다.

  <details>
    <summary>Best Practice 선정 이유</summary>

      - 세부적인 명세들을 모두 구현했고 명세에 없지만, UX를 고려한 부분들이 많아서 좋았다.
      - 관심사 분리가 잘 진행되었다.
      - 테스트 코드를 작성하여 실제 서비스와 같은 개발 작업을 하고자 노력했다.
      - api 호출 과정에서 error가 발생하는 경우 local caching에서 제외하고 통신에 성공한 경우에만 local caching을 진행하도록 구현한 것이 인상적이었다.
      - 세션에서 진행한 테스트 코드를 작성 및 적용하여 주요 기능 구현에 대한 테스트를 진행하였다.
      - 상수값들을 별도의 파일에 선언하여 추후 유지 보수를 쉽도록 작업한 것이 좋았다.
      - 상황별 에러처리 , 로딩시 스피너 처리 등 디테일한 부분을 잘 살렸다.
      - hook을 이용해 관심사 분리가 잘 이루어져 가독성이 좋았다.
      - test를 구현하여 test코드에 대해 더 알 수 있었다.

  </details>

  <br/>

> ## 사용기술

 <br/>

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

<br>

> ### 해당 기술 선택이유<br>

- 프레임워크: React

  - 생태계가 넓고, 다양한 라이브러리 사용 가능
  - virtual DOM을 활용하여 빠른 렌더링 가능
  - 단방향 데이터 바인딩을 통한 디버깅 용이

- 언어: Typescript - 명시적인 정적 타입 지정을 통해 컴파일 단계에서 오류를 미리 감지할 수 있다.

- 스타일링: Styled-component - css를 컴포넌트화 하여 사용할 수 있다.

<br/>

> ## 폴더 구조

```
📦src
 ┣ 📂api
 ┃ ┣ 📜api.test.ts
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜sickAPI.ts
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜Divider.tsx
 ┃ ┃ ┣ 📜IconButton.tsx
 ┃ ┃ ┗ 📜Spinner.tsx
 ┃ ┣ 📂header
 ┃ ┃ ┗ 📜Header.tsx
 ┃ ┗ 📂searchBar
 ┃ ┃ ┣ 📜HistoryItem.tsx
 ┃ ┃ ┣ 📜HistoryList.tsx
 ┃ ┃ ┣ 📜SearchBar.tsx
 ┃ ┃ ┣ 📜SickItem.tsx
 ┃ ┃ ┗ 📜SickList.tsx
 ┣ 📂contexts
 ┃ ┣ 📜InputContext.tsx
 ┃ ┗ 📜RecommendContext.tsx
 ┣ 📂hoc
 ┃ ┗ 📜Highlighter.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useFocus.ts
 ┃ ┣ 📜useKeyPress.ts
 ┃ ┗ 📜useSickSearch.ts
 ┣ 📂locales
 ┃ ┣ 📂KR
 ┃ ┃ ┗ 📜index.ts
 ┃ ┗ 📜index.ts
 ┣ 📂pages
 ┃ ┗ 📜Main.tsx
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyle.tsx
 ┃ ┗ 📜theme.ts
 ┣ 📂types
 ┃ ┣ 📜react-app-env.d.ts
 ┃ ┣ 📜search.d.ts
 ┃ ┣ 📜sick.d.ts
 ┃ ┗ 📜styled.d.ts
 ┣ 📂utils
 ┃ ┗ 📜constants.ts
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┗ 📜setupTests.ts
```

> ## 기능별 설명 / Best Practice

# 작업내용

## 기능 구현 설명

### 1. API 호출 최적화

> Map 형태의 cache 저장소를 생성해 context에서 관리하고 있게끔 구현

```javascript
const cache = new Map();
const searchHistory: Array<string> = [];

function App() {
  return (
    <InputContextProvider searchHistory={searchHistory}>
      <RecommendContextProvider cache={cache}>
          ...
```

- key값은 검색어, value값은 반환되었던 data 배열을 담고 있음
- rejected 결과값이 캐싱되면 안되므로, 데이터 요청이 정상 처리된 경우에만 담고있게끔 처리
- 1000ms의 debounce time을 걸어 검색어 입력 이벤트 그룹핑 -> API 호출이 매번 일어나지 않게끔 함

### 2. 키보드 컨트롤

> KeyDown, KeyUp, Escape, Enter 에 대한 키보드 동작 처리

- 검색창에서 Enter를 입력할 시, 해당 검색어를 검색 기록에 추가
- 검색어에 대한 리스트가 존재하는 상태에서, 키보드 방향키를 누르면 focus되는 아이템이 달라지도록 처리 (하지만 단순 UI에 그침) -> useRef로 refactoring 필요
- 키보드 동작에 대해 더이상 위로 가거나, 아래로 가거나 할 것이 없는 경우, 맨 하단 혹은 맨 상단으로 이동하게끔 처리

### 3. 검색창

> 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현

- custom hook을 통해 input의 focus 여부를 관리하도록 하여 UI를 다룸
- 입력값에 대한 query값은 context에서 관리하고 있게끔 함. (입력값과 쿼리값을 담는 곳을 분리한 이유는, debounce를 적용했을 때 키보드 입력이 막히는 것을 방지하기 위함)
- 검색어와 일치하는 뿌분을 볼드처리하는 hoc으로 선언
- 검색어가 없을 시 "검색어 없음" 텍스트 디스플레이
  <img width="443" alt="Screen Shot 2022-09-29 at 9 34 36 AM" src="https://user-images.githubusercontent.com/96093461/192912363-09f0ee5e-c093-46fa-ab82-d425cafb937f.png">
- 검색이 요청되고 있는 동안에는 Spinner를 띄워주게끔 처리
- 더보기 버튼을 통해 검색어 요청에 페이징 적용

## 테스팅

- API 호출 Jest test 코드 작성

## 기타

- constant 값들은 `/utils/constants.ts`에 별도로 선언해둠
- 추후 localization을 위해 `/locales/*` 폴더 아래에 텍스트값들 선언해둠
- theme에 type 적용을 상세히 하여 자동완성기능 편리하게 이용함
- 페이지가 하나인 관계로, react-router는 별도로 사용하지 않음
- REST 요청 함수를 axios instance와 함께 묶어 선언하여 일괄적으로 선언

## 스크린샷

<img width="45%" alt="Screen Shot 2022-09-29 at 9 12 43 AM" src="https://user-images.githubusercontent.com/96093461/192910480-d2e1494c-88e5-4a14-926c-00d345160c03.png"><img width="45%" alt="Screen Shot 2022-09-29 at 9 13 00 AM" src="https://user-images.githubusercontent.com/96093461/192910491-4152262e-82de-42be-9dfd-1375ac4d1bd3.png">

> ## 미구현 내용

- 에러 처리 페이지 UI

> ## Git

- ### [Git branch 전략](https://github.com/wanted-pre-onboarding-fe-6-10/thingsflow/wiki/Git-branch-%EC%A0%84%EB%9E%B5)

- ### [커밋 컨벤션](https://github.com/wanted-pre-onboarding-fe-6-10/thingsflow/wiki/Git-branch-%EC%A0%84%EB%9E%B5)

<br>

> ## Prettier, Eslint

- ### Prettier

```json
{
  "printWidth": 100,
  "tabWidth": 2,
  "singleQuote": true,
  "endOfLine": "auto",
  "overrides": [
    {
      "files": ["**/*.css", "**/*.scss", "**/*.html", "**/*.json"],
      "options": {
        "printWidth": 120,
        "singleQuote": false
      }
    }
  ]
}
```

- ### Eslint
  > API 호출 시점을 찍기 위해 console.info는 "no-console"에서 제외처리

```json
{
  "parser": "@typescript-eslint/parser",
  "extends": ["react-app", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  "plugins": ["@typescript-eslint", "prettier"],
  "ignorePatterns": ["node_modules/"],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "prettier/prettier": ["error", { "endOfLine": "auto" }],
    "@typescript-eslint/no-var-requires": 0,
    "no-var": "warn", // var 금지
    "no-multiple-empty-lines": "warn", // 여러 줄 공백 금지
    "no-console": ["warn", { "allow": ["info", "warn", "error"] }], // console.log() 금지
    "eqeqeq": "warn", // 일치 연산자 사용 필수
    "dot-notation": "warn", // 가능하다면 dot notation 사용
    "no-unused-vars": "warn", // 사용하지 않는 변수 금지
    "react/destructuring-assignment": "warn", // state, prop 등에 구조분해 할당 적용
    "react/jsx-pascal-case": "warn", // 컴포넌트 이름은 PascalCase로
    "react/no-direct-mutation-state": "warn", // state 직접 수정 금지
    "react/jsx-no-useless-fragment": "warn", // 불필요한 fragment 금지
    "react/no-unused-state": "warn", // 사용되지 않는 state
    "react/jsx-key": "warn", // 반복문으로 생성하는 요소에 key 강제
    "react/self-closing-comp": "warn", // 셀프 클로징 태그 가능하면 적용
    "react/jsx-curly-brace-presence": "warn" // jsx 내 불필요한 중괄호 금지
  }
}
```

<br>

> ## 회고

### 윤관

- 서비스를 구현할 때 가장 중요한 게 API 요청 최소화와 같은 서버 부담을 줄이는 부분인데, debounce와 같은 메서드를 통해서 입력마다가 아니라 일정 주기별로 요청을 보내 API 호출 최소화를 통한 최적화를 진행할 수 있는 부분을 직접 구현해볼 수 있어서 좋았습니다.
- ArrowDown, ArrowUp, Escape, Enter 등 다양한 keyboardEvent를 통해 여러 기능들을 구현할 수 있다는 것을 알 수 있었습니다.
- 현재는 react-query와 같이 API 데이터를 캐싱해주는 라이브러리가 많아서 로컬 캐싱에 대해서 크게 신경쓰지 못했는데, 로컬 캐싱을 직접 구현해보면서 API 요청 최적화를 할 수 있는 또 다른 방법을 확인할 수 있어서 좋았습니다.

### 신이재

- 관심사 분리를 위해 Context, custom hook, hoc 등 다양한 방법을 활용하여 프로젝트를 설계해보았습니다. 완벽한 관심사 분리는 안된 것 같아 코드가 오히려 복잡해진 것 같습니다.
- API 호출과 페이징 처리하는 부분을 별도의 custom hook으로 분리한 뒤, context에서 관리하도록 설계하였습니다.
- 테스팅 시도: API 호출 부분에 대한 테스팅 코드를 작성해보고자 시도해봤습니다.
- 벌써 마지막 과제를 마무리하게 되었는데, 5주간 많이 성장한 것 같습니다. 좋은 팀원들 덕분에 다양한 코드 스타일을 참고하며 많이 배워갈 수 있었습니다.

### 전지현

- 캐싱이라는 처리를 처음 접했는데 이렇게 캐싱을 통해 api 호출을 줄이면 비용절약과 더 빠른 데이터 응답을 할 수 있다는 장점을 알게되었다.
- 동료학습을 통해 로컬에서 캐싱 처리할 수 있는 다양한 방법을 알았다. 이렇게 여러 사람과의 코드 공유는 사고의 폭을 확장시킬 수 있어 많은 배움이 되었다.

### 추승연

- 처음으로 custom Hook을 활용하여 프로젝트를 진행했는데, 에러가 발생하거나 수정사항이 생겼을 때 해당 custom Hook에서 전부 해결이 가능하다 보니 관심사의 분리가 잘 되었고, 작업하는데 훨씬 수월했다.
- debounce와 throttle의 개념을 처음 접해서 적용하는데 시간이 오래 걸렸는데, debounce를 사용하니 api 호출을 최적화 할 수 있어 효과적이라는 생각이 들었다.
- localStorage를 활용한 local caching만을 생각했었는데, 팀원들의 작업물을 보면서 context api나 RTK를 활용한 caching도 가능하다는 것을 알 수 있었다. 연습을 통해 효율적인 방법을 찾으면 좋을 것 같다.
