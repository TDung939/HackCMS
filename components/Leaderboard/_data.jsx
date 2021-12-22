import { Badge, Text } from '@chakra-ui/react'
import * as React from 'react'
import { User } from './User'

const badgeEnum = {
  active: 'green',
  reviewing: 'orange',
  declined: 'red',
}
export const columns = [
  {
    Header: 'Participant',
    accessor: 'username',
    Cell: function MemberCell(data) {
      return <User data={data} />
    },
  },
  {
    Header: 'Team',
    accessor: 'team',
    Cell: function MemberCell(data) {
      return <Text>{data.name}</Text>
    },
  },
  {
    Header: 'Experience Points',
    accessor: 'experience_point',
  },
]
