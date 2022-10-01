import { Text } from '@chakra-ui/react'
import { BsWhatsapp, BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { Heading } from '@chakra-ui/react'
import { Container, Box, Center, Flex, Icon, Button } from '@chakra-ui/react'
import { ChevronDownIcon, TriangleDownIcon } from '@chakra-ui/icons'
import Boxes from '../components/boxes'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'

function Body() {

  return (
    <div>
      <Box mt='20'>
        <h1 className='seoH1'>Ian Cunha, Frontend Developer | UX/UI | Designer.</h1>
        <Heading
          textAlign='center'
          bgGradient='linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%);'
          bgClip='text'
          fontSize={{ base: '70px', md: '80px', lg: '100px' }}
          fontWeight='extrabold'
        >Ian Cunha</Heading>
        <Text textAlign='center' fontSize={{ base: '2em', md: '2em', lg: '3em' }} color='white'>
          Frontend Developer | UX/UI | Designer.
        </Text>
        <Text color='white' fontSize='1.3em' ml='8' mr='8' textAlign='center'>
          Olá! Quero ajudar a sua empresa a desenvolver produtos digitais de tirar o fôlego. Sou um profissional inovador e apaixonado por tecnologia.
        </Text>
        <Center mt='20' mb='20'>
          <ChevronDownIcon color='white' w={20} h={20} />
        </Center>
        <Text
          textAlign='center'
          bgGradient='linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%);'
          bgClip='text'
          fontSize='2em'
          fontWeight='bold'
          mt='4'
          mb='4'
        >Trabalhos</Text>
        <Center>
          <Boxes />
        </Center>

        <Text
          textAlign='center'
          bgGradient='linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%);'
          bgClip='text'
          fontSize='2em'
          fontWeight='bold'
          mt='4'
          mb='4'
        >Resumo</Text>
        <Text color='white' fontSize='1.3em' ml='8' mr='8' textAlign='center'>Formação em Análise e Desenvolvimento de Sistemas pela Universidade Estácio de Sá-PE, atuo na área de desenvolvimento Front End em Marta Inteligência Imobiliária, além disso sou designer ui/ux.

          Dedico meu tempo livre para produção de ideias, como otimizar layouts para facilitar o fluxo de informação e por consequência melhorar resultados.

          Na Marta Inteligência Imobiliária sou da equipe de devs atuando em criação de landing pages, otimização de layouts, implementação de melhorias em sites e construção de peças para redes sociais.
        </Text>
        <Flex alignItems="center" justifyContent="center" color='white'>

          <Box p='2'>
            <Text m='2' fontWeight='bold' fontSize='1.6em'>Hard Skills</Text>
            <UnorderedList>
              <ListItem>React.js</ListItem>
              <ListItem>JavaScript</ListItem>
              <ListItem>TypeScript</ListItem>
              <ListItem>Sass</ListItem>
              <ListItem>Next.js</ListItem>
            </UnorderedList>
          </Box>
          <Box p='2'>
            <Text m='2' fontWeight='bold' fontSize='1.6em'>Soft Skills</Text>
            <UnorderedList>
              <ListItem>Criativo</ListItem>
              <ListItem>Colaborativo</ListItem>
              <ListItem>Organizado</ListItem>
              <ListItem>Resiliênte</ListItem>
              <ListItem>Flexivel</ListItem>
            </UnorderedList>
          </Box>

        </Flex>

        <Text
          textAlign='center'
          bgGradient='linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%);'
          bgClip='text'
          fontSize='2em'
          fontWeight='bold'
          mt='4'
          mb='4'
        >Contatos</Text>
        <Flex alignItems="center" justifyContent="center">
          <Button w={20} h={20} m='2' color='white' variant='ghost' as='a' target='_blank' href='https://www.linkedin.com/in/ian-cunha-b34b011a0/'
            _hover={{
              bg: "white",
              color: "black"
            }}>
            <Icon w={10} h={10} as={BsLinkedin} />
          </Button>
          <Button w={20} h={20} m='2' color='white' variant='ghost' as='a' target='_blank' href='https://github.com/ian-cunha'
            _hover={{
              bg: "white",
              color: "black"
            }}>
            <Icon w={10} h={10} as={BsGithub} />
          </Button>
          <Button w={20} h={20} m='2' color='white' variant='ghost' as='a' target='_blank' href='https://api.whatsapp.com/send?phone=5581994640585'
            _hover={{
              bg: "white",
              color: "black"
            }}>
            <Icon w={10} h={10} as={BsWhatsapp} />
          </Button>
          <Button w={20} h={20} m='2' color='white' variant='ghost' as='a' target='_blank' href='mailto:contatoiancunha@gmail.com'
            _hover={{
              bg: "white",
              color: "black"
            }}>
            <Icon w={10} h={10} as={HiOutlineMail} />
          </Button>
        </Flex>
      </Box>
    </div>
  )
}

export default Body