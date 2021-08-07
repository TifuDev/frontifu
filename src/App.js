import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { withRouter } from 'react-router';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NewPage from './components/NewPage';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <div className="text-lg dark:bg-gray-900 dark:text-white">
      <Navbar />
      <div className="h-screen">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Redirect from="/home" to="/" />
            <Route path="/new/:path" component={NewPage} />
            <Route path="*" status={404} component={NotFound} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

withRouter(Navbar);
