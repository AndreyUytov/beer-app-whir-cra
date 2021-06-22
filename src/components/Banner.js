import { useEffect, useRef } from 'react'
import banner1 from './../img/pic/banner1.png'
import banner2 from './../img/pic/banner2.png'
import littleImg from './../img/pic/litle-img.png'

import { useConsultationPopupContext } from './consultation-context'

import './Banner.scss'

import HoverIntent from './../utils/hover-intent'

export default function Banner(props) {
  const rootElem = useRef(null)

  const { setIsVisible } = useConsultationPopupContext()
  const showPopupConsultation = (evt) => {
    setIsVisible(false)
    evt.stopPropagation()
  }

  useEffect(() => {
    const $bannerLinks = rootElem.current.querySelectorAll('.banner__link')

    Array.from($bannerLinks).forEach((elem) => {
      let card = elem.querySelector('.banner__little-card')
      let img = elem.querySelector('img')
      new HoverIntent({
        elem: img,
        over(evt) {
          card.style.left = evt.clientX + 5 + 'px'
          card.style.top = evt.clientY + 5 + 'px'
          card.style.display = 'flex'
        },
        out() {
          card.style.display = ''
        },
      })
    })
  }, [])

  return (
    <>
      <div className="banner__inner" ref={rootElem}>
        <section className="banner">
          <div className="banner__left-section">
            <strong className="banner__slogan">
              {' '}
              Профессиональный уход дома!{' '}
            </strong>
            <p className="banner__info">
              Преобретите медицинскую косметику для ухода за собой, не пользуясь
              услугами косметолога.
            </p>
            <button
              onClick={showPopupConsultation}
              className="banner__btn button background-btn popup-consultation-btn"
            >
              Подобрать косметику под себя
            </button>
          </div>

          <div className="banner__right-section">
            <ul className="banner__list list">
              <li className="banner__item">
                <a href="#1" className="banner__link">
                  <img src={banner1} alt="banner" />

                  <div className="little-card banner__little-card">
                    <div className="little-card__img">
                      <img src={littleImg} alt="little card" />
                    </div>

                    <div className="little-card__rigth-block">
                      <h3 className="little-card__title">
                        Гидрогелевые патчи Dr. Hedison
                      </h3>

                      <p className="little-card__price">
                        <span className="little-card__price-text">
                          {' '}
                          12 250 грн.{' '}
                        </span>
                        <span className="little-card__price-discount">
                          {' '}
                          -25%{' '}
                        </span>
                      </p>
                    </div>
                  </div>
                </a>
              </li>

              <li className="banner__item">
                <a href="#2" className="banner__link">
                  <img src={banner2} alt="banner" />

                  <div className="little-card banner__little-card">
                    <div className="little-card__img">
                      <img src={littleImg} alt="little card" />
                    </div>

                    <div className="little-card__rigth-block">
                      <h3 className="little-card__title">
                        Гидрогелевые патчи Dr. Hedison
                      </h3>

                      <p className="little-card__price">
                        <span className="little-card__price-text">
                          {' '}
                          12 250 грн.{' '}
                        </span>
                        <span className="little-card__price-discount">
                          {' '}
                          -50%{' '}
                        </span>
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}
