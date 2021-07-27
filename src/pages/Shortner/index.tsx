import React from 'react'

/**
 * Components.
 */
import { Flex, Text } from '@chakra-ui/react'
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
      <Flex justifyContent="center" alignItems="baseline" flexDirection="row">
        <Text color="#383938" fontSize="3rem" fontWeight="bold">
          Schnitt
        </Text>
        <Text fontSize="5rem" color="#F06042">
          .
        </Text>
        <Text color="#383938" fontSize="3rem">
          ly
        </Text>
      </Flex>
      <Form />
    </Flex>
  )
}
