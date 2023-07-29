namespace Item39 {
  // any를 구체적으로 변형해서 사용하기

  function getLengthBad(array: any) { // 이렇게 하지 맙시다!
    return array.length;
  }

  function getLength(array: any[]) {
    return array.length;
  }

  getLengthBad(/123/); // 오류 없음, undefined를 반환
  getLength(/123/);
  // 'RegExp' 형식의 인수는
  // 'any[]' 형식의 매개변수에 할당될 수 없습니다.

  function hasTwelveLetterKey(o: {[key: string]: any}) {
    for(const key in o) {
      if(key.length === 12) {
        return true;
      }
    }

    return false;
  }
  
}