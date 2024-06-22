# The end!

- 오늘의 강의: React JS 마스터클래스: From #9.0 to #9.15
- 오늘의 과제: 위의 강의를 시청하신 후, 아래 코드 챌린지를 제출하면 됩니다.
- 제출기간: 2일 챌린지! 월요일 오전 6시까지.

## Code Challenge:

- #9.0 ~ #9.15의 강의를 보고 아래의 코드 챌린지를 완성하세요.

## Tasks:

- `/`(home) 페이지에 Latest movies, Top Rated Movies 그리고 Upcoming Movies의 슬라이더를 추가해주세요.
- `/tv` 페이지에 Latest Shows, Airing Today, Popular, Top Rated의 슬라이더를 추가해주세요.
- `/search` 페이지에 검색한 movie와 tv의 결과가 담긴 슬라이더를 추가해주세요.
- `/movie/:id` 페이지를 더욱 예쁘게 꾸며보세요.
- `/tv/:id` 페이지를 추가해주세요.
- 챌린지 설명 보기

## 제출방법

- 제출기간: 2일 챌린지! 월요일 오전 6시까지.
- Github.io 링크로 제출해주세요!

# TA's 힌트

- 2주간 고생 많으셨습니다🥰 오늘이 마지막 챌린지입니다. 화이팅!!❤
- 각 슬라이더에 필요한 정보를 받아오기 위한 fetch URL은 다음 링크에서 확인하시면 됩니다.
- [The Movie DB 공식문서 참조](https://developers.themoviedb.org/3/movies/get-movie-details)
- 물론, 여러분들을 위해, URL을 하단의 힌트에 정리해두었습니다! 😙 특히 Search부분의 URL은 쿼리를 다뤄보지 않은 분들이 어려움을 겪으실 수 있어, 예시를 작성해두었으니 확인해보시길 바랍니다.
- 또한, useQuery를 여러 번 사용하는 경우 multipleQuery(커스텀 훅)를 구현하는 방법에 대해서도 간단히 다루어보았습니다. 이번 챌린지도 화이팅입니다!! 😀

## Movie

- Lastest : `/movie/latest`
- Top Rated : `/movie/top_rated`
- Upcoming : `/movie/upcoming`

## TV Show

- Latest : `/tv/latest`
- Airing Today : `/tv/airing_today`
- Popular : `/tv/popular`
- Top Rated : `/tv/top_rated`
- Airing Today 예시 `${BASE_PATH}/tv/airing_today?api_key=${API_KEY};`

## Search

- Movie : `${BASE_PATH}/search/movie?api_key=${API_KEY}&query=${keyword}`
- TV : `${BASE_PATH}/search/tv?api_key=${API_KEY}&query=${keyword}`

## 멀티플 쿼리 (커스텀 훅)

- 한 컴포넌트 내부에서 useQuery를 여러번 사용해야 한다면, 데이터별로 컴포넌트를 세분화 하거나 multipleFetch가 가능한 커스텀 훅을 제작하시는게 좋습니다. 전자는 어렵지 않으니 후자에 대해 설명하도록 하겠습니다.
- 커스텀 훅 생성 뒤, 해당 컴포넌트에서 사용할 useQuery들을 전부 넣어줍시다. 그 후, 결과값들을 배열로 return하시면 됩니다. (반드시 함수의 첫 부분은 use로 시작되어야 합니다.)

![](https://i.imgur.com/9nbdZsw.png)

- 이후 동일한 변수들의 이름을 원하는 이름대로 변경해주신 뒤, 사용하시면 됩니다.

![](https://i.imgur.com/zoTdTQu.png)

- 이제 받아오신 데이터들을 여러분들이 만드신 Slider의 Array에 넣어주시기만 하면 챌린지 완료입니다!

## Github-pages 배포시 주의사항.

- 여러분이 배포한 페이지에서 새로고침을 하신다면 404 에러를 마주하게 되실겁니다.
- github-pages를 이용해 배포를 할 땐, BrowserRouter 대신 HashRouter를 사용해주세요!
- [HashRouter 공식문서 참고](https://reactrouter.com/docs/en/v6/routers/hash-router)
