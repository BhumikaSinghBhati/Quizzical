import './App.css';
import React from "react"

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import QuestionsList from "./components/QuestionsList";
import Mainn from "./components/Mainn";
  


function App() {

  
  return(
    
    <div>
<BrowserRouter>
<Routes>
<Route exact path='/' element={<Mainn/>} />
<Route exact path='/components/QuestionsList' element={<QuestionsList/>} />
</Routes>

</BrowserRouter>
  </div>
    );
}

export default App;
