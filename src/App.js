import { BrowserRouter as Router, Route } from "react-router-dom";
import { NewPage } from './components/NewPage';

function App() {
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

export default App;
