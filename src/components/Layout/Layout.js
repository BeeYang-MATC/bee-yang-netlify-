import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../../themes/drab'
import GlobalStyle from '../GlobalStyle'
import netlifyIdentity from 'netlify-identity-widget'

import Header from '../Header'
//import './layout.css'

const Content = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0 1.0875rem 1.45rem;
  padding-top: 0;
`

class Layout extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    netlifyIdentity.init()
    netlifyIdentity.on('login', user => this.updateCurrentUser())
    netlifyIdentity.on('logout', () => this.updateCurrentUser())
  }

  updateCurrentUser() {
    this.setState({ currentUser: netlifyIdentity.currentUser() })
  }

  login() {
    netlifyIdentity.open()
  }

  logout() {
    netlifyIdentity.logout()
  }

  render() {
    const { children } = this.props
    return (
      <ThemeProvider theme={theme}>
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
      `}
        render={data => (
          <div>
            <Helmet
              title="Loose Threads"
              // title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <GlobalStyle />
            {/* This is the stuff that gets passed to Header.js to be used */}
            <Header 
              siteTitle="Loose Threads"
              // siteTitle={data.site.siteMetadata.title} 
              currentUser={this.state.currentUser}
              login={this.login}
              logout={this.logout}
            />
            <Content>
              {children}
            </Content>
          </div>
        )}
      />
    </ThemeProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout