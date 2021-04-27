import { Card, Button } from 'react-bootstrap'
import latest from '../data/romance.json'

const MyLatestReleases = () => {
    return <div className="latestReleases d-flex">
        
            <Card className="m-2 shadow-lg" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={latest[0].img} />
            <Card.Body>
              <Card.Title>{latest[0].title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            
        
        <Card className="m-2 shadow-lg" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={latest[1].img} />
            <Card.Body>
              <Card.Title>{latest[1].title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            <Card className="m-2 shadow-lg" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={latest[2].img} />
            <Card.Body>
              <Card.Title>{latest[2].title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            <Card className="m-2 shadow-lg" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={latest[3].img} />
            <Card.Body>
              <Card.Title>{latest[3].title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            <Card className="m-2 shadow-lg" style={{ width: '18rem' }}>
            <Card.Img variant="top" height="310"src={latest[4].img} />
            <Card.Body>
              <Card.Title>{latest[4].title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            

    </div>
            

}


export default MyLatestReleases