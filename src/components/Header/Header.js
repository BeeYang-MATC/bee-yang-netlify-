import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { default as H1 } from '../Heading/Heading1'
import { Box, Flex, Text } from 'rebass'

const Outer = styled.div`
  background: ${({ theme }) => theme.color.primary.main};
  margin-bottom: 1.45rem;
  box-shadow:
    0 2px 4px -1px rgba(0, 0, 0, 0.2),
    0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.primary.contrastText};
  text-decoration: none;
`

const ScriptLink = styled.span`
  color: ${({ theme }) => theme.color.primary.contrastText};
  cursor: pointer;
`

const Header = ({ siteTitle, currentUser, login, logout }) => (
  <Outer mb={4}>
    <Flex my={0} mx="auto" px={3} py={4}>
      <H1 width={2 / 3}>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </H1>
      <Flex justifyContent="flex-end" width={1 / 3}>
        <Text my="auto" mr={3}>
          <StyledLink to="/sources">Sources</StyledLink>
        </Text>
        <Text my="auto" mr={3}>
          <StyledLink to="/page-2">About</StyledLink>
        </Text>
        <Text my="auto" mr={3}>
          <StyledLink to="/404">Contact</StyledLink>
        </Text>
        <Text my="auto" mr={3}>
          {
            currentUser ? (
              <ScriptLink onClick={logout}>Logout</ScriptLink>
            ) : (
              <ScriptLink onClick={login}>Login</ScriptLink>
            )
          }
        </Text>
      </Flex>
    </Flex>
  </Outer>
)

export default Header