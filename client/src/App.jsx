import React, { useEffect, useState } from 'react';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';
import {
  BrowserRouter,
  Switch,
  Route,
  useHistory,
  Redirect
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import './App.css';
import LibraryMain from './pages/LibraryMain';
import NavBar from './components/NavBar';
import AboutYou from './pages/AboutYou';
import MyPodcast from './pages/MyPodcast';
import { createBrowserHistory } from 'history';
import Play from './pages/Play';
import Results from './pages/Results';
import LoginModal from './components/LoginModal';
import SignUpModal from './components/SignUpModal';
import PrivateRoute from './components/PrivateRoute';
import Recommendations from './pages/Recommendations';
import Footer from './components/Footer';

const App = () => {
  let hist = createBrowserHistory();
  let history = useHistory();
  console.log(history);
  const [state, setState] = useState({
    categories: [],
    slectedCategories: [],
    podCast: {},
    singlePodcast: {},
    completeData: [],
    showMoreArray: []
  });
  const fetchCategories = () => {
    fetch(`/api/getAllCategories`)
      .then((response) => response.json())
      .then((response) => {
        console.log('Response====>', response);
        setState({
          ...state,
          categories: response.categories
        });
      });
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  const selectCategory = (obj) => {
    setState({
      ...state,
      slectedCategories: [...state.slectedCategories, obj]
    });
  };
  const fetchPodcasts = () => {
    fetch(/api/getAllPodCastOfSingleCategory`, {
      // Adding method type
      method: 'POST',
      // Adding body or contents to send
      body: JSON.stringify({
        ids: state.slectedCategories.map((rec) => rec.id)
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      // Converting to JSON
      .then((response) => response.json())

      // Displaying results to console
      .then((json) => {
        history.push('/mypodcast');
        setState({
          ...state,
          podCast: json.podcast,
          completeData: [
            ...json.podcast.catOne,
            ...json.podcast.catTwo,
            ...json.podcast.catThree
          ]
        });
      });
  };
  const onCardClick = (id) => {
    console.log('IDDDDDDDDDDDDDDDD', id);
    let a = state.completeData.find((rec) => String(rec._id) === String(id));
    console.log(a);
    setState({
      ...state,
      showMoreArray: state.completeData.splice(0, 3),
      singlePodcast: a
    });
    console.log(state.singlePodcast);
  };

  return (
    <AppContextProvider>
      <NavBar />

      <Switch>
        <Route
          exact
          path="/About-Yourself"
          render={(props) => (
            <AboutYou
              {...props}
              data={state.categories}
              onclick={selectCategory}
              slectedCategories={state.slectedCategories}
              onDone={fetchPodcasts}
            />
          )}
        />
        <Route
          exact
          path="/mypodcast"
          render={(props) => (
            <MyPodcast
              {...props}
              data={state.podCast}
              podcastSelection={state.singlePodcast}
              onCardClick={onCardClick}
              // slectedCategories={slectedCategories}
            />
          )}
        />
        <Route
          exact
          path="/play"
          render={(props) => (
            <Play
              {...props}
              singlePodcast={state.singlePodcast}
              showMoreArray={state.showMoreArray}
            />
          )}
        />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/About-Yourself" component={AboutYou} />
        <Route exact path="/Results" component={Results} />
        <PrivateRoute exact path="/library-main" component={LibraryMain} />
        <Route exact path="/recommendations" component={Recommendations} />
      </Switch>
      <LoginModal />
      <SignUpModal />
      <Footer />
    </AppContextProvider>
  );
};

export default App;
