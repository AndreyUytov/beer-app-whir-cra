import './../utils/custom-select'
import './select.scss'

export default function Select() {
  return (
    <custom-select class="catalog__sort" title="Sort by">
      <span data-value="abv" slot="option">
        By abv
      </span>
      <span data-value="first_brewed" slot="option">
        By brewed
      </span>
    </custom-select>
  )
}
