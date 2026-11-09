// Reisroutes per bestemming voor de RouteAtlas.
// `key` verwijst naar de vertalingen in ui.ts: `${key}.title`, `${key}.subtitle` en `${key}.expand`.
// x/y zijn posities op de kaart-svg van dat land; stops staan in reisvolgorde.

// via: onzichtbaar tussenpunt (geen pin/nummer), alleen om de lijn over land te laten lopen
export type RouteStop = { name: string; img: string; x: number; y: number; via?: boolean };

// Na Rottnest Island terug naar het vasteland (Fremantle), zodat de lijn niet over zee loopt
const backToMainland: RouteStop = { name: "", img: "", x: 222, y: 453, via: true };
export type RouteDef = { key: string; stops: RouteStop[] };

const au = (file: string) => `/images/australia/routes/${file}.jpg`;
const nz = (file: string) => `/images/new-zealand/routes/${file}.jpg`;
const fj = (file: string) => `/images/fiji/routes/${file}.jpg`;

export const australiaRoutes: RouteDef[] = [
  {
    key: "routes.east",
    stops: [
      { name: "Sydney", img: au("east-1"), x: 757, y: 482 },
      { name: "Byron Bay", img: au("east-2"), x: 802, y: 385 },
      { name: "Gold Coast", img: au("east-gold-coast"), x: 800, y: 373 },
      { name: "Brisbane", img: au("east-brisbane"), x: 795, y: 362 },
      { name: "Noosa", img: au("east-3"), x: 798, y: 343 },
      { name: "Fraser Island", img: au("east-5"), x: 804, y: 322 },
      { name: "1770", img: au("east-1770"), x: 785, y: 302 },
      { name: "The Whitsundays", img: au("east-4"), x: 743, y: 229 },
      { name: "Magnetic Island", img: au("east-magnetic-island"), x: 717, y: 208 },
      { name: "Atherton Tablelands", img: au("east-atherton"), x: 686, y: 176 },
      { name: "Cairns", img: au("east-7"), x: 698, y: 166 },
      { name: "Cape Tribulation", img: au("east-cape-tribulation"), x: 693, y: 149 },
    ],
  },
  {
    key: "routes.west",
    stops: [
      { name: "Perth", img: au("west-1"), x: 221, y: 446 },
      { name: "Rottnest Island", img: au("west-2"), x: 209, y: 450 },
      backToMainland,
      { name: "Pinnacles Desert", img: au("west-pinnacles"), x: 214, y: 420 },
      { name: "Hutt Lagoon", img: au("west-hutt-lagoon"), x: 201, y: 376 },
      { name: "Kalbarri National Park", img: au("west-3"), x: 199, y: 367 },
      { name: "Shark Bay", img: au("west-shark-bay"), x: 199, y: 341 },
      { name: "Monkey Mia", img: au("west-7"), x: 194, y: 333 },
      { name: "Coral Bay", img: au("west-6"), x: 196, y: 283 },
      { name: "Exmouth", img: au("west-4"), x: 202, y: 258 },
      { name: "Cape Range National Park", img: au("west-cape-range"), x: 195, y: 263 },
    ],
  },
  {
    key: "routes.south",
    stops: [
      { name: "Perth", img: au("south-1"), x: 221, y: 446 },
      { name: "Rottnest Island", img: au("south-rottnest"), x: 209, y: 450 },
      backToMainland,
      { name: "", img: "", x: 219, y: 470, via: true },
      { name: "Margaret River", img: au("south-2"), x: 210, y: 484 },
      { name: "Pemberton", img: au("south-3"), x: 223, y: 492 },
      { name: "Denmark", img: au("south-4"), x: 239, y: 500 },
      { name: "Albany", img: au("south-5"), x: 250, y: 501 },
      { name: "Bremer Bay", img: au("south-6"), x: 270, y: 490 },
      { name: "Esperance", img: au("south-7"), x: 309, y: 481 },
      { name: "Cape Le Grand National Park", img: au("south-8"), x: 319, y: 480 },
      { name: "Duke of Orleans Bay", img: au("south-duke-of-orleans"), x: 327, y: 479 },
    ],
  },
  {
    key: "routes.red",
    stops: [
      { name: "Alice Springs", img: au("red-3"), x: 507, y: 293 },
      { name: "Kings Canyon", img: au("red-4"), x: 469, y: 303 },
      { name: "Mount Conner", img: au("red-mount-conner"), x: 475, y: 328 },
      { name: "Uluru", img: au("red-1"), x: 462, y: 324 },
      { name: "Kata Tjuta", img: au("red-2"), x: 452, y: 320 },
    ],
  },
  {
    key: "routes.top",
    stops: [
      { name: "Darwin", img: au("top-1"), x: 467, y: 86 },
      { name: "Adelaide River", img: au("top-7"), x: 484, y: 89 },
      { name: "Kakadu National Park", img: au("top-2"), x: 502, y: 91 },
      { name: "Yellow Water", img: au("top-yellow-water"), x: 496, y: 95 },
      { name: "Gunlom Falls", img: au("top-4"), x: 498, y: 105 },
      { name: "Katherine Gorge", img: au("top-6"), x: 494, y: 119 },
      { name: "Litchfield National Park", img: au("top-3"), x: 469, y: 99 },
    ],
  },
];

