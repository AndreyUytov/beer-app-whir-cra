export default function Button(props) {
  let classes = 'button'
  if (props.classes) {
    classes += ` ${props.classes}`
  }
  return (
  <>
    <button className={classes}>
      {props.children}
    </button>
  </>
  )
}