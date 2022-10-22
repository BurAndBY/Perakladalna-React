import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Page from './views/page'
import Games from './views/games'
import Linux from './views/linux'
import Str from './views/str'
import Windows from './views/windows'
import AboutUs from './views/about-us'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Page} exact path="/" />
        <Route component={Games} exact path="/games" />
        <Route component={Linux} exact path="/linux" />
        <Route component={Str} exact path="/str" />
        <Route component={Windows} exact path="/windows" />
        <Route component={AboutUs} exact path="/about-us" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
