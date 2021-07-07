import './catalog-list.scss'

import Card from './Card'
import BackgroundButton from './BackgroundButton'

export default function CatalogList({beers, isLoading, error, currentPage, handlerClickNextPage, handlerClickPrevPage}) {
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
    } else if(beers.length) {
      return beers.map((beer) => {
        return (
          <Card classes="card-list__item" item = {beer} key={beer.id}/>
        )
      })
    } else {
      return (
        <li>Empty list</li>
      )
    }
  }
  return (
    <>
      <ul className="catalog__card-list list">
        {renderList()}
      </ul>

      <div className="catalog__pagination">
        <BackgroundButton onClick={handlerClickPrevPage} disabled={currentPage > 1 ? false : true}>
          Prev
        </BackgroundButton>
        <div className="pagination__current-page">
          {currentPage}
        </div>
        <BackgroundButton onClick={handlerClickNextPage} disabled = {beers.length < 12 ? true : false}>
          Next
        </BackgroundButton>
      </div>
    </>
  )
}