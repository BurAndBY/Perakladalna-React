import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Page from './views/page'
import Games from './views/games'
import Linux from './views/linux'
import Celeste from './views/celeste'
import Windows from './views/windows'
import AboutUs from './views/about-us'
import DeadStr from './views/dead-str'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Page} exact path="/" />
        <Route component={Games} exact path="/games" />
        <Route component={Linux} exact path="/linux" />
        <Route component={Celeste} exact path="/celeste" />
        <Route component={Windows} exact path="/windows" />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={DeadStr} exact path="/dead-str" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
