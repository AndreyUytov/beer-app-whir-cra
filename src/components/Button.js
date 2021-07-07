export default function Button(props) {
  let classes = 'button'
  if (props.classes) {
    classes += ` ${props.classes}`
  }

  return (
    <>
      <button
        type={props.typeButton}
        className={classes}
        disabled={props.disabled || false}
        onClick={(evt) => {
          return props.onClick ? props.onClick(evt) : null
        }}
      >
        {props.children}
      </button>
    </>
  )
}
