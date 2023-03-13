import {Box, Button, Flex, Text,} from '@chakra-ui/react'
import {Hero} from '../components/Hero'
import {Container} from '../components/Container'
import {Main} from '../components/Main'
import {DarkModeSwitch} from '../components/DarkModeSwitch'

import {Footer} from '../components/Footer'
import {useRouter} from "next/router";
import {routes} from "../routing/routes.mjs";
import {generateAsPath} from "../routing/generateAsPath";
import LocalisedLink from "../routing/link-extension/LocalisedLink";

const Index = () => {
    const router = useRouter()
    const pushToSearch = () => {
        router.push({
                pathname: routes.search.template,
                query: {cultureToken: router.locale, minPrice: 1200, maxPrice: 1300}
            },
            generateAsPath({
                route: routes.search,
                locale: router.locale,
                query: {cultureToken: router.locale, minPrice: 1200, maxPrice: 1300}
            }),
            {locale: router.locale})
    }


    return (
        <Container height="fit-content">
            <Hero/>
            <Main>
                <Text textAlign={'center'} color="text">
                    some text
                </Text>

            </Main>

            <Box margin={'20px auto'}>
                <Button onClick={pushToSearch}>go to dynamic route based on language</Button>

            </Box>
            <LocalisedLink route={routes.search}><a>
                to search
            </a>
            </LocalisedLink>
            <DarkModeSwitch/>
            <Flex direction={"column"}>
                <Text>router pathname: {router.pathname} </Text> <Text> Router as path: {router.asPath}</Text>
            </Flex>
            <Footer>
                <Text>Next ❤️ Chakra</Text>
            </Footer>
        </Container>
    );
}

export default Index
