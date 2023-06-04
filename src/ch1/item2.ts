namespace Item2 {
  // noImplicitAny가 해제되어 있을 때는 유효한 코드
  function add(a, b) {
    return a + b;
  }
  add(10, null);

  // strictNullChecks가 해제되었을 때는 유효한 코드
  // const x: number = null;

  // 명시적으로 타입을 선언하기
  const x: number | null = null;

  const el = document.getElementById('status');
  el.textContent = 'Ready'
  // el is possibly null

  if(el) {
    el.textContent = "Ready"; // 정상, null은 제외됩니다.
  }

  el!.textContent = "Ready"; // 정상, el이 null이 아님을 단언합니다.
}