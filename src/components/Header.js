import { ReactComponent as LogoSvg } from './../img/svg/logo.svg'
import { ReactComponent as BurgerSvg } from './../img/svg/burger.svg'
import { ReactComponent as SearchSvg } from './../img/svg/search.svg'
import { ReactComponent as FavoriteSvg } from './../img/svg/favorite.svg'
import { ReactComponent as UserSvg } from './../img/svg/user.svg'
import { ReactComponent as BasketSvg } from './../img/svg/basket.svg'
import Button from './Button'
import { Link } from 'react-router-dom'

import OutlineButton from './OutlineButton'
import SearchBLock from './SearchBlock'
import { useConsultationPopupContext } from './consultation-context'
import PopupMenu from './PopupMenu'

import './header.scss'
import { useState } from 'react'

export default function Header({ classes }) {
  const [openSearch, setOpenSearch] = useState(false)
  const [isVisibleMenu, setIsVisibleMenu] = useState(true)
  const { setIsVisible } = useConsultationPopupContext()
  const showPopupConsultation = (evt) => {
    setIsVisible(false)
    evt.stopPropagation()
  }

  let styles = 'page-header'

  if (classes) {
    styles += ` ${classes}`
  }

  return (
    <>
      <header className={styles}>
        <section className="page-header__fix-section">
          <div className="fix-section">
            <Link to="/beer-app-whir-cra" className="page-header__logo">
              <LogoSvg width="143" height="29" />
            </Link>

            {openSearch === true ? (
              <SearchBLock onCloseButtonClick={() => setOpenSearch(false)} />
            ) : (
              <>
                <Button
                  classes="page-header__catalog-btn"
                  onClick={() => setIsVisibleMenu(false)}
                >
                  <BurgerSvg width="24" height="24" />
                  Каталог косметики
                </Button>

                <Button
                  classes="page-header__search-btn"
                  onClick={() => setOpenSearch(true)}
                >
                  <SearchSvg width="24" height="24" />
                </Button>
              </>
            )}
          </div>
        </section>

        <section className="page-header__user-section">
          <nav className="page-header__navigation">
            <ul className="page-header__navigation-list list">
              <li className="navigation__item">
                <a href="favorite.html" className="navigation__link">
                  <FavoriteSvg width="24" height="24" />
                </a>
              </li>

              <li className="navigation__item">
                <a href="user.html" className="navigation__link">
                  <UserSvg width="24" height="24" />
                </a>
              </li>

              <li className="navigation__item">
                <a href="basket.html" className="navigation__link">
                  <BasketSvg width="24" height="24" />
                </a>
              </li>
            </ul>
          </nav>

          <OutlineButton
            classes="user-section__assortmen-btn popup-consultation-btn"
            onClick={showPopupConsultation}
          >
            Подбор косметики
          </OutlineButton>
        </section>
      </header>
      <PopupMenu isVisible={isVisibleMenu} setIsVisible={setIsVisibleMenu} />
    </>
  )
}
