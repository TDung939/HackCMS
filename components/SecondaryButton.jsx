import { Button } from '@chakra-ui/react'
import * as React from 'react'

const SecondaryButton = (props) => {
  return (
    <Button
    color='white'
    bg='#221F20'
    py='14'
    px='28'
    fontFamily='Raleway'
    fontWeight='bold'
    border='8px solid white'
    fontSize='2xl'
    boxShadow=' -10px 8px 0px 1px white'
    _hover={{
      transform:'translate(-5px, 4px)',
      boxShadow:' -5px 4px 0px 1px white'
    }}
    {...props}
    />
  )
}

export default SecondaryButton;