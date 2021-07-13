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
  const [sortFilterParametr, setSortFilterParametr] = useState('')
  const [paginationNumber, setPaginationNumber] = useState(1)

  const sortRef = useRef(null)

  const handlerClickNextPage = () => {
    setPaginationNumber(prev => prev + 1)
  }
  const handlerClickPrevPage = () => {
    setPaginationNumber(prev => prev - 1)
  }

  const setupFilterFormParametrs = (param) => {
    setQueryFormParametrs(param)
    setPaginationNumber(1)
  }

  const setupTagParametrs = (params) => {
    const activeParams = params.filter(el => el.active === true).map((el) => el.value)
    let parametr
    if(activeParams.length) {
      const preparedParametrs = activeParams.join('&')
      parametr = `hops=${preparedParametrs}`
    } else {
      parametr = ''
    }
    setTagQueryParametrs(parametr)
    setPaginationNumber(1)
  }

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=${paginationNumber}&per_page=12&${tagQueryParametrs}&${queryFormParametrs}`)
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
      setSortFilterParametr('')
  },[paginationNumber, tagQueryParametrs, queryFormParametrs ])

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
      setSortFilterParametr(evt.detail)
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
          <BreadCrumbs links={[{label: 'Home', to: '/beer-app-whir-cra'},
          {label: 'Catalog', to: '/catalog'}]} />
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

              <Select currentValue={sortFilterParametr} />
            </div>

            <CatalogList error={error} beers={beers} isLoading={isLoading} handlerClickPrevPage={handlerClickPrevPage} 
            handlerClickNextPage ={handlerClickNextPage} currentPage={paginationNumber} />
          </div>
        </section>
      </main>
    </>
  )
}
