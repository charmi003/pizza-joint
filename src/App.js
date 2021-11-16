import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

import React from 'react'
import {BrowserRouter as Router, Route, Switch,useLocation} from 'react-router-dom'
import Base from './components/Base';
import Toppings from './components/Toppings';
import { useReducer } from 'react';
import Order from './components/Order';
import PageNotFound from './components/PageNotFound';

import { AnimatePresence } from 'framer-motion';

export const StateContext=React.createContext();


function App() {

  const location=useLocation();

  const initialState={
    base:'',
    toppings:[]
  }

  const reducer=(currState,action)=>{
    switch(action.type)
    {
      case 'reset':
        return{
          base:'',
          toppings:[]
        }
      case 'addBase':
        return{
          ...currState,
          base:action.payload
        }
      case 'addTopping':
        let idx=currState.toppings.indexOf(action.payload);
        
        if(idx!=-1)
        {   
          let newToppings=[...currState.toppings];
          newToppings.splice(idx,1);
          return{
            base:currState.base,
            toppings:newToppings
          }
        }
        else
        {
          return{
            ...currState,
            toppings:currState.toppings.concat(action.payload)
          }
        }
        
      default:
        return currState
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
  
      <StateContext.Provider value={{state:state, dispatch:dispatch}}>
        <div className="App">
          <Header />

          <div className="content">

            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path='/'>
                  <Home/>
                </Route>
                <Route exact path="/base">
                  <Base />
                </Route>
                <Route exact path="/toppings">
                  <Toppings />
                </Route>
                <Route exact path="/order">
                  <Order />
                </Route>
                <Route path='*'>
                  <PageNotFound />
                </Route>
               
              </Switch>
            </AnimatePresence>

          </div>

        </div>
      </StateContext.Provider>
    
  );
}

export default App;


//AnimatePresence actually doesn't when our routes change..therefore useLocation hook
//when the route loc changes, it will be able to fire the exit animation


/*
AnimatePresence is the key component for easily animating the route transitions. It's job is to determine whether a component is mounting or unmounting and play an animation on our <motion /> components. The routes we want to animate are within the <Switch/> component will mount and unmount but we also need to tell AnimatePresence if we want to animate at all, this is where the key prop comes in. We don't want to trigger an animation when we navigate to the same route, using the location.pathname as the key results in an animation which only triggers when we change to a new route. 
*/


//steps 
//1). wrap switch within AnimatePresence comp
//2). add the location and key props to the switch
//3).  remove the router comp from app.js and place it in index.js
//4). add exit int he variants


//exitBeforeEnter prop ..exit is completed before the new comp enters