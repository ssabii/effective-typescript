namespace Item35 {
  // 데이터가 아닌, API와 명세를 보고 타입 만들기

  function calculateBoundingBox(f: Feature): BoundingBox | null {
    let box: BoundingBox | null = null;

    const helper = (coords: any[]) => {
      // ...
    }

    const { geometry } = f;

    if(geometry) {
      helper(geometry.coordinates);
    }

    return box;
  }

  function calculateBoundingBox(f: Feature): BoundingBox | null {
    let box: BoundingBox | null = null;

    const helper = (coords: any[]) => {
      // ...
    }

    const { geometry } = f;

    if(geometry) {
      if(geometry.type === 'GeometryCollection') {
        throw new Error('GeometryCollections are not supported');
      }
      helper(geometry.coordinates);
    }

    return box;
  }

  const geometryHelper = (g: Geometry) => {
    if(geometry.type === 'GeometryCollection') {
      geometryHelper.geometries.forEach(geometryHelper);
    } else {
      helper(geometry.coordinates); // 정상
    }
  }

  const { geometry } = f;
  if(geometry) {
    geometryHelper(geometry);
  }
}