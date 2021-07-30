import { BrowserRouter as Router, Route } from 'react-router-dom';

const { NewPage } = require('./components/NewPage');

export default function App() {
  return (
    <Router>
      <Route exact path="/">
        <h1>Main Page</h1>
      </Route>
      <Route path="/new/:path">
        <NewPage />
      </Route>
    </Router>
  );
}
