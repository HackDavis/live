import React from 'react'

const API = () => (
  <div className="container">
    <h1>API</h1>
  </div>
)

export default API
export const pageQuery = graphql`
query API{
  allMarkdownRemark (filter:{frontmatter:{link:{eq: "API"}}} sort:{fields:[frontmatter___title] ,order:ASC}){
    edges{
      node{
        frontmatter{
          title
          category
          start
          end
          host
        }
        html
      }
    }
  }
}
`
