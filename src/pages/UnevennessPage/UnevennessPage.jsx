import { useState } from "react"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

import { unevennessHeaderArr } from '../../mocks/unevennessHeaderArr'
import { previewsIdn } from '../../mocks/previewsIdn'
// import { unevennessProducts } from '../../mocks/unevennessProducts';

import nevennessBg from '../../assets/imgs/nevenness_bg.png'
import unevenness from '../../assets/imgs/unevenness.png'
import unevenness__info from '../../assets/imgs/unevenness__info.png'

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
  const [counterOne, setCounterOne] = useState(1.5);
  const [counterTwo, setCounterTwo] = useState(2);
  const [counterThree, setCounterThree] = useState(4);
  const [selectedProduct, setSelectedProduct] = useState(0);

  return (
    <div className="App">
      <Header
        mainInfoVisible={true}
        img={nevennessBg}
        arr={unevennessHeaderArr}
        title="Искусственная дорожная неровность (ИДН), демпферы, колесоотбойники"
        desc={selectedProduct.description ? selectedProduct.description : "От производителя с доставкой по всей России" }
      />

      <div className="page-container unevenness">
        <div className="unevenness__info">
          {selectedProduct === 0
            ? <div className="unevenness__info-content">
                  <p className="unevenness__info-text">
                    На сайте компании РусДорЗнак можно оставить заявку и купить <strong>ИДН («лежачий полицейский»)</strong>
                    и другие средства ограничения скоростного режима. Искусственные дорожные неровности широко 
                    применяются в обустройстве дорожных переездов, пешеходных переходов и других участков дороги, 
                    на которых необходимо снизить скорость передвижения.
                  </p>
                  <button className="unevenness__info-btn">Оставить заявку</button>
                </div>
            : <h3 className="unevenness__info-title">{selectedProduct.title}</h3>
          }
        </div>
      </div>

      <div className="page-container unevenness">
        <div className="unevenness__calculate">
          <h3 className="unevenness__calculate-title">Рассчитайте стоимость</h3>
          <img src={unevenness} alt="unevenness" className="unevenness__calculate-img" />

          <div className="unevenness__calculate__actions">
            <div className="unevenness__calculate__actions__counter">
              <p className="unevenness__calculate__actions__counter-title">Длина (м)</p>
              <div className="unevenness__calculate__actions__counter__buttons">
                <p 
                  className="unevenness__calculate__actions__counter__buttons-minus"
                  onClick={() => setCounterOne(counterOne > 0 ? counterOne - 0.1 : 0)}
                >
                  -
                </p>
                <p className="unevenness__calculate__actions__counter__buttons-value">{Math.floor(counterOne * 10) / 10}</p>
                <p 
                  className="unevenness__calculate__actions__counter__buttons-plus"
                  onClick={() => setCounterOne(counterOne + 0.1)}
                >
                  +
                </p>
              </div>
            </div>

            <div className="unevenness__calculate__actions__counter">
              <p className="unevenness__calculate__actions__counter-title">Средний элемент (шт)</p>
              <div className="unevenness__calculate__actions__counter__buttons">
                <p 
                  className="unevenness__calculate__actions__counter__buttons-minus"
                  onClick={() => setCounterTwo(counterTwo > 0 ? counterTwo - 1 : 0)}
                >
                  -
                </p>
                <p className="unevenness__calculate__actions__counter__buttons-value">{counterTwo}</p>
                <p 
                  className="unevenness__calculate__actions__counter__buttons-plus"
                  onClick={() => setCounterTwo(counterTwo + 1)}
                >
                  +
                </p>
              </div>
            </div>

            <div className="unevenness__calculate__actions__counter">
              <p className="unevenness__calculate__actions__counter-title">Концевой элемент (шт)</p>
              <div className="unevenness__calculate__actions__counter__buttons">
                <p 
                  className="unevenness__calculate__actions__counter__buttons-minus"
                  onClick={() => setCounterThree(counterThree > 0 ? counterThree - 1 : 0)}
                >
                  -
                </p>
                <p className="unevenness__calculate__actions__counter__buttons-value">{counterThree}</p>
                <p 
                  className="unevenness__calculate__actions__counter__buttons-plus"
                  onClick={() => setCounterThree(counterThree + 1)}
                >
                  +
                </p>
              </div>
            </div>

            <div className="unevenness__calculate__actions__select">
              <p className="unevenness__calculate__actions__select-title">Нужны анкеры?</p>
              <select selected={"Да"}>
                <option value="Да">Да</option>
                <option value="Нет">Нет</option>
              </select>
            </div>

            <div className="unevenness__calculate__actions__select">
              <p className="unevenness__calculate__actions__select-title">Материал</p>
              <select selected={"Резина"}>
                <option value="Резина">Резина</option>
                <option value="Пластик">Пластик</option>
              </select>
            </div>
          </div>

          <div className="unevenness__calculate__total">
            <div className="unevenness__calculate__total__item">
              <p className="unevenness__calculate__total__item-title">Вес</p>
              <p className="unevenness__calculate__total__item-value">23.2 кг</p>
            </div>

            <div className="unevenness__calculate__total__item">
              <p className="unevenness__calculate__total__item-title">Объем</p>
              <p className="unevenness__calculate__total__item-value">0.03 м3</p>
            </div>

            <div className="unevenness__calculate__total__item">
              <p className="unevenness__calculate__total__item-title">Анкеры</p>
              <p className="unevenness__calculate__total__item-value">14 шт</p>
            </div>

            <div className="unevenness__calculate__total__item">
              <p className="unevenness__calculate__total__item-title">Стоимость</p>
              <p className="unevenness__calculate__total__item-price">2 680 рублей</p>
            </div>

            <button className="unevenness__calculate__total-btn">Связаться</button>
          </div>
        </div>
      </div>
      
      {selectedProduct === 0
        ? <div className="page-container unevenness">
            <div className="unevenness__products">
              {previewsIdn.map((item) => (
                <div className="unevenness__products__item">
                  <img 
                    src={item.url} 
                    alt="img" 
                    className="unevenness__products__item-img" 
                    onClick={() => setSelectedProduct(item)}
                  />
                  <p className="unevenness__products__item-text">{item.title}</p>
                </div>
              ))}
            </div>

            <img src={unevenness__info} alt="info" className="unevenness-readyInfo" />
          </div>
        : <div className="page-container unevenness">
            <div className="unevenness__nav">
              {previewsIdn.map((item) => (
                <p 
                  className={`unevenness__nav-item${selectedProduct.id === item.id ? '-active' : ''}`}
                  onClick={() => setSelectedProduct(item)}
                >
                    {item.title}
                </p>
              ))}
            </div>

            <div className="unevenness__products">
              {selectedProduct.products.map((item) => (
                <div className="unevenness__product">
                  <img 
                    className="unevenness__product-img" 
                    src={item.url} 
                    alt="img" 
                  />
                  <p className="unevenness__product-title">{item.title}</p>

                  <div className="unevenness__product__specifications">
                    {item.size
                      ? <div className="unevenness__product__specifications__item">
                          <p className="unevenness__product__specifications__item-title">Размер (мм)</p>
                          <p className="unevenness__product__specifications__item-value">{item.size}</p>
                        </div>
                      : ''
                    }
                    {item.weight
                      ? <div className="unevenness__product__specifications__item">
                          <p className="unevenness__product__specifications__item-title">Вес (кг)</p>
                          <p className="unevenness__product__specifications__item-value">{item.weight}</p>
                        </div>
                      : ''
                    }
                    {item.material
                      ? <div className="unevenness__product__specifications__item">
                          <p className="unevenness__product__specifications__item-title">Материал</p>
                          <p className="unevenness__product__specifications__item-value">{item.material}</p>
                        </div>
                      : ''
                    }
                    {item.ankers
                      ? <div className="unevenness__product__specifications__item">
                          <p className="unevenness__product__specifications__item-title">Анкеров</p>
                          <p className="unevenness__product__specifications__item-value">{item.ankers}</p>
                        </div>
                      : ''
                    }
                  </div>

                  <div className="unevenness__product__total">
                    <div className="unevenness__product__total__price">
                      <p className="unevenness__product__total__price-title">Стоимость</p>
                      <p className="unevenness__product__total__price-value">{item.price} рублей</p>
                    </div>
                    <button className="unevenness__product__total-btn">В корзину</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
      }
      
      <Footer
        deliveryVisible={true}
      />
    </div>
  )
}

export default UnevennessPage