namespace Item25 {
  // 비동기 코드에는 콜백 대신 async 함수 사용하기

  const page1Promise = fetch(url1);
  page1Promise
    .then(response1 => {
      return fetch(url2);
    }).then(response2 => {

    }).then(response3 => {
      // ...
    }).catch(error => {

    })

    async function fetchPages() {
      try {
        const response1 = await fetch(url1);
        const response2 = await fetch(url2);
        const response3 = await fetch(url3);
      }catch(e) {
        // ...
      }
    }

    async function fetchPages() {
      const [response1, response2, response3] = await Promise.all([
        fetch(url1), fetch(url2), fetch(url3)
      ])
    }

    function fetchPagesCB() {
      let numDone = 0;
      const response: string[] = [];
      const done = () => {
        const [response1, response2, response3] = responses;
      }
      const urls = [url1, url2, url3];
      urls.forEach((url, i) => {
        responses[i] = url;
        numDone++;
        if(numDone === urls.length) done();
      })
    }

    function timeout(millis: number): Promise<never> {
      return new Promise((resolve, reject) => {
        setTimeout(() => reject('timeout'), millis);
      })
    }

    async function fetchWithTimeout(url: string, ms: number) {
      return Promise.race([fetch(url), timeout(ms)]);
    }

    async function getNumber() {
      return 42;
    }

    const getNumber = async () => 42;

    const getNumber = Promise.resolve(42);

    const _cache: {[url: string]: string} = {};
    async function fetchWithCache(url: string) {
      if(url in _cache){
        return _cache[url];
      }
      const response = await fetch(url);
      const text = await response.text();
      _cache[url] = text;
      return text;
    }

    let requestStatus: 'loading' | 'success' | 'error';
    async function getUser(userId: string) {
      requestStatus = 'loading';
      const profile = await fetchWithCache(`/user/${userId}`);
      requestStatus = 'success';
    }

    async function getJSON(url: string){
      const response = await fetch(url);
      const jsonPromise = response.json();
      return jsonPromise;
    }
}