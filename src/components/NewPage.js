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
    <div className="md:pl-4 md:grid md:grid-cols-3">
      {!isLoading && !err && (
        <main className="grid-span-2" itemScope itemType="https://schema.org/NewsArticle">
          <div className="mb-2">
            <h1 className="text-2xl md:text-3xl" itemProp="headline">{data.newObj.title}</h1>
            <span className="text-gray-700 text-base italic dark:text-gray-300" itemProp="abstract">{data.newObj.desc}</span>
          </div>
          <img src={data.newObj.metadata.thumbnailUrl} alt="Thumbnail" className="" />
          <article>
            <Markdown>{data.newObj.content}</Markdown>
          </article>
        </main>
      )}
      {!isLoading && err && (
        <h1>New not found!</h1>
      )}
    </div>
  );
}
