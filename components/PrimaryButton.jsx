import { Button } from '@chakra-ui/react'
import * as React from 'react'

const PrimaryButton = (props) => {
  return (
    <Button
    color='#221F20'
    bg='#FCCE44'
    py='4'
    px='6'
    rounded='none'
    fontFamily='Raleway'
    fontWeight='800'
    border='6px solid white'
    fontSize='md'
    boxShadow=' -6px 4px 0px 1px black'
    _hover={{
      transform:'translate(-4px, 2px)',
      boxShadow:' -4px 2px 0px 1px black'
    }}
    {...props}
    />
  )
}

export default PrimaryButton;