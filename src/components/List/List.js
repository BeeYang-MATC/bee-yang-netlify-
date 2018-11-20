import React from 'react'
import { Flex } from 'rebass'

const List = ({ children }) => (
  <Flex my={4} mx='auto' width={2 / 3} flexDirection="column">
    {children}
  </Flex>
)

export default List