namespace Item7 {
  let x: never = 12;
  // ~ Type '12' is not assignable to type 'never'.

  // 유닛 타입 이라고 불리는 리터럴 타입
  type A = 'A';
  type B = 'B';
  type Twelve = 12;

  // 유니온 타입
  type AB = 'A' | 'B';
  type AB12 = 'A' | 'B' | 12;

  const a: AB = 'A';
  const c: AB = 'C';

  const ab: AB = Math.random() < 0.5 ? 'A' : 'B';
  const ab12: AB12 = ab;

  declare let twelve: AB12;
  const back: AB = twelve;

  type Int = 1 | 2 | 3 | 4 | 5;

  interface Identified {
    id: string;
  }

  interface Person {
    name: string;
  }

  interface Lifespan {
    birth: Date;
    death?: Date;
  }

  type PersonSpan = Person & Lifespan;

  const ps: PersonSpan = {
    name: 'Alan Turing',
    birth: new Date('1912/06/23'),
    death: new Date('1954/06/07')
  }; // 정상
  // 인터섹션 타입의 값은 각 타입 내의 속성을 모두 포함하는 것이 일반적인 규칙이다.

  interface Person {
    name: string;
  }

  interface PersonSpan extends Person {
    birth: Date;
    death?: Date;
  }

  interface Vector1D { x: number; }
  interface Vector2D extends Vector1D { y: number; }
  interface Vector3D extends Vector2D { z: number; }

  function getKey<K extends string>(val: any, key: K) {
    // ...
  }

  getKey({}, "x")
  getKey({}, Math.random() < 0.5 ? "a" : "b");
  getKey({}, document.title);
  getKey({}, 12);

  interface Point {
    x: number;
    y: number;
  }
  type PointKeys = keyof Point; // 타입은 "x" | "y"

  function sortBy<K extends keyof T, T>(vals: T[], key: K): T[] {
    // ...
  }
  const pts: Point[] = [{ x: 1, y: 2 }, { x: 2, y: 0 }];
  sortBy(pts, 'x');
  sortBy(pts, 'y');
  sortBy(pts, Math.random() < 0.5 ? 'x' : 'y');
  sortBy(pts, 'z');
  // ~~~ Type '"z"' is not assignable to type '"x" | "y"'.

  const list = [1, 2];
  const tuple: [number, number] = list;
  // ~~~~ Type 'number[]' is not assignable to type '[number, number]'.
  // number[]는 [number, number]의 부분 집합이 아니기 떄문에 할당할 수 없다.

  const triple: [number, number, number] = [1, 2, 3];
  const double: [number, number] = triple;
  // ~~~~ Type '[number, number, number]' is not assignable to type '[number, number]'.
  // 타입스크립트는 숫자의 쌍을 {0: number, 1: number}로 모델링 하지 않고, {0: number, 1: number, length: 2}로 모델링 함

  type T = Exclude<string | Date, string | number>; // 타입은 Date
  type NonZeroNums = Exclude<number, 0>; // 타입은 여전히 number
}