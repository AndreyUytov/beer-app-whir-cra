import {ReactComponent as RightArrowIcon} from './../img/svg/right-arrow.svg'
import './articles.scss'

export default function Articles (props) {
  return (
    <section class="articles">
    <h2 class="section-title">Хотите узнать какой именно уход нужен?</h2>

    <div class="articles__list-wrapper">
      <ul class="articles__list list">
        <li class="articles__item articles__item--big">
          <a href="#" class="articles__link">
            <div class="articles__link-wrapper">
              <h3 class="articles__link-title">
                Патчи для зоны вокруг глаз: что это такое и зачем они нужны?
              </h3>
              <p class="articles__link-description">
                Во многих онлайн-магазинах рекомендуют оставлять патчина ночь,
                мы не рекомендуем оставлять их на ночь, чтобы вовремя сна не
                образовались заломы и не оттянуть нежнуюкожу под глазами.
              </p>
            </div>
          </a>
        </li>

        <li class="articles__item">
          <a href="#" class="articles__link">
            <div class="articles__link-wrapper">
              <h3 class="articles__link-title">Мезороллер: який обрати?</h3>
              <p class="articles__link-description">
                Вірно підібраний інструмент для мікроголчастої терапії —половина
                успіху. Дуже важливо обрати мезороллер з характеристиками, що
                ідеально підійдуть саме Вам.
              </p>
            </div>
          </a>
        </li>

        <li class="articles__item">
          <a href="#" class="articles__link">
            <div class="articles__link-wrapper">
              <h3 class="articles__link-title">Мезороллер: який обрати?</h3>
              <p class="articles__link-description">
                Вірно підібраний інструмент для мікроголчастої терапії —половина
                успіху. Дуже важливо обрати мезороллер з характеристиками, що
                ідеально підійдуть саме Вам.
              </p>
            </div>
          </a>
        </li>

        <li class="articles__item articles__item--big">
          <a href="#" class="articles__link">
            <div class="articles__link-wrapper">
              <h3 class="articles__link-title">
                Патчи для зоны вокруг глаз: что это такое и зачем они нужны?
              </h3>
              <p class="articles__link-description">
                Во многих онлайн-магазинах рекомендуют оставлять патчина ночь,
                мы не рекомендуем оставлять их на ночь, чтобы вовремя сна не
                образовались заломы и не оттянуть нежнуюкожу под глазами.
              </p>
            </div>
          </a>
        </li>

        <li class="articles__item">
          <a href="#" class="articles__link">
            <div class="articles__link-wrapper">
              <h3 class="articles__link-title">Мезороллер: який обрати?</h3>
              <p class="articles__link-description">
                Вірно підібраний інструмент для мікроголчастої терапії —половина
                успіху. Дуже важливо обрати мезороллер з характеристиками, що
                ідеально підійдуть саме Вам.
              </p>
            </div>
          </a>
        </li>

        <li class="articles__item">
          <a href="#" class="articles__link">
            <div class="articles__link-wrapper">
              <h3 class="articles__link-title">ЭТАПЫ СТАРЕНИЯ КОЖИ.</h3>
              <p class="articles__link-description">Вся жизнь за минуту.</p>
            </div>
          </a>
        </li>

        <li class="articles__item articles__item--big">
          <a href="#" class="articles__link">
            <div class="articles__link-wrapper">
              <h3 class="articles__link-title">
                Патчи для зоны вокруг глаз: что это такое и зачем они нужны?
              </h3>
              <p class="articles__link-description">
                Во многих онлайн-магазинах рекомендуют оставлять патчина ночь,
                мы не рекомендуем оставлять их на ночь, чтобы вовремя сна не
                образовались заломы и не оттянуть нежнуюкожу под глазами.
              </p>
            </div>
          </a>
        </li>
        <li class="articles__item">
          <a href="#" class="articles__link">
            <div class="articles__link-wrapper">
              <h3 class="articles__link-title">Мезороллер: який обрати?</h3>
              <p class="articles__link-description">
                Вірно підібраний інструмент для мікроголчастої терапії —половина
                успіху. Дуже важливо обрати мезороллер з характеристиками, що
                ідеально підійдуть саме Вам.
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>

    <div class="articles__controllers">
      <div class="articles__bar">
        <span class="articles__proggress"></span>
      </div>
      <div class="controllers__btns">
        <button class="controllers__prev-btn controllers__btn button" disabled>
          <RightArrowIcon width="32" height="32" />
        </button>

        <button class="controllers__next-btn controllers__btn button">
        <RightArrowIcon width="32" height="32" />
        </button>
      </div>
    </div>

    <button class="articles__btn button outline-btn">
      Читать все программы
    </button>
  </section>
  )
}