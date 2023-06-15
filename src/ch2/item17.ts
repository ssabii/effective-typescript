namespace Item17 {
  // 변경 관련된 오류 방지를 위해 readonly 사용하기

  function printTriangles(n: number){
    const nums = [];
    for(let i = 0; i < n; i++) {
      nums.push(i);
      console.log(arraySum(nums));
    }
  }

  function arraySum(arr: readonly number[]){
    let sum = 0, num;
    while((num = arr.pop()) !== undefined) {
      // 'readonly number[]' 형식에 'pop' 속성이 없습니다.
      sum += num;
    }
    return sum;
  }

  // readonly 속성은 다음과 같은 몇가지 특징이 있다.
  // - 배열의 요소를 읽을 수 있지만, 쓸 수는 없다.
  // - length를 읽을 수 있지만, 바꿀 수는 없다
  // - push, pop, splice 등의 메서드를 사용할 수 없다.

  const a: number[] = [1, 2, 3];
  const b: readonly number[] = a;
  const c: number[] = b;
  // 'readonly number[]' 타입은 'readonly' 이므로
  // 변경 가능한 'number[]' 타입에 할당될 수 없습니다.

  function arraySum(arr: readonly number[]) {
    let sum = 0;
    for(const num of arr) {
      sum += num;
    }
    return sum;
  }

  function parseTaggedText(lines: string[]): string[][] {
    const paragraphs: string[][] = [];
    const currPara: string[] = [];

    const addParagraph = () => {
      if(currPara.length) {
        paragraphs.push(currPara);
        currPara.length = 0; // 배열을 비움
      }
    }

    for(const line of lines) {
      if(!line){
        addParagraph();
      } else {
        currPara.push(line);
      }
    }
    addParagraph();
    return paragraphs;
  }

  function parseTaggedText(lines: string[]): string[][] {
    const currPara: readonly string[] = [];
    const paragraphs: string[][] = [];

    const addParagraph = () => {
      if(currPara.length) {
        paragraphs.push(currPara);
        // 'readonly string[]' 형식의 인수는
        // 'string[]' 형식의 매개 변수에 할당될 수 없습니다.
        currPara.length = 0; // 배열을 비움
        // 읽기 전용 속성이기 때문에 'length'에 할당할 수 없습니다.
      }
    }

    for(const line of lines) {
      if(!line){
        addParagraph();
      } else {
        currPara.push(line);
        // 'readonly string[]' 형식에 'push' 속성이 없습니다.
      }
    }
    addParagraph();
    return paragraphs;
  }

  function parseTaggedText(lines: string[]): string[][] {
    let currPara: readonly string[] = [];
    const paragraphs: (readonly string[])[] = [];

    const addParagraph = () => {
      if(currPara.length) {
        paragraphs.push(currPara as string[]);
        // 'readonly string[]' 형식의 인수는
        // 'string[]' 형식의 매개 변수에 할당될 수 없습니다.
        currPara = []; // 배열을 비움
        // 읽기 전용 속성이기 때문에 'length'에 할당할 수 없습니다.
      }
    }

    for(const line of lines) {
      if(!line){
        addParagraph();
      } else {
        currPara = currPara.concat([line]);
        // 'readonly string[]' 형식에 'push' 속성이 없습니다.
      }
    }
    addParagraph();
    return paragraphs as string[][];
  }

  interface Outer {
    inner: {
      x: number;
    }
  }
  const o: Readonly<Outer> = {inner: {x: 0}};
  o.inner = {x: 1};
  // 읽기 전용 속성이기 때문에 'inner'에 할당할 수 없습니다.
  o.inner.x = 1; // 정상

  type T = Readonly<Outer>;
  // Type T = {
  //   readonly inner: {
  //     x: number;
  //   }
  // }
  // readonly 접근 제어자는 inner에 적용되는 것이지 x는 아니다.

  let obj: {readonly [k: string]: number} = {};
  obj.hi = 45;
  // 형식의 인덱스 시그니처는 읽기만 허용됩니다.
  obj = {...obj, hi: 12}; // 정상
  obj = {...obj, bye: 34}; // 정상
}