namespace Item9 {
  interface Person { name: string; }

  const alice: Person = { name: 'Alice' }; // 타입은 Person
  const bob = { name: 'Bob'} as Person;     // 타입은 Person

  const alice: Person = {};
  // 'Person' 유형에 필요한 'name' 속성이 '{}' 유형에 없습니다.
  const bob = {} as Person;

  const alice: Person = {
    name: "Alice",
    occupation: "TypeScript developer"
    // 개체 리터럴은 알려진 속성만 지정할 수 있으며
    // 'Person' 형식에 'occupation'이(가) 없습니다.
  };
  const bob = {
    name: "Bob",
    occupation: "JavaScript developer"
  } as Person; // 오류 없음

  const people = ['alice', 'bob', 'jan'].map(name => ({ name }));
  // Person[]을 원했지만 결과는 { name: string; }[]...

  const people = ['alice', 'bob', 'jan'].map(name => ({ name } as Person));

  const people = ['alice', 'bob', 'jan'].map(name => ({ } as Person)); // 오류 없음

  const people = ['alice', 'bob', 'jan'].map((name): Person => ({ name })); // 타입은 Person[]


  document.querySelector('#myButton').addEventListener('click', e => {
    e.currentTarget // 타입은 EventTarget
    const button = e.currentTarget as HTMLButtonElement;
    button // 타입은 HTMLButtonElement
  })

  // 타입스크립트는 DOM에 접근할 수 없기 떄문에 #myButton이 버튼 엘리먼트인지 알 수 없고, currentTarget이 같은 버튼이어야 하는 것도 알지 못한다.
  // 타입스크립트가 알지 못하는 정보를 가지고 있기 때문에 여기서는 타입 단언문을 쓰는 것이 타당하다.

  const elNull = document.getElementById('foo'); // 타입은 HTMLElement | null
  const el = document.getElementById('foo')!; // 타입은 HTMLElement

  interface Person { name: string; }
  const body = document.body;
  const el = body as Person;
  // 'HTMLElement' 형식을 'Person' 형식으로 변환하는 것은
  // 형식이 다른 형식과 충분히 겹치지 않기 떄문에 실수일 수 있다.
  // 의도적인 경우에는 식을 'unknown'으로 변환하면 된다.

  const el = document.body as unknown as Person; // 정상

}