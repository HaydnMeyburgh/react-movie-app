import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/header/header.js";
import { Footer } from "./components/footer/footer.js";
import { Home } from "./components/home/home.js";
import { PageNotFound } from "./components/pageNotFound/pageNotFound.js";
import { MovieDetails } from "./components/movieDetails/movieDetails";

function App() {
  return (
    <div className='app'>
      <Router>
        <Header></Header>
        <div className='container'>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie/:imdbID" component={MovieDetails} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;




