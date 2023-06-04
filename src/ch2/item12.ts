namespace Item12 {
  function rollDice1(sides: number): number {} // 문장
  const rollDice2 = function(sides: number): number { } // 표현식
  const rollDice3 = (sides: number): number => { } // 표현식

  type DiceRollFn = (sides: number) => number;
  const rollDice: DiceRollFn = sides => {};

  function add(a: number, b: number) { return a + b; }
  function sub(a: number, b: number) { return a - b; }
  function mul(a: number, b: number) { return a * b; }
  function div(a: number, b: number) { return a / b; }

  type BinaryFn = (a: number, b: number) => number;
  const add: BinaryFn = (a, b) => a + b;
  const sub: BinaryFn = (a, b) => a - b;
  const mul: BinaryFn = (a, b) => a * b;
  const div: BinaryFn = (a, b) => a / b;

  async function checkedFetch(input: RequestInfo, init?: RequestInit) {
    const response = await fetch(input, init);
    if(!response.ok) {
      // 비동기 함수 내에서는 거절된 프로미스로 변환합니다.
      throw new Error('Request failed: ' + response.status);
    }
    return response;
  }

  const checkedFetch: typeof fetch = async (input, init) => {
    const response = await fetch(input, init);
    if(!response.ok){
      throw new Error('Request failed: ' + response.status);
    }
    return response;
  }
}