import React from 'react'
import './tech.css'

const Hardware = ({data}) => {
    const { markdownRemark } = data; // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark;
    return (
        <div style={{backgroundColor: "rgb(228, 228, 228)"}}>
            <div className="hero">
                <h1>Checkout Hardware from MLH Labs</h1>
                <a href="http://hardware.mlh.io"><button className="round-button white-button">Register</button></a>
            </div>
            <div className="tech-content">
                <div className="container">
                    <div dangerouslySetInnerHTML={{ __html: html }}></div>
                </div>
            </div>
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
