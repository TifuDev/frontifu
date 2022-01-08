import { useState, useEffect } from 'react';
import { New, INew } from '../api/new';
import NewLabel from './NewLabel';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<INew[]>();
  const [err, setError] = useState<Error | null>();

  useEffect(() => {
    New.catalog()
      .then((news) => {
        setData(news);
        setIsLoading(false);
      })
      .catch((fetchErr: Error) => {
        setError(fetchErr);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container">
      {!isLoading &&
        !err &&
        data!.map((newObj: INew) => (
          <NewLabel
            path={newObj.path}
            title={newObj.title}
            desc={newObj.desc}
            thumbnailUrl={newObj.metadata.thumbnailUrl}
            key={newObj.path}
            className="p-4 md:p-2 block md:inline-block w-auto"
          />
        ))}
      {!isLoading && err && <h1>An error occured!</h1>}
    </div>
  );
}
