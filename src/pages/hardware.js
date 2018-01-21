import React from 'react';
import './tech.css';

const Hardware = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      <div className="hero">
        <h1>Checkout Hardware from MLH Labs</h1>
        <a href="https://hardware.mlh.io/events/hackdavis-s2018">
          <button className="round-button white-button">Register</button>
        </a>
      </div>
      <div className="tech-content">
        <div className="container" style={{ paddingTop: '5rem' }}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </div>
  );
};
export default Hardware;
export const pageQuery = graphql`
  query Hardware {
    markdownRemark(frontmatter: { title: { eq: "Hardware from MLH" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
