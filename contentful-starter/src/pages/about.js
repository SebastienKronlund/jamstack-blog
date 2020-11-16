import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ data }) => {
  const about = data.allContentfulAbout.edges[0].node

  return (
    <Layout>
      <SEO title="About" />
      <h1>{about.title}</h1>
      <div className="About">
        <p>{about.body.body}</p>
        <span className="mgBtm__24" />
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}
export default About
export const query = graphql`
  query AboutPageQuery {
    allContentfulAbout {
      edges {
        node {
          id
          title
          slug
          image {
            file {
              url
            }
          }
          body {
            body
          }
        }
      }
    }
  }
`
