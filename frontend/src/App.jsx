import React from "react";
import Nav from "../src/components/Nav.jsx";
import {BrowserRouter,Router,Route, Routes} from "react-router-dom";
import Read from "./components/Read.jsx";
import Create from "./components/Create.jsx";
import Update from "./components/Update.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav />
      <Routes>

      <Route exact path="/create" element={<Create/>} />
      <Route exact path="/read" element={<Read/>} />
      <Route exact path="/update/:id" element={<Update/>} />

      </Routes>
      </BrowserRouter>

    </div>
  )
};

export default App;