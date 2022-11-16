import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './games.css'

const Games = (props) => {
  return (
    <div className="games-container">
      <Helmet>
        <title>Перакладальня</title>
        <meta
          name="description"
          content="Здесь можна знайсці пераклады на розныя гульні на беларускую мову!"
        />
        <meta property="og:title" content="Перакладальня" />
        <meta
          property="og:description"
          content="Здесь можна знайсці пераклады на розныя гульні на беларускую мову!"
        />
      </Helmet>
      <Navbar></Navbar>
      <h1 className="games-text">Гульні</h1>
      <Link to="/celeste" className="games-navlink">
        <div className="games-feature-card">
          <h2 className="games-text1">Celeste</h2>
        </div>
      </Link>
    </div>
  )
}

export default Games
