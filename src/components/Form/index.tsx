import React from 'react'

/**
 * Hooks.
 */
import { useShortner } from '../../hooks/useShortner'

/**
 * Components.
 */
import { CopyIcon, LinkIcon } from '@chakra-ui/icons'
import { Flex, Center, Text, Button, InputGroup, Input } from '@chakra-ui/react'

export function Form() {
  /**
   * Hooks.
   */
  const {
    isError,
    isLoading,
    urlToShort,
    handleCopy,
    shortnedUrl,
    handleSubmit,
    handleOnChange
  } = useShortner()

  /**
   * JSX.
   */
  return (
    <>
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
      <Center w="500px">
        <InputGroup size="md">
          <Input
            size="lg"
            type={'text'}
            border="1px solid #383938"
            _hover={{ border: '1px solid #F67D64' }}
            placeholder="paste a URL"
            focusBorderColor="#F67D64"
            value={shortnedUrl ? shortnedUrl : urlToShort}
            onChange={event => handleOnChange(event.target.value)}
          />
        </InputGroup>
      </Center>

      <Center w="500px">
        <Button
          color="#f8f8f8"
          width="80%"
          height="50px"
          _hover={{ bg: '#F67D64' }}
          leftIcon={<LinkIcon />}
          marginTop="10px"
          marginRight="10px"
          backgroundColor="#F06042"
          onClick={() => handleSubmit()}
          isLoading={isLoading}
        >
          Short
        </Button>
        <Button
          color="#f8f8f8"
          width="20%"
          height="50px"
          _hover={{ bg: '#F67D64' }}
          leftIcon={<CopyIcon />}
          marginTop="10px"
          backgroundColor="#F06042"
          onClick={() => handleCopy()}
          disabled={!shortnedUrl}
        >
          Copy
        </Button>
      </Center>

      <Center>
        <Text
          marginTop="10px"
          color="tomato"
          display={isError ? 'block' : 'none'}
        >
          Não foi possível encurtar a url!
        </Text>
      </Center>
    </>
  )
}
