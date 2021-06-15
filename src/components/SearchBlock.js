import { ReactComponent as SearchIcon } from './../img/svg/search.svg'
import { ReactComponent as CloseIcon } from './../img/svg/close.svg'
import Button from './Button'

import './SearchBlock.scss'
import { useState } from 'react'

const throttle = (func, ms) => {
  let isTrottled = false
  let savedArgs = null

  const wrapper = (...args) => {
    if (isTrottled) {
      savedArgs = args
      return
    }

    func(...args)

    isTrottled = true

    setTimeout(() => {
      isTrottled = false
      if (savedArgs) {
        wrapper(...savedArgs)
        savedArgs = null
      }
    }, ms)
  }

  return wrapper
}

const apiSimulator = (search, setResults) => {
  if (!search) {
    setResults([])
    return
  }

  let query = search.replace(/ /g, '_')
  fetch(`https://api.punkapi.com/v2/beers?beer_name=${query}`)
    .then((response) => response.json())
    .then((beers) => {
      setResults(beers)
    })

  console.log('send ' + search)
}

const apiSimulator1000 = throttle(apiSimulator, 1000)

const listResultsRender = (resultItems) => {
  return (
    <ul className="search-block__result-list list">
      {resultItems.map((item) => {
        return (
          <li className="search-block__result-item" key={item.id}>
            <a href="#" className="search-block__result-link">
              {item.name}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default function SearchBlock(props) {
  const [inputValue, setInputValue] = useState('')
  const [resultItems, setResultItems] = useState([])

  const handleInput = (evt) => {
    setInputValue(evt.target.value)
    apiSimulator1000(evt.target.value, setResultItems)
  }

  return (
    <>
      <div className="search-block">
        <div className="search-block__input-wrapper">
          <Button classes="search-block__close-btn">
            <CloseIcon width="24" height="24" />
          </Button>

          <input type="text" value={inputValue} onInput={handleInput} />

          {resultItems?.length ? listResultsRender(resultItems) : ''}
        </div>

        <Button classes="page-header__search-btn">
          <SearchIcon width="24" height="24" />
        </Button>
      </div>
    </>
  )
}
