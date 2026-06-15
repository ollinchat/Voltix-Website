import type { Translation } from './types';
import { en } from './en';

export const ru: Translation = {
  ...en,
  brand: {
    name: 'VOLTIX',
    tagline: 'Najami · Zatout — Industrial EPC',
  },
  nav: {
    about: 'O kompanii',
    synergy: 'Sinergiya JV',
    team: 'Komanda',
    projects: 'Proekty',
    portfolio: 'Portfolio',
    credibility: 'Reputatsiya',
    contact: 'Kontakt',
    joinUs: 'Prisoedinitsya',
  },
  hero: {
    ...en.hero,
    scroll: 'Spustitsya na etazh upravleniya',
    slides: [
      {
        ...en.hero.slides[0],
        tag: 'ZHELEZO · STAL · TRUBOPROVOD',
        title: 'TYAZHELAYA PROMYSHLENNOST\nNA GLOBALNOM MASSHTABE',
        subtitle:
          'Sovmestnoe predpriyatie Sami Najami i C. Zatout — 82 000 kv. m proizvodstvennykh moschnostey, 15 000 tonn stali v god i polny spektr EPC.',
        cta: 'Izuchit obedinennye moschnosti',
      },
      {
        ...en.hero.slides[1],
        tag: 'EPC KOMANDA',
        title: 'SPROEKTIROVANO.\nZAKUPLENO.\nPOSTROENO.',
        subtitle:
          'Ot montazha stalnykh konstruktsiy do magistralnykh truboprovodov — integrirovannaya postavka pod yedinym promyshlennym komandovaniem.',
        cta: 'Smotret vozmozhnosti',
      },
      {
        ...en.hero.slides[2],
        tag: 'SOVMESTNOE PREDPRIYATIE',
        title: 'DVA ZAVODA.\nODNA SILA.',
        subtitle:
          'Proizvodstvennaya imperiya Sami Najami i ekspertiza C. Zatout v truboprovodakh i grazhdanskom stroitelstve — EPC-platforma dlya natsionalnoy infrastruktury.',
        cta: 'Poznakomitsya s partnerami',
      },
    ],
  },
  about: {
    ...en.about,
    label: '01 — O kompanii',
    title: 'Postroeno iz stali.\nDvizhemos tochnostyu.',
    description:
      'Najami · Zatout — strategicheskoe promyshlennoe SP, sozdannoe dlya proektov, trebuyushchikh strukturnuyu opredelennost v masshtabe. My postavlyaem stalnuyu produktsiyu vysshego klassa i integrirovannoe EPC-ispolnenie pod yedinym komandovaniem.',
  },
  synergy: {
    ...en.synergy,
    label: '02 — Sinergiya JV',
    title: 'Neprevzoydennaya sila EPC',
    subtitle:
      'Sami Najami i C. Zatout — dva promyshlennykh lidera, chyi obedinennye aktivy sozdayut unikalnuyu EPC-platformu v regione.',
    alliance: {
      heading: 'A Unified Industrial Front',
      body: en.synergy.alliance.body,
    },
  },
  team: {
    ...en.team,
    label: '03 — Rukovodstvo',
    title: 'Ispolnitelnoe komandovanie',
    subtitle: 'Starshee rukovodstvo, kontroliruyushchee kazhdyy mandat s etazha upravleniya.',
  },
  projects: {
    ...en.projects,
    label: '04 — Proekty',
    title: 'Proverennoe promyshlennoe ispolnenie',
    backToProjects: '← Nazad k proektam',
    detail: {
      datasheet: 'List dannykh proekta',
      projectName: 'Nazvanie proekta',
      client: 'Zakazchik',
      timeline: 'Tochnye sroki',
      location: 'Mestopolozhenie i region',
      scope: 'Polnyy inzhenernyy obem / tekhnicheskoe opisanie',
    },
  },
  portfolio: {
    ...en.portfolio,
    label: '05 — Portfolio',
    title: 'Vypolnennye mandaty',
    subtitle: 'Dokazannaya postavka v energetike, stale i vodnoy infrastrukture.',
    filters: { energy: 'Energetika', steel: 'Stal', water: 'Voda' },
    coreExpertise: 'Klyuchevaya ekspertiza',
    sectors: {
      energy: {
        ...en.portfolio.sectors.energy,
        summary:
          'JV Najami · Zatout obespechivaet integrirovannoe EPC v energetike, neftepererabotke i neftekhimii — 82 000 kv. m sobstvennogo proizvodstva i truboprovody po ASME.',
      },
      steel: {
        ...en.portfolio.sectors.steel,
        summary:
          '15 000 tonn stalnykh konstruktsiy v god i sertifitsirovannye linii EN 1090 — polnaya postavka tyazhelykh stalnykh paketov ot prokatki do montazha.',
      },
      water: {
        ...en.portfolio.sectors.water,
        summary:
          'Magistralnaya podacha vody, sistemy opresneniya i munitsipalnye seti — proektirovanie, zakupki i montazh pod yedinoy kontraktnoy otvetstvennostyu.',
      },
    },
  },
  credibility: {
    ...en.credibility,
    label: '06 — Reputatsiya',
    title: 'Reytingi promyshlennosti vysshego urovnya',
    subtitle:
      'Oba partnera JV oficialno priznany sredi vedushchikh inzhenernykh i promyshlennykh predpriyatiy Izrailya po reytingam DUNS 100 i BDi CODE 2026.',
    dunsProfile: 'DUNS 100 Profile',
    bdiProfile: 'BDI CODE Profile',
    partners: {
      najami: {
        name: 'Sami Najami Engineering',
        description:
          'Vkhodit v chislo vedushchikh inzhenernykh i proizvodstvennykh kompaniy Izrailya — priznana za krupnomasshtabnoe ispolnenie stalnykh konstruktsiy.',
      },
      zatout: {
        name: 'Zatout Group',
        description:
          'Ofitsialno v reytinge za promyshlennye truboprovody, tyazhelye mekhanicheskie raboty i energeticheskuyu infrastrukturu.',
      },
    },
  },
  cta: {
    ...en.cta,
    label: '07 — Svyaz',
    title: 'Zakazat\npromyshlennoe ispolnenie',
    subtitle:
      'Stalnye konstruktsii, truboprovodnye seti ili polnye mandaty EPC — otpravte brif, i nasha komanda otvetit v techenie odnogo rabochego dnya.',
    primary: 'Otpravit brif proekta',
    secondary: 'Skachat dossie vozmozhnostey JV',
    wazeNavigate: 'Navigate via Waze',
  },
  footer: {
    ...en.footer,
    form: {
      ...en.footer.form,
      title: 'Svyaz s komandoy',
      name: 'Polnoe imya',
      email: 'Elektronnaya pochta',
      mobilePhone: 'Mobilny telefon',
      company: 'Organizatsiya',
      message: 'Brif proekta / zapros',
      attachment: 'Prikrepit brif proekta / spetsifikatsii (PDF, DWG, ZIP)',
      attachmentDrop: 'Peretashchite fayly syuda ili nazhmite dlya vybora',
      attachmentSelected: 'Fayl prikreplen',
      preferredTime: 'Predpochtitelnoe vremya zvonka / vstrechi',
      meetingPlaceholder: 'Vyberite vremennoe okno',
      submit: 'Otpravit',
    },
    toast: {
      title: 'Otpravka podtverzhdena',
      message: 'Vash zapros zaregistrirovan. Direktor proekta otvetit v techenie 24 chasov.',
    },
    columns: {
      ...en.footer.columns,
      headquarters: 'Shtab-kvartira JV',
      navigation: 'Navigatsiya',
      legal: 'Pravovaya informatsiya',
      privacy: 'Politika konfidentsialnosti',
      terms: 'Usloviya ispolneniya',
    },
    copyright: '\u00a9 2026 Voltix Website. Vse prava zashchishcheny.',
  },
};
