import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import New from '../api/new';

function pad(num, size) {
  const string = `000000000${num}`;
  return string.substr(string.length - size);
}

export default function NewPage() {
  const monthsName = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];

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
    <div className="md:grid md:grid-cols-3">
      {!isLoading && !err && (
        <main className="space-y-1 p-1 col-span-2 pl-0 md:pl-8" itemScope itemType="https://schema.org/NewsArticle">
          <h1 className="text-2xl md:text-3xl" itemProp="headline">{data.title}</h1>
          <div className="my-2 flex items-center">
            <img className="max-h-12 md:max-h-16" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.searchpng.com%2Fwp-content%2Fuploads%2F2019%2F02%2FDeafult-Profile-Pitcher.png&f=1&nofb=1" alt="Profile" />
            <div>
              <h2>John Doe</h2>
              <p>{`${monthsName[data.date.getMonth()]} ${pad(data.date.getDay(), 2)}, ${data.date.getFullYear()}`}</p>
            </div>
          </div>
          <p className="text-gray-700 text-base italic dark:text-gray-300" itemProp="abstract">{data.desc}</p>
          <img src={data.metadata.thumbnailUrl} alt="Thumbnail" className="" />
          <article>
            <Markdown>{data.content}</Markdown>
          </article>
        </main>
      )}
      {!isLoading && err && (
        <h1>New not found!</h1>
      )}
    </div>
  );
}
