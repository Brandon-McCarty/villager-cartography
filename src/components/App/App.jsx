import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import WorldList from '../WorldList/WorldList';
import LocationsList from '../LocationsList/LocationsList';
import LocationDetails from '../LocationDetails/LocationDetails';
import EditLocationForm from '../EditLocationForm/EditLocationForm';
import Profile from '../Profile/Profile';
import BottomNav from '../BottomNav/BottomNav';

import {Toolbar} from '@material-ui/core'


import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>

        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/login" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/worlds" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/worlds" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/worlds" />
              :
              // Otherwise, show the Landing page
              <LoginPage />
            }
          </Route>

          <ProtectedRoute
            exact
            path="/worlds"
          >
            <WorldList />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/locations/:id"
          >
            <LocationsList />

          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/details/:id"
          >
            <LocationDetails />

          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/edit/:id"
          >
            <EditLocationForm />

          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/profile"
          >
            <Profile />

          </ProtectedRoute>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>


        </Switch>

        {/* <Footer /> */}
        <Toolbar />
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
