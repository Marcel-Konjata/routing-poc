import {Button, Flex, Text,} from '@chakra-ui/react'


import {Hero} from '../components/Hero'
import {Container} from '../components/Container'
import {Main} from '../components/Main'
import {DarkModeSwitch} from '../components/DarkModeSwitch'

import {Footer} from '../components/Footer'
import {useRouter} from "next/router";
import {routes} from "../routing/routes.mjs";
import {useLocalisedRouter} from "../routing/router-extension/useLocalizedRouter";
import {useIsServer} from "../utils/useIsServer";

const Index = () => {
    const router = useRouter()
    const localizedRouter = useLocalisedRouter()
    const {isServer} = useIsServer()

    const goForCarVanilla = () => {
        router.push({pathname: routes.carDetail.template, query: {carId: 1233}}, undefined)
    }

    const goForCarModdedNoFlatUrl = () => {
        //note: this query format is problem -> personal opinion is that to avoid unnecessary code ballast for cleaning up query, just use same params in
        //rewrites as in structure folder that said: pages/carDetail/[slug]/[id] with rewrite /:name([a-z0-9-]*)--karavan-:id([0-9]+) is much more effective for 2 reasons
        //1st: you pass queries: {slug: batmobil, id: 123} and can actually reduce amount of work in getServerside props if you need work with slug as well as with id
        //2nd: it has more logical approach to pass two params and flatten them instead of pass three params and in as path HIDE actual param that is worked with in serverSideProps
        localizedRouter.push(routes.carDetail, {id: '123', name: 'batmobil-respekt-vole', carId: 123}, undefined, ['carId'] )
    }
    return (
        <Container height="fit-content">
            <Hero/>
            <Main>
                <Button
                    onClick={goForCarVanilla}
                    margin={'50px 50px 50px 50px'} color="text">go for car with no api extension</Button>
                <Button
                    onClick={goForCarModdedNoFlatUrl}
                    margin={'50px 50px 50px 50px'} color="text">go for car with no basic extension</Button>


                <Text textAlign={'center'} color="text">
                    some text
                </Text>
            </Main>

            <DarkModeSwitch/>
            <Flex direction={"column"}>
                <Text>router pathname: {router.pathname} </Text>
                <Text> Router as path: {router.asPath}</Text>
                {/* uncomment for demo -> react is now server side first since latest release -> hydration warning occurs */}
                {/*{!isServer && <Text> Router as path: {router.asPath}</Text>}*/}
            </Flex>
            <Footer>
                <Text>Next ❤️ Chakra</Text>
            </Footer>
        </Container>
    );
}

export default Index
