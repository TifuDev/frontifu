import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewPage from './components/NewPage';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <Router>
        <Navbar />
        <div className="p-2">
          <Route exact path="/">
            <h1>Main Page</h1>
          </Route>
          <Route path="/new/:path">
            <NewPage />
          </Route>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
