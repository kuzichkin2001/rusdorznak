import { useState } from 'react';

import Header from '../../components/Header/Header'
import './AutonomSvetodiodPage.scss'

import autonomSvetodiod from '../../assets/imgs/autonom-svetodiod.png'
import AdvantagesMini from '../../components/AdvantagesMini/AdvantagesMini'
import Footer from '../../components/Footer/Footer'

import { advantagesMiniAutonom } from '../../mocks/advantagesMini'
import sun from '../../assets/imgs/sun.svg'
import accum from '../../assets/imgs/accum.svg'
import temperature from '../../assets/imgs/temperature.svg'
import { autonomZnaki } from '../../mocks/zagradZnaki';

function AutonomZnakProp({ item }) {
  return (
    <div className="autonom-znak">
      <h2 className="autonom-znak__item-title">{item.title}</h2>
      <div className="autonom-znak__cols .zagrad-znak__cols">
        <div className="zagrad-znak__first-col">
          <div className="zagrad-znak__first-col-content">
            <img src={item.icon} alt="Main content" className="zagrad-znak__first-col-img" />
          </div>
        </div>
        <div className="zagrad-znak__second-col">
          <div className="zagrad-znak__stats">
            <div className="zagrad-znak__stat">
              <div className="zagrad-znak__stat-row">
                <img src={sun} alt="size" className="zagrad-znak__stat-icon" />
                <h3 className="zagrad-znak__stat-title">Солнечная панель</h3>
              </div>
              <p className="zagrad-znak__stat-text">{item.sun} Вт</p>
            </div>
            <div className="zagrad-znak__stat">
              <div className="zagrad-znak__stat-row">
                <img src={accum} alt="size" className="zagrad-znak__stat-icon" />
                <h3 className="zagrad-znak__stat-title">Аккумулятор</h3>
              </div>
              <p className="zagrad-znak__stat-text">{item.accum} А*ч</p>
            </div>
            <div className="zagrad-znak__stat">
              <div className="zagrad-znak__stat-row">
                <img src={temperature} alt="size" className="zagrad-znak__stat-icon" />
                <h3 className="zagrad-znak__stat-title">Температура эксплуатации</h3>
              </div>
              <p className="zagrad-znak__stat-text">{item.temperature}</p>
            </div>
            <div className="zagrad-znak__stat">
              <h3 className="zagrad-znak__stat-title">Комплектация</h3>
              <div className="zagrad-znak__stat-list">
                {item.complectation.map((comp, idx) => (
                  <>
                    <p className="zagrad-znak__stat-complectation-item">
                      <span>{idx})</span> {comp}
                    </p>
                  </>
                ))}
              </div>
            </div>
          </div>

          <div className="zagrad-znak__summary">
            <div className="zagrad-znak__prices">
              <p className="zagrad-znak__prev-price">Стоимость</p>
              <h2 className="zagrad-znak__current-price">От {item.price} рублей</h2>
            </div>
            <button className="zagrad-znak__add-to-cart-btn">В корзину</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function AutonomSvetodiodPage() {
  return (
    <div className="App">
      <Header
        mainInfoVisible
        img={autonomSvetodiod}
        title="Автономные светодиодные знаки на солнечной батарее"
        snoska="Стоимость установки зависит от времени года"
      />
      <AdvantagesMini arr={advantagesMiniAutonom} />
      <div className="autonom-znaki__wrapper">
        <div className="autonom-znaki__container page-container">
          {autonomZnaki.map(item => (
            <AutonomZnakProp item={item} />
          ))}
        </div>
      </div>
      <Footer
        deliveryVisible
      />
    </div>
  )
}

export default AutonomSvetodiodPage
