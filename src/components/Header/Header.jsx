import './Header.scss'
import { navigationMain } from '../../mocks/navigationMain'
import { navigationSocials } from '../../mocks/navigationSocials'
import headerMain from '../../assets/imgs/header-main.png'
import ladder from '../../assets/imgs/ladder.png'
import burger from '../../assets/imgs/burger.svg'
import search from '../../assets/imgs/search.svg'

import { Link } from 'react-router-dom'

// import { HandySvg } from 'handy_svg'

function Header({ title, desc, mainInfoVisible, img, arr, isShort }) {
  return (
    <header className="header">
      <div className="header__wrapper gray">
        <div className="header__navigation navigation page-container">
          <nav className="navigation__main">
            <ul className="navigation__main-list">
              {navigationMain.map(({id, text, href}) => (
                <li className="navigation__main-list-item" key={id}>
                  <a href={href} className="navigation__main-link">{text}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="navigation__socials">
            <ul className="navigation__socials-list">
              {navigationSocials.map(({id, href, icon}) => (
                <li className="navigation__socials-list-item" key={id}>
                  <a href={href} className="navigation__socials-link">
                    <img src={icon} alt="Socials icon" className="navigation__socials-icon" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="header__wrapper white">
        <div className="header__users-info users-info page-container">
          <img src={headerMain} alt="Header main template" className="users-info__main-template" />
        </div>
      </div>
      <div className="header__wrapper gray">
        <div className="header__catalogue-search catalogue-search page-container">
          <div className="catalogue-search__show-btn">
            <img src={burger} alt="Burger Catalogue" className="catalogue-search__icon" />
            <Link to="/catalogue" className="catalogue-search__title">Каталог</Link>
          </div>
          <input type="text" className="catalogue-search__input" />
          <button className="catalogue-search__search-btn">
            <img src={search} alt="" className="catalogue-search__search-btn-icon" />
          </button>
        </div>
      </div>
      {mainInfoVisible && (
        <div className="header__main-info main-info">
          <img src={img} alt="Dor znaki" className="main-info__background" />
          {arr
            ? <div className="main-info__arr">
                {arr.map((item) => (
                  <div className="main-info__arr__item">
                    <img src={item.url} alt="icon" className="main-info__arr__item-icon" />
                    <p className="main-info__arr__item-title">{item.title}</p>
                  </div>
                ))}
              </div>
            : ''
          }
          <div className="main-info__information">
            <h1 className={`main-info__title ${isShort ? 'short-title' : ''}`}>{title}</h1>
            <h3 className="main-info__desc">{desc}</h3>
          </div>
          <img src={ladder} alt="ladder" className="main-info__ladder" />
        </div>
      )}
    </header>
  )
}

export default Header
