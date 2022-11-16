import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
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
      <Navbar rootClassName="navbar-root-class-name1"></Navbar>
      <div className="page-container1">
        <h1 className="page-text">Celeste</h1>
        <h1 className="page-text1">Апошняе аднаўленне 14.11.2022</h1>
        <Link to="/celeste" className="page-navlink button">
          Спампаваць
        </Link>
      </div>
      <div className="page-hero">
        <div className="page-container2">
          <h1 className="page-text2">Інструкцыя па усталёўцы</h1>
          <div className="page-btn-group">
            <Link to="/windows" className="page-navlink1 button">
              Windows
            </Link>
            <Link to="/linux" className="page-navlink2 button">
              Linux
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
