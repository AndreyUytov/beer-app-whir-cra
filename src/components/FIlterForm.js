import { useState } from 'react'

import Fieldset from './Fieldset'
import Range from './Range'

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
        const set = query[name]
        set.delete(value)
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
      </form>
    </>
  )
}
