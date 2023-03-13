import {NextRequest, NextResponse} from 'next/server'
import {campervanFlatUrlsIdentifiers, getCultureTokensToLangCode} from "./routing/routes.mjs";

const PUBLIC_FILE = /\.(.*)$/

export async function middleware(req: NextRequest) {
    // skip intercepting public files /api edge functions or _next folder
    if (
        req.nextUrl.pathname.startsWith('/_next') ||
        req.nextUrl.pathname.includes('/api/') ||
        PUBLIC_FILE.test(req.nextUrl.pathname)
    ) {
        return
    }

    // after the redirect will trigger the middleware wil re-run for rewrites
    const {url, nextUrl} = req
    const localeOfRequest = getCultureTokensToLangCode(nextUrl.locale)
    const campervanIdRegexp = /[A-z]+(-[0-9]+)$/

    const hasCamperVanUrlKeyword = nextUrl.pathname.includes(campervanFlatUrlsIdentifiers[localeOfRequest])
    const endsWithCampervanId = campervanIdRegexp.test(nextUrl.pathname)

    if (hasCamperVanUrlKeyword && endsWithCampervanId) {

        //note: NEVER USE new URL(/page) but ALWAYS new URL(page), the forward slash will trigger redirect with default lang even where is no default present
        return NextResponse.rewrite(new URL('campervan/[carId]', url))
    }

    // Handle the default locale fallback to english en-cz
    const shouldHandleDefaultLocale = nextUrl.locale === 'default'
    if (shouldHandleDefaultLocale) {
        const url = nextUrl.clone()
        url.pathname = `/en-cz${nextUrl.pathname}`
        return NextResponse.redirect(url)
    }
}


