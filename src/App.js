import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home'
import Details from './pages/details/Details'
import Search from './pages/search/Search'
import ReadBookProvider from './context/readBook'

function App() {
  return (
    <ReadBookProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/book/:bookId'>
            <Details/>
          </Route>
          <Route path='/search'>
            <Search/>
          </Route>
        </Switch>
      </BrowserRouter>
    </ReadBookProvider>
  );
}

export default App;
