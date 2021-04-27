import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap'
import MyNavBar from './components/MyNavBar'
import MyWelcome from './components/MyWelcome'
import MyFooter from './components/MyFooter'
import MyLatestReleases from './components/MyLatestReleases'

function App() {
  return (
    <div>
    <MyNavBar/>
    <Container className="mt-3">
    <Row>
    <Col>
    <MyWelcome/>
    <h3>Latest Releases</h3>
    <MyLatestReleases/>
    </Col>
    </Row>
    <MyFooter className="mt-3"/>
    </Container>
    </div>
  );
}

export default App;
