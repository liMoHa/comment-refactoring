# 2차 refactoring
recoil을 이용한 전역 상태 관리로 다시 refactoring하기 -> props drilling해결

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

1. cd refactoring2
2. yarn install
3. yarn dev
4. web browser에 localhost:3000 입력

