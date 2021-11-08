import {
    Box,
    Accordion,
    Heading
} from '@chakra-ui/react'
import * as React from 'react'
import Item from '@/components/FaqItem';

const Faq = ({faq}) => {
    const qna = faq.QnA;
    return (
    <Box 
    as="section" 
    pos='relative'
    maxW={{
        base: 'xl',
        md: '6xl',
    }}
    mx='auto'
    px={{
        base: '6',
        md: '8',
    }}
    mt='112px'
    >
         <Heading fontFamily='Space Mono' fontSize='48px'>Frequently Asked Questions</Heading>
        <Box py='12'>
            <Accordion allowMultiple>
                {qna.map((item,index)=>(
                    <Box key={index} my='2' py='4' px='2' bg='transparent' 
                    border={`2px solid ${ index%2==0 && index%3!=0? '#FCCE44': (index%3==0? '#76E094':'#AFEBFC')}`} borderRadius='2xl'>
                    <Item title={item.question} description={item.answer}/>
                    </Box>
                ))}
            </Accordion>
        </Box>
    </Box>
    )
}

export default Faq;