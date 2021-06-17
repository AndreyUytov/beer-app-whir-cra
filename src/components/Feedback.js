import feedback1 from './../img/pic/feedback1.jpg'
import feedback2 from './../img/pic/feedback2.jpg'
import feedback3 from './../img/pic/feedback3.jpg'
import feedback4 from './../img/pic/feedback4.jpg'

import './feedback.scss'

export default function Feedback(props) {
  return (
    <section className="feedback">
      <h2 className="section-title">Отзывы наших клиентов</h2>
      <ul className="feedback__list list">
        <li className="feedback__item">
          <div className="feedback__item-img">
            <img src={feedback1} alt="foto" />
          </div>
          <div className="feedback__item-info">
            <svg className="feedback__item-svg" width="40" height="40">
              <use href="#feedback-svg" />
            </svg>
            <h3 className="feedback__item-autor-name">
              Надежда Радевич,
              <span className="feedback__item-template"> пишет о:</span>
            </h3>
            <a href="card.html" className="feedback__item-product-name">
              Dr.Hedison Premium Skin Care Returning Eye
            </a>

            <p className="feedback__item-description">
              Патчи это моя слабость. Ощущение очень-очень комфортное после
              применения в течении, как минимум, суток даже без последующего
              применения крема. Мешки действительно подтянулись, кожа, от
              природы сухая.
            </p>

            <span className="feedback__item-date"> 9 ноября 2019 </span>
          </div>
        </li>

        <li className="feedback__item">
          <div className="feedback__item-img">
            <img src={feedback2} alt="foto" />
          </div>
          <div className="feedback__item-info">
            <svg className="feedback__item-svg" width="40" height="40">
              <use href="#feedback-svg" />
            </svg>
            <h3 className="feedback__item-autor-name">
              Надежда Радевич,
              <span className="feedback__item-template"> пишет о:</span>
            </h3>
            <a href="card.html" className="feedback__item-product-name">
              Dr.Hedison Premium Skin Care Returning Eye
            </a>

            <p className="feedback__item-description">
              Патчи это моя слабость. Ощущение очень-очень комфортное после
              применения в течении, как минимум, суток даже без последующего
              применения крема. Мешки действительно подтянулись, кожа, от
              природы сухая.
            </p>

            <span className="feedback__item-date"> 9 ноября 2019 </span>
          </div>
        </li>

        <li className="feedback__item">
          <div className="feedback__item-img">
            <img src={feedback3} alt="foto" />
          </div>
          <div className="feedback__item-info">
            <svg className="feedback__item-svg" width="40" height="40">
              <use href="#feedback-svg" />
            </svg>
            <h3 className="feedback__item-autor-name">
              Надежда Радевич,
              <span className="feedback__item-template"> пишет о:</span>
            </h3>
            <a href="card.html" className="feedback__item-product-name">
              Dr.Hedison Premium Skin Care Returning Eye
            </a>

            <p className="feedback__item-description">
              Патчи это моя слабость. Ощущение очень-очень комфортное после
              применения в течении, как минимум, суток даже без последующего
              применения крема. Мешки действительно подтянулись, кожа, от
              природы сухая.
            </p>

            <span className="feedback__item-date"> 9 ноября 2019 </span>
          </div>
        </li>

        <li className="feedback__item">
          <div className="feedback__item-img">
            <img src={feedback4} alt="foto" />
          </div>
          <div className="feedback__item-info">
            <svg className="feedback__item-svg" width="40" height="40">
              <use href="#feedback-svg" />
            </svg>
            <h3 className="feedback__item-autor-name">
              Надежда Радевич,
              <span className="feedback__item-template"> пишет о:</span>
            </h3>
            <a href="card.html" className="feedback__item-product-name">
              Dr.Hedison Premium Skin Care Returning Eye
            </a>

            <p className="feedback__item-description">
              Патчи это моя слабость. Ощущение очень-очень комфортное после
              применения в течении, как минимум, суток даже без последующего
              применения крема. Мешки действительно подтянулись, кожа, от
              природы сухая.
            </p>

            <span className="feedback__item-date"> 9 ноября 2019 </span>
          </div>
        </li>
      </ul>

      <button className="button outline-btn">Показать больше</button>
    </section>
  )
}
