import React, { useEffect } from "react";
import axios from "axios";
import './App.css';
import { Router } from "@reach/router";
import Main from "./view/Main";
import DisplayOne from "./components/DisplayOne";
import UpdateAuthor from "./components/UpdateAuthor";

function App() {
  useEffect(() => {
    axios.get("http://localhost:8000/api/authors")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [])

  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <DisplayOne path="/authors/:id" />
        <UpdateAuthor path="/authors/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
