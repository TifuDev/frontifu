import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import New from '../api/new';

export default function NewPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [err, setError] = useState();
  const { path } = useParams();

  useEffect(() => {
    new New(path).get()
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
      .catch((fetchErr) => {
        setError(fetchErr);
        setIsLoading(false);
      });
  }, [path]);

  return (
    <>
      {!isLoading && !err && (
        <>
          <h1>{data.newObj.title}</h1>
          <span>{data.newObj.desc}</span>
          <div>
            <Markdown>{data.newObj.content}</Markdown>
          </div>
        </>
      )}
      {!isLoading && err && (
        <h1>New not found!</h1>
      )}
    </>
  );
}
