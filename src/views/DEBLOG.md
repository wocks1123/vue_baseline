# DEV LOG

개발 내용 저장...

## TOAST UI

그래프 그리는데 오픈소스인 TOAST UI 사용해보기

- [차트doc](https://ui.toast.com/tui-chart/)은 여기
- [vue wrapper](https://github.com/nhn/toast-ui.vue-chart)는 여기
- 라인차트 [예제 코드]는 여기

### INSTALL

Using npm

```bash
npm install --save @toast-ui/vue-chart
```

### EXAMPLE

나는 loss graph 그리는데 line chart만 쓰고 싶어서..

`vue.config.js`에 아래 내용(`runtimeCompiler:true`) 추가

```js
module.exports = {
  runtimeCompiler: true,
    ...
}
```