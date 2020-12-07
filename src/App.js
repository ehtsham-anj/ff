import React from "react"
import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";
import ModalRegister from "./components/ModalRegister"
import ModalSignIn from "./components/ModalSignIn"
import{BrowserRouter,Route,Switch} from 'react-router-dom'
import payment from "./components/payment";

function App() {
  return (
    <div className="App">
 <BrowserRouter>
 
     <ModalRegister/>
     <ModalSignIn/>
     <Switch>
     <Route path="/login" component={Login}/>
     <Route path="/payment" component={payment}/>
     <Route path="/register" component={Register}/>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
