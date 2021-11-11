/* eslint-disable react/display-name */
import * as React from 'react'
import { Heading, Img,  Text, Link } from '@chakra-ui/react'

export const RichTextTheme = {
    h1: props => {
        const { children } = props;
        return <Heading my={4} fontSize='4xl'>{children}</Heading>;
      },
 
    p: props => {
      const { node,children } = props;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return <Img src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.properties.src}`}/>
   
      }
      return <Text my={8} fontSize='xl'>{children}</Text>;
    },
  }