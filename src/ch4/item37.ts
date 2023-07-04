namespace Item37 {
  // 공식 명칭에는 상표를 붙이기

  interface Vector2D {
    x: number;
    y: number;
  }

  function calculateNorm(p: Vector2D) {
    return Math.sqrt(p.x * p.x + p.y * p.y);
  }

  calculateNorm({x: 3, y: 4}); // 정상, 결과는 5
  const vec3D = {x: 3, y: 4, z: 1 };
  calculateNorm(vec3D); // 정상, 결과는 동일하게 5
  // 3차원 벡터를 허용하지 않게 하려면 공식 명칭을 사용하면 된다.

  interface Vector2D {
    _brand: '2d';
    x: number;
    y: number;
  }
  function vec2D(x: number, y: number): Vector2D {
    return { x, y, _brand: '2d' };
  }
  function calculateNorm(p: Vector2D) {
    return Math.sqrt(p.x * p.x + p.y * p.y);
  }

  calculateNorm(vec2D(3, 4));
  const vec3D = {x: 3, y: 4, z: 1};
  calculateNorm(vec3D);
  // '_brand' 속성이 ... 형식에 없습니다.

  type AbsolutePath = string & { _brand: 'abs'};
  function listAbsolutePath(path: AbsolutePath) {
    // ...
  }
  function isAbsolutePath(path: string): path is AbsolutePath {
    return path.startsWith('/');
  }

  function f(path: string) {
    if(isAbsolutePath(path)){
      listAbsolutePath(path);
    }
    listAbsolutePath(path);
    // 'string' 형식의 인수는 'AbsolutePath' 형식의
    // 매개변수에 할당될 수 없습니다.
  }

  function binarySearch<T>(xs: T[], x: T): boolean {
    let low = 0, high = xs.length - 1;
    while(high >= low) {
      const mid = Math.floor((high - low) / 2);
      const v = xs[mid];
      if(v === x) return true;
      [low, high] = x > v ? [mid + 1, high] : [low, mid - 1];
    }
    return false;
  }

  type SortedList<T> = T[] & { _brand: 'sorted' };

  function isSorted<T>(xs: T[]): xs is Sorted<T> {
    for(let i = 1; i < xs.length; i++) {
      if(xs[i] < xs[i - 1]) {
        return false;
      }
    }
    return true;
  }

  function binarySearch<T>(xs: SortedList<T>, x: T): boolean {
    // ...
  }

  type Meters = number & {_brand: 'meters'};
  type Seconds = number & {_brand: 'seconds'};

  const meters = (m: number) => m as Meters;
  const seconds = (s: number) => s as Seconds;

  const oneKm = meters(1000); // 타입이 Meters
  const oneMin = seconds(60); // 타입이 Seconds

  const tenKm = oneKm * 10; // 타입이 number
  const v = oneKm / oneMin; // 타입이 number
}