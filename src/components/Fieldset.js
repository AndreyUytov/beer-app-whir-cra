import './fieldset.scss'
import Label from './Label'

export default function Fieldset({
  fieldsetsList,
  checkedInputs,
  typeInput,
  name,
  legend,
  handleChange,
}) {
  const isChecked = (item) => {
    if (typeInput === 'radio') {
      return checkedInputs === item ? true : false
    } else if (typeInput === 'checkbox') {
      return checkedInputs?.has(item) ? true : false
    }
  }

  const renderLabels = (fielsdsetList) => {
    return fielsdsetList.map((item, i) => {
      return (
        <Label
          key={i}
          typeInput={typeInput}
          name={name}
          valueBox={item}
          checked={isChecked(item)}
          handleChange={handleChange}
        />
      )
    })
  }

  return (
    <fieldset className="form__fieldset">
      <legend className="form__legend">{legend}</legend>
      {renderLabels(fieldsetsList)}
    </fieldset>
  )
}
