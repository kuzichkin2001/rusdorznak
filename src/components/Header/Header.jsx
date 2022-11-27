import './Header.scss'
import { navigationMain } from '../../mocks/navigationMain'
import { navigationSocials } from '../../mocks/navigationSocials'
import partOfHead from '../../assets/imgs/part_of_head.png'

import { HandySvg } from 'handy-svg'

function Header() {
  return (
    <div className="header__wrapper">
      <header className="header">
        <div className="header__navigation navigation">
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
                    <HandySvg src={icon} width="40" height="40" alt="Socials icon" className="navigation__socials-icon" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="header__users-info users-info">
          
        </div>
      </header>
    </div>
  )
}

export default Header
