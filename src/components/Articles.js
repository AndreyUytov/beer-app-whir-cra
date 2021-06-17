import { useEffect, useRef } from 'react'
import { ReactComponent as RightArrowIcon } from './../img/svg/right-arrow.svg'
import './articles.scss'

import { animate, qubic, makeToZero, setupEndValue } from './../utils/animate'
import Slider from './../utils/custom-slider'

let makeQubicToZero = makeToZero(qubic)

export default function Articles(props) {
  const container = useRef(null)
  const sliderList = useRef(null)
  const prevButton = useRef(null)
  const nextButton = useRef(null)
  const progress = useRef(null)

  const changeCurrentPositionCallBackSlider = (sliderContext) => {
    let listWidth =
      sliderContext.$sliderList.scrollWidth -
      sliderContext.$container.offsetWidth

    let newWidthProggres = Math.abs(
      Math.round(sliderContext.currentX / (listWidth / 100))
    )

    let currentWidthProggres = parseInt(progress.current.style.width) || 0

    animate({
      duration: 500,
      timing: makeQubicToZero,
      draw(ratio) {
        progress.current.style.width = `${setupEndValue(
          currentWidthProggres,
          newWidthProggres,
          ratio
        )}%`
      },
    })
  }

  useEffect(() => {
    new Slider({
      container: container.current,
      sliderList: sliderList.current,
      prevButton: prevButton.current,
      nextButton: nextButton.current,
      changeCurrentXCallBack: changeCurrentPositionCallBackSlider,
    })
  }, [])

  return (
    <section className="articles">
      <h2 className="section-title">Хотите узнать какой именно уход нужен?</h2>

      <div ref={container} className="articles__list-wrapper">
        <ul ref={sliderList} className="articles__list list">
          <li className="articles__item articles__item--big">
            <a href="card.html" className="articles__link">
              <div className="articles__link-wrapper">
                <h3 className="articles__link-title">
                  Патчи для зоны вокруг глаз: что это такое и зачем они нужны?
                </h3>
                <p className="articles__link-description">
                  Во многих онлайн-магазинах рекомендуют оставлять патчина ночь,
                  мы не рекомендуем оставлять их на ночь, чтобы вовремя сна не
                  образовались заломы и не оттянуть нежнуюкожу под глазами.
                </p>
              </div>
            </a>
          </li>

          <li className="articles__item">
            <a href="card.html" className="articles__link">
              <div className="articles__link-wrapper">
                <h3 className="articles__link-title">
                  Мезороллер: який обрати?
                </h3>
                <p className="articles__link-description">
                  Вірно підібраний інструмент для мікроголчастої терапії
                  —половина успіху. Дуже важливо обрати мезороллер з
                  характеристиками, що ідеально підійдуть саме Вам.
                </p>
              </div>
            </a>
          </li>

          <li className="articles__item">
            <a href="card.html" className="articles__link">
              <div className="articles__link-wrapper">
                <h3 className="articles__link-title">
                  Мезороллер: який обрати?
                </h3>
                <p className="articles__link-description">
                  Вірно підібраний інструмент для мікроголчастої терапії
                  —половина успіху. Дуже важливо обрати мезороллер з
                  характеристиками, що ідеально підійдуть саме Вам.
                </p>
              </div>
            </a>
          </li>

          <li className="articles__item articles__item--big">
            <a href="card.html" className="articles__link">
              <div className="articles__link-wrapper">
                <h3 className="articles__link-title">
                  Патчи для зоны вокруг глаз: что это такое и зачем они нужны?
                </h3>
                <p className="articles__link-description">
                  Во многих онлайн-магазинах рекомендуют оставлять патчина ночь,
                  мы не рекомендуем оставлять их на ночь, чтобы вовремя сна не
                  образовались заломы и не оттянуть нежнуюкожу под глазами.
                </p>
              </div>
            </a>
          </li>

          <li className="articles__item">
            <a href="card.html" className="articles__link">
              <div className="articles__link-wrapper">
                <h3 className="articles__link-title">
                  Мезороллер: який обрати?
                </h3>
                <p className="articles__link-description">
                  Вірно підібраний інструмент для мікроголчастої терапії
                  —половина успіху. Дуже важливо обрати мезороллер з
                  характеристиками, що ідеально підійдуть саме Вам.
                </p>
              </div>
            </a>
          </li>

          <li className="articles__item">
            <a href="card.html" className="articles__link">
              <div className="articles__link-wrapper">
                <h3 className="articles__link-title">ЭТАПЫ СТАРЕНИЯ КОЖИ.</h3>
                <p className="articles__link-description">
                  Вся жизнь за минуту.
                </p>
              </div>
            </a>
          </li>

          <li className="articles__item articles__item--big">
            <a href="card.html" className="articles__link">
              <div className="articles__link-wrapper">
                <h3 className="articles__link-title">
                  Патчи для зоны вокруг глаз: что это такое и зачем они нужны?
                </h3>
                <p className="articles__link-description">
                  Во многих онлайн-магазинах рекомендуют оставлять патчина ночь,
                  мы не рекомендуем оставлять их на ночь, чтобы вовремя сна не
                  образовались заломы и не оттянуть нежнуюкожу под глазами.
                </p>
              </div>
            </a>
          </li>
          <li className="articles__item">
            <a href="card.html" className="articles__link">
              <div className="articles__link-wrapper">
                <h3 className="articles__link-title">
                  Мезороллер: який обрати?
                </h3>
                <p className="articles__link-description">
                  Вірно підібраний інструмент для мікроголчастої терапії
                  —половина успіху. Дуже важливо обрати мезороллер з
                  характеристиками, що ідеально підійдуть саме Вам.
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div className="articles__controllers">
        <div className="articles__bar">
          <span ref={progress} className="articles__proggress"></span>
        </div>
        <div className="controllers__btns">
          <button
            ref={prevButton}
            className="controllers__prev-btn controllers__btn button"
            disabled
          >
            <RightArrowIcon width="32" height="32" />
          </button>

          <button
            ref={nextButton}
            className="controllers__next-btn controllers__btn button"
          >
            <RightArrowIcon width="32" height="32" />
          </button>
        </div>
      </div>

      <button className="articles__btn button outline-btn">
        Читать все программы
      </button>
    </section>
  )
}
