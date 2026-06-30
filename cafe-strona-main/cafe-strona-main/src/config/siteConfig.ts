// ============================================================
// 🔧 SZABLON STRONY KAWIARNI — KONFIGURACJA
// ============================================================
// Zmień poniższe dane, żeby dostosować stronę do nowego klienta.
// Nie musisz ruszać żadnego komponentu — wszystko czyta z tego pliku.
// ============================================================

export const siteConfig = {
  // ── Nazwa i branding ──────────────────────────────────
  name: "Ziarno",
  nameAccent: "&",
  nameSuffix: "Aromat",
  tagline: "Kawiarnia rzemieślnicza · od 2018",
  heroHeading: ["Ziarno", "&", "Aromat"],
  heroSubtext: "Kawa parzona z pasją, w sercu Twojego miasta.\nKażda filiżanka to mała podróż.",
  heroButtons: [
    { label: "Zobacz menu", href: "#menu" },
    { label: "Nasza historia", href: "#o-nas", variant: "outline" as const },
  ],

  // ── Nawigacja ─────────────────────────────────────────
  navLinks: [
    { label: "O nas", href: "#o-nas" },
    { label: "Specjalności", href: "#specjalnosci" },
    { label: "Menu", href: "#menu" },
    { label: "Opinie", href: "#opinie" },
    { label: "Kontakt", href: "#kontakt" },
  ],

  // ── O nas ─────────────────────────────────────────────
  about: {
    subtitle: "Nasza historia",
    heading: "Pasja zamknięta w filiżance",
    headingAccent: "filiżance",
    paragraphs: [
      "Od 2018 roku serwujemy kawę, która łączy tradycję z nowoczesnością. Każde ziarno jest starannie wyselekcjonowane z najlepszych plantacji Etiopii, Kolumbii i Gwatemali.",
      "Wierzymy, że dobra kawa to nie tylko smak — to cała atmosfera. Dlatego stworzyliśmy miejsce, w którym czas płynie wolniej, a każda wizyta to chwila dla siebie.",
    ],
    stats: [
      { number: "7+", label: "lat doświadczenia" },
      { number: "15k", label: "filiżanek miesięcznie" },
      { number: "12", label: "plantacji partnerskich" },
    ],
    imageAlt: "Latte art w ceramicznej filiżance",
  },

  // ── Specjalności ──────────────────────────────────────
  specialties: {
    subtitle: "Wyróżniamy się",
    heading: "Nasze specjalności",
    items: [
      {
        title: "Pour Over V60",
        desc: "Kawa alternatywna parzona ręcznie, wydobywająca każdy niuans smaku wybranego ziarna.",
        tag: "Bestseller",
        imageKey: "pourover" as const,
      },
      {
        title: "Matcha Ceremonialna",
        desc: "Importowana prosto z Japonii. Ubijana tradycyjnym chasen, podawana na mleku owsianym.",
        tag: "Nowość",
        imageKey: "matcha" as const,
      },
      {
        title: "Wypieki własne",
        desc: "Codziennie rano pieczemy croissanty, bananowe chlebki i serniki baskijskie z najlepszych składników.",
        tag: "Codziennie świeże",
        imageKey: "pastry" as const,
      },
    ],
  },

  // ── Menu ──────────────────────────────────────────────
  menu: {
    subtitle: "Oferta",
    heading: "Nasze Menu",
    categories: [
      {
        category: "Kawy",
        icon: "coffee" as const,
        items: [
          { name: "Espresso", price: "8 zł", desc: "Intensywna, klasyczna" },
          { name: "Cappuccino", price: "14 zł", desc: "Mleczna pianka, aksamitna" },
          { name: "Flat White", price: "16 zł", desc: "Podwójne espresso, mikro pianka" },
          { name: "Pour Over (V60)", price: "18 zł", desc: "Kawa alternatywna, pełnia aromatu" },
          { name: "Cold Brew", price: "15 zł", desc: "24h ekstrakcji na zimno" },
          { name: "Espresso Tonic", price: "17 zł", desc: "Orzeźwiająca, z tonikiem" },
        ],
      },
      {
        category: "Herbaty & inne",
        icon: "leaf" as const,
        items: [
          { name: "Matcha Latte", price: "16 zł", desc: "Japońska matcha ceremonialna" },
          { name: "Chai Latte", price: "14 zł", desc: "Korzenne, rozgrzewające" },
          { name: "Sencha", price: "10 zł", desc: "Delikatna, zielona" },
          { name: "Earl Grey", price: "10 zł", desc: "Klasyczna z bergamotką" },
          { name: "Gorąca czekolada", price: "14 zł", desc: "Belgijska, aksamitna" },
        ],
      },
      {
        category: "Wypieki",
        icon: "cake" as const,
        items: [
          { name: "Croissant maślany", price: "12 zł", desc: "Prosto z pieca" },
          { name: "Ciasto marchewkowe", price: "16 zł", desc: "Domowy przepis" },
          { name: "Bananowy chlebek", price: "14 zł", desc: "Z orzechami włoskimi" },
          { name: "Sernik baskijski", price: "18 zł", desc: "Kremowy, karmelowy" },
          { name: "Cinnamon roll", price: "15 zł", desc: "Z lukrem waniliowym" },
        ],
      },
    ],
  },

  // ── Opinie ────────────────────────────────────────────
  testimonials: {
    subtitle: "Opinie",
    heading: "Co mówią nasi goście",
    items: [
      {
        name: "Ania K.",
        text: "Najlepsza kawa w mieście! Pour Over V60 to prawdziwe dzieło sztuki. Wracam tu co tydzień.",
        stars: 5,
        role: "Stała bywalczyni",
      },
      {
        name: "Marcin W.",
        text: "Atmosfera idealna do pracy zdalnej — szybkie wifi, spokojne wnętrze i kawa, która trzyma na nogach cały dzień.",
        stars: 5,
        role: "Freelancer",
      },
      {
        name: "Kasia D.",
        text: "Sernik baskijski i cappuccino — lepszego połączenia nie znajdziecie nigdzie. Obsługa zawsze z uśmiechem!",
        stars: 5,
        role: "Blogerka kulinarna",
      },
    ],
  },

  // ── CTA Banner ────────────────────────────────────────
  cta: {
    heading: "Odwiedź nas",
    headingAccent: "już dziś",
    text: 'Pierwsza kawa w naszej kawiarni? Powiedz „widziałem Was w internecie" i otrzymaj 10% zniżki na pierwsze zamówienie.',
    buttonLabel: "Jak do nas trafić",
    buttonHref: "#kontakt",
    imageAlt: "Kawiarnia widziana z zewnątrz o złotej godzinie",
  },

  // ── Kontakt / Info ────────────────────────────────────
  contact: {
    subtitle: "Odwiedź nas",
    heading: "Gdzie nas znajdziesz",
    hours: {
      weekdays: { label: "Poniedziałek – Piątek", time: "7:00 – 20:00" },
      weekends: { label: "Sobota – Niedziela", time: "8:00 – 18:00" },
    },
    address: {
      street: "ul. Kwiatowa 15",
      city: "00-001 Warszawa",
      note: "Wejście od podwórka,\nszukaj zielonej markizy ☕",
    },
    phone: "+48 123 456 789",
    email: "witaj@ziarnoiaromat.pl",
    socials: {
      instagram: "#",
      facebook: "#",
    },
    // Google Maps embed URL — zmień na właściwy adres klienta
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.8!2d21.012!3d52.229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDEzJzQ0LjQiTiAyMcKwMDAnNDMuMiJF!5e0!3m2!1spl!2spl!4v1700000000000",
  },

  // ── Footer ────────────────────────────────────────────
  footer: {
    description: "Kawa parzona z pasją od 2018 roku. Wpadnij do nas i poczuj różnicę.",
    year: new Date().getFullYear(),
  },
};
