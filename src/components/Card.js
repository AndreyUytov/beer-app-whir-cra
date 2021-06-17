import present from './../img/pic/present.png'

export default function Card(props) {
  let {name, image_url, first_brewed} = props.item
  let classes = `card`
  if(props.classes) {
    classes += ` ${props.classes}`
  }
  return (
    <li className={classes}>
          <a href="card.html" className="card__link">
            <img src={image_url} className="card__img" alt="card-item" />
            <div className="card__bottom">
              <p className="card__info">
                {name}
              </p>
              <p className="card__price">
                {first_brewed}
                <span className="card__discount"> -30% </span>
              </p>
            </div>
            <div className="card__present">
              <h5 className="card__present-title">подарок</h5>
              <div className="card__present-img">
                <img src={present} alt="present" />
              </div>
            </div>
            <div className="card__marker">
              <span className="card__marker-text">хит</span>
            </div>
          </a>
        </li>
  )
}