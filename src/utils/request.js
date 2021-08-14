function get(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`An error occured! Response status ${res.status}`);
        return res.json();
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

class Request {
  constructor(DefaultURL) {
    this.DefaultURL = DefaultURL;
  }

  get(path) {
    return get(`${this.DefaultURL}/${path}`);
  }
}

export { Request, get };
