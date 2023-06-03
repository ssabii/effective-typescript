function item1() {
  function greet(who: string) {
    console.log("Hello", who);
  }

  interface State {
    name: string;
    capital: string;
  }

  const states: State[] = [
    { name: 'Alabama', capital: 'Montgomery' },
    { name: 'Alaska', capital: 'Juneau' },
    { name: 'Arizona', capital: 'Phoenix' },
  ];

  const x = 2 + '3';
  const y = '2' + 3;

  // 런타임 오류가 발생하지 않는 코드이지만 타입 체커는 문제점을 표시함
  const a = null + 7;
  const b = [] + 12;
  alert('Hello', 'Typescript');

  // 타입 체커를 통과하지만 런타임에서는 오류가 발생
  const names = ['Alice', 'Bob'];
  console.log(names[2].toUpperCase());
}