import { useContext, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/auth/Login';
import { GlobalContext } from './context/GlobalContext';
import { auth } from './config/Firebase';
const App = () => {

  const {setUser} = useContext(GlobalContext)
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log('The logged user is ', authUser)
      if (authUser) {
        setUser(authUser)
      }
      else{
        setUser(null)
      }
    })
  },[])
  return (
    <div>
      <Switch>
        <Route exact path="/">
        <Header/>
          <Home/>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/checkout">
          <Header/>
          <Checkout/>
        </Route>
       
      </Switch>
    </div>
  );
}

export default App;
