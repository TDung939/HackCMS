import { Box, Flex, Text } from '@chakra-ui/react'
import { fetchAPI } from '@/lib/api';
import AuthContext from "@/context/AuthContext";
import { useContext } from 'react'
import Sidebar from "@/components/Sidebar/App";
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { RichTextTheme } from '@/lib/richtext_theme';

export default function Home({resources}) {
  const {user, logout} = useContext(AuthContext)
  return (
    <Flex>
      <Sidebar active={'resources'}/>
      <Box
      maxW='full'
      mx='auto'
      >
        <Box
        mx="auto"
        px={{
            base: '6',
            md: '8',
        }}
        >
          <ReactMarkdown
          components={ChakraUIRenderer(RichTextTheme)}
          escapeHtml={false}
          >{resources.content}</ReactMarkdown>
        </Box>
      </Box>
    </Flex>
  )
}

export async function getStaticProps() {
  const resources = await fetchAPI("/resources");

  return { props: { resources }};
}