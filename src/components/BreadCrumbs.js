import { Link, useRouteMatch } from 'react-router-dom'

import './breadcrumbs.scss'
import { ReactComponent as BreadcrumbsIcon } from './../img/svg/breadcrumbs.svg'

function renderLinks(links) {
  return links.map((link, i) => {
    let match = useRouteMatch({
      path: link.to,
      exact: true
    });
    let svgStyles = match ? {'--svg-fill': 'var(--akcent)'} : ''
    return (
    <li className="breadcrumbs__item" key={link.to}>
      { i === 0 ? null : match ?
      <BreadcrumbsIcon width='14' height='14' style={svgStyles} /> : <BreadcrumbsIcon width='14' height='14' /> }
      <Link
        to={link.to}
        className={match ? "breadcrumbs__link breadcrumbs__link--active" : "breadcrumbs__link"}
      >
        {link.label}
      </Link>
    </li>
    )
  })
}

export default function BreadCrumbs({links}) {
  
  return (
    <>
      <ul className="breadcrumbs__list list">
        {renderLinks(links)}
      </ul>
    </>
  )
}
