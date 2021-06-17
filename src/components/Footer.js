import instaFooter from './../img/pic/insta-footer.png'

import './footer.scss'

export default function Footer(props) {
  return (
    <footer className="page-footer">
  <div className="page-footer__wrapper">
    <section className="footer">
      <div className="footer__insta">
        <h3 className="footer__subtitle">Мы в инстаграмме</h3>

        <div className="insta__img">
          <img src={instaFooter} alt="footer instagram"/>
        </div>
      </div>

      <div className="footer__info">
        <h3 className="footer__subtitle">Информация</h3>

        <ul className="info__list list">
          <li className="info__item">
            <a href="#" className="info__link">Акции</a>
          </li>

          <li className="info__item">
            <a href="#" className="info__link">Бренды</a>
          </li>

          <li className="info__item">
            <a href="#" className="info__link">Программы ухода</a>
          </li>

          <li className="info__item">
            <a href="#" className="info__link">Оплата и доставка</a>
          </li>

          <li className="info__item">
            <a href="#" className="info__link">Ингридиенты</a>
          </li>

          <li className="info__item">
            <a href="#" className="info__link">Контакты </a>
          </li>
        </ul>
      </div>

      <div className="footer__contacts">
        <h3 className="footer__subtitle">Контакты</h3>
        <a href="tel:3800684555053" className="contacts__telephone"
          >+380 (068) 455-50-53</a
        >
        <button className="button outline-btn">Обратный звонок</button>
        <a href="#" className="contacts__link link">shop.krasunya.ua@gmail.com</a>
      </div>

      <div className="footer__last-string">
        <p className="copyright">
          © 2019 KRASUNYA интернет магазин лечащей косметики. все права
          защищены.
        </p>

        <a href="#" className="last-string__link">Конфиденциальность</a>
        <a href="#" className="last-string__link">Персональные данные</a>
      </div>
    </section>
  </div>
</footer>

  )
}