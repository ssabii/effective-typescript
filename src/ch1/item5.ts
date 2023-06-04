namespace Item5 {
  let age: number;
  age = '12'; // 오류
  age = '12' as any; // 정상

  function calculateAge(birthDate: Date) {
    return Date.now() - birthDate.getTime();
  }

  let birthDate: any = '1990-01-19';
  calculateAge(birthDate); // 정상
}