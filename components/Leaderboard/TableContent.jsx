import {
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { columns } from './_data'

export const TableContent = ({data}) => {
  return (
    <Table my="8" borderWidth="1px" fontSize="sm">
      <Thead bg={mode('gray.50', 'gray.800')}>
        <Tr>
            <Th whiteSpace="nowrap" scope="col">
              Rank
            </Th>
          {columns.map((column, index) => (
            <Th whiteSpace="nowrap" scope="col" key={index}>
              {column.Header}
            </Th>
          ))}
          <Th />
        </Tr>
      </Thead>
      <Tbody>
      
        {data.map((row, index) => (
          <Tr key={index}>
            <Td whiteSpace="nowrap">
              {index + 1}
            </Td>
            {columns.map((column, index) => {
               let cell
               if (column.accessor=="username") {
                 cell = row
               } else {
                 cell = row[column.accessor]
               }
              const element = column.Cell?.(cell) ?? cell
              console.log(cell)
              return (
                <Td whiteSpace="nowrap" key={index}>
                  {element}
                </Td>
              )
            })}
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
