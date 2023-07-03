namespace Item33 {
  // string 타입보다 더 구체적인 타입 사용하기

  interface Album {
    artist: string;
    title: string;
    releaseDate: string;  // YYYY-MM-DD
    recordingType: string; // 예를 들어, "live" 또는 "studio"
  }

  const kindOfBlue: Album = {
    artist: 'Miles Davis',
    title: 'Kind of Blue',
    releaseDate: 'August 17th 1959', // 날짜 형식이 다릅니다.
    recordingType: 'Studio', // 오타 (대문자 S)
  } // 정상

  function recordRelease (title: string, date: string) { /* */ }
  recordRelease(kindOfBlue.releaseDate, kindOfBlue.title); // 오류여야 하지만 정상

  type RecordingType = 'studio' | 'live';

  interface Album {
    artist: string;
    title: string;
    releaseDate: Date;
    recordingType: RecordingType;
  }

  const kindOfBlue: Album = {
    artist: 'Miles Davis',
    title: 'Kind of Blue',
    releaseDate: new Date('1959-08-17'),
    recordingType: 'Studio',
    // '"Studio"' 형식은 'RecordingType' 형식에 할당할 수 없습니다.
  }

  function getAlbumsOfType(recordingType: string): Album[] {
    // ...
  }

  /** 이 녹음은 어떤 환경에서 이루어졌는지? */
  type RecordingType = 'live' | 'studio';

  function pluck(records: any[], key: string): any[] {
    return records.map(r => r[key]);
  }

  function pluck<T>(records: T[], key: string): any[] {
    return records.map(r => r[key]);
    // '{}' 형식에 인덱스 시그니처가 없으므로
    // 요소에 암시적으로 'any' 형식이 있습니다.
  }

  type K = keyof Album;
  // 타입이 "artist" | "title" | "releaseDate" | "recordingType"로 추론됩니다.

  function pluck<T>(records: T[], key: keyof T) {
    return records.map(r => r[key]);
  }

  function pluck<T>(records: T[], key: keyof T): T[keyof T][]

  function pluck<T, K extends keyof T>(records: T[], key: K): T[K][] {
    return records.map(r => r[key]);
  }

  const albums: Album[] = [
    {
      artist: 'Miles Davis',
      title: 'Kind of Blue',
      releaseDate: new Date('1959-08-17'),
      recordingType: 'studio',
    }
  ]

  pluck(albums, 'releaseDate'); // 타입이 Date[]
  pluck(albums, 'artist'); // 타입이 string[]
  pluck(albums, 'recordingType'); // 타입이 RecordingType[]
  pluck(albums, 'recordingDate');
  // '"recordingDate"' 형식의 인수는
  // 형식의 매개변수에 할당될 수 없습니다.

  // 문자열을 남발하여 선언된 코드를 피한다.
  // 변수의 범위를 보다 정확하게 표현하고 싶다면 string 타입보다는 문자열 리터럴 유니온을 사용한다.
  // 객체의 속성 이름을 함수 매개변수로 받을 때는 string 보다는 keyof T를 사용한다.
}