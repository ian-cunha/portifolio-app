import { color, Flex, Spacer } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { ChevronDownIcon, StarIcon } from '@chakra-ui/icons'
import { Text } from '@chakra-ui/react'

function Header() {

  return (
    <Flex align="center" justify="center" p='2' gap='2'>
      <Box p='2'>
        <Heading color='white' size='md'>Bem-vindo(a)!</Heading>
      </Box>
      <Spacer />
      <Menu>
        <MenuButton p='5' bg='black'
          _hover={{
            bg: "black"
          }}
          _active={{
            bg: "black"
          }}
          as={Button}>
          <ChevronDownIcon color='white' w={8} h={8} />
        </MenuButton>
        <MenuList bgGradient='linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%);' p='30'>
          <MenuItem as='a' target='_blank' href='https://ian-cunha.notion.site/ian-cunha/Ian-Matheus-da-Cunha-PT-BR-6cfb0e4fa86d48c48414416f2fcdc830'
            _hover={{
              bg: "black",
              color: "white"
            }}
            _focus={{
              bg: "black",
              color: "white"
            }}
            fontWeight='semibold' fontSize="2em" p='10'>Currículo</MenuItem>
          <MenuItem as='a' target='_blank' href='https://www.behance.net/inatus'
            _hover={{
              bg: "black",
              color: "white"
            }}
            _focus={{
              bg: "black",
              color: "white"
            }}
            fontWeight='semibold' fontSize="2em" p='10'>Behance</MenuItem>
          <MenuItem as='a' target='_blank' href='https://linktr.ee/ian.cunha'
            _hover={{
              bg: "black",
              color: "white"
            }}
            _focus={{
              bg: "black",
              color: "white"
            }}
            fontWeight='semibold' fontSize="2em" p='10'>Linktr.ee</MenuItem>
          <MenuItem as='a' target='_blank' href='https://hpainkxfy78.typeform.com/to/X3RoAe5v'
            _hover={{
              bg: "black",
              color: "white"
            }}
            _focus={{
              bg: "black",
              color: "white"
            }}
            fontWeight='semibold' fontSize="1em" p='10'><StarIcon mr='2' /> Deixe seu feedback</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default Header
