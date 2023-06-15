namespace Item21 {
  // 타입 넓히기

  interface Vector3 { x: number; y: number; z: number;}
  function getComponent(vector: Vector3, axis: 'x' | 'y' | 'z') {
    return vector[axis];
  }

  let x = 'x';
  let vec = {x: 10, y: 20, z: 30};
  getComponent(vec, x);
  // 'string' 형식의 인수는 '"x" | "y" | "z"'
  // 형식의 매개 변수에 할당될 수 없습니다.

  const mixed = ['x', 1,];

  const x = 'x'; // 타입이 "x"
  let vec = {x: 10, y: 20, z: 30};
  getComponent(vec, x); // 정상

  const v = {
    x: 1,
  }
  v.x = 3; // 정상
  v.x = '3';
  // '"3"' 형식은 'number' 형식에 할당할 수 없습니다.
  v.y = 4;
  // { x: number; } 형식에 'y' 속성이 없습니다.
  v.name = 'Pythagoras';
  // { x: number; } 형식에 'name' 속성이 없습니다.

  const v1 = {
    x: 1,
    y: 2,
  } // 타입은 { x: number, y: number }

  const v2 = {
    x: 1 as const,
    y: 2,
  } // 타입은 { x: 1, y: number }

  const v3 = {
    x: 1,
    y: 2,
  } as const; // 타입은 { readonly x: 1, readonly y: 2 }

  const a1 = [1, 2, 3]; // 타입이 number[]
  const a2 = [1, 2, 3] as const; // 타입이 readonly [1, 2, 3]

}