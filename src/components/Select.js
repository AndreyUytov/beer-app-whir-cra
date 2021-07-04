import './../utils/custom-select'
import './select.scss'

export default function Select() {
  return (
    <custom-select class="catalog__sort" title="Сортировать по">
      <span data-value="1" slot="option">
        По цене
      </span>
      <span data-value="2" slot="option">
        По рейтингу
      </span>
    </custom-select>
  )
}
