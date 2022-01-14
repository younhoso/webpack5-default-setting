# webpack5-default-setting

>webpack5-default-setting은
>html, css | scss, js, imgs, fonts 들을 모듈 형식으로 작업을 진행하고, 
>최종 파일을 min 파일로 압축시켜 배포할 수 있는 구조로써 프로젝트를 매번 새롭게 진행할 때 
>FE 개발자가 기본으로 세팅해야 하는 번거로움을 주리고자 만들었습니다.


## 0. yarn 설치 및 초기화
yarn init와, yarn install 진행

## 1. 패키지 설치
터미널에 아래 내용을 붙여 넣고 엔터를 누르세요.
```
yarn add @babel/cli @babel/core @babel/preset-env babel-loader clean-webpack-plugin copy-webpack-plugin core-js cross-env html-webpack-plugin source-map-loader terser-webpack-plugin webpack webpack-cli webpack-dev-server css-loader file-loader mini-css-extract-plugin postcss-loader sass sass-loader style-loader url-loader --dev
```

## 2. 개발용 서버 구동합니다.
터미널에 아래 내용을 붙여 넣고 엔터를 누르세요.
```
yarn start
```

## 3. 빌드(배포용 파일 생성)
터미널에 아래 내용을 붙여 넣고 엔터를 누르세요.
```
yarn run build
```