namespace Item14 {
  console.log('Cylinder 1 x 1 ',
    'Surface area:', 6.283185 * 1 * 1 + 6.283185 * 1 * 1,
    'Volumn', 3.141592 * 1 * 1 * 1
  );
  console.log('Cylinder 1 x 2 ',
    'Surface area:', 6.283185 * 1 * 1 + 6.283185 * 2 * 1,
    'Volumn', 3.141592 * 1 * 2 * 1
  );
  console.log('Cylinder 2 x 1 ',
    'Surface area:', 6.283185 * 2 * 1 + 6.283185 * 2 * 1,
    'Volumn', 3.141592 * 2 * 2 * 1
  );

  // DRY(don't repeat yourself) 원칙으로 반복을 줄이는 코드
  const surfaceArea = (r, h) => 2 * Math.PI * r * (r + h);
  const volume = (r, h) => Math.PI * r * r * h;
  for(const [r, h] of [[1, 2], [1, 2], [2, 1]]) {
    console.log(
      `Cylinder ${r} x ${h}`,
      `Surface area: ${surfaceArea(r, h)}`,
      `Volume: ${volume(r, h)}`
    )
  }

  interface Person {
    firstName: string;
    lastName: string;
  }

  interface PersonWithBirthDate {
    firstName: string;
    lastName: string;
    birth: Date;
  }

  function distance(a: {x: number, y: number}, b: {x: number, y: number}) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
  }

  interface Point2D {
    x: number;
    y: number;
  }
  function distance(a: Point2D, b: Point2D) { /* ... */ }

  function get(url: string, opts: Options): Promise<Response> { /* ... */ }
  function post(url: string, opts: Options): Promise<Response> { /* ... */ }

  type HTTPFunction = (url: string, opts: Options) => Promise<Response>;
  const get: HTTPFunction = (url, opts) => { /* ... */ };
  const post: HTTPFunction = (url, opts) => { /* ... */ };

  interface Person {
    firstName: string;
    lastName: string;
  }

  interface PersonWithBirthDate extends Person {
    birth: Date;
  }

  type PersonWithBirthDate = Person & { birth: Date };

  interface State {
    userId: string;
    pageTitle: string;
    recentFiles: string[];
    pageContents: string;
  }

  interface TopNavState {
    userId: string;
    pageTitle: string;
    recentFiles: string[];
  }

  type TopNavState = {
    userId: State['userId'];
    pageTitle: State['pageTitle'];
    recentFiles: State['recentFiles'];
  }

  type TopNavState = {
    [k in 'userId' | 'pageTitle' | 'recentFiles']: State[k];
  }

  type TopNavState = Pick<State, 'userId' | 'pageTitle' | 'recentFiles'>;

  interface SaveAction {
    type: 'save';
  }

  interface LoadAction {
    type: 'load';
  }

  type Action = SaveAction | LoadAction;
  type ActionType = 'save' | 'load'; // 타입의 반복

  type ActionType = Action['type']; // 타입은 "save" | "load"

  type ActionRec = Pick<Action, 'type'>;

  interface Options {
    width: number;
    height: number;
    color: string;
    label: string;
  }
  interface OptionsUpdate {
    width?: number;
    height?: number;
    color?: string;
    label?: string;
  }
  class UIWidget {
    constructor(init: OptionsUpdate) { /* ... */ }
    update(options: OptionsUpdate) { /* ... */ }
  }

  // 매핑된 타입과 keyof를 사용하면 옵셔널하게 만들 수 있다.
  type OptionsUpdate = { [K in keyof Options]?: Options[K] };

  // keyof는 타입을 받아서 속성 타입의 유니온을 반환한다.
  type OptionsKeys = keyof Options;
  // 타입이 "width" | "height" | "color" | "label"

  const INIT_OPTIONS = {
    width: 640,
    height: 480,
    color: '#00FF00',
    label: 'VGA'
  }
  interface Options {
    width: number;
    height: number;
    color: string;
    label: string;
  }

  type Options = typeof INIT_OPTIONS;
  // 값 형태에 해당하는 타입 정의 가능

  function getUserInfo(userId: string) {
    const name = 'John Doe';
    const age = 34;
    const height = 182;
    const weight = 84;
    const favoriteColor = 'blue';

    return {
      userId,
      name,
      age,
      height,
      weight,
      favoriteColor,
    }
  }

  type UserInfo = ReturnType<typeof getUserInfo>;

  // 제네릭 타입에서 매개변수를 제한하는 방법은 extends를 사용하는 것이다.
  interface Name {
    first: string;
    last: string;
  }
  type DancingDuo<T extends Name> = [T, T];
  const couple1: DancingDuo<Name> = [
    { first: 'Fred', last: 'Astaire' },
    { first: 'Ginger', last: 'Rogers' },
  ]; // OK
  const couple2: DancingDuo<{ first: string }> = [
    // 'Name' 타입에 필요한 'last' 속성이
    // '{ first: string }' 타입에 없습니다.
    { first: 'Sonny' },
    { first: 'Cher' },
  ];

  type Pick<T, K> = {
    [k in K]: T[k];
    // 'K' 타입은 'string | number | symbol' 타입에 할당할 수 없습니다.
  }

  type Pick<T, K extends keyof T> = {
    [k in K]: T[k];
  } // 정상
}
