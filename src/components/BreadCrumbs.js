import { NavLink } from 'react-router-dom'

import './breadcrumbs.scss'
import { ReactComponent as BreadcrumbsIcon } from './../img/svg/breadcrumbs.svg'

export default function BreadCrumbs(props) {
  return (
    <>
      <ul className="breadcrumbs__list list">
        <li className="breadcrumbs__item">
          <NavLink
            to="/beer-app-whir-cra"
            activeClassName="breadcrumbs__link--active"
            className="breadcrumbs__link"
          >
            Главная
          </NavLink>
        </li>

        <li className="breadcrumbs__item">
          <BreadcrumbsIcon width="14" height="14" />
          <NavLink
            to="/catalog"
            activeClassName="breadcrumbs__link--active"
            className="breadcrumbs__link"
          >
            Уход за чем то
          </NavLink>
        </li>
      </ul>
    </>
  )
}
