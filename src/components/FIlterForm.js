import Fieldset from './Fieldset'
import Range from './Range'

export default function FilterForm({ handleChangeQuery, query }) {
  return (
    <>
      <form className="filter__form">
        <Range />

        <Fieldset
          checkedInputsSet={query.brand}
          handleChange={handleChangeQuery}
          name="brand"
          fieldsetsList={['1st', '2nd', '3ple']}
          typeInput="checkbox"
          legend="brand"
        />
        <Fieldset
          checkedInputsSet={query.plus}
          handleChange={handleChangeQuery}
          name="plus"
          fieldsetsList={['1st', '2nd', '3ple']}
          typeInput="radio"
          legend="plus"
        />
      </form>
    </>
  )
}
