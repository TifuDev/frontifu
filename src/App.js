import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NewPage from './components/NewPage';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="text-lg dark:bg-gray-900 dark:text-white">
      <Navbar />
      <Router>
        <div className="p-2">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/new/:path">
            <NewPage />
          </Route>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

withRouter(Navbar);
