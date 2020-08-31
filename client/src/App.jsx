import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import AboutYou from './pages/AboutYou';
import LoginModal from './components/LoginModal';
import SignUpModal from './components/SignUpModal';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About-Yourself" component={AboutYou} />
        </Switch>
        <LoginModal />
        <SignUpModal />
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
