import {
  Box,
  Flex,
  Img,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'

export const Member = (props) => {
  const { profile_picture, name, job_position, company, children } = props


  return (
    <Flex direction="column" align="center" textAlign="center">
      <Img alt={name} draggable={false} w="40" h="40" rounded="full" border='4px solid #76E094' objectFit="cover" src={profile_picture} />
      <Box mt="4">
        <Text fontWeight="bold" fontSize="lg">
          {name}
        </Text>
        <Text fontWeight="semibold" color={useColorModeValue('gray.500', 'whiteAlpha.700')}>
          {job_position} in {company}
        </Text>
      </Box>
      <Text
        mt="2"
        color={useColorModeValue('gray.600', 'whiteAlpha.900')}
        maxW={{
          base: 'unset',
          md: '20rem',
        }}
      >
        {children}
      </Text>
    </Flex>
  )
}
