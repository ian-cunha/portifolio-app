import { Box, Image, Badge, Center, Flex, Spacer, Button, ButtonGroup } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import marta from'../assets/marta.webp';
import smart from'../assets/smart.webp';

function Boxes() {

  const boxOne = {
    imageAlt: '#deixacommarta',
    title: 'Marta Inteligência Imobiliária',
    subtitle: 'React.js, Bootstrap',
    link: 'deixacommarta.com.br',
    url_Link: 'https://www.deixacommarta.com.br/',
    github: 'https://github.com/ian-cunha/marta-app'
  }

  const boxTwo = {
    imageAlt: 'Smart Imobiliário',
    title: 'Smart Imobiliário',
    subtitle: 'React.js, Bootstrap, Axios',
    link: 'smartimobiliario.com.br',
    url_Link: 'https://www.smartimobiliario.com.br/',
    github: 'https://github.com/ian-cunha/smart-app'
  }

  return (
    <Flex display={{ base: 'block', md: 'flex', lg: 'flex' }}>
      <Box bg='white' m='2' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={marta} alt={boxOne.imageAlt} />

        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
          </Box>

          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {boxOne.title}
          </Box>

          <Box>
            {boxOne.subtitle}
          </Box>
          <Box as='a' target='_blank' href={boxOne.url_Link} color='gray.600' fontSize='sm'>
            {boxOne.link}
          </Box>
          <Button m='1' size='xs' as='a' target='_blank' href={boxOne.github} colorScheme='black' variant='outline'>
            Github
          </Button>
        </Box>
      </Box>
      <Box bg='white' m='2' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={smart} alt={boxTwo.imageAlt} />

        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
          </Box>

          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {boxTwo.title}
          </Box>

          <Box>
            {boxTwo.subtitle}
          </Box>
          <Box as='a' target='_blank' href={boxTwo.url_Link} color='gray.600' fontSize='sm'>
            {boxTwo.link}
          </Box>
          <Button m='1' size='xs' as='a' target='_blank' href={boxTwo.github} colorScheme='black' variant='outline'>
            Github
          </Button>
        </Box>
      </Box>
    </Flex>
  )
}

export default Boxes