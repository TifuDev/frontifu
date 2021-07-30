import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';

const { New } = require('../api/new');

function NewPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const { path } = useParams();

  useEffect(() => {
    new New(path).get()
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, [path]);

  return (
    <>
      {!isLoading && (
        <>
          <h1>{data.data.title}</h1>
          <span>{data.data.desc}</span>
          <div>
            <Markdown>{data.content}</Markdown>
          </div>
        </>
      )}
    </>
  );
}

export default { NewPage };
