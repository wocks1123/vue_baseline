# Vuejs baseline

`vue.js`로 만든 웹 페이지 템플릿

`node12.16.xx`, `npm 6.x.x` 

## node/npm 설치

```bash
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt install npm
```

설치 확인

```bash
node --version # 버전확인
>>> v12.16.1
```

```bash
npm --version
>>> 6.13.4
```

## git clone

```bash
git clone https://github.com/wocks1123/webtool.git
```

## 패키지 설치

```bash
npm install
```

## 기타

실행

```bash
npm run serve
```

포트 변경

```bash
npm run serve -- --port 8001 
```

`vue.config.js`에서 포트와 호스트 변경 가능

```js
//vue.config.js

module.exports = {
  "configureWebpack": {
    "devServer": {
      "host": "0.0.0.0",
      "port": "8888",
      "disableHostCheck": true
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
};
```

### 아이콘

[링크](https://material.io/resources/icons/?style=baseline)에서 여러가지 종류 확인 후

cdn 추가

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

icon 추가

```html
<v-icon>home</v-icon>
```



## 필요 모듈 설치

`package.json`에 있지만 설치법은 작성해둠


### vuetify

```bash
vue add vuetify
```

```bash
npm install --save axios
```

```bash
npm install --save vue-router
```