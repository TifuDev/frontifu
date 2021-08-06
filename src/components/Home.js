import { useState, useEffect } from 'react';
import New from '../api/new';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [err, setError] = useState();

  useEffect(() => {
    New.catalog()
      .then((news) => {
        setData(news);
        setIsLoading(false);
      })
      .catch((fetchErr) => {
        setError(fetchErr);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="md:grid md:grid-cols-6 md:gap-4">
      {!isLoading && !err
        && data.map((newObj) => (
          <div className="p-2 md:p-0" key={newObj.path}>
            <img src={newObj.metadata.thumbnailUrl} alt="Thumbnail" width="auto" />
            <h1><a href={`/new/${newObj.path}`}>{newObj.title}</a></h1>
            <p>{newObj.desc}</p>
          </div>
        ))}
      {!isLoading && err && (
        <h1>An error occured!</h1>
      )}
    </div>
  );
}
