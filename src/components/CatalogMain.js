import './catalog-main.scss'

import BreadCrumbs from './BreadCrumbs'
import FilterForm from './FIlterForm'
import Select from './Select'
import Tags from './Tags'
import CatalogList from './CatalogList'
import { useEffect, useState } from 'react'

export default function CatalogMain(props) {

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?page=2&per_page=12")
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
  },[])
  return (
    <>
      <main className="catalog-main">
        <div className="catalog-main__breadcrumbs">
          <BreadCrumbs />
        </div>

        <div className="catalog-left">
          <section className="catalog__filter">
            <h3 className="filter__title">Фильтр</h3>
            <FilterForm />
          </section>
        </div>

        <section className="catalog-right">
          <div className="catalog-right__wrapper">
            <h2 className="catalog__title">Каталог</h2>

            <div className="catalog__tag-sort-wrapper">
              <Tags
                values={[
                  'first Tag',
                  '2st Tag',
                  '3sst Tag',
                  '4sst Tag',
                  '5st Tag',
                  '6s Tag',
                  '7 Tag',
                  '8 tag name',
                  '9 tag name again',
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
