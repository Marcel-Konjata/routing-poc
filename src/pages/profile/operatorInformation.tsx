import {
  Flex,
  Text,
} from '@chakra-ui/react'


import { Hero } from '../../components/Hero'
import { Container } from '../../components/Container'
import { Main } from '../../components/Main'
import { DarkModeSwitch } from '../../components/DarkModeSwitch'

import { Footer } from '../../components/Footer'
import {useRouter} from "next/router";

const Index = () => {
  const router = useRouter()
  return (
      <Container height="fit-content">
        <Hero/>
        <Main>
          <Text textAlign={'center'} color="text">
            some text
          </Text>

        </Main>

        <DarkModeSwitch/>
        <Flex direction={"column"}>
       JSON.stringify(router., null, 2)
        </Flex>
        <Footer>
          <Text>Next ❤️ Chakra</Text>
        </Footer>
      </Container>
  );
}

export default Index
