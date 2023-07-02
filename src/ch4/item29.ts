namespace Item29 {
  // 사용할 때는 너그럽게, 생성할 때는 엄격하게

  declare function setCamera(camera: Camera): void;
  declare function viewportForBounds(bounds: LngLatBounds): CameraOptions;

  interface CameraOptions {
    center?: LngLat;
    zoom?: number;
    bearing?: number;
    pitch?: number;
  }
  type LngLat =
    { lng: number; lat: number; } |
    { lon: number; lat: number; } |
    [number, number];

  type LngLatBounds =
    { northeast: LngLat, southwest: LngLat } |
    [LngLat, LngLat] |
    [number, number, number ,number]

  function focusOnFeature(f: Feature) {
    const bounds = calculateBoundingBox(f);
    const camera = viewportForBounds(bounds);
    setCamera(camera);
    const {center: {lat, lng}, zoom} = camera;
    // ... 형식에 'lat' 속성이 없습니다.
    // ... 형식에 'lng' 속성이 없습니다.
    zoom; // 타입이 number | undefined
    window.location.search = `?v=@${lat},${lng}z${zoom}`;
  }
  // 매개변수 타입의 범위가 넓으면 사용하기 편리하지만, 반환 타입의 범위가 넓으면 불편하다.

  interface LngLat { lng: number; lat: number; }
  type LngLatLike = LngLat | { lon: number; lat: number; } | [number, number];

  interface Camera {
    center: LngLat;
    zoom: number;
    bearing: number;
    pitch: number;
  }
  interface CameraOptions extends Omit<Partial<Camera>, 'center'> {
    center?: LngLatLike;
  }
  type LngLatBounds =
    {northeast: LngLatLike, southwest: LngLatLike} |
    [LngLatLike, LngLatLike] |
    [number, number, number, number];

  declare function setCamera(camera: CameraOptions): void;
  declare function viewportForBounds(bounds: LngLatBounds): Camera;
  // Camera가 너무 엄격하므로 조건을 완화하여 느슨환 CameraOptions 타입으로 만듦

  // 너무 복잡해 보인다면 약간의 반복 작업을 해야겠지만 명시적으로 타입을 추철해서 다음처럼 작성할 수도 있다.
  interface CameraOptions {
    center?: LngLatLike;
    zoom?: number;
    bearing?: number;
    pitch?: number;
  }

  function focusOnFeature(f: Feature) {
    const bounds = calculateBoundingBox(f);
    const camera = viewportForBounds(bounds);
    setCamera(camera);
    const {center: {lat, lng}, zoom} = camera; // 정상
    zoom; // 타입이 number
    window.location.search = `?v=@${lat},${lng}z${zoom}`;
  }
}
