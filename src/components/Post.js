import React from 'react'
import { Link } from 'gatsby'
import {Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap'
import '../styles/index.scss'

const Post = ({ title, author, path, date, body }) => {
    return(
       <Card>
           <CardBody className="text-right">
               <CardTitle><Link to={path}>{title}</Link></CardTitle>
               <CardSubtitle>
                   <span className="text-info">{date}</span> נכתב על ידי {' '}
                   <span className="text-info">{author}</span>
               </CardSubtitle>
              <CardText>{body}</CardText>
              <Link to={path} className="btn btn-outline-primary float-left">קרא עוד</Link>
           </CardBody>
       </Card>
    )
}

export default Post