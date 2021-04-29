import {  } from "react-bootstrap"
import React from "react"
import MyCommentList from "./MyCommentList"
import MyAddComment from "./MyAddComment"

class MyCommentArea extends React.Component {

    state = {
        show: false
    }

    render() {

        return <div className="flex-column d-flex">

            
            <img height="150px"src={this.props.book.img} alt="images" />

                   

            <MyCommentList book={this.props.book}/>
            <MyAddComment book={this.props.book}/>
            
        </div>


    }

}


export default MyCommentArea

