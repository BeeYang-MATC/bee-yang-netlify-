import React from 'react'
import { Heading } from 'rebass'

const HeadingBase = props => (
  <Heading {...props}>
    {props.children}
  </Heading>
)

export default HeadingBase