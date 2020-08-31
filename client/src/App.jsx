import React, { useEffect, useState } from 'react';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';
import { BrowserRouter, Switch, Route, useHistory, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import AboutYou from './pages/AboutYou';
import MyPodcast from './pages/MyPodcast';
import { createBrowserHistory } from 'history';
import Play from './pages/Play';
// import PodCast from './pages/PodCast';
const App = () => {
  let hist = createBrowserHistory()
  let history = useHistory();
  console.log(history)
  const [state, setState] = useState( {
    categories: [],
    slectedCategories: [],
    podCast:{},
    singlePodcast:{},
    completeData:[],
    showMoreArray:[]
  } );
  const fetchCategories = () => {
    fetch( `http://localhost:8080/api/getAllCategories` )
      .then( ( response ) => response.json() )
      .then( ( response ) => {
        console.log("Response====>",response)
        setState( {
          ...state,
          categories: response.categories
        } )
      } );
  };
  useEffect( () => {
    fetchCategories()
  }, [] )
  const selectCategory = ( obj ) => {
    setState( {
      ...state,
      slectedCategories: [...state.slectedCategories, obj]
    } )
  }
  const fetchPodcasts = () => {
    fetch( `http://localhost:8080/api/getAllPodCastOfSingleCategory`, {

      // Adding method type 
      method: "POST",
      // Adding body or contents to send 
      body: JSON.stringify( {
        ids: state.slectedCategories.map( rec => rec.id )
      } ),
      headers: { 
        "Content-type": "application/json; charset=UTF-8"
    } 
    } )

      // Converting to JSON 
      .then( response => response.json() )

      // Displaying results to console 
      .then( json =>{
        history.push("/mypodcast")
        setState({
          ...state,
          podCast:json.podcast,
          completeData:[...json.podcast.catOne,...json.podcast.catTwo,...json.podcast.catThree]
        })
   
      });
  }
  const onCardClick = (id)=>{
    console.log("IDDDDDDDDDDDDDDDD",id)
      let a =state.completeData.find(rec=>String(rec._id)===String(id))
      console.log(a)
      setState({
        ...state,
        showMoreArray:state.completeData.splice(0,3),
        singlePodcast:a
      })
      history.push("/play")
  }

  return (
    <AppContextProvider>
      <NavBar />
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/About-Yourself" render={( props ) => <AboutYou
            {...props}
            data={state.categories}
            onclick={selectCategory}
            slectedCategories={state.slectedCategories}
            onDone = {fetchPodcasts}
          />} />
          <Route exact  path="/mypodcast" render={( props ) => <MyPodcast
          {...props} 
          data={state.podCast} 
          onCardClick={onCardClick}
          // slectedCategories={slectedCategories}
          />} />
          <Route exact path="/play" render={(props) => <Play 
          {...props} 
          singlePodcast ={state.singlePodcast}
          showMoreArray = {state.showMoreArray}
          
          />} />

          <Route exact path="/Login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
    </AppContextProvider>
  );

};

export default App;
