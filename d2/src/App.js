import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import MyNavBar from './components/MyNavBar'
import MyWelcome from './components/MyWelcome'
import MyFooter from './components/MyFooter'
import MyLatestReleases from './components/MyLatestReleases'

function App() {
  return (
    <div>
      <MyNavBar />
      <Container className="mt-3">

        <MyWelcome />


        <h3>Latest Releases</h3>
        <MyLatestReleases />

        <MyFooter className="mt-3" />
      </Container>
    </div>
  );
}

export default App;
