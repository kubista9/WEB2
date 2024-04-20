import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import About from './routes/About';
import Pokedex from './routes/Pokedex';
import Home from './routes/Home';

function App() {
  return (
    <div className='main-page'>
      <div className='menu'>
      <Router>
          <nav className='navbar'>
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
      </Router>
    </div>
    
    </div>
  );
 }
 
 export default App;
  


