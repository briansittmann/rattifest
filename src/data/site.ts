// Contenido de la landing. Todo sale del diseño de Stitch y es provisorio:
// fechas, precios, cupos y links hay que reemplazarlos por los reales.
import type { ImageMetadata } from "astro";
import eventPool from "../assets/img/event-pool.jpg";
import eventWarehouse from "../assets/img/event-warehouse.jpg";
import eventRooftop from "../assets/img/event-rooftop.jpg";
import djBrian from "../assets/img/dj-brian-reba.jpg";
import djRiplag from "../assets/img/dj-riplag.jpg";
import galleryPool from "../assets/img/gallery-pool-drop.jpg";
import galleryGolden from "../assets/img/gallery-golden-hour.jpg";
import galleryWarehouse from "../assets/img/gallery-warehouse.jpg";
import galleryClosing from "../assets/img/gallery-closing.jpg";

export type Accent = "lime" | "violet" | "white";

export const nav = [
  { label: "Próximas Fiestas", href: "#proximas-fiestas" },
  { label: "Formatos & Pool Party", href: "#formatos" },
  { label: "Lineup DJs", href: "#lineup" },
  { label: "Galería", href: "#galeria" },
  { label: "VIP / Mesas", href: "#ticketeria" },
];

/** Fecha destacada en el hero; el countdown cuenta hasta `start`. */
export const nextEvent = {
  title: "Ratti Pool Party Edition",
  start: "2026-10-24T15:00:00-03:00",
  hours: "15:00 a 02:00 HS",
  place: "Quinta Las Palmeras, Zona Norte",
  extra: "Open Air & Sunset Stage",
};

export const events: {
  date: string;
  accent: Accent;
  tag: string;
  hours: string;
  title: string;
  description: string;
  lineup: string;
  priceLabel: string;
  price: string;
  stock: string;
  primary: boolean;
  image: ImageMetadata;
  alt: string;
}[] = [
  {
    date: "OCT 24 • SÁBADO",
    accent: "lime",
    tag: "Pool Party Vibes",
    hours: "15:00 a 02:00 HS",
    title: "Ratti Pool Party: Summer Madness",
    description:
      "Quinta Las Palmeras, Zona Norte. Piscina olímpica habilitada, escenario open air Funktion-One, puestos de glitter e inflables exclusivos.",
    lineup: "Lineup: Brian Reba B2B Riplag + DJ Sets Invitados",
    priceLabel: "Entrada General Preventa",
    price: "Desde $18.000",
    stock: "Lote 2 casi agotado (Últimos 120)",
    primary: true,
    image: eventPool,
    alt: "Pool party de día con gente bailando junto a la pileta",
  },
  {
    date: "NOV 13 • VIERNES",
    accent: "violet",
    tag: "Underground Warehouse",
    hours: "23:30 a 07:00 HS",
    title: "Ratti Warehouse Techno Special",
    description:
      "Galpón Industrial Secreto, Costanera. Iluminación modular robotizada, túnel inmersivo y coordenadas liberadas 2 horas antes del acceso.",
    lineup: "Lineup: Riplag + DJs Invitadas Tech House & Peak Techno",
    priceLabel: "Early Bird Preventa",
    price: "Desde $15.000",
    stock: "Lanzamiento Preventa 1",
    primary: false,
    image: eventWarehouse,
    alt: "Fiesta techno en un galpón con láseres atravesando el humo",
  },
  {
    date: "NOV 28 • SÁBADO",
    accent: "white",
    tag: "Rooftop & Sunset",
    hours: "18:00 a 03:00 HS",
    title: "Ratti Rooftop & Sunset Sessions",
    description:
      "Terraza Madero Sky, Puerto Madero. Vista 360 al río y rascacielos porteños, coctelería de autor y puesta de sol musicalizada.",
    lineup: "Lineup: Brian Reba (Extended Sunset 4h Set)",
    priceLabel: "Ticket Acceso Sunset",
    price: "Desde $20.000",
    stock: "Capacidad Ultra Reducida",
    primary: false,
    image: eventRooftop,
    alt: "Fiesta en una terraza al atardecer con la ciudad de fondo",
  },
];

