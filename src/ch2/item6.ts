namespace Item6 {
  // 편집기를 사용하여 타입 시스템 탐색하기

  let num = 10;

  function add(a: number, b: number){
    return a + b;
  }

  function logMessage(message: string | null) {
    console.log(message);
  }

  const foo = {
    x: [1, 2, 3],
    bar: {
      name: "Fred"
    }
  }

  function getElement(elOrId: string | HTMLElement | null): HTMLElement {
    if(typeof elOrId === 'object') {
      return elOrId;
    } else if(elOrId === null) {
      return document.body;
    } else {
      const el = document.getElementById(elOrId);
      return el;
    }
  }
}