import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import ExploreServices from './Pages/ExploreServices/ExploreServices';
import { Route, Switch } from 'react-router';
import Register from './Pages/Login/Register/Register';
import AboutUs from './Pages/AboutUs/AboutUs';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Buying from './Pages/Buying/Buying';
import Dashboard from './Pages/Dashboard/Dashboard';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/exploreservice">
              <ExploreServices></ExploreServices>
            </Route>
            <PrivateRoute path="/buying/:serviceId">
              <Buying></Buying>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
