import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './celeste.css'

const Celeste = (props) => {
  return (
    <div className="celeste-container">
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
      <div className="celeste-hero">
        <h1 className="celeste-text">
          <span>Celeste</span>
          <br></br>
          <span className="celeste-text3">Першы рэліз</span>
          <br></br>
        </h1>
        <span className="celeste-text5">
          Дапамажыце Мэдлін перажыць яе ўнутраных дэманаў у яе падарожжы на
          вяршыню гары Селеста ў гэтым звышнапружаным платформеры ад
          стваральнікаў TowerFall. Адважна праходзьце сотні выпрабаванняў,
          створаных рукамі, адкрывайце падступныя сакрэты і складвайце таямніцу
          гары.
        </span>
        <span className="celeste-text6"></span>
        <a
          href="https://gamebanana.com/mods/412080"
          target="_blank"
          rel="noreferrer noopener"
          className="celeste-link button"
        >
          Спампаваць
        </a>
      </div>
    </div>
  )
}

export default Celeste
