import React from 'react';
import Search from './Search';

export default function Navbar() {
  return (
    <nav className="p-2 flex justify-center md:justify-between border-b mb-1 border-gray-500 dark:border-gray-800">
      <a href="/">
        <img className="hidden dark:block max-h-10" src="/svg/long-dark.svg" alt="logo" />
        <img className="block dark:hidden max-h-10" src="/svg/long.svg" alt="logo" />
      </a>
      <Search className="hidden md:block" />
    </nav>
  );
}
