import { useEffect, useRef } from 'react'
import './range.scss'

export default function Range({
  handleChangeQuery,
  nameMinInput,
  nameMaxInput,
  query,
}) {
  const minInput = useRef(null)
  const maxInput = useRef(null)
  const rangeWrapper = useRef(null)

  const MAX_VALUE = 300000

  useEffect(() => {
    rangeWrapper.current.addEventListener('pointerdown', (evt) => {
      let toggle = evt.target.closest('.range__toggle')
      if (!toggle) return
      toggle.ondragstart = () => false
      toggle.style.touchAction = 'none'
      toggle.setPointerCapture(evt.pointerId)

      let mutableProperty
      toggle.classList.contains('range__toggle--left')
        ? (mutableProperty = '--min-position')
        : (mutableProperty = '--max-position')

      let shiftX = evt.clientX - toggle.getBoundingClientRect().left
      let newPosition
      const rangeWrapperWidth =
        rangeWrapper.current.getBoundingClientRect().width
      let rightEdge = rangeWrapperWidth - 24
      let step = 100 / rightEdge
      let input
      if (toggle.classList.contains('range__toggle--left')) {
        input = minInput.current
      } else {
        input = maxInput.current
      }

      const moveAt = (evt) => {
        newPosition =
          evt.pageX - shiftX - rangeWrapper.current.getBoundingClientRect().left
        if (newPosition < 0) newPosition = 0
        if (newPosition > rightEdge) {
          newPosition = rightEdge
        }

        rangeWrapper.current.style.setProperty(
          mutableProperty,
          `${newPosition}px`
        )

        input.value = Math.ceil(newPosition * step) * (MAX_VALUE / 100)
      }

      toggle.addEventListener('pointermove', moveAt)

      const mouseUp = (evt) => {
        toggle.removeEventListener('pointermove', moveAt)
        toggle.removeEventListener('pointerup', mouseUp)
      }

      toggle.addEventListener('pointerup', mouseUp)
    })
  }, [])

  return (
    <fieldset className="form__fieldset">
      <div className="legend-price__wrapper">
        <legend className="form__legend form__legend--price">Цена</legend>
      </div>

      <div className="range-inputs-wrapper">
        <div ref={rangeWrapper} className="range__wrapper">
          <span className="range__toggle range__toggle--left"></span>
          <span className="range__bar"></span>
          <span className="range__toggle range__toggle--right"></span>
        </div>
        <div className="price-wrapper">
          <label className="price-label">
            <input
              ref={minInput}
              type="text"
              className="price-input price-input--min"
              placeholder="1000"
            />
          </label>
          <label className="price-label">
            <input
              ref={maxInput}
              type="text"
              className="price-input price-input--max"
              placeholder="5000"
            />
          </label>
        </div>
      </div>
    </fieldset>
  )
}
