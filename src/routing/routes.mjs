export const  cultureTokens = {
    'cs-cz': 'cs-cz',
    'cs-pl': 'cs-pl',
    'cs-sk': 'cs-sk',
    'cs-es': 'cs-es',
    'pl-pl': 'pl-pl',
    'pl-cz': 'pl-cz',
    'pl-sk': 'pl-sk',
    'pl-es': 'pl-es',
    'en-cz': 'en-cz',
    'en-sk': 'en-sk',
    'en-pl': 'en-pl',
    'en-es': 'en-es',
    'sk-cz': 'sk-cz',
    'sk-sk': 'sk-sk',
    'sk-pl': 'sk-pl',
    'sk-es': 'sk-es',
    'es-cz': 'es-cz',
    'es-sk': 'es-sk',
    'es-pl': 'es-pl',
    'es-es': 'es-es',
};
export const supportedCountries = ['es', 'cz', 'sk', 'pl']
export const supportedTokens = ['cs-cz', 'en-cz', 'sk-sk', 'en-sk', 'pl-pl', 'en-pl', 'es-es', 'en-es'];
export const getCultureTokensToLangCode = (fullToken) => {
    if (fullToken.startsWith('cs-')) return 'cs';
    if (fullToken.startsWith('en-')) return 'en';
    if (fullToken.startsWith('sk-')) return 'sk';
    if (fullToken.startsWith('pl-')) return 'pl';
    return undefined;
};

export const getCultureCountryFromToken = (fullToken) => {
    const defaultCountry = 'cz'
    const countryStartIndex = fullToken.search(/-[A-z]*$/)
    // exit if the url is corrupted with default country
    if(countryStartIndex === -1) return defaultCountry
    const country = fullToken.slice(countryStartIndex + 1, fullToken.length)

    if(supportedCountries.includes(country)) return country

    return defaultCountry
}


export const cultureRedirects = {
    'cz-cs': 'cs-cz',
    'cs-pl': 'en-pl',
    'cs-sk': 'en-sk',
    'es-sk': 'en-sk',
    'pl-cz': 'en-cz',
    'pl-sk': 'en-sk',
    'pl-es': 'en-es',
    'sk-cz': 'en-cz',
    'sk-pl': 'en-pl',
    'sk-es': 'en-es',
};
export const cultureTokenMap = {
    cs: cultureTokens['cs-cz'],
    sk: cultureTokens['sk-sk'],
    pl: cultureTokens['pl-pl'],
    es: cultureTokens['es-es'],
};

