namespace Item8 {
  interface Cylinder {
    radius: number;
    height: number;
  }

  const Cylinder = (radius: number, height: number) => ({radius, height});

  function calculateVolume(shape: unkown) {
    if(shape instanceof Cylinder) {
      shape.radius
      // '{}' 형식에 'radius' 속성이 없습니다.
    }
  }
  // instanceof는 자바스크립트의 런타임 연산자이고, 값에 대해서 연산을 합니다.
  // Cylinder는 타입이 아니라 함수를 참조한다.

  type T1 = 'string literal';
  type T2 = 123;
  const v1 = 'string literal';
  const v2 = 123;

  interface Person {
    first: string;
    last: string;
  }
  const p: Person = {first: 'Jane', last: 'Jacobs'};
  //                -------------------------------- 값
  //       ------                                    타입

  function email(p: Person, subject: string, body: string): Response {
    //     ----- -          -------          ----                    값
    //              ------           ------        ------   -------- 타입
  }

  // 다음 예제에서 클래스는 타입으로 쓰임
  class Cylinder {
    radius=1임
    height=1;
  }

  function calculateVolume(shape: unknown) {
    if(shape instanceof Cylinder) {
      shape         // 정상, 타입은 Cylinder
      shape.radius  // 정상, 타입은 number
    }
  }

  type T1 = typeof p; // 타입은 Person
  type T2 = typeof email;
  // 타입은 (p: Person, subject: string, body: string) => Response

  const v1 = typeof p; // 값은 'object'
  const v2 = typeof email; // 값은 'function'

  declare let fn: T;
  const c = new fn(); // 타입이 Cylinder

  type C = InstanceType<typeof Cylinder>; // 타입이 Cylinder

  const first: Person['first'] = p['first'];
  //    -----                    ---------- 값
  //           ------ -------               타입

  type PersonEl = Person['first' | 'last']; // 타입은 string
  type Tuple = [string, number, Date];
  type TupleEl = Tuple[number]; // 타입은 string | number | Date

  function email(options: { person: Person, subject: string, body: string }) {
    // ...
  }

  function email({person, subject, body}: { person: Person, subject: string, body: string }) {
    // ...
  }
  // 디스트럭쳐링을 사용하려면 타입과 값을 구분해야함.
}