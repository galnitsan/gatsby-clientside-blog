/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from './Footer'
import Sidebar from "./Sidebar"
import '../styles/index.scss'
import { Row, Col } from 'reactstrap'



const Layout = ({ children, pageTitle }) => { //props.pageTitle
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container" id="content">
        <h1>{pageTitle}</h1>
        <Row>
          <Col md='8'>{children}</Col>
          <Col md='4'><Sidebar /></Col>
        </Row>
        <footer className="rtl_footer">
           נבנה בעזרת
          {` `} 
          <a href="https://www.gatsbyjs.org"> React && Gatsby</a>
        </footer>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
