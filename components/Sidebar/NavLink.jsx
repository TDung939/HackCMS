import { Box, HStack, Icon, useColorModeValue as mode, Text } from '@chakra-ui/react'
import * as React from 'react'
import Link from 'next/link'

export const NavLink = (props) => {
  const { icon, isActive, label, href } = props
  return (
    <Link href={href} passHref>
      <Box
        cursor='pointer'
        display="block"
        py={2}
        px={3}
        borderRadius="md"
        transition="all 0.3s"
        fontWeight="medium"
        lineHeight="1.5rem"
        aria-current={isActive ? 'page' : undefined}
        color={mode('blackAlpha.800', 'whiteAlpha.800')}
        _hover={{
          bg: mode('gray.100', 'gray.700'),
          color: mode('black', 'white'),
        }}
        _activeLink={{
          bg: '#76E094',
          color: mode('white', 'black'),
        }}
      >
        <HStack spacing={4}>
          <Icon as={icon} boxSize="20px" />
          <Text as="span">{label}</Text>
        </HStack>
      </Box>
    </Link>
  )
}
