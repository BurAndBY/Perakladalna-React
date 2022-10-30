import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
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
      <Header rootClassName="header-root-class-name5"></Header>
      <div className="games-hero">
        <Link to="/str" className="games-navlink">
          <div className="games-feature-card">
            <h2 className="games-text">Тут Будут Рэлізы!</h2>
          </div>
        </Link>
        <div className="games-container1">
          <h1 className="games-text1">Гульні</h1>
        </div>
      </div>
    </div>
  )
}

export default Games
