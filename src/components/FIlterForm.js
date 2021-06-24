import Fieldset from './Fieldset'

export default function FilterForm({ handleChangeQuery, query }) {
  return (
    <>
      <form className="filter__form">
        <fieldset className="form__fieldset">
          <div className="legend-price__wrapper">
            <legend className="form__legend form__legend--price">Цена</legend>
          </div>

          <div className="range-inputs-wrapper">
            <div className="range__wrapper">
              <span className="range__toggle range__toggle--left"></span>
              <span className="range__bar"></span>
              <span className="range__toggle range__toggle--right"></span>
            </div>
            <div className="price-wrapper">
              <label className="price-label">
                <input
                  type="text"
                  className="price-input price-input--min"
                  placeholder="1000"
                />
              </label>
              <label className="price-label">
                <input
                  type="text"
                  className="price-input price-input--max"
                  placeholder="5000"
                />
              </label>
            </div>
          </div>
        </fieldset>

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
