import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

import { unevennessHeaderArr } from '../../mocks/unevennessHeaderArr'
// import { unevennessProducts } from '../../mocks/unevennessProducts';

import nevennessBg from '../../assets/imgs/nevenness_bg.png'

import './UnevennessPage.scss'

const ProductItem = (item) => {
  return (
    <div className="unevenness__products__item">
      <img src={item.url} alt="product img" className="unevenness__products__item-img" />

      <div className="unevenness__products__item__info">
        <p className="unevenness__products__item__info-title">{item.title}</p>

        <div className="unevenness__products__item__info-selects">
          <form>
            <label>Тип пленки</label>
            <select selected={'Тип Б'}>
              <option value="Тип А">Тип А</option>
              <option value="Тип Б">Тип Б</option>
              <option value="Тип В">Тип В</option>
            </select>
          </form>
          <form>
            <label>Размер</label>
            <select selected={'1250 х 250 мм'}>
              <option value="1250 х 250 мм">1250 х 250 мм</option>
              <option value="750 x 150 мм">750 x 150 мм</option>
            </select>
          </form>
          <form>
            <label>Отбортовка</label>
            <select selected={'Одинарная'}>
              <option value="Одинарная">Одинарная</option>
              <option value="Двойная">Двойная</option>
              <option value="Тройная">Тройная</option>
            </select>
          </form>
        </div>

        <p className="unevenness__products__item__info-text">
          <strong>Материал:</strong> {item.material}
        </p>
      </div>

      <div className="unevenness__products__item__result">
        <p className="unevenness__products__item__result-text">Стоимость</p>
        <p className="unevenness__products__item__result-price">От {item.price} рублей</p>
        <button className="unevenness__products__item__result-buy">В корзину</button>
      </div>
    </div>
  )
}

function UnevennessPage() {
  return (
    <div className="App">
      <Header
        mainInfoVisible={true}
        img={nevennessBg}
        arr={unevennessHeaderArr}
        title="Искусственная дорожная неровность (ИДН), демпферы, колесоотбойники"
        desc="От производителя с доставкой по всей России"
      />

      <div className="page-container unevenness">
        <div className="unevenness__info">
          <div className="unevenness__info-content">
            <p className="unevenness__info-text">
              На сайте компании РусДорЗнак можно оставить заявку и купить <strong>ИДН («лежачий полицейский»)</strong>
              и другие средства ограничения скоростного режима. Искусственные дорожные неровности широко 
              применяются в обустройстве дорожных переездов, пешеходных переходов и других участков дороги, 
              на которых необходимо снизить скорость передвижения.
            </p>
            <button className="unevenness__info-btn">Оставить заявку</button>
          </div>
        </div>
      </div>

      {/* <div className="page-container unevenness">
        <div className="unevenness__products">
          {unevennessProducts.map((item) => (
            ProductItem(item)
          ))}
        </div>
      </div> */}

      
      <Footer
        deliveryVisible={true}
      />
    </div>
  )
}

export default UnevennessPage