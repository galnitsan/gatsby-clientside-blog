import React from "react"
import {Button, Card, CardTitle, CardBody, Form, FormGroup, Input } from "reactstrap"
import { graphql, StaticQuery, Link } from "gatsby"
import Img from 'gatsby-image'


const Sidebar = () => (
  <div>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          הרשם לקבלת ניוזלטר עדכני
        </CardTitle>
        <Form className="text-center">
          <FormGroup>
            <Input type="email" name="email" placeholder="פרטי האימייל שלך" />
          </FormGroup>
          <button className="btn btn-outline-success text-uppercase">
            שלח עכשיו
          </button>
        </Form>
      </CardBody>
    </Card>
    <Card>
        <CardBody>
            <CardTitle className="text-center text-uppercase">
                תוכן שיווקי
            </CardTitle>
            <img src="https://via.placeholder.com/320x200" alt="תוכן שיווקי" style={{width: "100%"}} />
        </CardBody>
    </Card>
    <Card>
        <CardBody>
            <CardTitle className="text-center text-uppercase mb-3">
                ג'וניור ממליץ!
            </CardTitle>
            <StaticQuery query={sidebarQuery} render={(data) =>(
                <div>
                    {data.allMarkdownRemark.edges.map(({node}) => (
                        <Card key={node.id}>
                            <Link to={node.fields.slug}>
                                <Img className="card-image-top" fluid={node.frontmatter.image.childImageSharp.fluid} />
                            </Link>
                            <CardBody>
                                <CardTitle>
                                    <Link to={node.fields.slug}>
                                        {node.frontmatter.title}
                                    </Link>
                                </CardTitle>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            )} />
        </CardBody>
    </Card>
  </div>
)

const sidebarQuery = graphql`
query sidebarQuery {
    allMarkdownRemark(filter: {frontmatter: {tags: {in: "recommended"}}}, limit: 5) {
        edges {
            node {
                id
                frontmatter{
                    title
                    image{
                        childImageSharp {
                            fluid(maxWidth: 300, maxHeight: 300){
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                fields{
                    slug
                }
            }
        }
    }
}
`
export default Sidebar
