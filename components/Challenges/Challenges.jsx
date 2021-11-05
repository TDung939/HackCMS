import { Box, Heading } from '@chakra-ui/react'
import useSWR from 'swr';
import axios from 'axios';
import ChallengeCard from './ChallengeCard';

const fetcher = url => axios.get(url).then(res => res.data)

function ChallengeRow({challenges}) {
  return (
    <Box 
    display='flex' 
    flexDirection='column'
    mx='8'
    my='4'
    padding='8px 0 0'
    width='100%'
    borderBottom='1px solid #dbdbdb'
    >
      <Heading
      fontSize='22px'
      lineHeight='1.15'
      letterSpacing='0.05em'
      fontWeight='800'
      minWidth='220px'
      paddingBottom='2'
      position= 'absolute'
      left='initial'
      >
        {challenges.type}
      </Heading>
      <Box
       display='flex'
       flexDirection='row'
       width='100%'
       marginTop='40px'
      >
        {challenges.challenges?.map((challenge, idx)=>(
           <ChallengeCard key={idx} challenge={challenge} />
        ))}
      </Box>
    </Box>
  );
}


export default function ChallengesComponent() {
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_URL}/all-challenges`, fetcher, { refreshInterval: 500 })
  const challenges = data? data.challenges : null
  return (
    <Box
    mx='auto'
    overflow='auto'
    style={{
        webkitOverflowScrolling: 'touch',
    }}
    >
      <Box display= 'inline-block'>
      <Box display= 'inline-block'>
          {challenges?.map((item, idx)=>(
            <ChallengeRow challenges={item} key={idx}/>
          ))}
      </Box>
            
      </Box>
    </Box>
  );
}
