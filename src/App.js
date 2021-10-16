import './App.css';
import Navbar from './components/Navbar';
import { AnimatePresence, motion } from "framer-motion"


import { Route, Switch, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as loadingData from "./json/Loading.json";
import * as successData from "./json/Success.json";

import FadeIn from "react-fade-in";
import Lottie from "react-lottie";

import Home from './contents/Home';
import About from './contents/About';
import Skills from './contents/Skills';
import Education from './contents/Education';
import Certs from './contents/Certs';
import Contact from './contents/Contact';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: successData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

function App() {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      setTimeout(() => {
        setSuccess(true);
      });
    }, 2000);
  }, []);

  const location = useLocation();

  return (
    <div>
      {!success ? (
          <div>
            <div style={{ display: "flex", margin: "25% auto" }}>
              {!loading ? (
                <Lottie options={defaultOptions} height={140} width={140} />
              ) : (
                <h1>Done</h1>
                // <Lottie options={defaultOptions2} height={140} width={140} />
              )}
            </div>
          </div>
        ) : (
          <div className="App">
            <Navbar />
              <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/about">
                    <About />
                  </Route>
                  <Route exact path="/education">
                    <Education />
                  </Route>
                  <Route exact path="/certificates">
                    <Certs />
                  </Route>
                  <Route exact path="/skills">
                    <Skills />
                  </Route>
                  <Route exact path="/contact">
                    <Contact />
                  </Route>
                </Switch>
              </AnimatePresence>
          </div>
        )}
    </div>
  );
}

export default App;
