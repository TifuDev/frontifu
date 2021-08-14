import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import Person from '../api/person';

export default function PersonPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [err, setError] = useState();
  const { username } = useParams();

  useEffect(() => {
    new Person(username).get()
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
      .catch((fetchErr) => {
        setError(fetchErr);
        setIsLoading(false);
      });
  }, [username]);

  return (
    <>
      {
        !isLoading && !err && (
        <div className="container mx-auto space-y-1 p-1 md:p-0">
          <div className="flex items-center">
            <img className="max-h-24 rounded-full" src={data.details.profilePhotoUrl} alt="Profile" />
            <div className="p-0 md:p-2 space-y-0 md:space-y-0.5">
              <h1 className="font-bold text-lg">{`${data.firstName} ${data.familyName}`}</h1>
              <h2 className="font-light text-base">{`@${username}`}</h2>
              <div className="flex flex-col space-x-0 space-y-1 md:space-x-1 text-sm md:space-y-0 md:flex-row">
                <div className="flex rounded border border-gray-800 p-0.5 items-center dark:border-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  <span>português, inglês</span>
                </div>
                <div className="flex rounded border border-gray-800 p-0.5 items-center dark:border-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Brasil</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-base font-medium md:text-lg">{data.details.bio}</p>
        </div>
        )
      }
      {!isLoading && err && (
        <h1>An error occured!</h1>
      )}
    </>
  );
}
