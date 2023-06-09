namespace Item16 {
  const xs = [1, 2, 3];
  const x0 = xs[0]; // OK
  const x1 = xs['1']; // 예제에서는 안된고 하지만 실제로는 잘 됨

  function get<T>(array: T[], k: string): T {
    return array[k];
    // 인덱스 식이 'number' 형식이 아니므로
    // 요소에 암시적으로 'any' 형식이 있습니다.
  }

  const keys = Object.keys(xs); // 타입이 string[]
  for(const key of keys in xs) {
    key; // 타입이 string
    const x = xs[key]; // 타입이 number
  }

  xs.forEach((x, i) => {
    i; // 타입이 number
    x; // 타입이 number
  })

  for(let i = 0; i < xs.length; i++) {
    const x = xs[i];
    if (x < 0 ) break;
  }

  function checkedAccess<T>(xs: ArrayLike<T>, i: number): T {
    if(i < xs.length) {
      return xs[i];
    }
    throw new Error(`배열의 끝을 지나서 ${i}를 접근하려고 했습니다.`);
  }

  const tupleLike: ArrayLike<string> = {
    '0': 'A',
    '1': 'B',
    length: 2,
  }
}