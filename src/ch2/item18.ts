namespace Item18 {
  // 매핑된 타입을 사용하여 값을 동기화하기

  interface ScatterProps {
    // The data
    xs: number[];
    ys: number[];

    // Display
    xRange: [number, number];
    yRange: [number, number];
    color: string;

    // Events
    onClick: (x: number, y: number, index: number) => void;
  }

  // 렌더링 최적화 방법1
  function shouldUpdate(
    oldProps: ScatterProps,
    newProps: ScatterProps
  ) {
    let k: keyof ScatterProps;
    for(k in oldProps) {
      if(oldProps[k] !== newProps[k]) {
        if(k !== 'onClick') return true;
      }
    }
    return false;
  }

  // 렌더링 최적화 방법2
  function shouldUpdate(
    oldProps: ScatterProps,
    newProps: ScatterProps
  ) {
    return (
      oldProps.xs !== newProps.xs ||
      oldProps.ys !== newProps.ys ||
      oldProps.xRange !== newProps.xRange ||
      oldProps.yRange !== newProps.yRange ||
      oldProps.color !== newProps.color
      // (no check for onClick)
    )
  }

  const REQUIRES_UPDATE: {[k in keyof ScatterProps]: boolean} = {
    xs: true,
    ys: true,
    xRange: true,
    yRange: true,
    color: true,
    onClick: false,
  };

  function shouldUpdate(
    oldProps: ScatterProps,
    newProps: ScatterProps
  ) {
    let k: keyof ScatterProps;
    for(k in oldProps) {
      if(oldProps[k] !== newProps[k] && REQUIRES_UPDATE[k]) {
        return true;
      }
    }
    return false;
  }
}