import './Footer.scss';

import footer from '../../assets/imgs/footer.png'
import footerPhone from '../../assets/imgs/footer-phone.jpg'

function Footer({ deliveryVisible }) {
  return (
    <div className="footer-wrapper">
      {deliveryVisible && (
        <footer className="footer">
          <div className="footer__darkner" />
          <div className="footer__inner page-container">
            <h2 className="footer__title">Хотите заказать доставку?</h2>
            <p className="footer__subtitle">
              Воспользуйтесь формой обратной связи.
            </p>
            <p className="footer__subtitle last-title">
              Наши менеджеры ответят на любые вопросы.
            </p>
            <form className="footer__delivery-form">
              <input type="text" placeholder="Ваше имя" className="footer__input name" />
              <input type="text" placeholder="Ваш e-mail" className="footer__input email" />
              <input type="text" placeholder="Ваш телефон" className="footer__input phone-number" />
            </form>
            <p className="footer__dop">Отправляя заявку вы соглашаетесь на обработку данных и с условиями <span className="footer__terms">политики конфиденциальности</span>.</p>

            <button type="submit" className="footer__submit-btn">Отправить заявку</button>
          </div>
        </footer>
      )}
      
      <img src={footer} alt="" className="footer__footer" />
    </div>
  )
}

export default Footer
