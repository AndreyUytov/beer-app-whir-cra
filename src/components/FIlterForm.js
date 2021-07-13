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
    let queryParametr = ''
    Object.entries(query).forEach((item) => {
      let value = ''
      if (isObject(item[1])) {
        value = Array.from(item[1].values()).join('&')
      } else if (item[1] !== null) {
        value = item[1]
      } else return
      queryParametr += `${item[0]}=${value}&`
    })
    console.log(queryParametr)
    props.setupFilterFormParametrs(queryParametr)
  }

  const handleResetButton = (evt) => {
    setQuery(() => {
      return {}
    })
    props.setupFilterFormParametrs('')
  }

  return (
    <>
      <form className="filter__form">
        <Range
          nameMinInput="abv_gt"
          nameMaxInput="abv_lt"
          query={query}
          handleChangeQuery={handleChangeRangeQuery}
        />

        <Fieldset
          checkedInputs={query.food}
          handleChange={handleChangeCheckboxQuery}
          name="food"
          fieldsetsList={['Chocolate', 'Coffee', 'Cheese', 'Crab', 'Lemon']}
          typeInput="checkbox"
          legend="Food pairing"
        />
        <Fieldset
          checkedInputs={query.brewed_before}
          handleChange={handleChangeRadioQuery}
          name="brewed_before"
          fieldsetsList={['12-2007', '12-2009', '12-2012', '12-2015']}
          typeInput="radio"
          legend="First brewed before"
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
