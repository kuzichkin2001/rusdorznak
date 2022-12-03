import { useState } from 'react';

import './SvetDorZnakiPage.scss'
import svetdorznaki from '../../assets/imgs/svetdorznaki.png'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import zagradznak from '../../assets/imgs/zagradznak.png'
import AdvantagesMini from '../../components/AdvantagesMini/AdvantagesMini'

import { advantagesMiniZagrad } from '../../mocks/advantagesMini'
import { zagradZnaki } from '../../mocks/zagradZnaki'

import size from '../../assets/imgs/size.svg'
import karkas from '../../assets/imgs/carcass.svg'
import plenka from '../../assets/imgs/plenka.svg'
import voltage from '../../assets/imgs/voltage.svg'
import regime from '../../assets/imgs/regime.svg'

function ZagradZnakProp({ item }) {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="zagrad-znak">
      <h2 className="zagrad-znak__item-title">Заградительный светодиодный знак №{item.id}</h2>
      <div className="zagrad-znak__cols">
        <div className="zagrad-znak__first-col">
          <div className="zagrad-znak__first-col-content">
            <img src={item.subElements[selectedItem].icon} alt="Main content" className="zagrad-znak__first-col-img" />
            <div className="zagrad-znak__first-col-options">
              {item.subElements.map(({ id, icon }) => (
                <div className="zagrad-znak__first-col-option" key={id}>
                  <img src={icon} alt="Option icon" className="zagrad-znak__first-col-option-img" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="zagrad-znak__second-col">
          <div className="zagrad-znak__stats">
            <div className="zagrad-znak__stat">
              <div className="zagrad-znak__stat-row">
                <img src={size} alt="size" className="zagrad-znak__stat-icon" />
                <h3 className="zagrad-znak__stat-title">Размер</h3>
              </div>
              <p className="zagrad-znak__stat-text">{item.size[0]} x {item.size[1]} мм</p>
            </div>
            <div className="zagrad-znak__stat">
              <div className="zagrad-znak__stat-row">
                <img src={karkas} alt="size" className="zagrad-znak__stat-icon" />
                <h3 className="zagrad-znak__stat-title">Каркас</h3>
              </div>
              <p className="zagrad-znak__stat-text">{item.karkas}</p>
            </div>
            <div className="zagrad-znak__stat">
              <div className="zagrad-znak__stat-row">
                <img src={plenka} alt="size" className="zagrad-znak__stat-icon" />
                <h3 className="zagrad-znak__stat-title">Пленка</h3>
              </div>
              <p className="zagrad-znak__stat-text">{item.plenka}</p>
            </div>
            <div className="zagrad-znak__stat">
              <div className="zagrad-znak__stat-row">
                <img src={voltage} alt="size" className="zagrad-znak__stat-icon" />
                <h3 className="zagrad-znak__stat-title">Напряжение</h3>
              </div>
              <p className="zagrad-znak__stat-text">{item.voltage}</p>
            </div>
            {item?.regime && (
              <div className="zagrad-znak__stat">
                <div className="zagrad-znak__stat-row">
                  <img src={regime} alt="size" className="zagrad-znak__stat-icon" />
                  <h3 className="zagrad-znak__stat-title">4 режима работы</h3>
                </div>
                <p className="zagrad-znak__stat-text">{item.regime}</p>
              </div>
            )}
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
              <p className="zagrad-znak__prev-price">{item.prevPrice} рублей</p>
              <h2 className="zagrad-znak__current-price">{item.currentPrice} рублей</h2>
            </div>
            <button className="zagrad-znak__add-to-cart-btn">В корзину</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function SvetDorZnakiPage() {
  return (
    <div className="App">
      <Header
        title="Заградительные светодиодные знаки"
        desc="Скидка 30% на все позиции"
        img={svetdorznaki}
        mainInfoVisible
      />
      <div className="intro__wrapper">
        <div className="intro__content page-container">
          <div className="intro__content-first-col">
            <p className="intro__content-desc">
              <span className="intro__content-desc-bold">Изготовление импульсных передвижных заградительных знаков</span> –
              одно из основных направлений нашей компании!
            </p>
            <p>&nbsp;</p>
            <p className="intro__content-desc">
              Передвижные заградительные знаки используются для ограждения места проведения работ и обозначения направления объезда.
              Заградительные знаки с мигающей стрелкой рекомендуется устанавливать на автомагистралях, на участке дорог
              со сложными дорожными условиями и плохой видимостью, в местах производства работ повышенной сложности
              и участках с большой концентрацией ДТП.
            </p>
            <p>&nbsp;</p>
            <p className="intro__content-desc">
              Мобильные светодиодные заградительные знаки рекомендуется устанавливать на расстоянии
              10-12м до начала места проведения работ.
            </p>

            <button className="intro__place-request-btn">Оставить заявку</button>
          </div>
          <div className="intro__content-second-col">
            <img
              src={zagradznak}
              alt="Zagradznak"
              className="intro__content-second-col-img"
            />
          </div>
        </div>
      </div>
      <AdvantagesMini arr={advantagesMiniZagrad} />
      <div className="props__wrapper">
        <div className="props__content page-container">
          {zagradZnaki.map(item => (
            <ZagradZnakProp item={item} />
          ))}
        </div>
      </div>
      <Footer
        deliveryVisible
      />
    </div>
  )
}

export default SvetDorZnakiPage