export const routes = {
    // add_caravan: {
    //   template: '/add-caravan',
    //   urls: {
    //     cs: '/pridejte-svuj-karavan',
    //     en: '/add-your-campervan',
    //     pl: '/dodaj-swojego-kampera',
    //     sk: '/pridajte-svoj-karavan',
    //   },
    //   isStatic: true,
    // },
    listingWizardEntry: {
        template: '/listing-wizard-entry',
        urls: {
            cs: '/pridejte-svuj-karavan',
            en: '/add-your-campervan',
            es: '/anade-tu-autocaravana',
            pl: '/dodaj-swojego-kampera',
            sk: '/pridajte-svoj-karavan',
        },
        isStatic: true,
    },
    listingWizardLanding: {
        template: '/listing-wizard-landing',
        urls: {
            cs: '/proc-pronajimat-na-campiri',
            en: '/why-rent-on-campiri',
            es: '/porque-alquilar-en-campiri',
            pl: '/dlaczego-wynajmowac-na-campiri',
            sk: '/preco-prenajimat-na-campiri',
        },
        isStatic: true,
    },
    firstTimeCampervaningLanding: {
        template: '/first-time-campervaning-landing',
        urls: {
            cs: '/poprve-kempovani',
            pl: '/pierwszy-raz-kamperem-przewodnik',
        },
        isStatic: true,
    },
    goForExperiencesLP: {
        template: '/landing/goForExperiencesLP',
        urls: {
            cs: '/babi-leto-2022',
        },
        isStatic: true,
    },
    search: {
        template: '/search',
        urls: {
            cs: '/najdi-karavan',
            en: '/search',
            es: '/buscar',
            pl: '/szukaj-kampera',
            sk: '/najdi-karavan',
        },
        isStatic: true,
    },
    index: {
        template: '/',
        urls: {
            cs: '',
            en: '',
            es: '',
            pl: '',
            sk: '',
        },
        isStatic: true,
    },
    mission: {
        template: '/mission',
        urls: {
            cs: '/nase-mise',
            en: '/our-mission',
            es: '/nuestra-mision',
            pl: '/nasza-misja',
            sk: '/nasa-misia',
        },
        isStatic: true,
    },
    blog: {
        template: '/blogPage',
        urls: {
            cs: '/blog',
            pl: '/blog',
            sk: '/blog',
            en: '/blog',
            es: '/blog',
        },
        isStatic: true,
    },
    blogDetailPreview: {
        template: '/blogPagePreview/[articleId]',
        urls: {
            cs: '/:slug([A-Za-z0-9-]+)--clanek-:id([A-Za-z0-9-]+)/preview',
            pl: '/:slug([A-Za-z0-9-]+)--artykul-:id([A-Za-z0-9-]+)/preview',
            sk: '/:slug([A-Za-z0-9-]+)--clanok-:id([A-Za-z0-9-]+)/preview',
            en: '/:slug([A-Za-z0-9-]+)--article-:id([A-Za-z0-9-]+)/preview',
            es: '/:slug([A-Za-z0-9-]+)--articulo-:id([A-Za-z0-9-]+)/vistaprevia',
        },
        isStatic: false,
        isFlat: true,
        params: 'articleId'
    },
    blogDetail: {
        template: '/blogPage/[articleId]',
        urls: {
            cs: '/:slug([A-Za-z0-9-]+)--clanek-:id([A-Za-z0-9-]+)',
            sk: '/:slug([A-Za-z0-9-]+)--clanok-:id([A-Za-z0-9-]+)',
            pl: '/:slug([A-Za-z0-9-]+)--artykul-:id([A-Za-z0-9-]+)',
            en: '/:slug([A-Za-z0-9-]+)--article-:id([A-Za-z0-9-]+)',
            es: '/:slug([A-Za-z0-9-]+)--articulo-:id([A-Za-z0-9-]+)',
        },
        isStatic: false,
        isFlat: true,
        params: 'articleId'
    },
    faq: {
        template: '/faq',
        urls: {
            cs: '/podpora',
            en: '/support',
            es: '/apoyo',
            pl: '/pomoc',
            sk: '/podpora',
        },
        isStatic: true,
    },
    landingSeptember: {
        template: '/landing/september',
        urls: {
            cs: '/akcni-nabidka-podzim-2021',
        },
        isStatic: true,
    },
    landingWeekend: {
        template: '/landing/weekend',
        urls: {
            cs: '/akce-eurovikend',
        },
        isStatic: true,
    },
    protiproudu: {
        template: '/landing/protiproudu',
        urls: {
            cs: '/protiproudu',
        },
        isStatic: true,
    },
    landingAustria: {
        template: '/landing/austria',
        urls: {
            cs: '/akcni-nabidka-rakousko',
        },
        isStatic: true,
    },
    landingMorava: {
        template: '/landing/morava',
        urls: {
            cs: '/akcni-nabidka-morava',
        },
        isStatic: true,
    },
    landingChristmas: {
        template: '/landing/christmas',
        urls: {
            cs: '/akcni-nabidka-zima',
        },
        isStatic: true,
    },
    landingSummmer: {
        template: '/landing/summer',
        urls: {
            cs: '/letni-sleva-2022',
        },
        isStatic: true,
    },
    landingB2B: {
        template: '/landing/b2b',
        urls: {
            cs: '/b2b',
            pl: '/b2b',
        },
        isStatic: true,
    },
    landingSummerCompetition: {
        template: '/landing/summerCompetition',
        urls: {
            cs: '/soutez-o-letni-dovolenou',
        },
        isStatic: true,
    },
    campiriSpain: {
        template: '/landing/campiriSpain',
        urls: {
            cs: '/campiri-malaga',
            pl: '/campiri-hiszpania',
        },
        isStatic: true,
    },
    landingSpring: {
        template: '/landing/spring',
        urls: {
            cs: '/jarni-prazdniny',
        },
        isStatic: true,
    },
    landingEastern: {
        template: '/landing/eastern',
        urls: {
            cs: '/velikonocni-akce',
        },
        isStatic: true,
    },
    landingEasternPL: {
        template: '/landing/easternPL',
        urls: {
            pl: '/promocje',
        },
        isStatic: true,
    },
    landingLowTatras: {
        template: '/landing/low_tatras',
        urls: {
            cs: '/akcni-nabidka-nizke-tatry',
        },
    },
    landingSixPlusOne: {
        template: '/landing/sixPlusOnePL',
        urls: {
            pl: '/letniapromocja',
        },
        isStatic: true,
    },
    landingFirstMinute: {
        template: '/landing/firstMinute',
        urls: {
            cs: '/akcni-nabidka-first-minute',
        },
        isStatic: true,
    },
    landingGreece: {
        template: '/landing/greece',
        urls: {
            cs: '/akcni-nabidka-recko',
            en: '/akcni-nabidka-recko',
        },
        isStatic: true,
    },
    landingCampersClub: {
        template: '/landing/campers_club',
        urls: {
            cs: '/campers-club',
        },
        isStatic: true,
    },
    landingSecondBirthdaySale: {
        template: '/landing/secondBirthdaySale',
        urls: {
            cs: '/druhe-narozeniny',
        },
        isStatic: true,
    },
    discoverLP: {
        template: '/landing/discoverLP',
        urls: {
            cs: '/pro-kazdou-prilezitost',
        },
        isStatic: true,
    },
    everyOcasionLP: {
        template: '/landing/everyOcasionLP',
        urls: {
            pl: '/kamper-na-kazda-okazje',
        },
        isStatic: true,
    },
    landingFromThreeDays: {
        template: '/landing/fromThreeDays',
        urls: {
            cs: '/od-tri-dnu',
        },
        isStatic: true,
    },
    operatorDashboard: {
        template: '/operator/dashboard',
        urls: {
            cs: '/operator/dashboard',
            en: '/operator/dashboard',
            es: '/operator/dashboard',
            pl: '/operator/dashboard',
            sk: '/operator/dashboard',
        },
    },
    operatorBookingsDashboard: {
        template: '/operator/bookingsDashboard',
        urls: {
            cs: '/operator/bookings-dashboard',
            en: '/operator/bookings-dashboard',
            es: '/operator/bookings-dashboard',
            pl: '/operator/bookings-dashboard',
            sk: '/operator/bookings-dashboard',
        },
    },
    renterDashboard: {
        template: '/renter/dashboard',
        urls: {
            cs: '/renter/dashboard',
            en: '/renter/dashboard',
            es: '/renter/dashboard',
            pl: '/renter/dashboard',
            sk: '/renter/dashboard',
        },
    },
    profileSettings: {
        template: '/profile/settings',
        urls: {
            cs: '/profile-settings',
            en: '/profile-settings',
            es: '/profile-settings',
            pl: '/profile-settings',
            sk: '/profile-settings',
        },
    },
    personalData: {
        template: '/profile/personaIlnformation',
        urls: {
            cs: '/profile-settings/personal-information',
            en: '/profile-settings/personal-information',
            es: '/profile-settings/personal-information',
            pl: '/profile-settings/personal-information',
            sk: '/profile-settings/personal-information',
        },
    },
    billingData: {
        template: '/profile/billingInformation',
        urls: {
            cs: '/profile-settings/billing-information',
            en: '/profile-settings/billing-information',
            es: '/profile-settings/billing-information',
            pl: '/profile-settings/billing-information',
            sk: '/profile-settings/billing-information',
        },
    },
    operatorInformation: {
        template: '/profile/operatorInformation',
        urls: {
            cs: '/profile-settings/operator-information',
            en: '/profile-settings/operator-information',
            es: '/profile-settings/operator-information',
            pl: '/profile-settings/operator-information',
            sk: '/profile-settings/operator-information',
        },
    },
    tos: {
        template: '/tos',
        urls: {
            cs: '/obchodni-podminky',
            en: '/tos',
            es: '/terminos-y-condiciones',
            pl: '/warunki-handlowe',
            sk: '/obchodne-podmienky',
        },
        isStatic: true,
    },
    reclamationPage: {
        template: '/reclamation',
        urls: {
            cs: '/reklamacni-rad',
            sk: '/reklamacny-poriadok',
        },
        isStatic: true,
    },
    voucherTos: {
        template: '/voucher_terms',
        urls: {
            cs: '/obchodni-podminky-voucher',
            en: '/tos',
            es: '/terminos-y-condiciones-voucher',
            pl: '/warunki-handlowe-voucher',
            sk: '/obchodne-podmienky-voucher',
        },
    },
    privacy: {
        template: '/privacy',
        urls: {
            cs: '/ochrana-osobnich-udaju',
            en: '/privacy-terms',
            es: '/terminos-de-privacidad',
            pl: '/ochrona-danych-osobowych',
            sk: '/ochrana-osobnych-udajov',
        },
        isStatic: true,
    },
    termsOfPromotion: {
        template: '/termsOfPromotion',
        urls: {
            pl: '/warunki-promocji',
        },
        isStatic: true,
    },
    cookies: {
        template: '/cookies',
        urls: {
            cs: '/cookies',
            en: '/cookies',
            es: '/cookies',
            sk: '/cookies',
        },
        isStatic: true,
    },
    password_recovery: {
        template: '/password-recovery',
        urls: {
            cs: '/obnova-hesla',
            en: '/reset-password',
            es: '/resetear-contrasena',
            pl: '/odzyskiwanie-hasla',
            sk: '/obnova-hesla',
        },
        isStatic: true,
    },
    carDetail: {
        template: '/campervan/[carId]',
        urls: {
            cs: '/:name([a-z0-9-]*)--karavan-:id([0-9]+)',
            en: '/:name([a-z0-9-]*)--campervan-:id([0-9]+)',
            es: '/:name([a-z0-9-]*)--autocaravana-:id([0-9]+)',
            pl: '/:name([a-z0-9-]*)--samochod-:id([0-9]+)',
            sk: '/:name([a-z0-9-]*)--karavan-:id([0-9]+)',
        },
        isStatic: false,
        params: ['id', 'name']
    },
    bookingDetail: {
        template: '/booking/[bookingId]',
        urls: {
            cs: '/booking-:id([A-Za-z0-9-]+)',
            en: '/booking-:id([A-Za-z0-9-]+)',
            es: '/booking-:id([A-Za-z0-9-]+)',
            pl: '/booking-:id([A-Za-z0-9-]+)',
            sk: '/booking-:id([A-Za-z0-9-]+)',
        },
        isStatic: false,
    },
    reviewBookingDetail: {
        template: '/review/[bookingId]',
        urls: {
            cs: '/review-:id([A-Za-z0-9-]+)',
            en: '/review-:id([A-Za-z0-9-]+)',
            pl: '/review-:id([A-Za-z0-9-]+)',
            sk: '/review-:id([A-Za-z0-9-]+)',
        },
        isStatic: false,
    },
    reviewBookingDetailOperator: {
        template: '/operator/review/[bookingId]',
        urls: {
            cs: '/operator/review-:id([A-Za-z0-9-]+)',
            en: '/operator/review-:id([A-Za-z0-9-]+)',
            pl: '/operator/review-:id([A-Za-z0-9-]+)',
            sk: '/operator/review-:id([A-Za-z0-9-]+)',
        },
        isStatic: false,
    },
    inbox: {
        template: '/inbox',
        urls: {
            cs: '/inbox',
            en: '/inbox',
            es: '/inbox',
            pl: '/inbox',
            sk: '/inbox',
        },
        isStatic: false,
    },
    bookingDetailTest: {
        template: '/booking/[bookingId]',
        urls: {
            cs: '/bookingTest-:id([A-Za-z0-9-]+)',
            en: '/bookingTest-:id([A-Za-z0-9-]+)',
            es: '/bookingTest-:id([A-Za-z0-9-]+)',
            pl: '/bookingTest-:id([A-Za-z0-9-]+)',
            sk: '/bookingTest-:id([A-Za-z0-9-]+)',
        },
        isStatic: false,
    },
    checkin: {
        template: '/checkin/[bookingId]',
        urls: {
            cs: '/operator/check-in-:id([A-Za-z0-9]+)',
            en: '/operator/check-in-:id([A-Za-z0-9]+)',
            es: '/operator/check-in-:id([A-Za-z0-9]+)',
            pl: '/operator/check-in-:id([A-Za-z0-9]+)',
            sk: '/operator/check-in-:id([A-Za-z0-9]+)',
        },
    },
    checkinCustomer: {
        template: '/checkin/[bookingId]',
        urls: {
            cs: '/check-in-:id([A-Za-z0-9]+)',
            en: '/check-in-:id([A-Za-z0-9]+)',
            es: '/check-in-:id([A-Za-z0-9]+)',
            pl: '/check-in-:id([A-Za-z0-9]+)',
            sk: '/check-in-:id([A-Za-z0-9]+)',
        },
    },
    checkout: {
        template: '/checkout/[bookingId]',
        urls: {
            cs: '/operator/check-out-:id([A-Za-z0-9]+)',
            en: '/operator/check-out-:id([A-Za-z0-9]+)',
            es: '/operator/check-out-:id([A-Za-z0-9]+)',
            pl: '/operator/check-out-:id([A-Za-z0-9]+)',
            sk: '/operator/check-out-:id([A-Za-z0-9]+)',
        },
    },
    checkoutCustomer: {
        template: '/checkout/[bookingId]',
        urls: {
            cs: '/check-out-:id([A-Za-z0-9]+)',
            en: '/check-out-:id([A-Za-z0-9]+)',
            es: '/check-out-:id([A-Za-z0-9]+)',
            pl: '/check-out-:id([A-Za-z0-9]+)',
            sk: '/check-out-:id([A-Za-z0-9]+)',
        },
    },
    bookingKyc: {
        template: '/kyc/[bookingId]',
        urls: {
            cs: '/booking-:id([A-Za-z0-9-]+)/kyc',
            en: '/booking-:id([A-Za-z0-9-]+)/kyc',
            es: '/booking-:id([A-Za-z0-9-]+)/kyc',
            pl: '/booking-:id([A-Za-z0-9-]+)/kyc',
            sk: '/booking-:id([A-Za-z0-9-]+)/kyc',
        },
        isStatic: false,
    },
    managerBooking: {
        template: '/manager/booking/[bookingId]',
        urls: {
            cs: '/manager/booking-:id([A-Za-z0-9-]+)',
            en: '/manager/booking-:id([A-Za-z0-9-]+)',
            es: '/manager/booking-:id([A-Za-z0-9-]+)',
            pl: '/manager/booking-:id([A-Za-z0-9-]+)',
            sk: '/manager/booking-:id([A-Za-z0-9-]+)',
        },
        isStatic: false,
    },
    operatorBooking: {
        template: '/operator/booking/[bookingId]',
        urls: {
            cs: '/operator/booking-:id([A-Za-z0-9-]+)',
            en: '/operator/booking-:id([A-Za-z0-9-]+)',
            es: '/operator/booking-:id([A-Za-z0-9-]+)',
            pl: '/operator/booking-:id([A-Za-z0-9-]+)',
            sk: '/operator/booking-:id([A-Za-z0-9-]+)',
        },
        isStatic: false,
    },
    create_offer: {
        template: '/offers',
        urls: {
            cs: '/vytvorit-nabidku',
            en: '/create-offer',
            es: '/crear-oferta',
            pl: '/stworzyc-oferte',
            sk: '/vytvorit-nabidku',
        },
        isStatic: true,
    },
    voucher: {
        template: '/voucher',
        urls: {
            cs: '/eshop',
        },
        isStatic: true,
    },
    p2pAllInclusive: {
        template: '/landing/p2pAllInclusive',
        urls: {
            cs: '/p2p-all-inclusive',
        },
        isStatic: true,
    },
    listingWizardOperatorInfo: {
        template: '/listingWizard/operatorInfo/[idLW]',
        urls: {
            cs: '/pridejte-svuj-karavan/info-o-provozovateli',
            en: '/listing-wizard/operator-info',
            es: '/anade-tu-autocaravana/operator-info',
            pl: '/wykaz-kreator/operator-info',
            sk: '/pridajte-svoj-karavan/info-o-prevadzkovatelovi',
        },
        isStatic: true,
    },
    listingWizardCreatedOperatorInfo: {
        template: '/listingWizard/operatorInfo/[idLW]',
        urls: {
            cs: '/pridejte-svuj-karavan/info-o-provozovateli/:id([A-Za-z0-9-]+)',
            en: '/listing-wizard/operator-info/:id([A-Za-z0-9-]+)',
            es: '/anade-tu-autocaravana/operator-info/:id([A-Za-z0-9-]+)',
            pl: '/wykaz-kreator/operator-info/:id([A-Za-z0-9-]+)',
            sk: '/pridajte-svoj-karavan/info-o-prevadzkovatelovi/:id([A-Za-z0-9-]+)',
        },
        isStatic: false,
    },
    listingWizardOperatorInfoManager: {
        template: '/listingWizard/operatorInfo/[idLW]',
        urls: {
            cs: '/manager/pridejte-svuj-karavan/info-o-provozovateli/:id([A-Za-z0-9-]+)',
            en: '/manager/listing-wizard/operator-info/:id([A-Za-z0-9-]+)',
            es: '/manager/anade-tu-autocaravana/operator-info/:id([A-Za-z0-9-]+)',
            pl: '/manager/wykaz-kreator/operator-info/:id([A-Za-z0-9-]+)',
            sk: '/manager/pridajte-svoj-karavan/info-o-prevadzkovatelovi/:id([A-Za-z0-9-]+)',
        },
        isStatic: false,
    },
    listingWizardVehicleInfo: {
        template: '/listingWizard/vehicleInfo/[idLW]',
        urls: {
            cs: '/pridejte-svuj-karavan/info-o-vozu/:id([A-Za-z0-9-]+)',
            en: '/listing-wizard/vehicle-info/:id([A-Za-z0-9-]+)',
            es: '/anade-tu-autocaravana/informacion-del-vehiculo/:id([A-Za-z0-9-]+)',
            pl: '/wykaz-kreator/pojazd-info/:id([A-Za-z0-9-]+)',
            sk: '/pridajte-svoj-karavan/info-o-vozidle/:id([A-Za-z0-9-]+)',
        },
        isStatic: false,
    },
    listingWizardVehicleInfoManager: {
        template: '/listingWizard/vehicleInfo/[idLW]',
        urls: {
            cs: '/manager/pridejte-svuj-karavan/info-o-vozu/:id([A-Za-z0-9-]+)',
            en: '/manager/listing-wizard/vehicle-info/:id([A-Za-z0-9-]+)',
            es: '/manager/anade-tu-autocaravana/informacion-del-vehiculo/:id([A-Za-z0-9-]+)',
            pl: '/manager/wykaz-kreator/pojazd-info/:id([A-Za-z0-9-]+)',
            sk: '/manager/pridajte-svoj-karavan/info-o-vozidle/:id([A-Za-z0-9-]+)',
        },
        isStatic: false,
    },
    listingWizardPickUpLocation: {
        template: '/listingWizard/pickUpLocation/[idLW]',
        urls: {
            cs: '/pridejte-svuj-karavan/misto-vyzvednuti/:id([A-Za-z0-9-]+)',
            en: '/listing-wizard/pickup-location/:id([A-Za-z0-9-]+)',
            es: '/anade-tu-autocaravana/lugar-de-recogida/:id([A-Za-z0-9-]+)',
            pl: '/wykaz-kreator/odbior-lokalizacja/:id([A-Za-z0-9-]+)',
            sk: '/pridajte-svoj-karavan/miesto-vyzdvihnutia/:id([A-Za-z0-9-]+)',
        },
        isStatic: false,
    },
    listingWizardPickUpLocationManager: {
        template: '/listingWizard/pickUpLocation/[idLW]',
        urls: {
            cs: '/manager/pridejte-svuj-karavan/misto-vyzvednuti/:id([A-Za-z0-9-]+)',
            en: '/manager/listing-wizard/pickup-location/:id([A-Za-z0-9-]+)',
            es: '/manager/anade-tu-autocaravana/lugar-de-recogida/:id([A-Za-z0-9-]+)',
            pl: '/manager/wykaz-kreator/odbior-lokalizacja/:id([A-Za-z0-9-]+)',
            sk: '/manager/pridajte-svoj-karavan/miesto-vyzdvihnutia/:id([A-Za-z0-9-]+)',
        },
        isStatic: false,
    },
    listingWizardRulesPolicies: {
        template: '/listingWizard/rulesPolicies/[idLW]',
        urls: {
            cs: '/pridejte-svuj-karavan/pravidla-zasady/:id([A-Za-z0-9-]+)',
            en: '/listing-wizard/rules-and-policies/:id([A-Za-z0-9-]+)',
            es: '/anade-tu-autocaravana/reglas-y-politicas/:id([A-Za-z0-9-]+)',
            pl: '/wykaz-kreator/przepisy-zasady/:id([A-Za-z0-9-]+)',
            sk: '/pridajte-svoj-karavan/pravidla-a-zasady/:id([A-Za-z0-9-]+)',
        },
        isStatic: false,
    },
    listingWizardRulesPoliciesManager: {
        template: '/listingWizard/rulesPolicies/[idLW]',
        urls: {
            cs: '/manager/pridejte-svuj-karavan/pravidla-zasady/:id([A-Za-z0-9-]+)',
            en: '/manager/listing-wizard/rules-and-policies/:id([A-Za-z0-9-]+)',
            es: '/manager/anade-tu-autocaravana/reglas-y-politicas/:id([A-Za-z0-9-]+)',
            pl: '/manager/wykaz-kreator/przepisy-zasady/:id([A-Za-z0-9-]+)',
            sk: '/manager/pridajte-svoj-karavan/pravidla-a-zasady/:id([A-Za-z0-9-]+)',
        },
        isStatic: false,
    },
    listingWizardPricing: {
        template: '/listingWizard/pricing/[idLW]',
        urls: {
            cs: '/pridejte-svuj-karavan/cena/:id([A-Za-z0-9-]+)',
            en: '/listing-wizard/pricing/:id([A-Za-z0-9-]+)',
            es: '/anade-tu-autocaravana/precios/:id([A-Za-z0-9-]+)',
            pl: '/wykaz-kreator/wycena/:id([A-Za-z0-9-]+)',
            sk: '/pridajte-svoj-karavan/cena/:id([A-Za-z0-9-]+)',
        },
        isStatic: false,
    },
    listingWizardPricingManager: {
        template: '/listingWizard/pricing/[idLW]',
        urls: {
            cs: '/manager/pridejte-svuj-karavan/cena/:id([A-Za-z0-9-]+)',
            en: '/manager/listing-wizard/pricing/:id([A-Za-z0-9-]+)',
            es: '/manager/anade-tu-autocaravana/precios/:id([A-Za-z0-9-]+)',
            pl: '/manager/wykaz-kreator/wycena/:id([A-Za-z0-9-]+)',
            sk: '/manager/pridajte-svoj-karavan/cena/:id([A-Za-z0-9-]+)',
        },
        isStatic: false,
    },
    listingWizardPhotos: {
        template: '/listingWizard/photos/[idLW]',
        urls: {
            cs: '/pridejte-svuj-karavan/fotky/:id([A-Za-z0-9-]+)',
            en: '/listing-wizard/photos/:id([A-Za-z0-9-]+)',
            es: '/anade-tu-autocaravana/fotos/:id([A-Za-z0-9-]+)',
            pl: '/wykaz-kreator/zdjecia/:id([A-Za-z0-9-]+)',
            sk: '/pridajte-svoj-karavan/fotografie/:id([A-Za-z0-9-]+)',
        },
        isStatic: false,
    },
    listingWizardPhotosManager: {
        template: '/listingWizard/photos/[idLW]',
        urls: {
            cs: '/manager/pridejte-svuj-karavan/fotky/:id([A-Za-z0-9-]+)',
            en: '/manager/listing-wizard/photos/:id([A-Za-z0-9-]+)',
            es: '/manager/anade-tu-autocaravana/fotos/:id([A-Za-z0-9-]+)',
            pl: '/manager/wykaz-kreator/zdjecia/:id([A-Za-z0-9-]+)',
            sk: '/manager/pridajte-svoj-karavan/fotografie/:id([A-Za-z0-9-]+)',
        },
        isStatic: false,
    },
    listingWizardSummary: {
        template: '/listingWizard/summary/[idLW]',
        urls: {
            cs: '/pridejte-svuj-karavan/shrnuti/:id([A-Za-z0-9-]+)',
            en: '/listing-wizard/summary/:id([A-Za-z0-9-]+)',
            es: '/anade-tu-autocaravana/resumen/:id([A-Za-z0-9-]+)',
            pl: '/wykaz-kreator/podsumowanie/:id([A-Za-z0-9-]+)',
            sk: '/pridajte-svoj-karavan/zhrnutie/:id([A-Za-z0-9-]+)',
        },
        isStatic: false,
    },
    listingWizardSummarManagery: {
        template: '/listingWizard/summary/[idLW]',
        urls: {
            cs: '/manager/pridejte-svuj-karavan/shrnuti/:id([A-Za-z0-9-]+)',
            en: '/manager/listing-wizard/summary/:id([A-Za-z0-9-]+)',
            es: '/manager/anade-tu-autocaravana/resumen/:id([A-Za-z0-9-]+)',
            pl: '/manager/wykaz-kreator/podsumowanie/:id([A-Za-z0-9-]+)',
            sk: '/manager/pridajte-svoj-karavan/zhrnutie/:id([A-Za-z0-9-]+)',
        },
        isStatic: false,
    },
};
export const pages = {
    add_caravan: '/add-caravan',
    search: '/search',
    mission: '/mission',
    test: '/test',
    faq: '/faq',
    tos: '/tos',
    privacy: '/privacy',
    landingSeptember: '/landing/september',
    protiproudu: '/landing/protiproudu',
    password_recovery: '/password-recovery',
    create_offer: '/offers',
};

export const getAsPathForCampervan = (id, slug, lang) => {
    console.log('lang', lang);
    if (lang === Language.cs) {
        return `/${slug}--karavan-${id}`;
    }
    if (lang === Language.pl) {
        return `/${slug}--samochod-${id}`;
    }
    if (lang === Language.en) {
        return `/${slug}--campervan-${id}`;
    }
    if (lang === Language.sk) {
        return `/${slug}--karavan-${id}`;
    }
    if (lang === Language.es) {
        return `/${slug}--autocaravana-${id}`;
    }
    return '';
};

export const campervanFlatUrlsIdentifiers = {
    cs: '--karavan-',
    pl: '--samochod-',
    en: '--campervan-',
    sk: '--karavan-',
    es: '--autocaravana-',
}






