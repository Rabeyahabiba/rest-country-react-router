import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import Home from './components/Home/Home';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  
  return (
    <Router >
     <Switch>
        <Route path ="/home">
             <Home></Home>
        </Route>
        <Route path ="/country/:name">
          <CountryDetails></CountryDetails>
        </Route>
        <Route exact path ="/">
             <Home/>
        </Route>
        <Route path ="*">
          <NoMatch></NoMatch>
             
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
