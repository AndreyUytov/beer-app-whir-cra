import './../utils/custom-select'
import './select.scss'

export default function Select({currentValue}) {
  return (
    <custom-select current-value={currentValue} class="catalog__sort" title="Sort by">
      <span data-value="abv" slot="option">
        By abv
      </span>
      <span data-value="first_brewed" slot="option">
        By first brewed
      </span>
    </custom-select>
  )
}
