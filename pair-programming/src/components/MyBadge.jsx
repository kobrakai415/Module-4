import { Badge, Button } from 'react-bootstrap'

const MyBadge = (props) => {

    return <Button variant={props.colour}>
     <Badge variant="light">{props.text}</Badge>
   
  </Button>
}

export default MyBadge