import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { default as H1 } from '../Heading/Heading1'

const Outer = styled.div`
  background: ${props => props.theme.color.primary.main};
  margin-bottom: 1.45rem;
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`

// const H1 = styled.h1`
//   margin: 0;
// `

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <Outer>
    <Inner>
      <H1>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </H1>
    </Inner>
  </Outer>
)

export default Header
