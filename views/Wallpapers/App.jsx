import { DownloadIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Img, IconButton, Center } from "@chakra-ui/react";

const Wallpapers = () => (
  <Box 
  pos='relative'
  px={{
      base: '6',
      md: '8',
  }}
  maxW={{
      base: 'xl',
      md: '6xl',
  }}
  mx='auto'
  mt='112px'
  >
    <Heading fontFamily='Space Mono' fontSize='48px' fontWeight='bold' maxW='4xl'>Desktop Wallpapers</Heading>
    <Flex>
      <Center
        py="8"
        mr="8"
        rounded={{
          md: 'lg',
        }}
        pos='relative'
      >
        <Img src='/wallpapers/wallpaper-light.png' maxW='320px' border='4px solid #76E094' rounded='xl'/>
        <IconButton as='a' href='/wallpapers/wallpaper-light.png' icon={<DownloadIcon/>} pos='absolute' right='6' bottom='12' download/>
      </Center>

      <Center
        py="8"
        rounded={{
          md: 'lg',
        }}
        pos='relative'
      >
        <Img src='/wallpapers/wallpaper-dark.png' maxW='320px' border='4px solid #76E094' rounded='xl'/>
        <IconButton as='a' href='/wallpapers/wallpaper-dark.png' icon={<DownloadIcon/>} pos='absolute' right='6' bottom='12' download/>
      </Center>
    </Flex>
  </Box>
)

export default Wallpapers;