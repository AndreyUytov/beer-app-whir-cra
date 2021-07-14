import { Link } from "react-router-dom";

import present from './../img/pic/present.png'

export default function Card(props) {
  let {name, image_url, first_brewed, abv, id} = props.item
  let classes = `card`
  if(props.classes) {
    classes += ` ${props.classes}`
  }
  return (
    <li className={classes}>
          <Link to={'/catalog/' + id} className="card__link">
            <img src={image_url} className="card__img" alt="card-item" />
            <div className="card__bottom">
              <p className="card__info">
                {name}
              </p>
              <p className="card__price">
                {first_brewed}
                <span className="card__discount">abv - {abv} </span>
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
          </Link>
        </li>
  )
}