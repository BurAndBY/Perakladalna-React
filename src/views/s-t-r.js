import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './s-t-r.css'

const STR = (props) => {
  return (
    <div className="s-t-r-container">
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
      <Header rootClassName="header-root-class-name1"></Header>
      <div className="s-t-r-hero">
        <h1 className="s-t-r-text">
          <span>Разделі Пакой</span>
          <br></br>
          <span className="s-t-r-text3">   Першы рэліз</span>
          <br></br>
        </h1>
        <span className="s-t-r-text5"></span>
        <button className="s-t-r-button button">Спампаваць</button>
      </div>
    </div>
  )
}

export default STR
