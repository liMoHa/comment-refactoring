# 3차 refactoring
- component재구성
- container-presenter이해
- recoil root 선언 위치 수정
- state가 필요한 것과 필요하지 않은 것들 

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
└── state                          # 전역 상태 관리를 위한 디렉토리 추가    
```

# 실행방법

1. cd refactoring3
2. yarn install
3. yarn dev
4. web browser에 localhost:3000 입력

