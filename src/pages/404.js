import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout pageTitle="אופס, כנראה שיש תקלה..">
    <SEO title="404: Not found" />
    <p style={{textAlign:"right"}}>הקלדת או לחצת על עמוד שכנראה לא קיים או שקיימת תקלה טכנית. עמנו הסליחה.</p>
    <Link  className="button_404 btn btn-primary" to={'/'}>חזור לעמוד הבית</Link>
  </Layout>
)

export default NotFoundPage
