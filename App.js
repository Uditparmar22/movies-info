import logo from './logo.svg';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Favourite from './components/favourite';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Movies} render={( props )=>{
          <>
            <Banner {...props} />
            <Movies {...props} />
          </>
        }}/>
        <Route path='/favourites' component={Favourite} />
      </Switch>

      {/* <Banner /> */}
      {/* <Movies />  */}
      {/* <Favourite/> */}
    </Router>
  );
}

export default App;
