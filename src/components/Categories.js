import { Link } from 'react-router-dom'

import './categories.scss'

export default function Categories(props) {
  return (
    <section className="categories">
      <h2 className="section-title">Категории</h2>

      <p className="section-description">
        Современные технологии и лучшие традиции классической косметологии на
        службе вашей красоты и здоровья.
      </p>

      <ul className="categories__list list">
        <li className="categories__item">
          <Link to="/catalog" className="categories__link">
            <span className="categories__link-text">
              Очищающие средства, тонизация
            </span>
          </Link>
        </li>

        <li className="categories__item">
          <Link to="/catalog" className="categories__link">
            <span className="categories__link-text">
              Очищающие средства, тонизация
            </span>
          </Link>
        </li>

        <li className="categories__item">
          <Link to="/catalog" className="categories__link">
            <span className="categories__link-text">
              Очищающие средства, тонизация
            </span>
          </Link>
        </li>

        <li className="categories__item">
          <Link to="/catalog" className="categories__link">
            <span className="categories__link-text">
              Очищающие средства, тонизация
            </span>
          </Link>
        </li>

        <li className="categories__item">
          <Link to="/catalog" className="categories__link">
            <span className="categories__link-text">
              Очищающие средства, тонизация
            </span>
          </Link>
        </li>

        <li className="categories__item">
          <Link to="/catalog" className="categories__link">
            <span className="categories__link-text">
              Очищающие средства, тонизация
            </span>
          </Link>
        </li>

        <li className="categories__item">
          <Link to="/catalog" className="categories__link">
            <span className="categories__link-text">
              Очищающие средства, тонизация
            </span>
          </Link>
        </li>

        <li className="categories__item">
          <Link to="/catalog" className="categories__link">
            <span className="categories__link-text">
              Очищающие средства, тонизация
            </span>
          </Link>
        </li>

        <li className="categories__item">
          <Link to="/catalog" className="categories__link">
            <span className="categories__link-text">
              Очищающие средства, тонизация
            </span>
          </Link>
        </li>

        <li className="categories__item">
          <Link to="/catalog" className="categories__link">
            <span className="categories__link-text">
              Очищающие средства, тонизация
            </span>
          </Link>
        </li>
      </ul>
    </section>
  )
}