export const formats: {
  icon: string;
  accent: Accent;
  kicker: string;
  title: string;
  description: string;
  chips: string[];
}[] = [
  {
    icon: "material-symbols:pool",
    accent: "lime",
    kicker: "Daytime & Sun",
    title: "Pool Party Vibes",
    description:
      "Sol radiante, estética bikini & sunglasses sin tabúes, pistolas de agua con champagne, inflables XXL flotando, barra abierta de mojitos tropicales y drops contundentes mientras te refrescás.",
    chips: ["Open Air", "Champagne Blaster", "Dresscode Libre"],
  },
  {
    icon: "material-symbols:warehouse-outline",
    accent: "violet",
    kicker: "Peak Night & Darkness",
    title: "Underground Warehouse",
    description:
      "Láseres verdes y púrpuras de alta potencia que rasgan la penumbra, niebla densa continua, subwoofers que hacen vibrar el pecho y un sistema sonoro Funktion-One calibrado para la entrega más cruda de la noche.",
    chips: ["Funktion-One Sound", "Laser Mapping", "No-Camera Policy"],
  },
  {
    icon: "material-symbols:stars-outline",
    accent: "white",
    kicker: "Black Tier Experience",
    title: "Mesas & VIP Backstage",
    description:
      "Área elevada con vista panorámica a la pista, atención de staff y bartenders dedicados, living privado ultra cómodo, selección de destilados importados y pulsera con acceso directo a la cabina de DJ.",
    chips: ["Cabina DJ Access", "Botellas Premium", "Fast Pass"],
  },
];

export const djs: {
  name: string;
  accent: Accent;
  style: string;
  bio: string;
  genres: [string, string];
  image: ImageMetadata;
  alt: string;
}[] = [
  {
    name: "Brian Reba",
    accent: "lime",
    style: "Tech House & Latin Groove Specialist",
    bio: "Conocido por sets extendidos cargados de ritmo tribal, drops inesperados y una conexión magnética con el público que mantiene a miles de personas brincando sin descanso hasta el amanecer.",
    genres: ["Tech House", "Afro Groove"],
    image: djBrian,
    alt: "Brian Reba mezclando en la cabina con luces verdes",
  },
  {
    name: "Riplag",
    accent: "violet",
    style: "Bass House & Raw Club Bangers",
    bio: "Especialista en transiciones pesadas, frecuencias graves arrolladoras y sintetizadores crujientes. Sus apariciones en Ratti son sinónimo de pogo en la pista y adrenalina desmedida.",
    genres: ["Bass House", "Peak Time"],
    image: djRiplag,
    alt: "Riplag tocando frente a una multitud con estrobos y humo",
  },
];

export const gallery: { image: ImageMetadata; alt: string; caption: string }[] = [
  {
    image: galleryPool,
    alt: "Gente saltando a la pileta durante un drop",
    caption: "Pool Drop Moment // 18:40 HS",
  },
  {
    image: galleryGolden,
    alt: "Chicas bailando con anteojos de sol al atardecer",
    caption: "Golden Hour Vibe",
  },
  {
    image: galleryWarehouse,
    alt: "Láseres verdes sobre el público en un galpón",
    caption: "Industrial Warehouse Rave",
  },
  {
    image: galleryClosing,
    alt: "Explosión de papel picado sobre la pista",
    caption: "Closing Drop Climax",
  },
];

