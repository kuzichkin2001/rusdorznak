import Header from '../../components/Header/Header'
import './SvetIndicationPage.scss'

import svetIndication from '../../assets/imgs/svet-indication.png'
import Footer from '../../components/Footer/Footer'
import svetIndicationIntro from '../../assets/imgs/svet-indication-intro.png'

import { svetIndicationData } from '../../mocks/svetIndication'
import SvetIndicationItem from '../../components/SvetIndicationItem/SvetIndicationItem'

function SvetIndicationPage() {
  return (
    <div className="App">
      <Header
        mainInfoVisible
        title="Системы световой индикации"
        desc="Скидка 30% + бесплатная доставка на все ДССИ*"
        snoska="При заказе от 10 шт. мы доставим дорожные системы световой индикации прямо до вашей двери, либо до ближайшего к вам терминала транспортной компании"
        img={svetIndication}
      />
      <div className="intro__wrapper">
        <div className="intro__content page-container">
          <div className="intro__content-first-col">
            <p className="intro__content-desc">
              <span className="intro__content-desc-bold">Дорожные системы световой индикации</span> предназначены 
              для повышения безопасности дорожного движения при проведении ремонтных работ или работ по содержанию
              и обслуживанию дорог общего пользования. Приборы световой индикации разработанные компанией «РусДорЗнак»
              отлично подходят для дорожной спецтехники. Нашей компанией разработаны специальные комплекты оснащения приборами
              световой индикации на Газель, трактор, грейдер и комбинированные дорожные машины (КДМ).
            </p>
            <p>&nbsp;</p>
            <p className="intro__content-desc">
              При производстве средств световой индикации и сигнализации мы используем только качественные светодиоды повышенной яркости 
              и малого энергопотребления. Большинство дорожных средств световой индикации оснащены программируемым контроллером 
              и имеют несколько режимов работы (программ). Переключение программ осуществляется при помощи пульта дистанционного управления. 
            </p>

            <button className="intro__place-request-btn">Оставить заявку</button>
          </div>
          <div className="intro__content-second-col">
            <img
              src={svetIndicationIntro}
              alt="Svetodiod znak"
              className="intro__content-second-col-img"
            />
          </div>
        </div>
      </div>
      <div className="svet-indication__wrapper">
        <div className="svet-indication__container page-container">
          {svetIndicationData.map(item => (
            <SvetIndicationItem item={item} />
          ))}
        </div>
      </div>
      <Footer
        deliveryVisible
      />
    </div>
  )
}

export default SvetIndicationPage
