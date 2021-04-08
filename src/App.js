import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MyProfile from './pages/MyProfile'
import TestLocator from './pages/TestLocator';
import VaccineFinder from './pages/VaccineFinder';
import './App.css';

function App () {
  return (
    <Router>
      <div className="App">
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/myprofile' component={MyProfile} />
          <Route exact path='/testlocator' component={TestLocator} />
          <Route exact path='/vaccinefinder' component={VaccineFinder} />
      </div>
    </Router>
  );
}

export default App;