export const tickets = [
  {
    id: "general",
    kicker: "Lote 2 Preventa",
    badge: "Acceso General",
    name: "General Pass",
    price: "$18.000",
    perks: [
      { ok: true, text: "Ingreso oficial al predio completo" },
      { ok: true, text: "1 consumición incluida ingresando antes de las 18:00 HS" },
      { ok: true, text: "Acceso a pista principal & áreas de pileta" },
      { ok: false, text: "Sin acceso a living ni backstage VIP" },
    ],
    cta: "Seleccionar General",
    note: "Quedan menos de 95 disponibles",
  },
  {
    id: "vip",
    kicker: "Acceso Sin Fila",
    badge: "VIP Priority",
    name: "VIP Pass",
    price: "$32.000",
    perks: [
      { ok: true, text: "Fila rápida Fast Pass sin demoras en puerta" },
      { ok: true, text: "Barra libre premium seleccionada hasta las 20:00 HS" },
      { ok: true, text: "Deck exclusivo con reposeras frente a la pileta" },
      { ok: true, text: "Baños modulares VIP climatizados independientes" },
    ],
    cta: "Comprar VIP Pass",
    note: "¡Últimos 40 pases de lote 2!",
  },
  {
    id: "mesa",
    kicker: "Hasta 10 Personas",
    badge: "Exclusivo",
    name: "Mesa VIP Living",
    price: "$350.000",
    perks: [
      { ok: true, text: "Acceso para 10 personas con pulseras Backstage" },
      { ok: true, text: "$250.000 de saldo 100% consumible en botellas" },
      { ok: true, text: "Living lounge reservado junto a cabina de DJ" },
      { ok: true, text: "Camarera exclusiva + 2 cocheras privadas" },
    ],
    cta: "Reservar por WhatsApp",
    note: "Atención personalizada y directa",
  },
] as const;

// TODO: número real de WhatsApp (formato 549XXXXXXXXXX) para reservas de mesas.
export const whatsappMesa =
  "https://wa.me/?text=Hola%2C%20quiero%20reservar%20una%20Mesa%20VIP%20Living%20para%20Ratti%20Fest";

export const guarantees = [
  { icon: "material-symbols:credit-card-outline", title: "Cuotas Sin Interés", text: "Aceptamos todas las tarjetas & MP" },
  { icon: "material-symbols:qr-code-2", title: "QR Digital Instantáneo", text: "Envío inmediato directo a tu correo" },
  { icon: "material-symbols:verified-user-outline", title: "Ingreso Estricto +18", text: "Obligatorio DNI físico vigente" },
];

export const faqs = [
  {
    q: "¿Cuáles son los horarios de ingreso para la Pool Party?",
    a: "Las puertas se abren a las 15:00 HS puntual. El acceso con consumición de cortesía del General Pass es válido ingresando antes de las 18:00 HS. El evento continúa de corrido hasta las 02:00 HS.",
  },
  {
    q: "¿Cuál es el dresscode permitido?",
    a: "El estilo es completamente libre, veraniego y atrevido: mallas, bikinis, gafas de sol, camisas fluidas y prendas urbanas. No permitimos indumentaria deportiva de clubes de fútbol por política de convivencia.",
  },
  {
    q: "¿Qué ocurre si hay mal clima o lluvia el día de la fiesta?",
    a: "En caso de tormenta severa, la fecha se reprograma para el sábado siguiente inmediato con tu entrada 100% válida y resguardada. También contás con la opción de solicitar devolución o transferir tu QR a otra persona sin costo.",
  },
  {
    q: "¿Cómo recibo las coordenadas de la locación secreta?",
    a: "Para los formatos Warehouse y Secret Sessions, el enlace de Google Maps y Waze se despacha automáticamente vía SMS y correo electrónico registrado 2 horas antes de la apertura de puertas.",
  },
];

// TODO: links reales de redes.
export const socials = [
  { label: "@rattifest.official", href: "#" },
  { label: "t.me/rattifest_secret", href: "#" },
  { label: "residentadvisor.net/ratti", href: "#" },
  { label: "soundcloud.com/rattifest", href: "#" },
];
