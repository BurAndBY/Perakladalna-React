import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './linux.css'

const Linux = (props) => {
  return (
    <div className="linux-container">
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
      <Navbar rootClassName="navbar-root-class-name4"></Navbar>
      <div className="linux-hero">
        <div className="linux-container1">
          <h1 className="linux-text">Linux</h1>
          <span className="linux-text01">
            <span className="linux-text02">
              Каб усталяваць пераклад, накіруйцеся ў вашу папку Steam
              (стандартная папка - ~/.steam/steam), далей адкройце папку
              steamapps/common/ і пасля устаўце файлы з архіва ў гэтую папку.
              Запусціце гульню ў Steam і цешьцеся перакладам
            </span>
            <br className="linux-text03"></br>
            <br className="linux-text04"></br>
            <span className="linux-text05">
              Каб выкарыстоўваць пераклад на гульню Celeste, трэба, каб у вас
              быў усталяваны Everest. Яго вы можаце спампаваць тут. Пасля гэтага
              вы можаце націснуць на кнопку &quot;Olympus - Everest
              Installer&quot; і пераклад аўтаматам будзе усталёван
            </span>
            <br className="linux-text06"></br>
            <br className="linux-text07"></br>
            <span className="linux-text08">
              Важна!
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="linux-text09">
              Калі ў вас ужо ўсталёваны нейкі пераклад, націсніце
            </span>
            <br className="linux-text10"></br>
            <span className="linux-text11">
              Properties &gt; Files &gt; Verify File Integrity i потым усталюйце
              пераклад. Усталяванне паверх можа зламаць гульню!!!
            </span>
            <span className="linux-text12"> </span>
            <br className="linux-text13"></br>
            <span className="linux-text14">
              Гэта не ставіцца да перакладу на гульню Celeste
            </span>
            <br></br>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Linux
