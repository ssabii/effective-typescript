namespace Item38 {
  // any 타입은 가능한 한 좁은 범위에서만 사용하기

  interface Foo {}
  interface Bar {}

  function processBar(b: Bar) { /* ... */ }
  function f() {
   const x = expressionReturningFoo(); // Foo 또는 Bar 타입을 반환한다고 가정
    processBar(x);
    // 'Foo' 형식의 인수는 'Bar' 형식의 매개변수에 할당될 수 없습니다될
  }

  function f1() {
    const x: any = expressionReturningFoo(); // 이렇게 하지 맙시다.
    processBar(x);
  }

  function f2() {
    const x = expressionReturningFoo();
    processBar(x as any); // 이게 낫습니다.
  }

  // f2가 나은 이유는 any 타입이 processBar 함수의 매개변수에서만 사용되기 때문에
  // 다른 코드에는 영향을 미치지 않기 때문이다.

  function f1() {
    const x: any = expressionReturningFoo();
    processBar(x);
    return x;
  }

  function g() {
    const foo = f1(); // 타입이 any
    foo.fooMethod(); // 이 함수 호출은 체크되지 않습니다!
  }

  // @ts-ignore를 사용하면 any를 사용하지 않고 오류를 제거할 수 있다.
  function f() {
    const x = expressionReturningFoo();
    // @ts-ignore
    processBar(x);
    return x;
  }

  const config: Config = {
    a: 1,
    b: 2,
    c: {
      key: value
      // 'foo' 속성이 'Foo' 타입에 필요하지만 'Bar' 타입에는 없습니다.
    }
  }

  const config: Config = {
    a: 1,
    b: 2,
    c: {
      key: value
    }
  } as any; // 이렇게 하지 맙시다!

  const config: Config = {
    a: 1,
    b: 2, // 이 속성은 여전히 체크됩니다.
    c: {
      key: value as any
    }
  };
}