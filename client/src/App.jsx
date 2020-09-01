import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import './App.css';
import LibraryMain from '.pages/LibraryMain';
import Login from './pages/Login';
import AboutYou from './pages/AboutYou';
import LoginModal from './components/LoginModal';
import SignUpModal from './components/SignUpModal';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/About-Yourself" component={AboutYou} />
          <Route exact path="/LibraryMain" component={LibraryMain} />
        </Switch>
        <LoginModal />
        <SignUpModal />
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
