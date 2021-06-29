import { useState } from 'react'

import './filter-form.scss'

import Fieldset from './Fieldset'
import Range from './Range'
import OutLineButton from './OutlineButton'
import BackgroundButton from './BackgroundButton'

export default function FilterForm(props) {
  const [query, setQuery] = useState({})

  const handleChangeCheckboxQuery = (evt) => {
    let name = evt.target.name
    let value = evt.target.value
    let checked = evt.target.checked

    if (checked) {
      setQuery((query) => {
        if (!query[name]) {
          return { ...query, [name]: new Set().add(value) }
        }
        return { ...query, [name]: query[name].add(value) }
      })
    } else {
      setQuery((query) => {
        let set = query[name]
        set.delete(value)
        if (set.size === 0) {
          set = null
        }
        return { ...query, [name]: set }
      })
    }
  }

  const handleChangeRadioQuery = (evt) => {
    let name = evt.target.name
    let value = evt.target.value

    setQuery((query) => {
      return { ...query, [name]: value }
    })
  }

  const handleChangeRangeQuery = (name, value) => {
    setQuery((query) => {
      return { ...query, [name]: value }
    })
  }

  const isObject = (obj) => {
    return typeof obj === 'object' && obj !== null
  }

  const handleSubmitButton = (evt) => {
    evt.preventDefault()
    let queryParametr = '?'
    Object.entries(query).forEach((item) => {
      let value = ''
      if (isObject(item[1])) {
        value = Array.from(item[1].values()).join(',')
      } else {
        value = item[1]
      }
      queryParametr += `${item[0]}=${value}&`
    })
    console.log(queryParametr)
  }

  const handleResetButton = (evt) => {
    setQuery(() => {
      return {}
    })
  }

  return (
    <>
      <form className="filter__form">
        <Range
          nameMinInput="minInput"
          nameMaxInput="maxInput"
          query={query}
          handleChangeQuery={handleChangeRangeQuery}
        />

        <Fieldset
          checkedInputs={query.brand}
          handleChange={handleChangeCheckboxQuery}
          name="brand"
          fieldsetsList={['1st', '2nd', '3ple']}
          typeInput="checkbox"
          legend="brand"
        />
        <Fieldset
          checkedInputs={query.plus}
          handleChange={handleChangeRadioQuery}
          name="plus"
          fieldsetsList={['1st', '2nd', '3ple']}
          typeInput="radio"
          legend="plus"
        />

        <BackgroundButton
          typeButton="submit"
          onClick={handleSubmitButton}
          classes="form__submit-btn"
        >
          Применить фильтры
        </BackgroundButton>

        <OutLineButton onClick={handleResetButton} typeButton="reset">
          Сбросить фильтры
        </OutLineButton>
      </form>
    </>
  )
}
