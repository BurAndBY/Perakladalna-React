import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './tjpp1.css'

const TJPP1 = (props) => {
  return (
    <div className="tjpp1-container">
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
      <Navbar rootClassName="navbar-root-class-name6"></Navbar>
      <div className="tjpp1-hero">
        <h1 className="tjpp1-text">
          <span>The Jackbox Party Pack 1</span>
          <br></br>
          <span className="tjpp1-text03">Першы рэліз</span>
          <br></br>
        </h1>
        <span className="tjpp1-text05">
          <span className="tjpp1-text06">
            Даўно мінулі ціхія ночы ў праглядзе тых жа старых тэлешоу - набор
            Jackbox Party Pack тут! Паспрабуйце пяць вясёлых гульняў у адным
            выдатным пакеце - гэта ідэальнае апраўданне для таго, каб сабраць
            сяброў, сям&apos;ю і іншых гульцоў на некалькі гадзін гульнявога
            задавальнення - незалежна ад дня, любой нагоды. Для гэтага вам
            спатрэбіцца больш чым адна партыя.
          </span>
          <br className="tjpp1-text07"></br>
          <br></br>
          <br className="tjpp1-text09"></br>
          <br></br>
          <span className="tjpp1-text11">
            ЗАЎВАГА: Jackbox Party Pack НЕ мае сямейнага фільтра.
          </span>
        </span>
        <a
          href="https://gamebanana.com/mods/412080"
          target="_blank"
          rel="noreferrer noopener"
          className="tjpp1-link button"
        >
          Спампаваць
        </a>
        <h1 className="tjpp1-text12">
          <span>Перакладзеныя гульні</span>
          <br></br>
        </h1>
        <div className="tjpp1-feature-card">
          <h2 className="tjpp1-text15">Мухі Ўрухі - Lie Swatter</h2>
          <img
            alt="image"
            src="https://static.wikia.nocookie.net/logopedia/images/1/1a/Lie_Swatter_%28Box_Graphic%29.png/revision/latest?cb=20220701121436"
            className="tjpp1-image"
          />
        </div>
      </div>
    </div>
  )
}

export default TJPP1
