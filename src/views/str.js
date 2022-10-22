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
          <span className="str-text03">   Першы рэліз</span>
          <br></br>
        </h1>
        <span className="str-text05">
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
        <span className="str-text16"></span>
        <button className="str-button button">Спампаваць</button>
      </div>
    </div>
  )
}

export default Str
