# 3차 refactoring
- container-presenter이해-> 얘는 class component에서 사용되는 디자인 패턴인 것 같은데 이를 바탕으로 atomic design이 등장하게 된 건가..?
이걸 알아야 하는 이유가 뭔지 모르겠음. 
데이터 처리부와 선언부를 나누어서 표현한다는 건데 이 내용이 atomic design의 component에도 적용되는 게 있는 건가?? 아직 이해를 못한 것 같다. 
- component 재구성
- Recoil Root 선언 위치 수정 
- useEffect 중복 수정

...3차 리팩토링 진행중...

이벤트핸들러는 어느 부분에 포함이 되어야 하는 거지..? molecules? organism?
component를 정확히 어떤 기준으로 나눠야 할지 아직 개념이 덜 잡힘.
확실한 건 molecules에는 전역상태관리가 되는 component가 들어가면 안 됨. 
많은 자료를 찾아보면서 공통적으로 적용시키는 부분을 최대한 일반화시켜보자.


💡공부해야 될 것들

1. useEffect, useState 동작 방식
2. 이벤트핸들러 동작 방식
3. 페이지 렌더링 과정
4. atomic design에따른 component구성 방법
5. recoil 사용법


# 프로젝트 구성

```
src
├── components            
│   ├── atoms		    
│   ├── molecules	
│   └── organisms		
└── pages                 
│    └── Main
│     	└── MainTemplate.tsx
└── state                         
```

# 실행방법

1. cd refactoring3
2. yarn install
3. yarn dev
4. web browser에 localhost:3000 입력

