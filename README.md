# ☕️Starbucks Site, sign-in
스타벅스 홈페이지와 로그인 페이지를 만들어보는 과정
 

[완성본](https://unique-belekoy-9a451a.netlify.app/)


![img (1)](https://github.com/Kminhoo/Starbucks/assets/102332763/dd82d7c0-e7c6-4c48-864c-1b943484eb48)

## HTML구조
각 구역을 section 태그를 사용해 분류하고 필요한 태그들을 시멘틱하게 사용하는 방법을 공부했다.

시멘틱한 태그 사용의 중요성을 공부하고, img, a 태그와 같이 속성을 가지고 있는 태그들의 적절한 속성 사용에 대해 공부했다.
#### twitter card 와 Open Graph 를 이용한 소셜미디어 공유 정보
```html
  <meta property="twitter:card" content="summary" />
  <meta property="twitter:site" content="Starbucks" />
  <meta property="twitter:title" content="Starbucks Coffee Korea" />
  <meta property="twitter:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
  <meta property="twitter:image" content="./images/starbucks_seo.jpg" />
  <meta property="twitter:url" content="https://starbucks.co.kr" />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Starbucks" />
  <meta property="og:title" content="Starbucks Coffee Korea" />
  <meta property="og:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
  <meta property="og:image" content="./images/starbucks_seo.jpg" />
  <meta property="og:url" content="https://starbucks.co.kr" />
```
twitter card 와 Open Graph를 이용한 소셜미디어 공유 정보에 대해 공유되는 내용에 대해 공부하고 이해했다.

## CSS

