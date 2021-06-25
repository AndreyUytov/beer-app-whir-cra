import './popular.scss'

import Card from './Card'
import { useEffect, useState } from 'react'

function renderList(items) {
  return (
    <ul className="popular__list list">
      {items?.map((item) => {
        return <Card classes="popular__item" item={item} key={item.id} />
      })}
    </ul>
  )
}

export default function Popular(props) {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [beers, setBeers] = useState([])

  useEffect(() => {
    const random = Math.round(Math.random() * 10)
    fetch(`https://api.punkapi.com/v2/beers?page=${random}&per_page=8`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setBeers(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  return (
    <section className="popular">
      <h2 className="section-title">Популярные товары</h2>
      <p className="section-description">
        Чаще всего у нас покупают эти товары, потому что они лучше всего
        помогают женщинам.
      </p>
      {error ? (
        <div>Ошибка: {error.message}</div>
      ) : isLoaded === false ? (
        <div>Загрузка...</div>
      ) : (
        renderList(beers)
      )}

      <button className="button outline-btn">Показать больше</button>
    </section>
  )
}
