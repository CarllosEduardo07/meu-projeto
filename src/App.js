// import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
 
function App() {

  
  return (
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/empresa">Empresa</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/empresa'>
            <Empresa/>
          </Route>
          <Route exact path='/Contato'>
            <Contato/>
          </Route>
      </Switch>
    </Router>
  )
}
export default App;
