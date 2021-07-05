import './catalog-main.scss'

import BreadCrumbs from './BreadCrumbs'
import FilterForm from './FIlterForm'
import Select from './Select'
import Tags from './Tags'
import CatalogList from './CatalogList'
import { useEffect, useRef, useState } from 'react'

export default function CatalogMain(props) {

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [beers, setBeers] = useState([]);

  const [queryFormParametrs, setQueryFormParametrs] = useState('')
  const [tagQueryParametrs, setTagQueryParametrs] = useState('')

  const sortRef = useRef(null)

  const setupFilterFormParametrs = (param) => {
    setQueryFormParametrs(param)
  }

  const setupTagParametrs = (params) => {
    const activeParams = params.filter(el => el.active === true).map((el) => el.value)
    if(activeParams.length) {
      const preparedParametrs = activeParams.join('&')
      setTagQueryParametrs(`hops=${preparedParametrs}`)
    } else {
      setTagQueryParametrs('')
    }
  }

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=1&per_page=12&${tagQueryParametrs}&${queryFormParametrs}`)
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
  },[tagQueryParametrs, queryFormParametrs])

  useEffect(() => {
    const dateParsing = (mounthYearsFormat) => {
      const arrDate = mounthYearsFormat.split('/')
      return Date.parse(`${arrDate[1]}`)
    }

    const sortChangeListener = (evt) => {
      const copyBeers = [...beers]
      if(evt.detail === 'abv') {
        copyBeers.sort((a, b) => {
         return +a.abv - +b.abv
        })
      } else if (evt.detail === 'first_brewed') {
        copyBeers.sort((a, b) => {
          return +dateParsing(a.first_brewed) - +dateParsing(b.first_brewed)
         })
      }
      setBeers(copyBeers)
    }
    const sortWrapper =  sortRef.current
    sortWrapper.addEventListener('select-value', sortChangeListener)
    return function() {
      sortWrapper.removeEventListener('select-value', sortChangeListener)
    } 
  }, [beers])

  return (
    <>
      <main className="catalog-main">
        <div className="catalog-main__breadcrumbs">
          <BreadCrumbs />
        </div>

        <div className="catalog-left">
          <section className="catalog__filter">
            <h3 className="filter__title">Фильтр</h3>
            <FilterForm setupFilterFormParametrs={setupFilterFormParametrs} />
          </section>
        </div>

        <section className="catalog-right">
          <div className="catalog-right__wrapper">
            <h2 className="catalog__title">Каталог</h2>

            <div ref={sortRef} className="catalog__tag-sort-wrapper">
              <Tags
              setupTagParametrs={setupTagParametrs}
                values={[
                  'Ahtanum',
                  'Chinook',
                  'Fuggles',
                  'First_Gold',
                  'Cascade',
                  'Amarillo',
                  'Simcoe',
                  'Motueka',
                  'Bramling_Cross',
                  'Centennial',
                  'Saaz',
                  'Nelson_Sauvin',
                  'Peppercorns'
                ]}
              />

              <Select />
            </div>

            <CatalogList error={error} beers={beers} isLoading={isLoading} />
          </div>
        </section>
      </main>
    </>
  )
}
