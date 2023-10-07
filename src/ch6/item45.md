### devDependencies에 typescript와 @types 추가하기

* dependencies: 현재 프로젝트를 실행하는 데 필수적인 라이브러리들이 포함됨
* devDependencies: 현재 프로젝트를 개발하고 테스트하는데 사용되지만, 런타임에는 필요 없는 라이브러리들이 포함됨
* peerDependencies: 런타임에 필요하긴 하지만, 의존성을 직접 관리하지 않는 라이브러리들이 포함됨.

**타입스크립트 의존성**

타입스크립트는 시스템 레벨로 설치하기 보다는 devDependencies에 넣는 것이 좋다.\
devDependencies에 포함되어 있다면, npm install을 실행할 때 팀원들 모두 정확한 버전의 타입스크립트를 설치할 수 있다.\
대부분의 타입스크립트 IDE와 빌드 도구는 devDependencies를 통해 설치된 타입스크립트의 버전을 인식할 수 있도록 되어 있다.

**타입 의존성**

DefinitelyTyped에서 타입 정보를 얻을 수 있다. DefinitelyTyped의 타입 정의들은 npm 레지스트리의 @types 스코프에 공개된다. @types 라이브러리는 타입 정보만 포함하고 있고 구현체는 포함되지 않는다. 원본 라이브러리 자체가 dependencies에 있더라도 @types 의존성은 devDependencies에 있어야 한다.

```shell
npm install react
npm install --save-dev @types/react
```

- 타입스크립트를 시스템 레벨로 설치하면 안된다. 프로젝트의 devDependencies에 포함시키고 팀원 모두가 동일한 버전을 사용하도록 해야 한다.
- @types 의존성은 dependencies가 아니라 devDependencies에 포함시켜야 한다. 런타임에 @types가 필요한 경우라면 별도의 작업이 필요할 수 있다.