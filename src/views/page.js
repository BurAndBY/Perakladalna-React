import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
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
      <Header rootClassName="header-root-class-name"></Header>
      <div className="page-container1">
        <h1 className="page-text">Жартлыст 2 Інтэрлыстыянальны</h1>
        <h1 className="page-text1">Апошняе аднаўленне 22.10.2022</h1>
        <button className="page-button button">У праце</button>
      </div>
      <div className="page-hero">
        <div className="page-container2">
          <h1 className="page-text2">Інструкцыя па усталёўцы</h1>
          <div className="page-btn-group">
            <Link to="/windows" className="page-navlink button">
              Windows
            </Link>
            <Link to="/linux" className="page-navlink1 button">
              Linux
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
