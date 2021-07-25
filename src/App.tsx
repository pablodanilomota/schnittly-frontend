import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import { Routes } from './Routes'

function App() {
  return (
    <ChakraProvider>
      <Routes />
    </ChakraProvider>
  )
}

export default App
