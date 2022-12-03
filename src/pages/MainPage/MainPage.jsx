import './MainPage.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import dorZnakiBg from '../../assets/imgs/dor-znaki.png'
import contentInfoFirst from '../../assets/imgs/content_info_first.png'
import contentInfoSecond from '../../assets/imgs/content_info_second.png'
import Details from '../../components/Details/Details'
import PropSuperView from '../../components/PropSuperView/PropSuperView'

function MainPage() {
  return (
    <div className="App">
      <Header
        mainInfoVisible
        title="Дорожные знаки с оптико-волоконной засветкой"
        desc="Уникальная новейшая технология! Полностью собственное производство!"
        img={dorZnakiBg}
      />
      <div className="page-container znak-main">
        <div className="content-info">
          <div className="content-info__item">
            <div className="content-info__text-wrapper">
              <p className="content-info__desc">
                <strong className="content-info__desc_bold">Оптоволоконные дорожные знаки</strong> – это инновационное направление в сфере организации безопасного дорожного движения. Такие знаки применяются для привлечения дополнительного внимания водителей в темное время суток или в условиях плохой видимости.
              </p>
              <p>&nbsp;</p>
              <p className="content-info__desc">
                Уникальность данной технологии заключается в том, что засветка знака может осуществляться всего ОДНИМ светодиодом. Дальнейшее распределение световых потоков происходит с помощью оптических волокон с максимальным КПД светопередачи. Это позволяет добиться равномерной и яркой засветки элементов дорожного знака при энергопотреблении всего в 1-3 Вт.
              </p>
              <p>&nbsp;</p>
              <p className="content-info__desc">
                Низкое энергопотребление оптоволоконного дорожного знака позволяет сильно сэкономить затраты на солнечные электростанции 
                и использовать знаки с солнечными панелями малой мощности.
              </p>
            </div>
            <img src={contentInfoFirst} alt="" className="content-info__img" />
          </div>
        </div>
        <div className="content-info">
          <div className="content-info__item">
            <div className="content-info__desc-wrapper">
              <span className="content-info__highlighter"></span>
              <div className="content-info__text-wrapper">
                <p className="content-info__desc">
                  <strong className="content-info__desc_bold">
                    Компания РусДорЗнак может изготовить дорожные знаки 
                    с оптико-волоконной подсветкой любых видов форм и размеров
                  </strong>
                </p>
                <p>&nbsp;</p>
                <p className="content-info__desc">
                  Все наши светодиодные знаки мы можем укомплектовать автономными солнечными электростанциями.Вам останется только установить солнечную станцию на стойку и подключить 
                  к ней дорожный знак. Стойку для установки при необходимости мы тоже можем поставить в комплекте.
                </p>
              </div>
            </div>
            <img src={contentInfoSecond} alt="" className="content-info__img" />
          </div>
        </div>
      </div>
      <Details />

      <div className="super-view__wrapper">
        <div className="super-view page-container">
          <h1 className="super-view__title">
            Дорожный знак 5.19.1 с оптико-волоконной подсветкой
          </h1>
          <div className="super-view__inner">
            <PropSuperView />

          </div>
        </div>
      </div>

      <Footer
        deliveryVisible
      />
    </div>
  )
}

export default MainPage
