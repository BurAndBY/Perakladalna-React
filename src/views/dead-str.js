import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './dead-str.css'

const DeadStr = (props) => {
  return (
    <div className="dead-str-container">
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
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <div className="dead-str-hero">
        <h1 className="dead-str-text">
          <span>Разделі Пакой</span>
          <br></br>
          <span className="dead-str-text03">   Першы рэліз</span>
          <br></br>
        </h1>
        <span className="dead-str-text05">
          <span>
            Раздзелі Пакой - адна з гульняў у Jackpot Party Pack 5.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            Гульня ўяўляе сабой гульню ў стылі &quot;вы б аддалі перавагу&quot;,
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>галоўная мэта якой складаецца ў тым, каб паспрабаваць</span>
          <br></br>
          <span> падзяліць думкі іншых гульцоў. </span>
          <span>
            Чым менш група прагаласуе за адзін
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            варыянт у параўнанні з іншым, тым больш ачкоў вы атрымаеце.
          </span>
        </span>
        <span className="dead-str-text16"></span>
        <button className="dead-str-button button">Спампаваць</button>
      </div>
    </div>
  )
}

export default DeadStr
