namespace Item31 {
  // 타입 주변에 null 값 배치하기

  // 숫자들의 최소값 최대값을 계산하는 함수
  function extent(nums: number[]) {
    let min, max;
    for(const num of nums) {
      if(!min) {
        min = num;
        max = num;
      } else {
        min = Math.min(min, num);
        max = Math.max(max, num);
        // 'number | undefined' 형식의 인수는
        // 'number' 형식의 매개변수에 할당될 수 없습니다.
      }
    }
    return [min, max];
  }

  const [min, max] = extent([0, 1, 2]);
  const span = max - min;
            // ~~~   ~~~ 개체가 'undefined'인 것 같습니다.

  // min, max를 한 객체 안에 넣고 null이거나 null이 아니게 하면 된다.
  function extent(nums: number[]) {
    let result: [number, number] | null = null;
    for(const num of nums) {
      if(!result) {
        result = [num, num];
      } else {
        result = [Math.min(num, result[0]), Math.max(num, result[1])];
      }
    }
    return result;
  }

  const [min, max] = extent([0, 1, 2])!; // null 아님 단언(!)
  const span = max - min; // 정상

  const range = extent([0, 1, 2]);
  if(range) {
    const [min, max] = range;
    const span = max - min; // 정상
  }

  class UserPosts {
    user: UserInfo | null;
    posts: Post[] | null;

    constructor() {
      this.user = null;
      this.posts = null;
    }

    async init(userId: string) {
      return Promise.all([
        async () => this.user = await fetchUser(userId),
        async () => this.posts = await fetchPostsForUser(userId),
      ]);
    }

    getUserName() {
      // ...?
    }
  }
  // 두 번의 네트워크 요청이 로드되는 동안 user와 posts 속성은 null 상태
  // 속성값의 불확실성이 클래스의 모든 메서드에 나쁜 영향을 미친다. 결국 null 체크가 난무하고 버그를 양산하게 된다.


  // 필요한 데이터가 모두 준비된 후에 클래스를 만들도록 개선
  class UserPosts {
    user: UserInfo;
    posts: Post[];

    constructor(user: UserInfo, posts: Post[]) {
      this.user = user;
      this.posts = posts;
    }

    static async init(userId: string): Promise<UserPosts> {
      const [user, posts] = await Promise.all([
        fetchUser(userId),
        fetchPostsForUser(userId),
      ]);
      return new UserPosts(user, posts);
    }

    getUserName() {
      return this.user.name;
    }
  }

  // 이제 UserPosts 클래스는 완전히 null이 아니게 되었고, 메서드를 작성하기 쉬워졌다.
  // 데이터가 부분적으로 준비되었을 때 작업을 시작해야 한다면, null과 null이 아닌 경우의 상태를 다루어야 한다.
  

}