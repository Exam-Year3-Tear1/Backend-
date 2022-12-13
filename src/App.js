import React from 'react';

import './App.css';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
 
  let component;
  // eslint-disable-next-line default-case
  switch(window.location.pathname){
    case "/":
      component = <Home />;
        break
    case "/login":
      component = <Login />
      break
    case "/signup":
      component = <SignUp />
      break
    case "/dashboard":
      component = <Dashboard />
  }
  return (
    <div className="App">
      
      {component}
    </div>
      
  );
}

export default App;