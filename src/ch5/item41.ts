namespace Item41 {
  // any의 진화를 이해하기

  function range(start: number, limit: number) {
    const out = []; // 타입이 any[]
    for(let i = start; i < limit; i++) {
      out.push(i); // out의 타입이 any[]
    }
    return out; // 반환 타입이 number[]로 추론됨.
    // number 타입의 값을 넣는 순간부터 타입은 number[]로 진화함.
  }

  // 배열에 다양한 타입의 요소를 넣으면 배열의 타입이 확장되며 진화됨.
  const result = []; // 타입이 any[]
  result.push('a');
  result // 타입이 string[]
  result.push(1);
  result // 타입이 (string | number)[]

  // 조건문에서 분기에 따라 타입이 변할 수도 있음.
  let val; // 타입이 any
  if(Math.random() < 0.5) {
    val = /hello/;
    val // 타입이 RegExp
  } else {
    val = 12;
    val // 타입이 number
  }
  val // 타입이 RegExp | number

  // 변수의 초기값이 null인 경우도 any의 진화가 일어남.
  let val = null; // 타입이 any
  try {
    somethingDangerous();
    val = 12;
    val // 타입이 number
  } catch(e) {
    console.warn('alas!');
  }
  val // 타입이 number | null

  // any 타입의 진화는 noImplicitAny가 설정된 상태에서
  // 변수의 타입이 암시적 any인 경우에만 일어남.
  let val: any; // 타입이 any
  if(Math.random() < 0.5) {
    val = /hello/;
    val // 타입이 any
  } else {
    val = 12;
    val // 타입이 any
  }
  val // 타입이 any

  function range(start:number, limit: number) {
    const out = [];
    // 'out' 변수는 형식을  확인할 수 없는 경우
    // 일부 위치에서 암시적으로 'any[]' 형식입니다.
    if(start === limit) {
      return out;
      // 'out' 변수에는 암시적으로 'any[]' 형식이 포함됩니다.
    }
    for(let i = start; i < limit; i++) {
      out.push(i);
    }
    return out;
  }

  function makeSquares(start: number, limit: number) {
    const out = [];
    // 'out' 변수는 일부 위치에서 암시적으로 'any[]' 형식입니다.
    range(start, limit).forEach(i => {
      out.push(i * i);
    });
    return out;
    // 'out' 변수에는 암시적으로 'any[]' 형식이 포함됩니다.
  }
}