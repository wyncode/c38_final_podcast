import React from 'react';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import AboutYou from './pages/AboutYou';
import { BASE_URL } from './config/consant'
import { Component } from 'react';


class App extends Component {
 state = {
   categories:[],
   slectedCategories:[],
 } 
 fetchCategories = () => {
    fetch( `${BASE_URL}/getAllCategories` )
      .then( ( response ) => response.json() )
      .then( ( response ) => {
        console.log("response=====>",response.categories)
        this.setState({
          categories: response.categories
        })
      });
  };
  componentDidMount(){
    this.fetchCategories()
  }
  selectCategory = (obj)=>{
    const {slectedCategories} = this.state
      this.setState({
        slectedCategories:[...slectedCategories,obj]
      })
  }
  fetchPodcasts

  render(){
    const {categories,slectedCategories} = this.state

  return (
    <AppContextProvider>
      <NavBar />
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/About-Yourself" render={( props ) => <AboutYou 
          {...props} 
          data={categories} 
          onclick={this.selectCategory}
          slectedCategories={slectedCategories}
           /> }
           />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
  }
}

export default App