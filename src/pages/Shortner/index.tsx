import React from 'react'

/**
 * Components.
 */
import { Flex } from '@chakra-ui/react'
import { Form } from '../../components/Form'

export function Shortner() {
  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Form />
    </Flex>
  )
}
