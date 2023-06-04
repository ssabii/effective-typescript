namespace Item4 {
  interface Vector2D {
    x: number;
    y: number;
  }

  function calculateLength(v: Vector2D) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
  }

  interface NamedVector {
    name: string;
    x: number;
    y: number;
  }

  const v: NamedVector = { x: 3, y: 4, name: 'Zee' };
  calculateLength(v);
  // 타입스크립트의 타입 시스템은 자바스크립트의 런타임 동작을 모델링함.
  // NamedVector의 구조가 Vector2D와 호환이 되기 때문에 calculateLength 호출이 가능함

  interface Vector3D {
    x: number;
    y: number;
    z: number;
  }

  function normalize(v: Vector3D) {
    const length = calculateLength(v);

    return {
      x: v.x / length,
      y: v.y / length,
      z: v.z / length,
    };
  }

  const normal = normalize({x: 3, y: 4, z: 5});
  console.log(normal);

  function calculateLengthL1(v: Vector3D) {
    let length = 0;

    for(const axis of Object.keys(v)) {
      const coord = v[axis];
      // string은 Vector3D의 인덱스로 사용할 수 없기에
      // 엘리먼트는 암시적으로 any 타입이다.
      length += Math.abs(coord);
    }

    return length;
  }

  function calculateLengthL2(v: Vector3D){
    return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
    // 루프보다는 모든 속성을 각가 더하는 구현이 더 낫다.
  }
}