import { Button } from '@chakra-ui/react'
import * as React from 'react'

const SecondaryButton = (props) => {
  return (
    <Button
    color='white'
    bg='#221F20'
    py='4'
    px='6'
    fontFamily='Raleway'
    fontWeight='bold'
    border='6px solid white'
    fontSize='md'
    rounded='none'
    boxShadow=' -6px 4px 0px 1px black'
    _hover={{
      transform:'translate(-4px, 2px)',
      boxShadow:' -4px 2px 0px 1px black'
    }}
    {...props}
    />
  )
}

export default SecondaryButton;