export const newZealandRoutes: RouteDef[] = [
  {
    key: "routes.nz.north",
    stops: [
      { name: "Auckland", img: nz("north-1"), x: 297, y: 134 },
      { name: "Cathedral Cove", img: nz("north-2"), x: 333, y: 133 },
      { name: "Hobbiton", img: nz("north-3"), x: 329, y: 180 },
      { name: "Rotorua", img: nz("north-4"), x: 349, y: 193 },
      { name: "Taupō", img: nz("north-5"), x: 343, y: 218 },
      { name: "Tongariro", img: nz("north-6"), x: 328, y: 238 },
      { name: "Wellington", img: nz("north-7"), x: 298, y: 336 },
    ],
  },
  {
    key: "routes.nz.northland",
    stops: [
      { name: "Auckland", img: nz("northland-1"), x: 297, y: 134 },
      { name: "Bay of Islands", img: nz("northland-2"), x: 278, y: 58 },
      { name: "Ninety Mile Beach", img: nz("northland-3"), x: 240, y: 45 },
      { name: "Cape Reinga", img: nz("northland-4"), x: 225, y: 23 },
    ],
  },
  {
    key: "routes.nz.west",
    stops: [
      { name: "Picton", img: nz("west-1"), x: 271, y: 336 },
      { name: "Abel Tasman", img: nz("west-2"), x: 236, y: 321 },
      { name: "Punakaiki", img: nz("west-3"), x: 178, y: 374 },
      { name: "Hokitika", img: nz("west-4"), x: 166, y: 402 },
      { name: "Franz Josef", img: nz("west-5"), x: 139, y: 432 },
      { name: "Wānaka", img: nz("west-6"), x: 102, y: 492 },
      { name: "Queenstown", img: nz("west-7"), x: 86, y: 507 },
    ],
  },
  {
    key: "routes.nz.south",
    stops: [
      { name: "Glenorchy", img: nz("south-1"), x: 77, y: 499 },
      { name: "Queenstown", img: nz("south-2"), x: 86, y: 507 },
      { name: "Milford Sound", img: nz("south-3"), x: 61, y: 491 },
      { name: "Te Anau", img: nz("south-4"), x: 53, y: 525 },
      { name: "The Catlins", img: nz("south-5"), x: 122, y: 572 },
      { name: "Dunedin", img: nz("south-6"), x: 150, y: 546 },
    ],
  },
  {
    key: "routes.nz.canterbury",
    stops: [
      { name: "Kaikōura", img: nz("canterbury-1"), x: 260, y: 387 },
      { name: "Christchurch", img: nz("canterbury-2"), x: 224, y: 439 },
      { name: "Akaroa", img: nz("canterbury-3"), x: 235, y: 451 },
      { name: "Lake Tekapo", img: nz("canterbury-4"), x: 149, y: 460 },
      { name: "Lake Pukaki", img: nz("canterbury-5"), x: 138, y: 467 },
      { name: "Aoraki / Mount Cook", img: nz("canterbury-6"), x: 136, y: 448 },
    ],
  },
];

export const fijiRoutes: RouteDef[] = [
  {
    key: "routes.fiji.mamanuca",
    stops: [
      { name: "Port Denarau", img: fj("mamanuca-1"), x: 46, y: 227 },
      { name: "Malolo Island", img: fj("mamanuca-2"), x: 18, y: 226 },
      { name: "Castaway Island", img: fj("mamanuca-3"), x: 15, y: 222 },
      { name: "Mana Island", img: fj("mamanuca-4"), x: 11, y: 214 },
      { name: "Monuriki", img: fj("mamanuca-5"), x: 3, y: 206 },
    ],
  },
  {
    key: "routes.fiji.yasawa",
    stops: [
      { name: "Port Denarau", img: fj("yasawa-1"), x: 46, y: 227 },
      { name: "Waya Island", img: fj("yasawa-2"), x: 13, y: 164 },
      { name: "Naviti", img: fj("yasawa-3"), x: 30, y: 139 },
      { name: "Blue Lagoon", img: fj("yasawa-4"), x: 45, y: 119 },
      { name: "Sawa-i-Lau Caves", img: fj("yasawa-5"), x: 57, y: 105 },
    ],
  },
  {
    key: "routes.fiji.coral",
    stops: [
      { name: "Nadi", img: fj("coral-1"), x: 51, y: 231 },
      { name: "Natadola Beach", img: fj("coral-2"), x: 38, y: 271 },
      { name: "Sigatoka Sand Dunes", img: fj("coral-3"), x: 58, y: 280 },
      { name: "Coral Coast", img: fj("coral-4"), x: 90, y: 287 },
      { name: "Pacific Harbour", img: fj("coral-5"), x: 130, y: 291 },
      { name: "Suva", img: fj("coral-6"), x: 177, y: 274 },
    ],
  },
  {
    key: "routes.fiji.taveuni",
    stops: [
      { name: "Savusavu", img: fj("taveuni-1"), x: 290, y: 97 },
      { name: "Rainbow Reef", img: fj("taveuni-2"), x: 359, y: 119 },
      { name: "180th Meridian", img: fj("taveuni-3"), x: 372, y: 99 },
      { name: "Tavoro Waterfalls", img: fj("taveuni-4"), x: 390, y: 101 },
      { name: "Lavena Coastal Walk", img: fj("taveuni-5"), x: 387, y: 109 },
    ],
  },
];
