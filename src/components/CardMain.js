import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import './card-main.scss'

import BreadCrumbs from './BreadCrumbs'
import SimilarProductsList from "./SimilarProductsList";
import Structure from './Structure'
import { ReactComponent  as FullStar} from './../img/svg/full-star.svg'
import { ReactComponent as SemiStar } from './../img/svg/semi-star.svg'
import { ReactComponent as EmptyStar } from './../img/svg/empty-star.svg'
import { ReactComponent as Plus } from './../img/svg/plus.svg'
import { ReactComponent as Minus } from './../img/svg/minus.svg'
import { ReactComponent as AppendFavorite } from './../img/svg/append-favorite.svg'


export default function CardMain(props) {

  let { productId } = useParams();

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers/${productId}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoading(false);
          setBeer(result);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      )
  }, [productId])

  const renderPage = () => {
    if(error) {
      return (
        <p>
        {error.message}
        </p>
      )
    } else if(isLoading) {
      return (
        <p>
         ... Loading ...
        </p>
      )
    } else if(beer[0]) {
      return (
        <main className="card-main">

    <div className="card-main__inner">

      <div className="card-main__breadcrumbs">
      <BreadCrumbs links={[{label: 'Home', to: '/beer-app-whir-cra'},
        {label: 'Catalog', to: '/catalog'},
        {label: `${beer[0].name}`, to: `/catalog/${productId}`}]} />
      </div>

      <div className="card-main__card-content">
        <ul className="card-content__gallery-list list">

          <li className="gallery-list__item gallery-list__item--big">
            <img src={beer[0].image_url} alt='Card beer' />
          </li>

          <li className="gallery-list__item gallery-list__item--small">
            <img src={beer[0].image_url} alt='Card beer' />
          </li>

          <li className="gallery-list__item gallery-list__item--small">
            <img src={beer[0].image_url} alt='Card beer' />
          </li>

          <li className="gallery-list__item gallery-list__item--small">
            <img src={beer[0].image_url} alt='Card beer' />
          </li>

          <li className="gallery-list__item gallery-list__item--small">
            <img src={beer[0].image_url} alt='Card beer' />
          </li>

          <li className="gallery-list__item gallery-list__item--small">
            <img src={beer[0].image_url} alt='Card beer' />
          </li>

          <li className="gallery-list__item gallery-list__item--middle">
            <img src={beer[0].image_url} alt='Card beer' />
          </li>

          <li className="gallery-list__item gallery-list__item--small">
            <img src={beer[0].image_url} alt='Card beer' />
          </li>

          <li className="gallery-list__item gallery-list__item--small">
            <img src={beer[0].image_url} alt='Card beer' />
          </li>

          <li className="gallery-list__item gallery-list__item--small">
            <img src={beer[0].image_url} alt='Card beer' />
          </li>
        </ul>

        <div className="card-content__info">
          <div className="card-content__info-inner">
            <div className="card-content__info-description">
              <h2 className="card-content__info-title">
              { beer[0].name}
              </h2>
              <div className="card-content__info-text">
                <p>
                  {beer[0].brewers_tips} 
                </p>
                <p>
                  {beer[0].description}
                </p>
              </div>
            </div>

            <div className="card-content__info-application">
              <ul className="card-content__info-list list">
                <li className="card-content__info-item">
                  <span className="card-content__info-item-counter">1</span>
                  {beer[0].food_pairing[0]}
                </li>

                <li className="card-content__info-item">
                  <span className="card-content__info-item-counter">2</span>
                  {beer[0].food_pairing[1]}
                </li>

                <li className="card-content__info-item">
                  <span className="card-content__info-item-counter">3</span>
                  {beer[0].food_pairing[2]}
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
              <FullStar />
              <FullStar />
              <FullStar />
              <SemiStar />
              <EmptyStar />
            </div>

          </div>

          <h2 className="aside__title">
            {beer[0].name}
          </h2>

          <p className="aside__price">
            <span>
              Brewed {beer[0].first_brewed}
            </span>
            <span>
              ABV {beer[0].abv}
            </span>
          </p>

          <div className="aside__card-controlls">

            <div className="card-controlls__amount">

              <button className="card-controlls__amount-btn card-controlls__amount-btn--minus button">
                <Minus width="46" height="46" />
              </button>

              <span className="card-controlls__amount-counter">
                1
              </span>

              <button className="card-controlls__amount-btn card-controlls__amount-btn--plus button">
                <Plus width="45" height="45" />   
              </button>

            </div>

            <div className="card-controlls__append-to">

              <button className="card-controlls__favorite-btn button">
                <AppendFavorite width="45" height="45" />
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

            <Structure hops={beer[0].ingredients.hops} />

          </div>

          <div className="aside__brand">
            <h4 className="brand__title">
              {beer[0].ingredients.yeast}
            </h4>
          </div>

        </div>
      </div>

    </div>

    <section className="card-main__similar">

      <h3 className="similar__title">
        Похожие товары
      </h3>

      <SimilarProductsList parametr={`&brewed_after=${beer[0].first_brewed.replace("/", "-")}&abv_gt=${+beer[0].abv}`} />
    </section>

    </main>
          )
        } else {
          <p>
            Product by id = {productId} not found
          </p>
        }
  }

  return (
    <>
      {renderPage()}
    </>
  )
}