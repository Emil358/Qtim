import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Blog from './containers/blog'
import Post from './containers/post'
import NotFound from './containers/notFound'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Blog} />
        <Route exact path='/post/:id' component={Post} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
