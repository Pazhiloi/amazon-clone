import React, { useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import {auth} from './firebase'
function App() {
  const[{user}, dispatch] = useStateValue()

  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user:authUser
        });
        
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    })

    return () => {
      unsubscribe();
    }
  }, []);
  
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout/>
              </>
            }
          />
          <Route path="/login" element={<Login/>} />
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
