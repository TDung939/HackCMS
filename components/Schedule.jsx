import { Box, Heading } from '@chakra-ui/react'
import TalkCard from './TalkCard';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = url => axios.get(url).then(res => res.data)

function StageRow(props) {
  const allEvents = props.data;
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
        {allEvents.date}
      </Heading>
      <Box
       display='flex'
       flexDirection='row'
       width='100%'
       marginTop='40px'
      >
        {allEvents.events.map((event, idx)=>(
           <TalkCard key={idx} event={event} />
        ))}
      </Box>
    </Box>
  );
}


export default function ScheduleComponent() {
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_URL}/schedule`, fetcher, { refreshInterval: 500 })
  const daySchedule = data? data[0].day_schedule : null

  return (
    <Box
    mx='auto'
    overflow='auto'
    style={{
        webkitOverflowScrolling: 'touch',
    }}
    >
      <Box display= 'inline-block'>
          {daySchedule?.map((item, idx)=>(
            <StageRow data={item} key={idx}/>
          ))}
      </Box>
    </Box>
  );
}
