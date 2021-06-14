import Button from './Button'

export default function OutlineButton(props) {
  let classes = 'outline-btn '
  if(props.classes) {
    classes += ` ${props.classes}`
  }
  return (
    <>
      <Button classes={classes} >
        {props.children}
      </Button>
    </>
  )
}