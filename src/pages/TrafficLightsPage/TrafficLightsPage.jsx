import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import AdvantagesMini from "../../components/AdvantagesMini/AdvantagesMini"

import { trafficLightsProducts } from '../../mocks/trafficLightsProducts';
import { trafficLightsArr } from '../../mocks/advantagesMini';

import trafficLightsBg from '../../assets/imgs/trafficLights_bg.png'

import './TrafficLightsPage.scss'
import Checkbox from "../../components/Checkbox/Checkbox";

function TrafficLightsPage() {
  return (
    <div className="App">
      <Header
        mainInfoVisible={true}
        img={trafficLightsBg}
        title="Светодиодные светофоры Т7"
        desc="Желтые мигающие светофоры от производителя с доставкой по всей России"
        isShort
      />

      <div className="page-container trafficLights">
        <div className="trafficLights__info">
          <div className="trafficLights__info-content">
            <p className="trafficLights__info-text">
              <strong>Светодиодный светофор</strong> является эффективным средством для предупреждения водителей 
              о приближении к пешеходному переходу. Это оборудование может работать от электросети или 
              полностью автономно, с использованием солнечных батарей, встроенных в конструкцию.
            </p>
            <p className="trafficLights__info-text">
              Компания РусДорЗнак предлагает дорожным службам и частным клиентам купить светодиодный светофор нашего 
              производства. В своей продукции мы используем долговечные осветительные системы и детали корпуса, не 
              требующие регулярного обслуживания и устойчивые к неблагоприятным погодным факторам.
            </p>
            <button className="trafficLights__info-btn">Оставить заявку</button>
          </div>
        </div>
      </div>

      <AdvantagesMini arr={trafficLightsArr} />

      <div className="page-container trafficLights">
        <div className="trafficLights__products">
          {trafficLightsProducts.map((item) => (
            <div className="trafficLights__products__item">
              <img src={item.url} alt="img" className="trafficLights__products__item-img" />

              <p className="trafficLights__products__item-title">{item.title}</p>

              {item.checkbox 
                ? <>
                    <div className="trafficLights__products__item__checkbox">
                      <Checkbox size={20}/>
                      <p className="trafficLights__products__item__checkbox-text">Блок питания для подключения к 220В</p>
                    </div>
                    <div className="trafficLights__products__item__checkbox">
                      <Checkbox size={20}/>
                      <p className="trafficLights__products__item__checkbox-text">Защитный козырек</p>
                    </div>
                  </>
                : ''
              }

              {item.checkbox 
                ? <div className="trafficLights__products__item__specifications">
                    <div className="trafficLights__products__item__specifications__item">
                      <p className="trafficLights__products__item__specifications__item-title">Мощность</p>
                      <p className="trafficLights__products__item__specifications__item-value">{item.power}</p>
                    </div>
                    <div className="trafficLights__products__item__specifications__item">
                      <p className="trafficLights__products__item__specifications__item-title">Вес</p>
                      <p className="trafficLights__products__item__specifications__item-value">{item.weight}</p>
                    </div>
                    <div className="trafficLights__products__item__specifications__item">
                      <p className="trafficLights__products__item__specifications__item-title">Корпус</p>
                      <p className="trafficLights__products__item__specifications__item-value">{item.body}</p>
                    </div>
                    <div className="trafficLights__products__item__specifications__item">
                      <p className="trafficLights__products__item__specifications__item-title">Напряжение</p>
                      <p className="trafficLights__products__item__specifications__item-value">{item.voltage}</p>
                    </div>
                    <div className="trafficLights__products__item__specifications__item">
                      <p className="trafficLights__products__item__specifications__item-title">Диаметр светодиодного модуля</p>
                      <p className="trafficLights__products__item__specifications__item-value">{item.diametr}</p>
                    </div>
                    <div className="trafficLights__products__item__specifications__item">
                      <p className="trafficLights__products__item__specifications__item-title">Размер корпуса</p>
                      <p className="trafficLights__products__item__specifications__item-value">{item.size}</p>
                    </div>
                  </div>
                : <div className="trafficLights__products__item__specifications">
                    <div className="trafficLights__products__item__specifications__item">
                      <p className="trafficLights__products__item__specifications__item-title">Рабочее напряжение</p>
                      <p className="trafficLights__products__item__specifications__item-value">{item.voltage}</p>
                    </div>
                    <div className="trafficLights__products__item__specifications__item">
                      <p className="trafficLights__products__item__specifications__item-title">Диаметр линзы</p>
                      <p className="trafficLights__products__item__specifications__item-value">{item.diametr}</p>
                    </div>
                    <div className="trafficLights__products__item__specifications__item">
                      <p className="trafficLights__products__item__specifications__item-title">Ёмкость аккумулятора</p>
                      <p className="trafficLights__products__item__specifications__item-value">{item.size}</p>
                    </div>
                    <div className="trafficLights__products__item__specifications__item">
                      <p className="trafficLights__products__item__specifications__item-title">Мощность солнечной панели</p>
                      <p className="trafficLights__products__item__specifications__item-value">{item.power}</p>
                    </div>
                  </div>
              }

              <div className="trafficLights__products__item__total">
                <div className="trafficLights__products__item__total__price">
                  <p className="trafficLights__products__item__total__price-title">Стоимость</p>
                  <p className="trafficLights__products__item__total__price-value">{item.price} рублей</p>
                </div>
                <button className="trafficLights__products__item__total-btn">В корзину</button>
              </div>

            </div>
          ))}
        </div>
      </div>
      
      <Footer
        deliveryVisible={true}
      />
    </div>
  )
}

export default TrafficLightsPage