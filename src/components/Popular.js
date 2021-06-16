import card from './../img/pic/card.png'
import present from './../img/pic/present.png'
import './popular.scss'

export default function Popular(props) {
  return (
    <section className="popular">
    <h2 className="section-title">Популярные товары</h2>
    <p className="section-description">
      Чаще всего у нас покупают эти товары, потому что они лучше всего помогают
      женщинам.
    </p>

    <ul className="popular__list list">
      <li className="popular__item card">
        <a href="card.html" className="card__link">
          <img src={card} className="card__img" />
          <div className="card__bottom">
            <p className="card__info">Piruvic40 solution Medicare Proffessional</p>
            <p className="card__price">
              12 250 грн.
              <span className="card__discount"> -30% </span>
            </p>
          </div>
          <div className="card__present">
            <h5 className="card__present-title">подарок</h5>
            <div className="card__present-img">
              <img src={present} />
            </div>
          </div>
          <div className="card__marker">
            <span className="card__marker-text">хит</span>
          </div>
        </a>
      </li>

      <li className="popular__item card">
        <a href="card.html" className="card__link">
          <img src={card} className="card__img" />
          <div className="card__bottom">
            <p className="card__info">Piruvic40 solution Medicare Proffessional</p>
            <p className="card__price">
              12 250 грн.
              <span className="card__discount"> -30% </span>
            </p>
          </div>
          <div className="card__present">
            <h5 className="card__present-title">подарок</h5>
            <div className="card__present-img">
              <img src={present} />
            </div>
          </div>
          <div className="card__marker">
            <span className="card__marker-text">хит</span>
          </div>
        </a>
      </li>

      <li className="popular__item card">
        <a href="card.html" className="card__link">
          <img src={card} className="card__img" />
          <div className="card__bottom">
            <p className="card__info">Piruvic40 solution Medicare Proffessional</p>
            <p className="card__price">
              12 250 грн.
              <span className="card__discount"> -30% </span>
            </p>
          </div>
          <div className="card__present">
            <h5 className="card__present-title">подарок</h5>
            <div className="card__present-img">
              <img src={present} />
            </div>
          </div>
          <div className="card__marker">
            <span className="card__marker-text">хит</span>
          </div>
        </a>
      </li>

      <li className="popular__item card">
        <a href="card.html" className="card__link">
          <img src={card} className="card__img" />
          <div className="card__bottom">
            <p className="card__info">Piruvic40 solution Medicare Proffessional</p>
            <p className="card__price">
              12 250 грн.
              <span className="card__discount"> -30% </span>
            </p>
          </div>
          <div className="card__present">
            <h5 className="card__present-title">подарок</h5>
            <div className="card__present-img">
              <img src={present} />
            </div>
          </div>
          <div className="card__marker">
            <span className="card__marker-text">хит</span>
          </div>
        </a>
      </li>

      <li className="popular__item card">
        <a href="card.html" className="card__link">
          <img src={card} className="card__img" />
          <div className="card__bottom">
            <p className="card__info">Piruvic40 solution Medicare Proffessional</p>
            <p className="card__price">
              12 250 грн.
              <span className="card__discount"> -30% </span>
            </p>
          </div>
          <div className="card__present">
            <h5 className="card__present-title">подарок</h5>
            <div className="card__present-img">
              <img src={present} />
            </div>
          </div>
          <div className="card__marker">
            <span className="card__marker-text">хит</span>
          </div>
        </a>
      </li>

      <li className="popular__item card">
        <a href="card.html" className="card__link">
          <img src={card} className="card__img" />
          <div className="card__bottom">
            <p className="card__info">Piruvic40 solution Medicare Proffessional</p>
            <p className="card__price">
              12 250 грн.
              <span className="card__discount"> -30% </span>
            </p>
          </div>
          <div className="card__present">
            <h5 className="card__present-title">подарок</h5>
            <div className="card__present-img">
              <img src={present} />
            </div>
          </div>
          <div className="card__marker">
            <span className="card__marker-text">хит</span>
          </div>
        </a>
      </li>

      <li className="popular__item card">
        <a href="card.html" className="card__link">
          <img src={card} className="card__img" />
          <div className="card__bottom">
            <p className="card__info">Piruvic40 solution Medicare Proffessional</p>
            <p className="card__price">
              12 250 грн.
              <span className="card__discount"> -30% </span>
            </p>
          </div>
          <div className="card__present">
            <h5 className="card__present-title">подарок</h5>
            <div className="card__present-img">
              <img src={present} />
            </div>
          </div>
          <div className="card__marker">
            <span className="card__marker-text">хит</span>
          </div>
        </a>
      </li>

      <li className="popular__item card">
        <a href="card.html" className="card__link">
          <img src={card} className="card__img" />
          <div className="card__bottom">
            <p className="card__info">Piruvic40 solution Medicare Proffessional</p>
            <p className="card__price">
              12 250 грн.
              <span className="card__discount"> -30% </span>
            </p>
          </div>
          <div className="card__present">
            <h5 className="card__present-title">подарок</h5>
            <div className="card__present-img">
              <img src={present} />
            </div>
          </div>
          <div className="card__marker">
            <span className="card__marker-text">хит</span>
          </div>
        </a>
      </li>
    </ul>

    <button className="button outline-btn">Показать больше</button>
  </section>
  )
}