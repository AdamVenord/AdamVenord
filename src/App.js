import React from 'react'
import { Route, Switch, } from 'react-router-dom'
import Loading from './components/Loading'
import Home from './components/Home'
import NewHome from './components/NewHome'
import About from './components/About'
import Projects from './components/Projects'
import NoMatch from './components/NoMatch'
import { Container, } from "semantic-ui-react"
import Navbar from './components/Navbar'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Awards from './components/Awards'
import "./App.css"


const App = () => (
  <>
  <center>
  <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Loading} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/newhome" component={NewHome} />
        <Route exact path="/awards" component={Awards} />
        <Route path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
    </center>
  </>
);

export default App;
