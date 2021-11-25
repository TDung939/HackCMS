import { Box, HStack, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { CallToActionLink } from './CallToActionLink'
import { CloseButton } from './CloseButton'

 const Banner = () => (
  <Box as="section" display={{base:'block', lg:'none'}}>
    <Box
      bgGradient="linear(to-r, #76E094, #FFCA27)"
      color="white"
      py="3"
      px={{
        base: '3',
        md: '6',
        lg: '8',
      }}
    >
      <HStack spacing="3">
        <Stack
          direction={{
            base: 'column',
            sm: 'row',
          }}
          justifyContent="center"
          alignItems="center"
          spacing={{
            base: '3',
            md: '6',
          }}
          width="full"
        >
          <Text>
            <b>Quick tips! </b>
            You can use your laptop or pc for a better experience.
          </Text>
  
        </Stack>
      </HStack>
    </Box>
  </Box>
)

export default Banner;