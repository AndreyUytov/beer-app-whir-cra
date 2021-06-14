import {ReactComponent as LogoSvg} from './../img/svg/logo.svg'
import {ReactComponent as BurgerSvg} from './../img/svg/burger.svg'
import {ReactComponent as SearchSvg} from './../img/svg/search.svg'
import {ReactComponent as FavoriteSvg} from './../img/svg/favorite.svg'
import {ReactComponent as UserSvg} from './../img/svg/user.svg'
import {ReactComponent as BasketSvg} from './../img/svg/basket.svg'
import Button from './Button'
import OutlineButton from './OutlineButton'

import './header.scss'



export default function Header() {
  return (
    <>
    <header className="page-header">
      <section className="page-header__fix-section">
        <div className="fix-section">
          <a href="index.html" className="page-header__logo">
            <LogoSvg  width="143" height="29" />
          </a>

          <Button classes="page-header__catalog-btn">
            <BurgerSvg width="24" height="24" /> 
            Каталог косметики
          </Button>

          <Button classes="page-header__search-btn">
            <SearchSvg width="24" height="24" />
          </Button>
        </div>
      </section>

      <section className="page-header__user-section">
        <nav className="page-header__navigation">
          <ul className="page-header__navigation-list list">
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <FavoriteSvg width="24" height="24" />    
              </a>
            </li>

            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <UserSvg width="24" height="24" />
              </a>
            </li>

            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <BasketSvg width="24" height="24" />
              </a>
            </li>
          </ul>
        </nav>

        <OutlineButton
          classes="user-section__assortmen-btn popup-consultation-btn">
          Подбор косметики
        </OutlineButton>
      </section>
</header>

    </>
  )
}