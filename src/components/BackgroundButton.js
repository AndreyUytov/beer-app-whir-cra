import Button from './Button'

export default function BackgroundButton(props) {
  let classes = 'background-btn '
  if (props.classes) {
    classes += ` ${props.classes}`
  }
  return (
    <>
      <Button
        typeButton={props.typeButton || 'button'}
        classes={classes}
        onClick={props.onClick}
      >
        {props.children}
      </Button>
    </>
  )
}
