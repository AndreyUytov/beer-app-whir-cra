import './catalog-main.scss'
import card from './../img/pic/card.png'
import present from './../img/pic/present.png'
import akcentCard from './../img/pic/akcent-card.png'

import BreadCrumbs from './BreadCrumbs'
import CheckboxLabel from './CheckboxLabel'
import { useState } from 'react'

export default function CatalogMain(props) {
  const [query, setQuery] = useState({})

  const handleChangeLabel = (evt) => {
    let name = evt.target.name
    let value = evt.target.value
    let checked = evt.target.checked
    let typeInput = evt.target.type

    if (checked && typeInput === 'checkbox') {
      setQuery((query) => {
        if (!query[name]) {
          query[name] = new Set().add(value)
        }
        return { ...query, [name]: query[name].add(value) }
      })
    }
  }
  return (
    <>
      <main className="catalog-main">
        <div className="catalog-main__breadcrumbs">
          <BreadCrumbs />
        </div>

        <div className="catalog-left">
          <section className="catalog__filter">
            <h3 className="filter__title">Фильтр</h3>

            <form className="filter__form">
              <fieldset className="form__fieldset">
                <div className="legend-price__wrapper">
                  <legend className="form__legend form__legend--price">
                    Цена
                  </legend>
                  <label className="form__label">
                    <input type="checkbox" className="form__input" />
                    <span className="form__checkbox-marker">
                      <svg width="18" height="18">
                        <use href="#checkbox" />
                      </svg>
                    </span>
                    <span className="form__text">Скидки</span>
                  </label>
                </div>

                <div className="range-inputs-wrapper">
                  <div className="range__wrapper">
                    <span className="range__toggle range__toggle--left"></span>
                    <span className="range__bar"></span>
                    <span className="range__toggle range__toggle--right"></span>
                  </div>
                  <div className="price-wrapper">
                    <label className="price-label">
                      <input
                        type="text"
                        className="price-input price-input--min"
                        placeholder="1000"
                      />
                    </label>
                    <label className="price-label">
                      <input
                        type="text"
                        className="price-input price-input--max"
                        placeholder="5000"
                      />
                    </label>
                  </div>
                </div>
              </fieldset>

              <fieldset className="form__fieldset">
                <legend className="form__legend">Тип кожи</legend>
                <CheckboxLabel
                  name="proba"
                  handleChange={handleChangeLabel}
                  valueCheckbox="Text"
                  checked={query.proba?.has('Text') ? true : false}
                />

                <label className="form__label">
                  <input type="checkbox" className="form__input" />
                  <span className="form__checkbox-marker">
                    <svg width="18" height="18">
                      <use href="#checkbox" />
                    </svg>
                  </span>
                  <span className="form__text">Жирная</span>
                </label>
                <label className="form__label">
                  <input type="checkbox" className="form__input" />
                  <span className="form__checkbox-marker">
                    <svg width="18" height="18">
                      <use href="#checkbox" />
                    </svg>
                  </span>
                  <span className="form__text">Сухая</span>
                </label>

                <label className="form__label">
                  <input type="checkbox" className="form__input" />
                  <span className="form__checkbox-marker">
                    <svg width="18" height="18">
                      <use href="#checkbox" />
                    </svg>
                  </span>
                  <span className="form__text">Нормальная</span>
                </label>
              </fieldset>

              <fieldset className="form__fieldset">
                <legend className="form__legend">Возраст</legend>
                <label className="form__label">
                  <input type="checkbox" className="form__input" />
                  <span className="form__checkbox-marker">
                    <svg width="18" height="18">
                      <use href="#checkbox" />
                    </svg>
                  </span>
                  <span className="form__text">20-25</span>
                </label>

                <label className="form__label">
                  <input type="checkbox" className="form__input" />
                  <span className="form__checkbox-marker">
                    <svg width="18" height="18">
                      <use href="#checkbox" />
                    </svg>
                  </span>
                  <span className="form__text">26-30</span>
                </label>
                <label className="form__label">
                  <input type="checkbox" className="form__input" />
                  <span className="form__checkbox-marker">
                    <svg width="18" height="18">
                      <use href="#checkbox" />
                    </svg>
                  </span>
                  <span className="form__text">31-35</span>
                </label>

                <label className="form__label">
                  <input type="checkbox" className="form__input" />
                  <span className="form__checkbox-marker">
                    <svg width="18" height="18">
                      <use href="#checkbox" />
                    </svg>
                  </span>
                  <span className="form__text">36-40</span>
                </label>
              </fieldset>

              <fieldset className="form__fieldset">
                <legend className="form__legend">Тип кожи</legend>
                <label className="form__label">
                  <input type="radio" name="care" className="form__input" />
                  <span className="form__checkbox-marker form__checkbox-marker--radio">
                    <svg width="20" height="20">
                      <use href="#radio" />
                    </svg>
                  </span>
                  <span className="form__text">Текст</span>
                </label>
                <label className="form__label">
                  <input type="radio" name="care" className="form__input" />
                  <span className="form__checkbox-marker form__checkbox-marker--radio">
                    <svg width="20" height="20">
                      <use href="#radio" />
                    </svg>
                  </span>
                  <span className="form__text">Текст</span>
                </label>
              </fieldset>
            </form>
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
