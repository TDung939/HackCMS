import { Text } from '@chakra-ui/react'
import * as React from 'react'
// import Link from 'next/link'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const DesktopNavLink = (props) => {
  return (
    <Link activeClass="active" to={props.href} spy={true} smooth={true} offset={-50} duration={500}>
      <Text
        cursor='pointer'
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderBottom="2px"
        borderColor="transparent"
        transition="all 0.2s"
        fontFamily='Raleway'
        fontWeight='bold'
        _hover={{
          borderColor: 'currentcolor',
        }}
        {...props}
      />
    </Link>
  )
}

const MobileNavLink = (props) => {
  return (
    <Link activeClass="active" to={props.href} spy={true} smooth={true} offset={-50} duration={500}>
      <Text
        display="block"
        textAlign="center"
        fontWeight="bold"
        py="5"
        fontSize="lg"
        color="white"
        w="full"
        _hover={{
          bg: 'blackAlpha.200',
        }}
        {...props}
    />
    </Link>
  )
}

export const NavLink = {
  Mobile: MobileNavLink,
  Desktop: DesktopNavLink,
}
