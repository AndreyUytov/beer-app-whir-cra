import { ReactComponent as SearchIcon } from './../img/svg/search.svg'
import { ReactComponent as CloseIcon } from './../img/svg/close.svg'
import Button from './Button'

import './SearchBlock.scss'
import { useEffect, useState } from 'react'

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

const apiSimulator = async (search, setResult) => {
  if(!search.trim()) {
    setResult([])
    return
  }

  console.log("query ", search);

  let query = search.replace(/ /g, '_')
  let response = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${query}`)
  let json = await response.json()
  console.log(json);
  setResult(json)
}

const apiSimulator1000 = throttle(apiSimulator, 1000)

const highLighter = (itemName, inputValue) => {
  let reg = new RegExp(`${inputValue}`,'i')
  return {
    __html: `${itemName.replace(reg, `<span style="color: var(--akcent);">&nbsp;$&&nbsp;</span>`)} `
  }
}

const listResultsRender = (resultItems, inputValue) => {
  return (
    <ul className="search-block__result-list list">
      {resultItems.map((item) => {
        return (
          <li className="search-block__result-item" key={item.id}>
            <a href="#" className="search-block__result-link"
            dangerouslySetInnerHTML={highLighter(item.name, inputValue)}
            />
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
  }

  useEffect(() => {
    apiSimulator1000(inputValue, setResultItems)
  },[inputValue])

  return (
    <>
      <div className="search-block">
        <div className="search-block__input-wrapper">
          <Button classes="search-block__close-btn" onClick={() => props.onCloseButtonClick()}>
            <CloseIcon width="24" height="24" />
          </Button>

          <input type="text" value={inputValue} onInput={handleInput} />

          {resultItems?.length ? listResultsRender(resultItems, inputValue) : ''}
        </div>

        <Button classes="page-header__search-btn">
          <SearchIcon width="24" height="24" />
        </Button>
      </div>
    </>
  )
}
