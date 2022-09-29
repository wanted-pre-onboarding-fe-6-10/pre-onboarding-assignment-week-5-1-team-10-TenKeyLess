/// <reference types="react-scripts" />

//https://velog.io/@swanious/TIL-.d.ts%ED%8C%8C%EC%9D%BC%EC%97%90%EC%84%9C-reference-typesreact-scripts%EC%9D%B4-%EB%AD%98%EA%B9%8C
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly REACT_APP_API_URL: string;
    readonly REACT_APP_WEBSITE_NAME: string;
  }
}
