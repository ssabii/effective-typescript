namespace Item30 {
  // 문서에 타입 정보를 쓰지 않기

  /**
   * 전경색(foreground) 문자열을 반환합니다.
   * 0 개 또는 1 개의 매개변수를 받습니다.
   * 매개변수가 없을 때는 표준 전경색을 반환합니다.
   * 매개변수가 있을 때는 특정 페이지의 전경색을 반환합니다.
   */
  function getForegroundColor(page?: string) {
    return page === 'login' ? {r: 127, g: 127, b: 127} : {r: 0, g: 0, b: 0};
  }

  /** 애플리케이션 또는 특정 페이지의 전경색을 가져옵니다. */
  function getForegroundColor(page?: string): Color {
    // ...
  }

  // 값을 변경하지 않는다고 설명하는 주석은 좋지 않다.
  // 매개변수를 변경하지 않는다는 주석도 사용하지 않는 것이 좋다.
  // 변수명에 타입 정보를 넣지 않도록 한다. (그러나 단위가 있는 숫자들은 예외)
}