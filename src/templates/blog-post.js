import React, { Component } from "react";
import PropTypes from "prop-types";

import Layout from "../components/Layout";

class BlogPost extends Component {
  render() {
    const { title, body } = this.props.data.contentfulBlogPost;
    return (
      <Layout>
        <h1>{title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}>
        </div>
      </Layout>
    );
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired
};

export default BlogPost;

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
