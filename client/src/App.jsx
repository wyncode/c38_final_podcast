import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import './App.css';
import LibraryMain from '.pages/LibraryMain';
import Login from './pages/Login';
import AboutYou from './pages/AboutYou';
import Results from './pages/Results';
import LoginModal from './components/LoginModal';
import SignUpModal from './components/SignUpModal';
import PrivateRoute from './components/PrivateRoute';
import LibraryMain from './components/LibraryMain';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/About-Yourself" component={AboutYou} />
          <Route exact path="/Results" component={Results} />
          <PrivateRoute exact path="/library-main" component={LibraryMain} />
        </Switch>
        <LoginModal />
        <SignUpModal />
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
