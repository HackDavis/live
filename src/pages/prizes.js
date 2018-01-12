import React from 'react'

const Prizes = ({data}) => (
  <div className="container">
    <h1>Prizes</h1>
  </div>
)

export default Prizes
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
