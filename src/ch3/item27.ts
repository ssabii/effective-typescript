namespace Item27 {
  // 함수형 기법과 라이브러리로 타입 흐름 유지하기

  const csvData = '...';
  const rawRows = csvData.split('\n');
  const headers = rawRows[0].split(',');

  const rows = rawRows.slice(1).map(rowStr => {
    const row = {};
    rowStr.split(',').forEach((val, j) => {
      row[headers[j]] = val;
    })
    return row;
  });

  const rows = rawRows.slice(1)
    .map(rowStr => rowStr
      .split(',')
      .reduce((row, val, i) => (row[headers[i]] = val, row), {}));

  import _ from 'lodash';
  const rows = rawRows.slice(1)
    .map(rowStr => _.zipObject(headers, rowStr.split(',')));

  interface BasketballPlayer {
    name: string;
    team: string;
    salary: number
  }

  declare const rosters: {[team: string]: BasketballPlayer[]};

  let allPlayers = [];
  // 'allPlayers' 변수는 형식을 확인할 수 없는 경우
  // 일부 위치에서 암시적으로 'any[]' 형식입니다.
  for(const players of Object.values(rosters)) {
    allPlayers = allPlayers.concat(players);
  }

  let allPlayers: BasketballPlayer[] = [];
  for(const players of Object.values(rosters)) {
    allPlayers = allPlayers.concat(players);
  }

  const allPlayers = Object.values(rosters).flat();
  // 정상, 타입이 BasketballPlayer[]

  // 각 팀별로 연봉 순으로 정렬해서 최고 연봉 선수의 명단을 만든다고 가정
  const teamToPlayers: {[team: string]: BasketballPlayer[]} = {};
   for(const player of allPlayers){
    const {team} = player;
    teamToPlayers[team] = teamToPlayers[team] || [];
    teamToPlayers[team].push(player);
   }

   for(const players of Object.values(teamToPlayers)) {
    players.sort((a,b) => b.salary - a.salary);
   }

   const bestPaid = Object.values(teamToPlayers).map(players => players[0]);
   bestPaid.sort((playerA, playerB) => playerB.salary - playerA.salary);

   // 로대시를 사용해서 동일한 작업을 하는 코드
   const bestPaid = (allPlayers)
    .groupBy(player => player.team)
    .mapValues(players => _.maxBy(players, p => p.salary)!)
    .values()
    .sortBy(p => -p.salary)
    .value() // 타입이 BasketballPlayer[]
}