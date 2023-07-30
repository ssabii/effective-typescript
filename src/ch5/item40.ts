namespace Item40 {
  // 함수 안으로 타입 단언문 감추기

  declare function cacheLast<T extends Function>(fn: T): T;

  declare function shallowEqual(a: any, b: any): boolean;
  function cacheLast<T extends Function>(fn: T): T {
    let lastArgs: any[] | null = null;
    let lastResult: any;

    return function(...args: any[]) {
      // '(...args: any[]) => any' 형식은 'T' 형식에 할당할 수 없습니다.
      if(!lastArgs || !shallowEqual(lastArgs, args)) {
        lastResult = fn(...args);
        lastArgs = args;
      }

      return lastResult;
    }
  }

  function cacheLast<T extends Function>(fn: T): T {
    let lastArgs: any[] | null = null;
    let lastResult: any;

    return function(...args: any[]) {
      if(!lastArgs || !shallowEqual(lastArgs, args)) {
        lastResult = fn(...args);
        lastArgs = args;
      }

      return lastResult;
    } as unknown as T;
    // 원본 함수 T 타입과 동일한 매개변수로 호출되고 반환값 역시 에상한 결과가 되기 때문에
    // 타입 단언문을 추가해서 오류를 제거하는 것이 큰 문제가 되지 않음.
  }

  // 객체 매개변수 a, b가 동일한 키를 가진다는 보장이 없기 때문에 구현할 때는 주의해야 함.
  declare function shallowObjectEqual<T extends object>(a: T, b: T): boolean;

  function shallowObjectEqual<T extends object>(a: T, b: T): boolean {
    for(const [k, aVal] of Object.entries(a)) {
      if(!(k in b) || aVal !== b[k]) {
        // '{}' 형식에 인덱스 시그니처가 없으므로
        // 요소에 암시적으로 'any' 형식이 있습니다.

        return false;
      }
    }
    return Object.keys(a).length === Object.keys(b).length;
  }

  function shallowObjectEqual<T extends object>(a: T, b: T): boolean {
    for(const [k, aVal] of Object.entries(a)) {
      if(!(k in b) || aVal !== (b as any)[k]) {
        return false;
      }
    }
    return Object.keys(a).length === Object.keys(b).length;
  }
}