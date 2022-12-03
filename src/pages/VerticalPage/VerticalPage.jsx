import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import AdvantagesMini from "../../components/AdvantagesMini/AdvantagesMini"

import { verticalProducts } from '../../mocks/verticalProducts';
import { advantagesMiniVertical } from '../../mocks/advantagesMini';

import verticalBg from '../../assets/imgs/vertical_bg.png'

import './VerticalPage.scss'

const ProductItem = (item) => {
  return (
    <div className="vertical__products__item">
      <img src={item.url} alt="product img" className="vertical__products__item-img" />

      <div className="vertical__products__item__info">
        <p className="vertical__products__item__info-title">{item.title}</p>

        <div className="vertical__products__item__info-selects">
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

        <p className="vertical__products__item__info-text">
          <strong>Материал:</strong> {item.material}
        </p>
      </div>

      <div className="vertical__products__item__result">
        <p className="vertical__products__item__result-text">Стоимость</p>
        <p className="vertical__products__item__result-price">От {item.price} рублей</p>
        <button className="vertical__products__item__result-buy">В корзину</button>
      </div>
    </div>
  )
}

function VerticalPage() {
  return (
    <div className="App">
      <Header
        mainInfoVisible={true}
        img={verticalBg}
        title="Знаки вертикальной разметки"
        isShort
      />

      <div className="page-container vertical">
        <div className="vertical__info">
          <div className="vertical__info-content">
            <p className="vertical__info-text">
                Компания «Русдорзнак» предлагает своим клиентам изготовление <strong>знаков вертикальной разметки.</strong>
                Наши дорожные знаки производятся в полном соответствии с ГОСТ, мы используем только сертифицированные 
                материалы и гарантируем высокое качество продукции и устойчивость к любым нагрузкам.
            </p>
            <p className="vertical__info-text">
                Знаки вертикальной разметки предназначены для дорожных сооружений, представляющих опасность для 
                транспортных средств. Устанавливаются на опоры мостов, порталы туннелей, опоры освещения и прочее. 
                Играет важную роль для зрительного ориентира водителей, особенно в темное время суток.
            </p>
            <button className="vertical__info-btn">Оставить заявку</button>
          </div>
        </div>
      </div>

      <AdvantagesMini arr={advantagesMiniVertical} />

      <div className="page-container vertical">
        <div className="vertical__products">
          {verticalProducts.map((item) => (
            ProductItem(item)
          ))}
        </div>
      </div>

      <div className="vertical-line"/>

      <div className="page-container vertical">
        <div className="vertical__rules">
          <h3 className="vertical__rules-title">Согласно ГОСТ Р 52289 знаки вертикальной разметки размещаются для:</h3>
          <p className="vertical__rules-text">
            Обозначения бордюров на опасных участках и возвышающиеся островки безопасности;
          </p>
          <p className="vertical__rules-text">
            Обозначения нижнего края пролетного строения тоннелей, мостов и путепроводов;
          </p>
          <p className="vertical__rules-text">
            Обозначения круглых тумб, установленных на разделительных полосах или островках безопасности;
          </p>
          <p className="vertical__rules-text">
            Обозначения направляющих столбиков, надолб, опор ограждений и тому подобного;
          </p>
          <p className="vertical__rules-text">
            Обозначения боковых поверхностей ограждений дорог на закруглениях малого радиуса, крутых спусках, 
            других опасных участках;
          </p>
          <p className="vertical__rules-text">
            Обозначения элементов дорожных сооружений (опор мостов, путепроводов, торцевых частей парапетов 
            и тому подобного), когда эти элементы представляют опасность для движущихся транспортных средств;
          </p>
        </div>
      </div>
      
      <Footer
        deliveryVisible={true}
      />
    </div>
  )
}

export default VerticalPage