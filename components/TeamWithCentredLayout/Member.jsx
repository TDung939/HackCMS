import {
  Box,
  Flex,
  HStack,
  Img,
  Link,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

export const Member = (props) => {
  const { profile_picture, name, job_position, company, github, linkedIn, children } = props
  return (
    <Flex direction="column" align="center" textAlign="center">
      <Img alt={name} w="40" h="40" rounded="full" objectFit="cover" src={profile_picture} />
      <Box mt="4">
        <Text fontWeight="bold" fontSize="lg">
          {name}
        </Text>
        <Text fontWeight="semibold" color={useColorModeValue('gray.500', 'whiteAlpha.700')}>
          {job_position} at {company}
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
      <HStack mt="5" spacing="3">
        <Link isExternal color='#221F20' href={github}>
          <VisuallyHidden>{`${name}'s Github page`}</VisuallyHidden>
          <FaGithub aria-hidden />
        </Link>
        <Link isExternal color='#221F20' href={linkedIn}>
          <VisuallyHidden>{`${name}'s Linkedin page`}</VisuallyHidden>
          <FaLinkedinIn aria-hidden />
        </Link>
      </HStack>
    </Flex>
  )
}
