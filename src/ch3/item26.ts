namespace Item26 {
  // 타입 추론에 문맥이 어떻게 사용되는지 이해하기

  // 인라인 형태
  setLanguage('JavaScript');

  // 참조 형태
  let language = 'JavaScript';
  setLanguage(language);

  function setLanguage(language: string) { /* ... */}

  setLanguage('JavaScript'); // 정상

  let language = 'JavaScript';
  setLanguage(language); // 정상

  type Language = 'JavaScript' | 'TypeScript' | 'Python';
  function setLanguage(language: Language) {};

  setLanguage('JavaScript'); // 정상

  let language = 'JavaScript';
  setLanguage(language);
  // 'string' 형식의 인수는 'Language' 형식의 매개변수에 할당될 수 없습니다.

  let: language: Language = 'JavaScript';
  setLanguage(language); // 정상

  const language = 'JavaScript';
  setLanguage(language);

  function panTo(where: [number, number]) {};

  panTo([10, 20]); // 정상

  const loc = [10, 20];
  panTo(loc);
  // 'number[]' 형식의 인수는 '[number, number]' 형식의 매개변수에 할당될 수 없습니다.

  const loc: [number, number] = [10, 20];
  panTo(loc); // 정상

  // const는 단지 값이 가리키는 참조가 변하지 않는 얕은(shallow) 상수이고,
  // as const는 그 값이 내부까지(deeply) 상수라는 사실을 타입스크립트에게 알려준다.
  const loc = [10, 20] as const;
  panTo(loc);
  // 'readonly [10, 20]' 형식은 'readonly'이며
  // 변경 가능한 형식 '[number, number]'에 할당할 수 없습니다.

  function panTo(where: readonly [number, number]) {}
  const loc = [10, 20] as const;
  panTo(loc);

  const loc = [10, 20, 30] as const;
  panTo(loc);
  // 'readonly' [10, 20, 30]' 형식의 인수는
  // 'readonly [number, number]' 형식의 매개변수에 할당될 수 없습니다.
  // 'length' 속성의 형식이 호환되지 않습니다.
  // '3' 형식은 '2' 형식에 할당할 수 없습니다.

  type Language = 'JavaScript' | 'TypeScript' | 'Python';
  interface GovernedLanguage {
    language: Language;
    organization: string;
  }

  function complain(language: GovernedLanguage) {};

  complain({language: 'TypeScript', organization: 'Microsoft'}); // 정상

  const ts = {
    language: 'TypeScript',
    organization: 'Microsoft',
  }
  complain(ts);
  // '{language: string; organization: string; }' 형식의 인수는
  // 'GovernedLanguage 형식의 매개변수에 할당될 수 없습니다.
  // 'language' 속성의 형식이 호환되지 않습니다.
  // 'string' 형식은 'Language' 형식에 할당될 수 없습니다.

  function callWithRandomNumbers(fn: (n1: number, n2: number) => void) {
    fn(Math.random(), Math.random());
  }

  callWithRandomNumbers((a, b) => {
    a; // 타입이 number
    b; // 타입이 number
    console.log(a + b);
  })

  const fn = (a, b) => {
    // 'a' 매개변수에는 암시적으로 'any' 형식이 포함됩니다.
    // 'b' 매개변수에는 암시적으로 'any' 형식이 포함됩니다.
    console.log(a + b);
  }
  callWithRandomNumbers(fn);

  const fn = (a: number, b: number) => {
    console.log(a + b);
  }
  callWithRandomNumbers(fn);
}