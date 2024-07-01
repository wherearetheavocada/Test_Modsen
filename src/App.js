import {
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage'
import FavoritesPage from './pages/FavoritesPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'

function App() {

  return  (
    <div className="App">
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/favorites" component={FavoritesPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/profile" component={ProfilePage} />
      </Switch>
    </div>
  );
}

export default App;


