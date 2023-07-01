namespace Item28 {
  // 유효한 상태만 표현하는 타입을 지향하기

  interface State {
    pageText: string;
    isLoading: boolean;
    error?: string;
  }

  function renderPage(state: State) {
    if(state.error) {
      return `Error! unable to load ${currentPage}: ${state.error}`;
    } else if(state.isLoading){
      return `Loading ${currentPage}...`;
    }
    return `<h1>${currentPage}</h1>\n${state.pageText}`;
  }
  // 분기 조건이 명확히 분리되어 있지 않다.

  async function changePage(state: State, newPage: string) {
    state.isLoading = true;
    try {
      const response = await fetch(getUrlForPage(newPage));
      if(!response.ok) {
        throw new Error(`Unable to fetch ${newPage}: ${response.statusText}`);
      }
      const text = await response.text();
      state.isLoading = false;
      state.pageText = text;
    } catch(e) {
      state.error = '' + e;
    }
  }
  // 오류가 발생했을 떄 state.isLoading을 false로 설정하는 로직이 빠져 있음.
  // state.error를 초기화하지 않았기 때문에 페이지 전환 중에 로딩 메시지 대신 과거의 오류 메시지를 보여 주게됨
  // 페이지 로딩 중에 사용자가 페이지를 바꿔 버리면 어떤 일이 벌어질지 예상하기 어려움.

  interface RequestPending {
    state: 'pending';
  }
  interface RequestError {
    state: 'error';
    error: string;
  }
  interface RequestSuccess {
    state: 'ok';
    pageText: string;
  }
  type RequestState = RequestPending | RequestError | RequestSuccess;

  interface State {
    currentPage: string;
    requests: {[page: string]: RequestState};
  }

  function renderPage(state: State) {
    const {currentPage} = state;
    const requestState = state.requests[currentPage];
    switch(requestState.state) {
      case 'pending':
        return `Loading ${currentPage}`;
      case 'error':
        return `Error! unable to load ${currentPage}: ${requestState.error}`;
      case 'ok':
        return `<h1>${currentPage}</h1>\n${requestState.pageText}`;
    }
  }

  async function changePage(state: State, newPage: string) {
    state.requests[newPage] = {state: 'pending'};
    state.currentPage = newPage;
    try {
      const response = await fetch(getUrlForPage(newPage));
      if(!response.ok) {
        throw new Error(`Unable to fetch ${newPage}: ${response.statusText}`);
      }
      const pageText = await response.text();
      state.requests[newPage] = {state: 'ok', pageText};
    } catch(e) {
      state.requests[newPage] = {state: 'error', error: '' + e};
    }
  }

  interface CockpitControls {
    /** 왼쪽 사이드 스틱의 각도, 0 = 중립, + = 앞으로 */
    leftSideStick: number;
    /** 오른쪽 사이드 스틱의 각도, 0 = 중립, + = 앞으로 */
    rightSideStick: number;
  }

  function getStickSetting(controls: CockpitControls) {
    return controls.leftSideStick;
  }

  function getStickSetting(controls: CockpitControls) {
    const {leftSideStick, rightSideStick} = controls;
    if(leftSideStick === 0) {
      return rightSideStick;
    }
    return leftSideStick;
  }

  function getStickSetting(controls: CockpitControls) {
    const {leftSideStick, rightSideStick} = controls;
    if(leftSideStick === 0) {
      return rightSideStick;
    } else if(rightSideStick === 0) {
      return leftSideStick;
    }

    // ???
  }

  function getStickSetting(controls: CockpitControls) {
    const {leftSideStick, rightSideStick} = controls;
    if(leftSideStick === 0) {
      return rightSideStick;
    } else if(rightSideStick === 0) {
      return leftSideStick;
    }
    if(Math.abs(leftSideStick - rightSideStick) < 5) {
      return (leftSideStick + rightSideStick) / 2;
    }

    // ???
  }

  interface CockpitControls {
    /** 스틱의 각도, 0 = 중립, + = 앞으로 */
    stickAngle: number;
  }
}