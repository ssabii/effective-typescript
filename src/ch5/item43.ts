export {};
declare global {
  interface Document {
    /** 몽키 패치의 속(genus) 또는 종(spacies) */
    monkey: string;
  }
}

namespace Item43 {
  // 몽키 패치보다는 안전한 타입을 사용하기

  (document as any).monkey = 'Tamarin'; // 정상, 오타
  (document as any).monkey = /Tamarin/; // 정상, 잘못된 타입

  document.monkey = 'Tamarin'; // 정상

  interface MonkeyDocument extends Document {
    /** 몽키 패치의 속(genus) 또는 종(species) */
    monkey: string;
  }
  (document as MonkeyDocument).monkey = 'Macaque';
}