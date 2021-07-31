import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="shadow-md p-4 md:mx-8 md:rounded-b-lg dark:bg-gray-800 dark:shadow-none">
      <div className="flex justify-between">
        <Router>
          <Link to="/">home</Link>
        </Router>
      </div>
    </nav>
  );
}
