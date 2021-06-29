import Button from './Button'

export default function OutlineButton(props) {
  let classes = 'outline-btn '
  if (props.classes) {
    classes += ` ${props.classes}`
  }
  return (
    <>
      <Button
        classes={classes}
        onClick={props.onClick}
        typeButton={props.typeButton || 'button'}
      >
        {props.children}
      </Button>
    </>
  )
}
