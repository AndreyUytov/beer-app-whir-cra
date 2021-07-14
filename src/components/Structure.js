import './structure.scss'

export default function Structure({hops}) {
  const renderList = () => {
    if(hops?.length) {
      return hops.map((hop, i) => {
        return (
          <li className="structure__tag-item" key={i}>
            {hop.name}, added - {hop.add}
          </li>
        )
      })
    } else {
      return (
        <li>
          not found info
        </li>
      )
    }
  }
  return (
    <ul className="structure__list list">

      {renderList()}

    </ul>
  )
}