import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from 'gatsby'
import Post from '../components/Post'
import { Row, Col } from 'reactstrap'
import Sidebar from '../components/Sidebar'

const IndexPage = () => (
  <Layout pageTitle="ClientSide.blog">
    <SEO title="Home" />
      <StaticQuery query={indexQuery} render={data => {
      return (
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Post 
             key={node.id}
             title={node.frontmatter.title}
             author={node.frontmatter.author}
             slug={node.fields.slug}
             date={node.frontmatter.date}
             body={node.excerpt}
             fluid={node.frontmatter.image.childImageSharp.fluid}
             tags={node.frontmatter.tags}
            />
          ))}
        </div>
      )
    }}/>
  </Layout>
)

const indexQuery = graphql`
query {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD/MM/YYYY")
          author
          tags
          image {
            childImageSharp {
              fluid(maxWidth: 600, maxHeight: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields{
          slug
        }
        excerpt
      }
    }
  }
}
`
export default IndexPage
