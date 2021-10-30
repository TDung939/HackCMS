import {
    Box,
    Accordion,
} from '@chakra-ui/react'
import * as React from 'react'
import TitlewithBoxes from '@/components/TitleswithBoxes';
import Item from '@/components/FaqItem';

const Faq = ({faq}) => {
    const qna = faq.QnA;
    return (
    <Box pos='relative'
    px={{
        base: '6',
        md: '8',
    }}
    >
        <Box 
        as="section" 
        >
            <Box
            py="12"
            maxW={{
                base: 'xl',
                md: '7xl',
            }}
            mx='auto'
            px={{
                base: '6',
                md: '8',
            }}
            >
               <TitlewithBoxes text='FAQ' color='#AFEBFC'/>
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
           
        </Box>
    </Box>
    )
}

export default Faq;