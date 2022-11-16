import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './windows.css'

const Windows = (props) => {
  return (
    <div className="windows-container">
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
      <Navbar rootClassName="navbar-root-class-name5"></Navbar>
      <div className="windows-hero">
        <div className="windows-container1">
          <h1 className="windows-text">Windows</h1>
          <span className="windows-text01">
            <span className="windows-text02">
              Каб усталяваць пераклад, накіруйцеся ў вашу папку Steam
              (стандартная папка - C:/Program Files(x86)/Steam), далей адкройце
              папку steamapps/common/ і пасля устаўце файлы з архіва ў гэтую
              папку. Запусціце гульню ў Steam і цешьцеся перакладам
            </span>
            <br className="windows-text03"></br>
            <br className="windows-text04"></br>
            <span className="windows-text05">
              Каб выкарыстоўваць пераклад на гульню Celeste, трэба, каб у вас
              быў усталяваны Everest. Яго вы можаце спампаваць тут. Пасля гэтага
              вы можаце націснуць на кнопку &quot;Olympus - Everest
              Installer&quot;
            </span>
            <br></br>
            <br></br>
            <span className="windows-text08">
              Важна!
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="windows-text09"></br>
            <span className="windows-text10">
              Калі ў вас ужо ўсталёваны нейкі пераклад, націсніце Properties
              &gt; Files &gt; Verify File Integrity i потым усталюйце пераклад.
              Усталяванне паверх можа зламаць гульню!!!
            </span>
            <span className="windows-text11"> </span>
            <span className="windows-text12">
              Гэта не ставіцца да перакладу на гульню Celeste
            </span>
            <br></br>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Windows
