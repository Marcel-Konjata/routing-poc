import {Button, Flex, Heading, Text} from '@chakra-ui/react'
import {useRouter} from "next/router";
import {getCultureCountryFromToken, getCultureTokensToLangCode, routes} from '../routing/routes.mjs'
import LocalisedLink from "../routing/link-extension/LocalisedLink";

export const Hero = () => {
    const router = useRouter()
    const locale = router.locale
    const composeLanguage = getCultureTokensToLangCode(locale)
    const country = getCultureCountryFromToken(locale)

    return (
        <Flex
            justifyContent="center"
            direction={'column'}
            alignItems="center"
            height="100vh"
            bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
            bgClip="text"
        >
            <Heading fontSize="20px">Rou ting / Home</Heading>
            <Text> locale unformatted is {locale}</Text>
            <Text> language from token is {composeLanguage}</Text>
            <Text> country from token is {country}</Text>
            <LocalisedLink route={routes.carDetail} params={{id: '123', name: 'popelnice-na-koleckach', carId: 123}} queriesToOmit={['id', 'name', 'carId']} passHref={true}>
                <Button margin={10}>
                    <Text color={'aquamarine'}>Na popelnici</Text>
                </Button>
            </LocalisedLink>
            <LocalisedLink route={routes.index} passHref={true}>
                <Button margin={2}>
                    <Text color={'aquamarine'}>Home</Text>
                </Button>
            </LocalisedLink>
        </Flex>
    );
}
