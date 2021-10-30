import {
    Box,
    Heading,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    } from '@chakra-ui/react'
import * as React from 'react'

const Item = (props) => (
  <AccordionItem border='0' _focus={{ boxShadow: "0"}}>
    <AccordionButton>
      <Box flex="1" textAlign="left">
      <Heading fontSize='xl'>{props.title}</Heading>
      </Box>
      <AccordionIcon />
    </AccordionButton>
  <AccordionPanel pb={4}>
  {props.description}
  </AccordionPanel>
</AccordionItem>
)

export default Item;