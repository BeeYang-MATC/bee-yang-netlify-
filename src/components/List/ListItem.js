import React from 'react'
import styled from 'styled-components'
import { Box, Text, Image as ImageBase } from 'rebass'
import { default as Heading } from '../Heading/Heading2'

const Image = props => (
  <ImageBase
    src={props.src}
    my={2}
    width={[1]}
    borderRadius={4}
    {...props}
  />
)

const BaseText = props => (
  <Text mb={4} {...props}>
    {props.children}
  </Text>
)

const StyledText = styled(BaseText)`
  color: ${({theme}) => theme.color.text.primary};
`

const PrimaryText = props => <StyledText {...props} />

// This is our ListItem component
const ListItem = ({ children }) => <Box>{children}</Box>

ListItem.Heading = Heading
ListItem.Image = Image
ListItem.Text = PrimaryText

export default ListItem