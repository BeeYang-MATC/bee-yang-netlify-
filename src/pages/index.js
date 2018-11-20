import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import List from '../components/List'
import ListItem from '../components/List/ListItem'

const IndexPage = ({ data }) => (
  <Layout>
    <List>
      {data.allContentfulBlogPost.edges.map(edge => (
        <ListItem key={edge.node.id}>
          <ListItem.Heading>
            <Link to={edge.node.slug}>{edge.node.title}</Link>
          </ListItem.Heading>
          
          <ListItem.Image src={edge.node.heroImage.fluid.src} alt="" />
          <ListItem.Text>
            {edge.node.body.childMarkdownRemark.excerpt}
          </ListItem.Text>
        </ListItem>
      ))}
    </List>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query pageQuery {
    allContentfulBlogPost(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          id
          title
          slug
          heroImage {
            fluid(maxWidth: 300) {
              src
            }
          }
          body {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`;
