import { Link } from 'react-router-dom'

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
            <Link to="/catalog" className="popup-menu__link">
              <div className="popup-menu__link-img"></div>

              <p className="popup-menu__link-text">
                Очищающие средства, тонизация
              </p>
            </Link>
          </li>

          <li className="popup-menu__item">
            <Link to="/catalog" className="popup-menu__link">
              <div className="popup-menu__link-img"></div>

              <p className="popup-menu__link-text">
                Очищающие средства, тонизация
              </p>
            </Link>
          </li>

          <li className="popup-menu__item">
            <Link to="/catalog" className="popup-menu__link">
              <div className="popup-menu__link-img"></div>

              <p className="popup-menu__link-text">
                Очищающие средства, тонизация
              </p>
            </Link>
          </li>

          <li className="popup-menu__item">
            <Link to="/catalog" className="popup-menu__link">
              <div className="popup-menu__link-img"></div>

              <p className="popup-menu__link-text">
                Очищающие средства, тонизация
              </p>
            </Link>
          </li>

          <li className="popup-menu__item">
            <Link to="/catalog" className="popup-menu__link">
              <div className="popup-menu__link-img"></div>

              <p className="popup-menu__link-text">
                Очищающие средства, тонизация
              </p>
            </Link>
          </li>

          <li className="popup-menu__item">
            <Link to="/catalog" className="popup-menu__link">
              <div className="popup-menu__link-img"></div>

              <p className="popup-menu__link-text">
                Очищающие средства, тонизация
              </p>
            </Link>
          </li>

          <li className="popup-menu__item">
            <Link to="/catalog" className="popup-menu__link">
              <div className="popup-menu__link-img"></div>

              <p className="popup-menu__link-text">
                Очищающие средства, тонизация
              </p>
            </Link>
          </li>

          <li className="popup-menu__item">
            <Link to="/catalog" className="popup-menu__link">
              <div className="popup-menu__link-img"></div>

              <p className="popup-menu__link-text">
                Очищающие средства, тонизация
              </p>
            </Link>
          </li>

          <li className="popup-menu__item">
            <Link to="/catalog" className="popup-menu__link">
              <div className="popup-menu__link-img"></div>

              <p className="popup-menu__link-text">
                Очищающие средства, тонизация
              </p>
            </Link>
          </li>

          <li className="popup-menu__item">
            <Link to="/catalog" className="popup-menu__link">
              <div className="popup-menu__link-img"></div>

              <p className="popup-menu__link-text">
                Очищающие средства, тонизация
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
