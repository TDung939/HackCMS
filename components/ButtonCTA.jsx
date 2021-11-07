import { Button } from '@chakra-ui/react'
import * as React from 'react'

const ButtonCTA = (props) => {
  return (
    <Button
    color='#221F20'
    bg='#FCCE44'
    py='14'
    px='28'
    fontFamily='Raleway'
    fontWeight='800'
    border='8px solid white'
    fontSize='2xl'
    boxShadow=' -10px 8px 0px 1px #221F20'
    _hover={{
      transform:'translate(-5px, 4px)',
      boxShadow:' -5px 4px 0px 1px #221F20'
    }}
    {...props}
    />
  )
}

export default ButtonCTA;