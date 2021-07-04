import './catalog-list.scss'

import Card from './Card'

export default function CatalogList({beers, isLoading, error}) {
  const renderList = () => {
    if (error) {
      return (
        <p>
          Произошла ошибка {error.message}
        </p>
      )
    } else if(isLoading) {
      return (
        <p>
          ... Данные загружаются ...
        </p>
      )
    } else {
      return beers.map((beer) => {
        return (
          <Card classes="card-list__item" item = {beer} key={beer.id}/>
        )
      })
    }
  }
  return (
    <ul className="catalog__card-list list">
      {renderList()}
    </ul>
  )
}