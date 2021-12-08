import { Box, Heading, Spinner } from '@chakra-ui/react'
import * as React from 'react'
import { TableContent } from './TableContent'
import useSWR from 'swr'
import axios from 'axios'

const fetcher = url => axios.get(url).then(res => res.data)



const Leaderboard = () => {
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users?_sort=experience_point:DESC&_limit=60`, fetcher, { refreshInterval: 500 })
  return (
    <Box as="section" py="12">
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
      >
        <Box overflowX="auto">
          <Heading size="lg" mb="6">
            Leaderboard
          </Heading>
          {!error && !data? <Spinner size='xl' /> : <TableContent data={data}/>}

        </Box>
      </Box>
    </Box>
  )
}

export default Leaderboard;