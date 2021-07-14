import './similar-product-list.scss'

import { useEffect, useState, useRef } from 'react';

import { ReactComponent  as RightArrow} from './../img/svg/right-arrow.svg'
import Card from './Card'
import Slider from './../utils/custom-slider'

export default function SimilarProductsList({parametr}) {

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [beers, setBeers] = useState([]);

  const container = useRef(null)
  const sliderList = useRef(null)
  const prevButton = useRef(null)
  const nextButton = useRef(null)

  const renderList = () => {
    if (error) {
      return (
        <li>
          Произошла ошибка {error.message}
        </li>
      )
    } else if(isLoading) {
      return (
        <p>
          ... Данные загружаются ...
        </p>
      )
    } else if(beers.length) {
      return beers.map((beer) => {
        return (
          <Card classes="similar__item" item = {beer} key={beer.id}/>
        )
      })
    } else {
      return (
        <li>Empty list</li>
      )
    }
  }

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?${parametr}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoading(false);
          setBeers(result);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      )
  },[parametr])

  useEffect(() => {
    new Slider({
      container: container.current,
      sliderList: sliderList.current,
      prevButton: prevButton.current,
      nextButton: nextButton.current,
    })
  }, [beers])

  return (
     <div className="card-main__similar-wrapper">
        <div ref={container} className="similar__list-wrapper">
          <ul ref={sliderList} className="similar__list list">
            {renderList()}
          </ul>

        </div>

        <button ref={prevButton} className="similar__list-controll similar__list-controll--prev button">
        <RightArrow width="24" height="24" />
        </button>
        <button ref={nextButton} className="similar__list-controll similar__list-controll--next button">
          <RightArrow width="24" height="24" />
        </button>

      </div>
  )
}