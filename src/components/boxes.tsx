import { Box, Image, Badge, Center, Flex, Spacer, Button, ButtonGroup } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import marta from '../assets/marta.webp';
import smart from '../assets/smart.webp';
import motto from '../assets/motto.svg';
import morata from '../assets/morata.svg';
import carmen from '../assets/carmen.svg';
import lago from '../assets/lago.svg';

function Boxes() {

  const boxOne = {
    imageAlt: '#deixacommarta',
    title: 'Marta Inteligência Imobiliária',
    subtitle: 'React, JavaScript, Bootstrap',
    link: 'deixacommarta.com.br',
    url_Link: 'https://www.deixacommarta.com.br/',
    github: 'https://github.com/ian-cunha/marta-app'
  }

  const boxTwo = {
    imageAlt: 'Smart Imobiliário',
    title: 'Smart Imobiliário',
    subtitle: 'React, JavaScript, Bootstrap, Axios',
    link: 'smartimobiliario.com.br',
    url_Link: 'https://www.smartimobiliario.com.br/',
    github: 'https://github.com/ian-cunha/smart-app'
  }

  const boxThree = {
    imageAlt: 'Motto Recife',
    title: 'Motto Recife',
    subtitle: 'PHP, JavaScript, Bootstrap, Ajax',
    link: 'mottorecife.com',
    url_Link: 'https://www.mottorecife.com/',
    github: 'https://github.com/ian-cunha/MottoRecifeByHilton'
  }

  const boxFour = {
    imageAlt: 'Morata Residence',
    title: 'Morata Residence',
    subtitle: 'PHP, JavaScript, Bootstrap, Ajax',
    link: 'morataresidence.com.br',
    url_Link: 'http://morataresidence.com.br/',
    github: 'https://github.com/ian-cunha/morata-project'
  }

  const boxFive = {
    imageAlt: 'Lago de Aldeia',
    title: 'Lago de Aldeia',
    subtitle: 'PHP, JavaScript, Bootstrap, Ajax',
    link: 'lagodealdeia.com.br',
    url_Link: 'https://lagodealdeia.com.br/',
    github: 'https://github.com/ian-cunha/Lago-de-Aldeia-Residence'
  }

  const boxSix = {
    imageAlt: 'Edf. Carmen Maria',
    title: 'Edf. Carmen Maria',
    subtitle: 'PHP, JavaScript, Bootstrap, Ajax',
    link: 'edificiocarmenmaria.com.br',
    url_Link: 'https://edificiocarmenmaria.com.br/',
    github: 'https://github.com/ian-cunha/'
  }

  return (
    <div>
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

        <Box bg='white' m='2' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image src={motto} alt={boxThree.imageAlt} />

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
              {boxThree.title}
            </Box>

            <Box>
              {boxThree.subtitle}
            </Box>
            <Box as='a' target='_blank' href={boxThree.url_Link} color='gray.600' fontSize='sm'>
              {boxThree.link}
            </Box>
            <Button m='1' size='xs' as='a' target='_blank' href={boxThree.github} colorScheme='black' variant='outline'>
              Github
            </Button>
          </Box>
        </Box>
      </Flex>

      <Flex display={{ base: 'block', md: 'flex', lg: 'flex' }}>
        <Box bg='white' m='2' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image src={morata} alt={boxFour.imageAlt} />

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
              {boxFour.title}
            </Box>

            <Box>
              {boxFour.subtitle}
            </Box>
            <Box as='a' target='_blank' href={boxFour.url_Link} color='gray.600' fontSize='sm'>
              {boxFour.link}
            </Box>
            <Button m='1' size='xs' as='a' target='_blank' href={boxFour.github} colorScheme='black' variant='outline'>
              Github
            </Button>
          </Box>
        </Box>

        <Box bg='white' m='2' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image src={lago} alt={boxFive.imageAlt} />

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
              {boxFive.title}
            </Box>

            <Box>
              {boxFive.subtitle}
            </Box>
            <Box as='a' target='_blank' href={boxFive.url_Link} color='gray.600' fontSize='sm'>
              {boxFive.link}
            </Box>
            <Button m='1' size='xs' as='a' target='_blank' href={boxFive.github} colorScheme='black' variant='outline'>
              Github
            </Button>
          </Box>
        </Box>

        <Box bg='white' m='2' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image src={carmen} alt={boxSix.imageAlt} />

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
              {boxSix.title}
            </Box>

            <Box>
              {boxSix.subtitle}
            </Box>
            <Box as='a' target='_blank' href={boxSix.url_Link} color='gray.600' fontSize='sm'>
              {boxSix.link}
            </Box>
            <Button m='1' size='xs' as='a' target='_blank' href={boxSix.github} colorScheme='black' variant='outline'>
              Github
            </Button>
          </Box>
        </Box>

      </Flex>
    </div>
  )
}

export default Boxes