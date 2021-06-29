import './catalog-main.scss'
import card from './../img/pic/card.png'
import present from './../img/pic/present.png'
import akcentCard from './../img/pic/akcent-card.png'

import BreadCrumbs from './BreadCrumbs'
import FilterForm from './FIlterForm'

export default function CatalogMain(props) {
  return (
    <>
      <main className="catalog-main">
        <div className="catalog-main__breadcrumbs">
          <BreadCrumbs />
        </div>

        <div className="catalog-left">
          <section className="catalog__filter">
            <h3 className="filter__title">Фильтр</h3>
            <FilterForm />
          </section>
        </div>

        <section className="catalog-right">
          <div className="catalog-right__wrapper">
            <h2 className="catalog__title">Уход за чем то</h2>

            <div className="catalog__tag-sort-wrapper">
              <ul className="catalog__tags-list tags-list list">
                <li className="tags-list__item">
                  <button className="tags-list__item-btn button">
                    Tag name
                    <svg width="17" height="17">
                      <use href="#close" />
                    </svg>
                  </button>
                </li>
                <li className="tags-list__item">
                  <button className="tags-list__item-btn button">
                    <svg width="18" height="18">
                      <use href="#tag-plus" />
                    </svg>
                  </button>
                </li>
              </ul>

              <custom-select className="catalog__sort" title="Сортировать по">
                <span data-value="1" slot="option">
                  По цене
                </span>
                <span data-value="2" slot="option">
                  По рейтингу
                </span>
              </custom-select>
            </div>

            <ul className="catalog__card-list list">
              <li className="card-list__item card">
                <a href="card.html" className="card__link">
                  <img alt="beer view" src={card} className="card__img" />
                  <div className="card__bottom">
                    <p className="card__info">
                      Piruvic40 solution Medicare Proffessional
                    </p>
                    <p className="card__price">
                      12 250 грн.
                      <span className="card__discount"> -30% </span>
                    </p>
                  </div>
                  <div className="card__present">
                    <h5 className="card__present-title">подарок</h5>
                    <div className="card__present-img">
                      <img alt="beer view" src={present} />
                    </div>
                  </div>
                  <div className="card__marker">
                    <span className="card__marker-text">хит</span>
                  </div>
                </a>
              </li>

              <li className="card-list__item card">
                <a href="card.html" className="card__link">
                  <img alt="beer view" src={card} className="card__img" />
                  <div className="card__bottom">
                    <p className="card__info">
                      Piruvic40 solution Medicare Proffessional
                    </p>
                    <p className="card__price">
                      12 250 грн.
                      <span className="card__discount"> -30% </span>
                    </p>
                  </div>
                  <div className="card__present">
                    <h5 className="card__present-title">подарок</h5>
                    <div className="card__present-img">
                      <img alt="beer view" src={present} />
                    </div>
                  </div>
                  <div className="card__marker">
                    <span className="card__marker-text">хит</span>
                  </div>
                </a>
              </li>

              <li className="card-list__item card">
                <a href="card.html" className="card__link">
                  <img alt="beer view" src={card} className="card__img" />
                  <div className="card__bottom">
                    <p className="card__info">
                      Piruvic40 solution Medicare Proffessional
                    </p>
                    <p className="card__price">
                      12 250 грн.
                      <span className="card__discount"> -30% </span>
                    </p>
                  </div>
                  <div className="card__present">
                    <h5 className="card__present-title">подарок</h5>
                    <div className="card__present-img">
                      <img alt="beer view" src={present} />
                    </div>
                  </div>
                  <div className="card__marker">
                    <span className="card__marker-text">хит</span>
                  </div>
                </a>
              </li>

              <li className="card-list__item akcent-card">
                <a href="card.html" className="akcent-card__link">
                  <div className="akcent-card__left">
                    <h3 className="akcent-card__title">Dr Kraut Milano</h3>
                    <p className="akcent-card__desc">
                      Softening gel with calendula
                    </p>
                    <p className="akcent-card__price">1 300 грн</p>
                  </div>
                  <div className="akcent-card__right">
                    <img alt="beer view" src={akcentCard} />
                  </div>
                </a>
              </li>

              <li className="card-list__item card">
                <a href="card.html" className="card__link">
                  <img alt="beer view" src={card} className="card__img" />
                  <div className="card__bottom">
                    <p className="card__info">
                      Piruvic40 solution Medicare Proffessional
                    </p>
                    <p className="card__price">
                      12 250 грн.
                      <span className="card__discount"> -30% </span>
                    </p>
                  </div>
                  <div className="card__present">
                    <h5 className="card__present-title">подарок</h5>
                    <div className="card__present-img">
                      <img alt="beer view" src={present} />
                    </div>
                  </div>
                  <div className="card__marker">
                    <span className="card__marker-text">хит</span>
                  </div>
                </a>
              </li>

              <li className="card-list__item card">
                <a href="card.html" className="card__link">
                  <img alt="beer view" src={card} className="card__img" />
                  <div className="card__bottom">
                    <p className="card__info">
                      Piruvic40 solution Medicare Proffessional
                    </p>
                    <p className="card__price">
                      12 250 грн.
                      <span className="card__discount"> -30% </span>
                    </p>
                  </div>
                  <div className="card__present">
                    <h5 className="card__present-title">подарок</h5>
                    <div className="card__present-img">
                      <img alt="beer view" src={present} />
                    </div>
                  </div>
                  <div className="card__marker">
                    <span className="card__marker-text">хит</span>
                  </div>
                </a>
              </li>

              <li className="card-list__item akcent-card">
                <a href="card.html" className="akcent-card__link">
                  <div className="akcent-card__left">
                    <h3 className="akcent-card__title">Dr Kraut Milano</h3>
                    <p className="akcent-card__desc">
                      Softening gel with calendula
                    </p>
                    <p className="akcent-card__price">1 300 грн</p>
                  </div>
                  <div className="akcent-card__right">
                    <img alt="beer view" src={akcentCard} />
                  </div>
                </a>
              </li>

              <li className="card-list__item card">
                <a href="card.html" className="card__link">
                  <img alt="beer view" src={card} className="card__img" />
                  <div className="card__bottom">
                    <p className="card__info">
                      Piruvic40 solution Medicare Proffessional
                    </p>
                    <p className="card__price">
                      12 250 грн.
                      <span className="card__discount"> -30% </span>
                    </p>
                  </div>
                  <div className="card__present">
                    <h5 className="card__present-title">подарок</h5>
                    <div className="card__present-img">
                      <img alt="beer view" src={present} />
                    </div>
                  </div>
                  <div className="card__marker">
                    <span className="card__marker-text">хит</span>
                  </div>
                </a>
              </li>

              <li className="card-list__item card">
                <a href="card.html" className="card__link">
                  <img alt="beer view" src={card} className="card__img" />
                  <div className="card__bottom">
                    <p className="card__info">
                      Piruvic40 solution Medicare Proffessional
                    </p>
                    <p className="card__price">
                      12 250 грн.
                      <span className="card__discount"> -30% </span>
                    </p>
                  </div>
                  <div className="card__present">
                    <h5 className="card__present-title">подарок</h5>
                    <div className="card__present-img">
                      <img alt="beer view" src={present} />
                    </div>
                  </div>
                  <div className="card__marker">
                    <span className="card__marker-text">хит</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}
