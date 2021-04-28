import { Jumbotron, Button } from 'react-bootstrap'


const MyWelcome = () => {

  return <Jumbotron className="jumbotronBg">
    <h1>Welcome to the Strive Book Store!</h1>
    <p>
      Please place books back on the correct shelf!!
   </p>
    <p>
      <Button variant="primary">Learn more</Button>
    </p>
  </Jumbotron>

}

export default MyWelcome