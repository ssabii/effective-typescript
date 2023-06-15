namespace Item20 {
  // 다른 타입에는 다른 변수 사용하기

  let id = '12-34-56'; // string으로 사용
  id = 123456;
  // '123456' 형식은 'string' 형식에 할당할 수 없습니다.

  let id: string | number = '12-34-56';
  id = 123456; // 정상

  // 다른 타입을 사용할 경우 별도의 변수를 사용하는 것이 좋다.
  const id = '12-34-56';
  fetchProduct(id);

  const serial = 123456; // 정상
  fetchProductBySerialNumber(serial); // 정상
}