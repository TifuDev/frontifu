const { REACT_APP_API_URL } = process.env;

export default function requestFromAPI(path: string): Promise<any> {
  return new Promise((resolve, reject) => {
    fetch(`${REACT_APP_API_URL!}/${path}`)
      .then((res) => resolve(res.json()))
      .catch((err) => reject(err));
  });
}
