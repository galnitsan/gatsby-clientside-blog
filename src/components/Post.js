import React from 'react'
import { Link } from 'gatsby'
import { Badge, Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap'
import '../styles/index.scss'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunctions'

const Post = ({ title, author, slug, date, body, fluid, tags }) => {
    return(
       <Card>
           <Link to={slug}>
           <Img className="card-image-top" fluid={fluid} />
           </Link>
           <CardBody className="text-right">
               <CardTitle><Link to={slug}>{title}</Link></CardTitle>
               <CardSubtitle>
                   <span className="text-info">{date}</span> נכתב על ידי {' '}
                   <span className="text-info">{author}</span>
               </CardSubtitle>
              <CardText>{body}</CardText>
                   <ul className="post-tags">
                       {tags.map(tag => (
                           <li key={tag}>
                               <Link to={`/tag/${slugify(tag)}`}>
                                   <Badge color="primary" className="text-uppercase">{tag}</Badge>
                                   </Link>
                           </li>
                       ))}
                   </ul>
              <Link to={slug} className="btn btn-outline-primary float-left">קרא עוד</Link>
           </CardBody>
       </Card>
    )
}

export default Post