import Header from '../../components/Header/Header'
import './SvetodiodPage.scss'

import svetodiod from '../../assets/imgs/svetodiod-page.png'
import { svetodiodArr } from '../../mocks/unevennessHeaderArr'
import Footer from '../../components/Footer/Footer'
import svetodiodZnak from '../../assets/imgs/svetodiod-znak.png'

import AdvantagesMini from '../../components/AdvantagesMini/AdvantagesMini'
import { svetodiodArrDara } from '../../mocks/advantagesMini'

import mainSvetContent from '../../assets/imgs/main-content-svet.png'
import Checkbox from '../../components/Checkbox/Checkbox'

import tooltip from '../../assets/imgs/tooltip.svg'

function SvetodiodPage() {
  return (
    <div className="App">
      <Header
        title="Светодиодные дорожные знаки"
        img={svetodiod}
        arr={svetodiodArr}
        mainInfoVisible
        isShort
      />
      <div className="intro__wrapper">
        <div className="intro__content page-container">
          <div className="intro__content-first-col">
            <p className="intro__content-desc">
              <span className="intro__content-desc-bold">Светодиодные импульсные дорожные знаки</span> –
              это высокоэффективное средство обеспечения безопасности дорожного движения, которое хорошо видно как в дневное,
              так и в ночное время суток. До недавнего времени светодиодные дорожные знаки использовали в основном только при
              проведении ремонтных работ на трассах в темное время суток. В настоящее время светодиодные активные знаки все
              чаще и чаще приходят на смену стандартным дорожным знакам в черте города, особенно на пешеходных переходах.
            </p>
            <p>&nbsp;</p>
            <p className="intro__content-desc">
              При изготовлении светодиодных знаков мы используем инженерную световозвращающую пленку микропризматического класса.
            </p>
            <p>&nbsp;</p>
            <p className="intro__content-desc">
              Производство светодиодных дорожных знаков в цехах компании «РусДорЗнак» происходит с
              соблюдением системы контроля качества и учетом требований ГОСТ. При изготовлении светодиодных знаков используются
              только высококачественные материалы.
            </p>

            <button className="intro__place-request-btn">Оставить заявку</button>
          </div>
          <div className="intro__content-second-col">
            <img
              src={svetodiodZnak}
              alt="Svetodiod znak"
              className="intro__content-second-col-img"
            />
          </div>
        </div>
      </div>
      <AdvantagesMini arr={svetodiodArrDara} />
      <div className="svet__wrapper">
        <div className="svet__container page-container">
          <h2 className="svet__title">
            Светодиодный дорожный знак 5.19.1/5.19.2 «Пешеходный переход» 
            на желто-зеленом фоне односторонний
          </h2>
          <div className="svet__main-elem">
            <div className="svet__cols">
              <div className="svet__first-col">
                <img src={mainSvetContent} alt="Main svet content" className="svet__first-col-img" />
              </div>
              <div className="svet__second-col">
                <div className="svet__second-col-data">
                  <ul className="svet__second-col-stats">
                    <li className="svet__second-col-stat">Яркие влагозащищенные светодиоды</li>
                    <li className="svet__second-col-stat">Корпус из оцинкованного металла</li>
                    <li className="svet__second-col-stat">Крепление на стойку любого диаметра</li>
                  </ul>
                  <form className="svet__second-col-form">
                    <fieldset className="svet__second-col-fieldset">
                      <label htmlFor="plenka" className="svet__second-col-label">Тип пленки</label>
                      <select name="plenka-type" id="plenka" className="svet__second-col-select">
                        <option value="А" className="svet__second-col-option" selected>Тип А</option>
                        <option value="Б" className="svet__second-col-option">Тип Б</option>
                        <option value="В" className="svet__second-col-option">Тип В</option>
                        <option value="Г" className="svet__second-col-option">Тип Г</option>
                      </select>
                    </fieldset>
                    <fieldset className="svet__second-col-fieldset">
                      <label htmlFor="size" className="svet__second-col-label">Тип пленки</label>
                      <select name="size" id="size" className="svet__second-col-select">
                        <option value="500" className="svet__second-col-option">500 мм</option>
                        <option value="700" className="svet__second-col-option" selected>700 мм</option>
                        <option value="900" className="svet__second-col-option">900 мм</option>
                      </select>
                    </fieldset>
                    <fieldset className="svet__second-col-fieldset">
                      <div>
                        <label htmlFor="weight" className="svet__second-col-label">Вес</label>
                        <p className="svet__second-col-text" id="weight">3,5 кг</p>
                      </div>
                      
                      <div>
                        <label htmlFor="capability" className="svet__second-col-label">Мощность</label>
                        <p className="svet__second-col-text" id="capability">5 Вт</p>
                      </div>
                    </fieldset>
                    <fieldset className="svet__second-col-fieldset">
                      <Checkbox size="20px" />
                      <label htmlFor="strobo" className="svet__second-col-label">Стробоскопы (по углам)</label>
                    </fieldset>
                    <fieldset className="svet__second-col-fieldset">
                      <Checkbox size="20px" />
                      <label htmlFor="animation" className="svet__second-col-label">Анимация (идущий человек)</label>
                    </fieldset>
                    <fieldset className="svet__second-col-fieldset">
                      <Checkbox size="20px" />
                      <label htmlFor="voltage" className="svet__second-col-label">Напряжение 220В</label>
                      <img src={tooltip} alt="Tooltip" className="svet__tooltip" />
                    </fieldset>
                  </form>

                  <div className="svet__summary">
                    <div className="svet__cost"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer
        deliveryVisible
      />
    </div>
  )
}

export default SvetodiodPage
