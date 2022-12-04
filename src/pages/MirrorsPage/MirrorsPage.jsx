import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

import { mirrorsProducts } from '../../mocks/mirrorsProducts';

import MirrorsBg from '../../assets/imgs/MirrorsBg.png'
import mirror from '../../assets/imgs/mirror.png'

import './MirrorsPage.scss'

function MirrorsPage() {
  return (
    <div className="App">
      <Header
        mainInfoVisible={true}
        img={MirrorsBg}
        title="Сферические дорожные зеркала"
      />

      <div className="page-container mirrors">
        <div className="mirrors__info">
          <div className="mirrors__info-content">
            <p className="mirrors__info-text">
              <strong>Светодиодный светофор</strong> является эффективным средством для предупреждения водителей 
              о приближении к пешеходному переходу. Это оборудование может работать от электросети или 
              полностью автономно, с использованием солнечных батарей, встроенных в конструкцию.
            </p>
            <p className="mirrors__info-text">
              Компания РусДорЗнак предлагает дорожным службам и частным клиентам купить светодиодный светофор нашего 
              производства. В своей продукции мы используем долговечные осветительные системы и детали корпуса, не 
              требующие регулярного обслуживания и устойчивые к неблагоприятным погодным факторам.
            </p>
            <button className="mirrors__info-btn">Оставить заявку</button>
          </div>
          <img src={mirror} alt="mirror" className="mirrors__info-img"/>
        </div>
      </div>

      <div className="page-container mirrors">
        <div className="mirrors__products">
          {mirrorsProducts.map((item) => (
            <div className="mirrors__products__item">
              <img src={item.url} alt="img" className="mirrors__products__item-img" />

              <p className="mirrors__products__item-title">{item.title}</p>

              <div className="mirrors__products__item__specifications">
                <div className="mirrors__products__item__specifications__item">
                  <p className="mirrors__products__item__specifications__item-title">Диаметр</p>
                  <p className="mirrors__products__item__specifications__item-value">{item.diametr}</p>
                </div>
                <div className="mirrors__products__item__specifications__item">
                  <p className="mirrors__products__item__specifications__item-title">Зеркальная часть</p>
                  <p className="mirrors__products__item__specifications__item-value">{item.mirror}</p>
                </div>
                <div className="mirrors__products__item__specifications__item">
                  <p className="mirrors__products__item__specifications__item-title">Основание</p>
                  <p className="mirrors__products__item__specifications__item-value">{item.karkas}</p>
                </div>
                <div className="mirrors__products__item__specifications__item">
                  <p className="mirrors__products__item__specifications__item-title">Вес</p>
                  <p className="mirrors__products__item__specifications__item-value">{item.weight}</p>
                </div>
                <div className="mirrors__products__item__specifications__item">
                  <p className="mirrors__products__item__specifications__item-title">Крепления</p>
                  <p className="mirrors__products__item__specifications__item-value">{item.bracing}</p>
                </div>
              </div>

              <div className="mirrors__products__item__total">
                <div className="mirrors__products__item__total__price">
                  <p className="mirrors__products__item__total__price-title">Стоимость</p>
                  <p className="mirrors__products__item__total__price-value">{item.price} рублей</p>
                </div>
                <button className="mirrors__products__item__total-btn">В корзину</button>
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

export default MirrorsPage