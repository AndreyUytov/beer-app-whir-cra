import { ReactComponent as CheckboxIcon } from './../img/svg/checkbox.svg'
import { ReactComponent as RadioIcon } from './../img/svg/radio.svg'

import './checkbox-label.scss'

export default function Label({
  name,
  handleChange,
  valueBox,
  checked,
  typeInput,
}) {
  const checkBoxRender = () => {
    return (
      <span className="form__checkbox-marker">
        <CheckboxIcon width="18" height="18" />
      </span>
    )
  }

  const radioBoxrender = () => {
    return (
      <span className="form__checkbox-marker form__checkbox-marker--radio">
        <RadioIcon width="20" height="20" />
      </span>
    )
  }

  return (
    <>
      <label className="form__label">
        <input
          type={typeInput}
          name={name}
          onChange={handleChange}
          value={valueBox}
          checked={checked}
          className="form__input visually-hidden"
        />
        {typeInput === 'checkbox' ? checkBoxRender() : radioBoxrender()}
        <span className="form__text">{valueBox}</span>
      </label>
    </>
  )
}
