import { useParams } from "react-router-dom";

import './card-main.scss'

import BreadCrumbs from './BreadCrumbs'

export default function CardMain(props) {

  let { product } = useParams();
  return (
    <main className="card-main">

      <div className="card-main__inner">

        <div className="card-main__breadcrumbs">

        <BreadCrumbs links={[{label: 'Home', to: '/beer-app-whir-cra'},
          {label: 'Catalog', to: '/catalog'},
          {label: product, to: `/catalog/${product}`}]} />

        </div>

        <div className="card-main__card-content">

          <ul className="card-content__gallery-list list">

            <li className="gallery-list__item gallery-list__item--big">
              <img src="./../../images/card.png" />
            </li>

            <li className="gallery-list__item gallery-list__item--small">
              <img src="./../../images/gallery1.png" />
            </li>

            <li className="gallery-list__item gallery-list__item--small">
              <img src="./../../images/gallery2.png" />
            </li>

            <li className="gallery-list__item gallery-list__item--small">
              <img src="./../../images/card.png" />
            </li>

            <li className="gallery-list__item gallery-list__item--small">
              <img src="./../../images/card.png" />
            </li>

            <li className="gallery-list__item gallery-list__item--small">
              <img src="./../../images/card.png" />
            </li>

            <li className="gallery-list__item gallery-list__item--middle">
              <img src="./../../images/card.png" />
            </li>

            <li className="gallery-list__item gallery-list__item--small">
              <img src="./../../images/card.png" />
            </li>

            <li className="gallery-list__item gallery-list__item--small">
              <img src="./../../images/card.png" />
            </li>

            <li className="gallery-list__item gallery-list__item--small">
              <img src="./../../images/card.png" />
            </li>

          </ul>

          <div className="card-content__info">

            <div className="card-content__info-inner">

              <div className="card-content__info-description">
                <h2 className="card-content__info-title">
                  Гидрогелевые патчи нового поколения
                </h2>
                <div className="card-content__info-text">
                  <p>
                    Гидрогелевые патчи нового поколения профессиональной линейки с пептидами и коллоидным золотом снимают отечность, убирают круги под глазами, подтягивают мешки, устраняют "гусиные лапки". 
                  </p>
                  <p>
                    В последнее время хорошо себя зарекомендовали в смежных процедурах косметологии так как имеют уникальный состав и имеют моментальный эффект после применении уже в течении 20 минут.
                  </p>
                  <p>
                    Срок годности актуальной партии до 03.2022 года, дата выбита на каждой баночки с обратной стороны.
      Каждая баночка производителем запаяна в слюду, что гарантирует не вскрытие.
                  </p>
                </div>
              </div>

              <div className="card-content__info-application">
                <ul className="card-content__info-list list">
                  <li className="card-content__info-item">
                    <span className="card-content__info-item-counter">1</span>
                    После умывания произвести тонизацию кожу в области вокруг глаз
                  </li>

                  <li className="card-content__info-item">
                    <span className="card-content__info-item-counter">2</span>
                    Нанести патчи под глаза, оставить на 15-20 мин
                  </li>

                  <li className="card-content__info-item">
                    <span className="card-content__info-item-counter">3</span>
                    Растерите оставшуюся эссенцию с пачтей вокруг глаз.
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>

        <div className="card-main__aside">
          <div className="aside__inner">

            <div className="aside__top-line">

              <span className="aside__instock">В наличии</span>

              <div className="aside__rating">
                <svg width="120" height="24">

                  <use width="24" x="0" href="#full-star"/>

                  <use width="24" x="24" href="#full-star"/>

                  <use width="24" x="48" href="#full-star"/>
                  
                  <use width="24" x="72" href="#semi-star"/>

                  <use width="24" x="96" href="#empty-star" />

                </svg>
              </div>

            </div>

            <h2 className="aside__title">
              Гидрогелевые патчи Dr. Hedison
            </h2>

            <p className="aside__price">
              12 250 грн.
            </p>

            <div className="aside__card-controlls">

              <div className="card-controlls__amount">

                <button className="card-controlls__amount-btn card-controlls__amount-btn--minus button">
                  <svg width="46" height="46">
                    <use href="#minus" />
                  </svg>
                </button>

                <span className="card-controlls__amount-counter">
                  1
                </span>

                <button className="card-controlls__amount-btn card-controlls__amount-btn--plus button">
                  <svg width="46" height="46">
                    <use href="#plus" />
                  </svg>
                </button>

              </div>

              <div className="card-controlls__append-to">

                <button className="card-controlls__favorite-btn button">
                  <svg width="46" height="46">
                    <use href="#append-favorite" />
                  </svg>
                </button>

                <button className="card-controlls__basket-btn button background-btn">
                  В корзину
                </button>

              </div>

            </div>

            <div className="aside__structure">

              <h4 className="structure__title">
                Состав
              </h4>

              <ul className="structure__list list">

                <li className="structure__tag-item">
                  Экстракт бергамота
                </li>

                <li className="structure__tag-item">
                  Ромашка
                </li>

                <li className="structure__tag-item">
                  ТAcetyl Hexapeptide-8эг
                </li>

                <li className="structure__tag-item">
                  Розмарин
                </li>

                <li className="structure__tag-item">
                  Витамин С
                </li>

                <li className="structure__tag-item">
                  Экстракт цветка фрезии
                </li>

                <li className="structure__tag-item">
                  Бутилен гликоль
                </li>

                <li className="structure__tag-item">
                  Глиценин
                </li>

                <li className="structure__tag-item">
                  Тэг
                </li>

              </ul>

            </div>

            <div className="aside__brand">
              <h4 className="brand__title">
                Брэнд
              </h4>
              <svg width="122" height="19">
                <use href="#drhedison" />
              </svg>
            </div>

          </div>
        </div>

      </div>

      <section className="card-main__similar">

        <h3 className="similar__title">
          Похожие товары
        </h3>

        <div className="card-main__similar-wrapper">

          <div className="similar__list-wrapper">

            <ul className="similar__list list">
              <li className="similar__item card">
                <a href="#" className="card__link">
                  <img src="./../../images/card.png" className="card__img" />
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
                      <img src="./../../images/present.png" />
                    </div>
                  </div>
                  <div className="card__marker">
                    <span className="card__marker-text">хит</span>
                  </div>
                </a>
              </li>
        
              <li className="similar__item card">
                <a href="#" className="card__link">
                  <img src="./../../images/card.png" className="card__img" />
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
                      <img src="./../../images/present.png" />
                    </div>
                  </div>
                  <div className="card__marker">
                    <span className="card__marker-text">хит</span>
                  </div>
                </a>
              </li>
        
              <li className="similar__item card">
                <a href="#" className="card__link">
                  <img src="./../../images/card.png" className="card__img" />
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
                      <img src="./../../images/present.png" />
                    </div>
                  </div>
                  <div className="card__marker">
                    <span className="card__marker-text">хит</span>
                  </div>
                </a>
              </li>
        
              <li className="similar__item card">
                <a href="#" className="card__link">
                  <img src="./../../images/card.png" className="card__img" />
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
                      <img src="./../../images/present.png" />
                    </div>
                  </div>
                  <div className="card__marker">
                    <span className="card__marker-text">хит</span>
                  </div>
                </a>
              </li>
        
              <li className="similar__item card">
                <a href="#" className="card__link">
                  <img src="./../../images/card.png" className="card__img" />
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
                      <img src="./../../images/present.png" />
                    </div>
                  </div>
                  <div className="card__marker">
                    <span className="card__marker-text">хит</span>
                  </div>
                </a>
              </li>
        
              <li className="similar__item card">
                <a href="#" className="card__link">
                  <img src="./../../images/card.png" className="card__img" />
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
                      <img src="./../../images/present.png" />
                    </div>
                  </div>
                  <div className="card__marker">
                    <span className="card__marker-text">хит</span>
                  </div>
                </a>
              </li>
        
        
            </ul>

          </div>

          <button className="similar__list-controll similar__list-controll--prev button">
            <svg width="24" height="24">
              <use href="#right-arrow" />
            </svg>
          </button>
          <button className="similar__list-controll similar__list-controll--next button">
            <svg width="24" height="24">
              <use href="#right-arrow" />
            </svg>
          </button>

        </div>
      </section>

    </main>
  )
}