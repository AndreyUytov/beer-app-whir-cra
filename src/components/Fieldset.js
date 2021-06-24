import './fieldset.scss'
import Label from './Label'

export default function Fieldset({
  fieldsetsList,
  checkedInputsSet,
  typeInput,
  name,
  legend,
  handleChange,
}) {
  const renderLabels = (fielsdsetList) => {
    return fielsdsetList.map((item, i) => {
      return (
        <Label
          key={i}
          typeInput={typeInput}
          name={name}
          valueBox={item}
          checked={checkedInputsSet?.has(item) ? true : false}
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
