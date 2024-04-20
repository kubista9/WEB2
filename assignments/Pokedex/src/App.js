import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import About from './routes/About';
import Pokedex from './routes/Pokedex';
import Home from './routes/Home';

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/pokedex">Pokedex</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/pokedex" component={Pokedex} />
      </Switch>
    </div>
  </Router>
  );
 }
 
 export default App;
  


