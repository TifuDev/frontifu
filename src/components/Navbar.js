import React from 'react';
import New from '../api/new';

export default function Navbar() {
  const [catalog, setCatalog] = React.useState([]);
  const searchRes = React.useRef(null);

  function search(ev) {
    New.catalog(ev.target.value)
      .then((res) => setCatalog(res));
  }

  return (
    <nav className="p-2 relative border-b border-gray-500 mb-1 dark:border-gray-800">
      <div className="flex justify-between">
        <a href="/">
          <img className="hidden dark:block max-h-10" src="/svg/long-dark.svg" alt="logo" />
          <img className="block dark:hidden max-h-10" src="/svg/long.svg" alt="logo" />
        </a>
        <div className="flex items-center px-1 rounded-md space-x-1 border border-gray-500 dark:bg-gray-800 dark:border-gray-800 md:px-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            id="search_bar"
            onInput={search}
            onFocus={() => searchRes.current.classList.remove('hidden')}
            className="placeholder-black border-0 dark:bg-gray-800 dark:placeholder-white focus:outline-none"
            placeholder="Pesquisa..."
          />
          <ul className="list-none hidden" ref={searchRes}>
            {catalog.map((newObj) => (
              <li key={newObj.path}>
                <a href={`/new/${newObj.path}`}>{newObj.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
