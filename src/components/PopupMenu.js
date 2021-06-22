import './popup-menu.scss'

export default function PopupMenu({ isVisible, setIsVisible }) {
  return (
    <section
      className="popup-menu"
      hidden={isVisible}
      onClick={() => setIsVisible(true)}
    >
      <div className="popup-menu__inner">
        <ul className="popup-menu__list list">
          <li className="popup-menu__item">
            <a href="catalog.html" className="popup-menu__link">
              <div className="popup-menu__link-img"></div>

              <p className="popup-menu__link-text">
                Очищающие средства, тонизация
              </p>
            </a>
          </li>

          <li className="popup-menu__item">
            <a href="catalog.html" className="popup-menu__link">
              <div className="popup-menu__link-img"></div>

              <p className="popup-menu__link-text">
                Очищающие средства, тонизация
              </p>
            </a>
          </li>

          <li className="popup-menu__item">
            <a href="catalog.html" className="popup-menu__link">
              <div className="popup-menu__link-img"></div>

              <p className="popup-menu__link-text">
                Очищающие средства, тонизация
              </p>
            </a>
          </li>

          <li className="popup-menu__item">
            <a href="catalog.html" className="popup-menu__link">
              <div className="popup-menu__link-img"></div>

              <p className="popup-menu__link-text">
                Очищающие средства, тонизация
              </p>
            </a>
          </li>

          <li className="popup-menu__item">
            <a href="catalog.html" className="popup-menu__link">
              <div className="popup-menu__link-img"></div>

              <p className="popup-menu__link-text">
                Очищающие средства, тонизация
              </p>
            </a>
          </li>

          <li className="popup-menu__item">
            <a href="catalog.html" className="popup-menu__link">
              <div className="popup-menu__link-img"></div>

              <p className="popup-menu__link-text">
                Очищающие средства, тонизация
              </p>
            </a>
          </li>

          <li className="popup-menu__item">
            <a href="catalog.html" className="popup-menu__link">
              <div className="popup-menu__link-img"></div>

              <p className="popup-menu__link-text">
                Очищающие средства, тонизация
              </p>
            </a>
          </li>

          <li className="popup-menu__item">
            <a href="catalog.html" className="popup-menu__link">
              <div className="popup-menu__link-img"></div>

              <p className="popup-menu__link-text">
                Очищающие средства, тонизация
              </p>
            </a>
          </li>

          <li className="popup-menu__item">
            <a href="catalog.html" className="popup-menu__link">
              <div className="popup-menu__link-img"></div>

              <p className="popup-menu__link-text">
                Очищающие средства, тонизация
              </p>
            </a>
          </li>

          <li className="popup-menu__item">
            <a href="catalog.html" className="popup-menu__link">
              <div className="popup-menu__link-img"></div>

              <p className="popup-menu__link-text">
                Очищающие средства, тонизация
              </p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
