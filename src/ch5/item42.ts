namespace Item42 {
  // 모르는 타입의 값에는 any 대신 unknown을 사용하기

  function parseYAML(yaml: string): any {
    // ...
    return '';
  }

  interface Book {
    name: string;
    author: string;
  }
  const book: Book = parseYAML(`
    name: Wuthering Heights
    author: Emily Brontë
  `);
  alert(book.title); // 오류 없음, 런타임에 "undefined" 경고
  book('read'); // 오류 없음, 런타임에 "TypeError: book은 함수가 아닙니다" 예외 발생

  function safeParseYAML(yaml: string): unknown {
    return parseYAML(yaml);
  }
  const book2 = safeParseYAML(`
    name: The Tenant of Wildfell Hall
    author: Anne Brontë
  `)
  alert(book2.title);
  // 개체가 'unknown' 형식입니다.
  book2("read");
  // 개체가 'unknown' 형식입니다.

  const book3 = safeParseYAML(`
    name: Villette
    author: Charlotte Brontë
  `) as Book;
  alert(book3.title)
  book3('read');

  interface Feature {
    id?: string | number;
    geometry: Geometry;
    properties: unknown;
  }

  function processValue(val: unknown) {
    if(val instanceof Date) {
      val // 타입이 Date
    }
  }

  function isBook(val: unknown): val is Book {
    return (
      typeof(val) === 'object' && val !== null &&
      'name' in val && 'author' in val
    );
  }
  function processValue(val: unknown) {
    if(isBook(val)) {
      val // 타입이 Book
    }
  }

  function safeParseYAML<T>(yaml: string): T {
    return parseYAML(yaml);
  }

  // 제네릭보다는 unknown을 반환하고 사용자가 직접 단언문을 사용하거나
  // 원하는대로 타입을 좁히도록 강제하는 것이 좋다.

  declare const foo: Foo;
  let barAny = foo as any as Bar;
  let barUnk = foo as unknown as Bar;
}