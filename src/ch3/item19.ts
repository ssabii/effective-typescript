namespace Item19 {
  let x: number = 12;
  let x = 12;

  const person: {
    name: string;
    born: {
      where: string;
      when: string;
    };
    died: {
      where: string;
      when: string;
    }
  } = {
    name: "Sojourner Truth",
    born: {
      where: "Swartekill, NY",
      when: "c.1797",
    },
    died: {
      where: "Battle Creek, MI",
      when: "Nov. 26, 1883",
    },
  }

  const person = {
    name: 'Sojourner Truth',
    born: {
      where: 'Swartekill, NY',
      when: 'c.1797',
    },
    died: {
      where: 'Battle Creek, MI',
      when: 'Nov. 26, 1883',
    },
  }

  function square(nums: number[]){
    return nums.map(x => x * x);
  }
  const squares = square([1, 2, 3, 4]); // 타입은 number[]

  const axis1: string = 'x'; // 타입은 string
  const axis2 = 'y'; // 타입은 'y'

  interface Product {
    id: number;
    name: string;
    price: number;
  }

  function logProduct(product: Product) {
    const id: number = product.id;
    const name = product.name;
    const price = product.price;
    console.log(id, name, price);
  }

  interface Product {
    id: string;
    name: string;
    price: number;
  }

  function logProduct(product: Product) {
    const id: number = product.id;
    // 'string' 형식은 'number' 형식에 할당할 수 없습니다.
    const name = product.name;
    const price = product.price;
    console.log(id, name, price);
  }

  function logProduct(product: Product) {
    const { id, name, price } = product;
    console.log(id, name, price);
  }

  function logProduct(product: Product) {
    const {id, name, price}: {id: string, name: string, price: number} = product;
    console.log(id, name, price);
  }

  function parseNumber(str: string, base=10) {
    // ...
  }

  // 이렇게 하지 맙시다.
  app.get('/health', (request: express.Request, response: express.Response) => {
    response.send('OK');
  });

  // 이렇게 합시다.
  app.get('/health', (request, response) => {
    response.send('OK');
  });

  const elmo: Product = {
    name: 'Tickle Me Elmo',
    id: '048533 10075',
    price: 28.99,
  }

  const furby = {
    name: 'Furby',
    id: 630509430963,
    price: 35,
  }

  logProduct(furby);
  // 형식의 인수는 'Product' 형식의 매개변수에 할당할 수 없습니다.
  // 'id' 속성의 형식이 호환되지 않습니다.
  // 'number' 형식은 'string' 형식에 할당할 수 없습니다.

  const furby: Product = {
    name: 'Furby',
    id: 630509430963,
    // 'number' 형식은 'string' 형식에 할당할 수 없습니다.
    price: 35,
  }
  logProduct(furby);

  function getQuote(ticker: string) {
    return fetch(`https://quotes.example.com/?q=${ticker}`)
      .then(response => response.json())
  }

  const cache: {[ticker: string]: number} = {};
  function getQuote(ticker: string) {
    if(ticker in cache) {
      return cache[ticker];
    }

    return fetch(`https://quotes.example.com/?q=${ticker}`)
      .then(response => response.json())
      .then(quote => {
        cache[ticker] = quote;
        return quote;
      });
  }

  getQuote('MSFT').then(considerBuying);
  // 'number | Promise<any>` 형식에 'then' 속성이 없습니다.
  //  'number' 형식에 'then' 속성이 없습니다.

  const cache: {[ticker: string]: number} = {};
  function getQuote(ticker: string): Promise<number> {
    if(ticker in cache) {
      return Promise.resolve(cache[ticker]);
    }

    return fetch(`https://quotes.example.com/?q=${ticker}`)
      .then(response => response.json())
      .then(quote => {
        cache[ticker] = quote;
        return quote;
      });
  }

  interface Vector2D { x: number, y: number };
  function add(a: Vector2D, b: Vector2D) {
    return {x: a.x + b.x, y: a.y + b.y};
  }
}