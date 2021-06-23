import { ReactComponent as Checkbox } from './../img/svg/checkbox.svg'

import './checkbox-label.scss'

export default function CheckboxLabel({
  name,
  handleChange,
  valueCheckbox,
  checked,
}) {
  return (
    <>
      <label className="form__label">
        <input
          type="checkbox"
          name={name}
          onChange={handleChange}
          value={valueCheckbox}
          checked={checked}
          className="form__input visually-hidden"
        />
        <span className="form__checkbox-marker">
          <Checkbox width="18" height="18" />
        </span>
        <span className="form__text">{valueCheckbox}</span>
      </label>
    </>
  )
}
