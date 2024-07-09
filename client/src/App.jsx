
import "./app.scss"

import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";

import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";

function App() {
 
  const user = true;
  return (

   
 <BrowserRouter>
   <Routes>
   <Route exact path="/">
   
    <Route index element={user? <Home/>: <Navigate to ="register"/>} />

    </Route>
   <Route  path="/register">
    <Route index element={!user? <Register/>: <Navigate to="/" />} />
    
    </Route>
    <Route  path="/login">
    <Route index element={!user? <Login/>: <Navigate to="/" />} />
    </Route>

    { user && (

 
    <>
  
    <Route  path="/movies">
    <Route index element={<Home type = "movies"/>} />
    </Route>
    <Route  path="/series">
    <Route index element={<Home type = "series"/>} />
    </Route>
    <Route  path="/watch">
    <Route index element={<Watch/>} />
    </Route>
    </>
    )
    }

   </Routes>
 
  
   </BrowserRouter>
 
   
  );
};

export default App
