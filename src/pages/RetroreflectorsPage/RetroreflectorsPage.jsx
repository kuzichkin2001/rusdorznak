import { Link } from "react-router-dom"

import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import AdvantagesMini from "../../components/AdvantagesMini/AdvantagesMini"

import { retroreflectorsProducts } from '../../mocks/retroreflectorsProducts';
import { advantagesMini } from '../../mocks/advantagesMini';

import retroreflectorsBg from '../../assets/imgs/retroreflectors_bg.png'
import infoImg from '../../assets/imgs/retroreflectors_img-1.png'

import './RetroreflectorsPage.scss'

const ProductItem = (item) => {
  return (
    <div className="retroreflectors__products__item">
      <img src={item.url} alt="product img" className="retroreflectors__products__item-img" />

      <div className="retroreflectors__products__item__info">
        <p className="retroreflectors__products__item__info-title">{item.title}</p>

        <div className="retroreflectors__products__item__info-selects">
          <form>
            <label>Тип пленки</label>
            <select selected={'Тип Б'}>
              <option value="Тип А">Тип А</option>
              <option value="Тип Б">Тип Б</option>
              <option value="Тип В">Тип В</option>
            </select>
          </form>
          <form>
            <label>Варианты изготовления</label>
            <select selected={'Односторонний'}>
              <option value="Односторонний">Односторонний</option>
              <option value="Двусторонний">Двусторонний</option>
            </select>
          </form>
        </div>

        {item.selects === 4 
          ? <div className="retroreflectors__products__item__info-selects">
              <form>
                <label>Крепление</label>
                <select selected={'Уголок'}>
                  <option value="Уголок">Уголок</option>
                  <option value="Балка">Балка</option>
                </select>
              </form>
              <form>
                <label>Габаритные размеры</label>
                <select selected={'100 x 200 мм'}>
                  <option value="100 x 200 мм">100 x 200 мм</option>
                  <option value="150 х 300 мм">150 х 300 мм</option>
                  <option value="200 х 400 мм">200 х 400 мм</option>
                </select>
              </form>
            </div>
          : ''
        }

        {item.material 
          ? <p className="retroreflectors__products__item__info-text">
              <strong>Материал:</strong> {item.material}
            </p>
          : ''
        }
        {item.size 
          ? <p className="retroreflectors__products__item__info-text">
              <strong>Габаритные размеры:</strong> {item.size}
            </p>
          : ''
        }
        {item.color 
          ? <p className="retroreflectors__products__item__info-text">
              <strong>Цвет:</strong> {item.color}
            </p>
          : ''
        }
        {item.bracing 
          ? <p className="retroreflectors__products__item__info-text">
              <strong>Крепление:</strong> {item.bracing}
            </p>
          : ''
        }
        {item.tape 
          ? <p className="retroreflectors__products__item__info-text">
              <strong>Цвет пленки:</strong> {item.tape}
            </p>
          : ''
        }
      </div>

      <div className="retroreflectors__products__item__result">
        <p className="retroreflectors__products__item__result-text">Стоимость</p>
        <p className="retroreflectors__products__item__result-price">От {item.price} рублей</p>
        <button className="retroreflectors__products__item__result-buy">В корзину</button>
      </div>
    </div>
  )
}

function RetroreflectorsPage() {
  return (
    <div className="App">
      <Header
        mainInfoVisible
        img={retroreflectorsBg}
        title="Дорожные световозвращатели (катафоты)"
      />

      <div className="page-container retroreflectors">
        <div className="retroreflectors__info">
          <div className="retroreflectors__info-content">
            <p className="retroreflectors__info-text">
              <strong>Дорожные светоотражатели (катафоты)</strong> устанавливаются на дорожном полотне 
              в качестве горизонтальной разметки. Они повышают безопасность дорожного движения: помогают 
              водителям ориентироваться на сложных участках дороги, отмечают опасные повороты, пешеходные переходы и съезды. 
            </p>
            <p className="retroreflectors__info-text">
              Компания РусДорЗнак является сертифицированным производителем средств обеспечения безопасности 
              дорожного движения. Наша продукция полностью соответствует стандартам ГОСТ и мы используем только 
              сертифицированные материалы. 
            </p>
            <button className="retroreflectors__info-btn">Оставить заявку</button>
          </div>
          <img src={infoImg} alt="road img" className="retroreflectors__info-img" />
        </div>
      </div>

      <AdvantagesMini arr={advantagesMini} />

      <div className="page-container retroreflectors">
        <div className="retroreflectors__products">
          {retroreflectorsProducts.map((item) => (
            ProductItem(item)
          ))}
        </div>
      </div>
      
      <Footer
        deliveryVisible
      />
    </div>
  )
}

export default RetroreflectorsPage