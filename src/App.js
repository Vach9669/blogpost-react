import React, { useState } from 'react';
import Home from './screens/home/Home';
import Nav from './screens/nav/Nav';
import Login from './screens/login/Login';
import Registration from './screens/Registration/Registration';
import Storage from "./services/Storage";
import Workspace from "./screens/Workspace/Workspace"



function App() {
  const [tab, setTab] = useState({tab1: Storage.get("token")?"Workspace":"Home"})

  const isLogged = Storage.get("token")
  function onClickFunction(tab2) {
    setTab({tab1: tab2})
  }

  return (
    <div className="App">
      <Nav isLogged={isLogged} tab3={tab.tab1} onClickFunction={onClickFunction}/>
      {tab.tab1 === "Home" && <Home/> }
      {tab.tab1 === "Login" && <Login onClickFunction={onClickFunction}/> }
      {tab.tab1 === "Registration" && <Registration onClickFunction={onClickFunction}/>}
      {tab.tab1 === "Workspace" && <Workspace onClickFunction={onClickFunction}/>}

    </div>
  );  
}

export default App;