import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './str.css'

const Str = (props) => {
  return (
    <div className="str-container">
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
      <div className="str-hero">
        <h1 className="str-text">
          <span>Разделі Пакой</span>
          <br></br>
          <span className="str-text3">   Першы рэліз</span>
          <br></br>
        </h1>
        <span className="str-text5"></span>
        <button className="str-button button">Спампаваць</button>
      </div>
    </div>
  )
}

export default Str
