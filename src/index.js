import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import DeadStr from './views/dead-str'
import Page from './views/page'
import TJPP1 from './views/tjpp1'
import Games from './views/games'
import Linux from './views/linux'
import Celeste from './views/celeste'
import Windows from './views/windows'
import AboutUs from './views/about-us'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={DeadStr} exact path="/dead-str" />
        <Route component={Page} exact path="/" />
        <Route component={TJPP1} exact path="/tjpp1" />
        <Route component={Games} exact path="/games" />
        <Route component={Linux} exact path="/linux" />
        <Route component={Celeste} exact path="/celeste" />
        <Route component={Windows} exact path="/windows" />
        <Route component={AboutUs} exact path="/about-us" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
