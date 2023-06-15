namespace Item13 {
  // 타입과 인터페이스의 차이점 알기

  type TState = {
    name: string;
    capital: string;
  }

  interface IState {
    name: string;
    capital: string;
  }

  const wyoming: TState = {
    name: 'Wyoming',
    capital: 'Cheyenne',
    population: 500_000,
    // 형식은 'TState' 형식에 할당할 수 없습니다.
    // 개체 리터럴은 알려진 속성만 지정할 수 있으며
    // 'TState' 형식에 'population'이(가) 없습니다.
  }

  type TDict = { [key: string]: string };
  interface IDict {
    [key: string]: string;
  }

  type TFn = (x: number) => string;
  interface IFn {
    (x: number): string;
  }

  const toStrT: TFn = x => '' + x; // 정상
  const toStrI: IFn = x => '' + x; // 정상

  type TFnWithProperties = {
    (x: number): number;
    props: string;
  }

  interface IFnWithProperties {
    (x: number): number;
    props: string;
  }

  type TPair<T> = {
    first: T;
    second: T;
  }
  interface IPair<T> {
    first: T;
    second: T;
  }

  interface IStateWithPop extends TState {
    population: number;
  }
  type TStateWithpop = IState & { population: number };

  class StateT implements TState {
    name: string = '';
    capital: string = '';
  }
  class StateI implements IState {
    name: string = '';
    capital: string = '';
  }

  type AorB = 'a' | 'b';

  type Input = { /* ... */ };
  type Output = { /* ... */ };
  interface VariableMap {
    [name: string]: Input | Output;
  }

  type NamedVariable = (Input | Output) & { name: string };

  type Pair = [number, number];
  type StringList = string[];
  type NamedNums = [string, ...number[]];

  interface Tuple {
    0: number;
    1: number;
    length: 2;
  }
  const t: Tuple = [10, 20]; // 정상
  // 튜플을 인터페이스로 구현하면 concat 같은 메서드를 사용할 수 없다.

  interface IState {
    name: string;
    capital: string;
  }
  interface IState {
    population: number;
  }
  const wyoming: IState = {
    name: 'Wyoming',
    capital: 'Cheyenne',
    population: 500_000,
  } // 정상


}