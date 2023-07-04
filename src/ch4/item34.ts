namespace Item34 {
  // 부정확한 타입보다는 미완성 타입을 사용하기

  interface Point {
    type: 'Point';
    coordinates: number[];
  }
  interface LineString {
    type: 'LineString';
    coordinates: number[][];
  }
  interface Polygon {
    type: 'Polygon';
    coordinates: number[][][];
  }
  type Geometry = Point | LineString | Polygon; // 다른 것들도 추가될 수 있다.

  // number[]는 경도와 위도를 나타내므로 튜플 타입으로 선언하는게 낫다.
  type GeoPosition = [number, number];
  interface Point {
    type: 'Point';
    coordinates: GeoPosition;
  }

  type Expression1 = any;
  type Expression2 = number | string | any[];

  const tests: Expression2[] = [
    10,
    "red",
    ["+", 10, 5],
    ["case", [">", 20, 10], "red", "blue", "green"], // 값이 너무 많다.
    ["**", 2, 31], // "**"는 함수가 아니므로 오류를 발생해야 함.
    ["rgb", 255, 128, 64],
    ["rgb", 255, 0, 127, 0] // 값이 너무 많다.
  ];

  type FnName = '+' | '-' | '*' | '/' | '>' | '<' | 'case' | 'rgb';
  type CallExpression = [FnName, ...any[]];
  type Expression3 = number | string | CallExpression;


  type Expression4 = number | string | CallExpression;
  type CallExpression = MathCall | CaseCall | RGBCall;

  interface MathCall {
    0: '+' | '-' | '*' | '/' | '>' | '<';
    1: Expression4;
    2: Expression4;
    length: 3;
  }

  interface CaseCall {
    0: 'case';
    1: Expression4;
    2: Expression4;
    3: Expression4;
    length: 4| 6 | 8 | 10 | 12 | 14 | 16 // 등등
  }

  interface RGBCall {
    0: 'rgb',
    1: Expression4;
    2: Expression4;
    3: Expression4;
    length: 4;
  }

  const tests: Expression4[] = [
    10,
    "red",
    true,
    // 'true' 형식은 'Expression4' 형식에 할당할 수 없습니다.
    ["+", 10, 5],
    ["case", [">", 20, 10], "red", "blue", "green"],
    //       ~~~~~~~~~~~~~~
    // '["case", [">", ...], ...]' 형식은 'string' 형식에 할당할 수 없습니다.
    ["**", 2, 31],
    //     ~  ~~~ 'number' 형식은 'string' 형식에 할당할 수 없습니다.
    ["rgb", 255, 128, 64],
    ["rgb", 255, 128, 127, 73]
    //      ~~~  ~~~  ~~~  ~~ 'number' 형식은 'string' 형식에 할당할 수 없습니다.
  ]
}