export default function Button(props) {
  let classes = 'button'
  if (props.classes) {
    classes += ` ${props.classes}`
  }

  return (
    <>
      <button className={classes} onClick={(evt) => props.onClick(evt)}>
        {props.children}
      </button>
    </>
  )
}
