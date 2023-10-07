### 타입 커버리지를 추적하여 타입 안전성 유지하기
any 대신 명시적 타입 구문을 추가해도 any 타입이 프로그램 내에 존재할 수 있는 두 가지 경우
* 명시적 any 타입\
`{[key: string]: any}`같은 타입은 인덱스를 생성하면 단순 any가 되고 코드 전반에 영향을 미침
* 서드파티 타입 선언\
@types 선언 파일로부터 any 타입이 전파되기 때문에 특별히 조심해야 한다. noImplicitAny를 설정하고 절대 any를 사용하지 않았다 하더라도 여전히 any 타입은 코드 전반에 영향을 미침.

any 타입은 타입 안전성과 생산성에 부정적 영향을 미칠 수 있으므로 프로젝트에서 any의 개수를 추적하는 것이 좋다.
npm의 type-coverage 패키지를 활용하여 any를 추적할 수 있는 몇 가지 방법이 있다.

```shell
npx type-coverage
9985 / 10117 98.69%
```

type-coverage를 실행할 때 --detail 플래그를 붙이면, any 타입이 있는 곳을 모두 출력해준다.
```shell
npx type-coverage --detail
path/to/code. ts:1:10 getColumnInfo
path/to/module.ts:7:1 pt2 :..
```

요약
* noImplicityAny가 설정되어 있어도 명시적 any 또는 서드파티 선언을 통해 any 타입은 코드 내에 여전히 존재할 수 있다는 점을 주의 해야 한다.
* 작성한 프로그램의 타입이 얼마나 잘 선언되었는지 추적해야 한다.