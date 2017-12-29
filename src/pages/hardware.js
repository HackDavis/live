import React from 'react'

const Hardware = ({data}) => {
    const { markdownRemark } = data; // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark;
    return (
        <div>
            <a href="http://hardware.mlh.io"><button>This will lead to somewhere eventually</button></a>
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
    )
}
export default Hardware
export const pageQuery = graphql`
  query Hardware {
    markdownRemark(frontmatter: {title: {eq: "Hardware from MLH"}}) {
      html
      frontmatter {
        title
      }
    }
  }
`;
