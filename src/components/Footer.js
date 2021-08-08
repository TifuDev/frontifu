import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="border-t border-gray-500 dark:border-gray-800 w-full p-4 flex justify-between">
      <Router>
        <div className="space-x-4">
          <Link to="/">Link</Link>
          <Link to="/">Link</Link>
        </div>
        <a href="/">
          <img
            className="max-h-10"
            src={window.matchMedia('(prefers-color-scheme: dark)').matches ? '/svg/logo-dark.svg' : '/svg/logo.svg'}
            alt="logo"
          />
        </a>
        <div className="space-x-4">
          <Link to="/">Link</Link>
          <Link to="/">Link</Link>
        </div>
      </Router>
    </div>
  );
}
