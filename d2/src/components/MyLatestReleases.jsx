import { Row } from 'react-bootstrap'
import romance from '../data/romance.json'
// import MyCommentArea from './MyCommentArea'
import React from "react"
import MyBook from "./MyBook"

class MyLatestReleases extends React.Component {



  render() {

    return <Row> {
      romance.slice(0, 8).map((book) => {


        return <MyBook book={book} />

      })

    }
    </Row>
  }


}


export default MyLatestReleases