namespace Item3 {
  interface Square {
    width: number;
  }

  interface Rectangle extends Square {
    height: number;
  }

  type Shape = Square | Rectangle;

  // function calculateArea(shape: Shape) {
  //   if(shape instanceof Rectangle) {
  //     // Rectangle은 형식만 참조하지만,
  //     // 여기서는 값으로 사용되고 있다.
  //     return shape.width * shape.height;
  //     // shape 형식에 height 속성이 없다.
  //   } else {
  //     return shape.width * shape.width;
  //   }
  // }

  function calculateArea(shape: Shape) {
    if('height' in shape) {
      shape; // 타입이 Rectangle
      return shape.width * shape.height;
    } else {
      shape; // 타입이 Square
      return shape.width * shape.width;
    }
  }

  interface Square {
    kind: 'square';
    width: number;
  }

  interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
  }

  type Shape = Square | Rectangle;

  function calculateArea(shape: Shape) {
    if(shape.kind === 'rectangle') {
      shape; // 타입이 Rectangle
      return shape.width * shape.height;
    } else {
      shape; // 타입이 Square
      return shape.width * shape.width;
    }
  }

  // 클래스로 선언하면 타입과 값으로 모두 사용 가능하므로 오류가 없다.
  class Square {
    constructor(public width: number) {}
  }

  class Rectangle extends Square {
    constructor(public width: number, public height: number) {
      super(width);
    }
  }

  type Shape = Square | Rectangle;

  function calculateArea(shape: Shape) {
    if(shape instanceof Rectangle) {
      shape; // 타입이 Rectangle
      return shape.width * shape.height;
    } else {
      shape; // 타입이 Square
      return shape.width * shape.width;
    }
  }

  function setLightSwitch(value: boolean) {
    switch(value) {
      case true:
        turnLightOn();
        break;
      case false:
        turnLightOff();
        break;
      default:
        console.log(`실행 되나?`);
    }
  }

  function turnLightOn() {
    console.log(`불을 켭니다.`);
  }

  function turnLightOff() {
    console.log(`불을 끕니다.`);
  }

  function asNumber(val: number | string) {
    return typeof val === 'string' ? Number(val) : val;
  }

  function add(a: number, b: number): number {
    return a + b;
  }

  // 타입스크립트 타입으로는 함수를 오버라이드 할 수 없다.
  // function add(a: string, b: string): string {
  //   return a + b;
  // }
}