// ============================================================
// CATÁLOGO CENTRAL — agregar productos aquí
// image: deja "" mientras no haya fotografía real del producto.
// ============================================================
import acompañamientosImage from "../assets/categorias/acomp.jpeg"
import combosImage from "../assets/categorias/comb.jpeg"
import hamburguesasImage from "../assets/categorias/hamb.png"
import hotDogsImage from "../assets/categorias/perro.jpeg"
import pizzasImage from "../assets/categorias/pizza.jpeg"
import salchipapasImage from "../assets/categorias/salchi.jpeg"
import sushiImage from "../assets/categorias/sushi.jpeg"

import clasicaImage from "../assets/hamburguesas/clasica.png";
import especialImage from "../assets/hamburguesas/especial.png"
import guerreraImage from "../assets/hamburguesas/guerrera.png"
import deluxImage from "../assets/hamburguesas/delux.png"
import dakotaImage from "../assets/hamburguesas/dakota.jpeg"
import cherokiImage from "../assets/hamburguesas/cheroki.png"
import caciqueImage from "../assets/hamburguesas/cacique.jpeg"
import hawaiianaImage from "../assets/hamburguesas/hawaiana.jpeg"

import clasico1Image from "../assets/hot-dogs/clasico.jpeg"
import especial1Image from "../assets/hot-dogs/especial.jpeg"
import cacique1Image from "../assets/hot-dogs/cacique.jpeg"
import hawaiianoImage from "../assets/hot-dogs/hawaiiano.jpeg"
import guerreroImage from "../assets/hot-dogs/guerrero.jpeg"

import pizzaMargaritaImage from "../assets/pizzas/margarita.jpeg"
import pizzaPepperoniImage from "../assets/pizzas/pepperoni.jpeg"
import pizzaHawaiianaImage from "../assets/pizzas/hawaiiana.jpeg"
import pizzaMazorcadaImage from "../assets/pizzas/mazorcada.jpeg"
import pizzaEspanolaImage from "../assets/pizzas/española.jpeg"
import pizzaCostillasBBQImage from "../assets/pizzas/costillasbbq.jpeg"
import pizzaTundamaImage from "../assets/pizzas/tundama.jpeg"
import pizzaColombianaImage from "../assets/pizzas/colombiana.jpeg"
import pizzaCiruelaTocinetaImage from "../assets/pizzas/ciruelatocineta.jpeg"
import pizzaPolloChampiñonesImage from "../assets/pizzas/pollochampiñones.jpeg"
import pizzaMexicanaImage from "../assets/pizzas/mexicana.jpeg"
import pizzaCarnesImage from "../assets/pizzas/carnes.jpeg"

import sushiEbyTempuraImage from "../assets/sushi/ebytempura.jpeg"
import sushiCamaronImage from "../assets/sushi/camaronroll.jpeg"
import sushicaliforniaImage from "../assets/sushi/califroniaroll.jpeg"
import sushiphiladelphiaImage from "../assets/sushi/philadelphiaroll.jpeg"
import sushitempuraImage from "../assets/sushi/tempuraroll.jpeg"
import sushiemperadorImage from "../assets/sushi/emperadorroll.jpeg"
import sushiikigaiImage from "../assets/sushi/ikigairoll.jpeg"
import sushisalmonSkinImage from "../assets/sushi/salmonskin.jpeg"
import sushidokkodoImage from "../assets/sushi/dokkodoroll.jpeg"
import sushisamuraiImage from "../assets/sushi/samurairoll.jpeg"
import sushihamburguesaImage from "../assets/sushi/hamburguesasus.jpeg"
import perrosushiImage from "../assets/sushi/perrosus.jpeg"

import salchipapasencillaimage from "../assets/salchi-marzocada/salchipapasencilla.jpeg"
import salchipapaespecialimage from "../assets/salchi-marzocada/salchipapaespecial.jpeg"
import mazorcadaguerreraimage from "../assets/salchi-marzocada/mazorcadaguerrera.jpeg"
import mazorcadaespecialimage from "../assets/salchi-marzocada/mazorcadaespecial.jpeg"

import comboHambClasicaImage from "../assets/combos/comclasica.jpeg"
import comboHambEspecialImage from "../assets/combos/comespecial.jpeg"
import comboHambGuerreraImage from "../assets/combos/comgerrera.jpeg"
import comboHambDeluxImage from "../assets/combos/comdelux.jpeg"
import comboHambDakotaImage from "../assets/combos/comdakota.jpeg"
import comboHambCheroquiImage from "../assets/combos/comcheroqui.jpeg"
import comboHambCaciqueImage from "../assets/combos/comcacique.jpeg"
import comboHambHawaiianaImage from "../assets/combos/comhawaiiana.jpeg"
import comboHotDogClasicoImage from "../assets/combos/comclasico.jpeg"
import comboHotDogEspecialImage from "../assets/combos/comhespecial.jpeg"
import comboHotDogCaciqueImage from "../assets/combos/comhcacique.jpeg"
import comboHotDogHawaiianoImage from "../assets/combos/comhawaiiano.jpeg"
import comboHotDogGuerreroImage from "../assets/combos/comgerrero.jpeg"
import comboSushiEbyTempuraImage from "../assets/combos/tempura+eby.png"
import comboSushiCamaronSkinImage from "../assets/combos/camaron+skin.png"
import comboSushiexplosionImage from "../assets/combos/explosiodesabores.png"
import comboSushitripleImage from "../assets/combos/tripleespecial.png"

import aroscebollaImage from "../assets/acompañamientos/aroscebolla.jpeg"
import dedosdequesoImage from "../assets/acompañamientos/dedosdequeso.jpeg"
import palmitosImage from "../assets/acompañamientos/palmitosapanados.jpeg"
import bretañaImage from "../assets/acompañamientos/bretaña.jpeg"
import coca400Image from "../assets/acompañamientos/coca400.jpeg"
import coca1500Image from "../assets/acompañamientos/coca1.5.webp"
import quatroImage from "../assets/acompañamientos/quatro.jpeg"
import colombianaImage from "../assets/acompañamientos/colombiana.webp"
import cocaZero400Image from "../assets/acompañamientos/cocazero.jpeg"

export type CategoryId =
  | "hamburguesas"
  | "hot-dogs"
  | "pizzas"
  | "sushi"
  | "salchipapas"
  | "combos"
  | "acompanamientos";

export interface Category {
  id: CategoryId;
  name: string;
  shortName: string;
  image: string;
}

export interface ProductSize {
  name: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  description: string;
  price: number;
  sizes?: ProductSize[];
  addonIds?: string[];
  image: string;
  featured: boolean;
  available: boolean;
}

export const categories: Category[] = [
  { id: "hamburguesas", name: "Hamburguesas", shortName: "Hamburguesas", image: hamburguesasImage },
  { id: "hot-dogs", name: "Hot Dogs", shortName: "Hot Dogs", image: hotDogsImage },
  { id: "pizzas", name: "Pizzas", shortName: "Pizzas", image: pizzasImage },
  { id: "sushi", name: "Sushi", shortName: "Sushi", image: sushiImage },
  {
    id: "salchipapas",
    name: "Salchipapas y Mazorcadas",
    shortName: "Salchipapas",
    image: salchipapasImage,
  },
  { id: "combos", name: "Combos", shortName: "Combos", image: combosImage },
  {
    id: "acompanamientos",
    name: "Acompañamientos y Bebidas",
    shortName: "Acompañamientos",
    image: acompañamientosImage,
  },
];

export const products: Product[] = [
  {
    id: "hamb-clasica",
    name: "Hamburguesa Clasica",
    category: "hamburguesas",
    description:
      "Carne Angus 125g, tajada de queso, cebolla salteada, pan tipo brioche, salsa de la casa, tomate y lechuga.",
    addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
    price: 17000,
    image: clasicaImage,
    featured: true,
    available: true,
  },
  {
    id: "hamb-especial",
    name: "Hamburguesa Especial",
    category: "hamburguesas",
    description:
      "Carne Angus 125g, pollo mechado, champiñones, tajada de queso, cebolla salteada, pan tipo brioche, salsa de la casa, tomate y lechuga.",
    addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
    price: 20000,
    image: especialImage,
    featured: true,
    available: true,
  },
  {
    id: "hamb-guerrera",
    name: "Hamburguesa Guerrera",
    category: "hamburguesas",
    description:
      "Carne Angus 125g, huevo frito, tocineta, pepinilos, tajada de queso, cebolla salteada, pan tipo brioche, salsa de la casa, tomate y lechuga.",
    addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
    price: 20000,
    image: guerreraImage,
    featured: true,
    available: true,
  },
  {
    id: "hamb-delux",
    name: "Hamburguesa Delux",
    category: "hamburguesas",
    description: "Carne Angus 125g, carne desmechada, pepinilos, tocineta, tajada de queso, cebolla salteada, pan tipo brioche, salsa de la casa, tomate y lechuga.",
    addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
    price: 24000,
    image: deluxImage,
    featured: true,
    available: true,
  },
  {
    id: "hamb-dakota",
    name: "Hamburguesa Dakota",
    category: "hamburguesas",
    description: "Carne Angus 125g, queso apanado en panko, mermelada de tocineta, pollo mechado, pan tipo brioche, salsa de la casa, tomate y lechuga.",
    addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
    price: 26000,
    image: dakotaImage,
    featured: true,
    available: true,
  },
  {
    id: "hamb-cheroki",
    name: "Hamburguesa Cheroqui",
    category: "hamburguesas",
    description: "Carne Angus 125g, costilla de cerdo troceada en salsa BBQ, piña en almibar, doble tocineta, queso fundido sobre el pan tipo brioche, salsa de la casa, tomate y lechuga.",
    addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
    price: 26000,
    image: cherokiImage,
    featured: true,
    available: true,
  },
  {
    id: "hamb-cacique",
    name: "Hamburguesa Cacique",
    category: "hamburguesas",
    description: " Dos carnes Angus 125g, tajada de queso, carne desmechada en salsa BBQ, tocineta, jamón, pepinillos, pan tipo brioche, salsa de la casa, tomate y lechuga.",
    addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
    price: 30000,
    image: caciqueImage,
    featured: true,
    available: true,
  },
  {
    id: "hamb-hawaiiana",
    name: "Hamburguesa Hawaiiana",
    category: "hamburguesas",
    description: "Carne Angus 125g, tajada de queso, piña en almibar y teriyaki, tocineta, jamón, pepinillos, pan tipo brioche, salsa de la casa, tomate y lechuga.",
    addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
    price: 20000,
    image: hawaiianaImage,
    featured: true,
    available: true,
  },


  {
    id: "hot-dog-clasico",
    name: "Hot Dog Clasico",
    category: "hot-dogs",
    description:
      "Salchicha americana, queso, cebolla salteada, papa cabello de angel y salsa tundama.",
    addonIds: [
      "papas-fritas",
      "pepinillos",
      "jalapenos",
      "carne-mechada",
      "pollo-mechado",
      "jamon",
      "tocineta",
      "queso",
    ],
    price: 12000,
    image: clasico1Image,
    featured: true,
    available: true,
  },
  {
    id: "hot-dog-especial",
    name: "Hot Dog Especial",
    category: "hot-dogs",
    description:
      "Salchicha americana, queso, cebolla salteada, pollo desmechado, champiñones, jamón, papa cabello de angel y salsa tundama.",
    addonIds: [
      "papas-fritas",
      "pepinillos",
      "jalapenos",
      "carne-mechada",
      "pollo-mechado",
      "jamon",
      "tocineta",
      "queso",
    ],
    price: 16000,
    image: especial1Image,
    featured: true,
    available: true,
  },
   {
    id: "hot-dog-cacique",
    name: "Hot Dog Cacique",
    category: "hot-dogs",
    description:
      "Salchicha americana, queso, cebolla salteada, pollo desmechado, carne desmechada, jamón y salsa tundama.",
    addonIds: [
      "papas-fritas",
      "pepinillos",
      "jalapenos",
      "carne-mechada",
      "pollo-mechado",
      "jamon",
      "tocineta",
      "queso",
    ],
    price: 18000,
    image: cacique1Image,
    featured: true,
    available: true,
  },
   {
    id: "hot-dog-hawaiiano",
    name: "Hot Dog Hawaiiano",
    category: "hot-dogs",
    description:
      "Salchicha americana, queso, jamón, piña en almibar, salsa teriyaki y salsa tocineta.",
    addonIds: [
      "papas-fritas",
      "pepinillos",
      "jalapenos",
      "carne-mechada",
      "pollo-mechado",
      "jamon",
      "tocineta",
      "queso",
    ],
    price: 14000,
    image: hawaiianoImage,
    featured: true,
    available: true,
  },
   {
    id: "hot-dog-guerrero",
    name: "Hot Dog Guerrero",
    category: "hot-dogs",
    description:
      "Salchicha americana, picó de gallo, guacamole, jamón, tocineta y salsa tundama.",
    addonIds: [
      "papas-fritas",
      "pepinillos",
      "jalapenos",
      "carne-mechada",
      "pollo-mechado",
      "jamon",
      "tocineta",
      "queso",
    ],
    price: 14000,
    image: guerreroImage,
    featured: true,
    available: true,
  },


 {
  id: "pizza-margarita",
  name: "Pizza Margarita",
  category: "pizzas",
  description:
    "Tomate en rodajas, orégano, queso mozzarella y salsa napolitana.",
  price: 20000,
  sizes: [
    {
      name: "Personal 22cm",
      price: 20000,
    },
    {
      name: "Mediana 32cm",
      price: 34000,
    },
  ],
  addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
  image:pizzaMargaritaImage,
  featured: true,
  available: true,
},
{
  id: "pizza-pepperoni",
  name: "Pizza Pepperoni",
  category: "pizzas",
  description:
    "pepperoni, orégano, queso mozzarella y salsa napolitana.",
  price: 22000,
  sizes: [
    {
      name: "Personal 22cm",
      price: 22000,
    },
    {
      name: "Mediana 32cm",
      price: 38000,
    },
  ],
  addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
  image: pizzaPepperoniImage,
  featured: true,
  available: true,
},
{
  id: "pizza-hawaiiana",
  name: "Pizza Hawaiiana",
  category: "pizzas",
  description:
    "piña en almibar, jamón, queso mozzarella y salsa napolitana.",
  price: 22000,
  sizes: [
    {
      name: "Personal 22cm",
      price: 22000,
    },
    {
      name: "Mediana 32cm",
      price: 38000,
    },
  ],
  addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
  image: pizzaHawaiianaImage,
  featured: true,
  available: true,
},
{
  id: "pizza-mazorcada",
  name: "Pizza Mazorcada",
  category: "pizzas",
  description:
    "Pollo mechado, chorizo, maíz tierno, papa cabello de angel ysalsa de la casa, esta cubeirta de chorizo y rodajas de chorizo",
  price: 25000,
  sizes: [
    {
      name: "Personal 22cm",
      price: 25000,
    },
    {
      name: "Mediana 32cm",
      price: 45000,
    },
  ],
  addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
  image: pizzaMazorcadaImage,
  featured: true,
  available: true,
},
{
  id: "pizza-española",
  name: "Pizza Española",
  category: "pizzas",
  description:
    "Chorizo español, peperoni, jamón serrano, aceitunas negras, champiñones y oregano.",
  price: 26000,
  sizes: [
    {
      name: "Personal 22cm",
      price: 26000,
    },
    {
      name: "Mediana 32cm",
      price: 46000,
    },
  ],
  addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
  image: pizzaEspanolaImage,
  featured: true,
  available: true,
},
{
  id: "pizza-cosrillas bbq",
  name: "Pizza Cosrillas BBQ",
  category: "pizzas",
  description:
    "Costilla de cerdo BBQ picada, piña en almibar y queso mozzarella.",
  price: 25000,
  sizes: [
    {
      name: "Personal 22cm",
      price: 25000,
    },
    {
      name: "Mediana 32cm",
      price: 45000,
    },
  ],
  addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
  image: pizzaCostillasBBQImage,
  featured: true,
  available: true,
},
{
  id: "pizza-tundama",
  name: "Pizza Tundama",
  category: "pizzas",
  description:
    "Carne mechada, chorizo, maiz tierno, pico de gallo, picante, salsa guacamole tostacos y queso mozzarella.",
  price: 25000,
  sizes: [
    {
      name: "Personal 22cm",
      price: 25000,
    },
    {
      name: "Mediana 32cm",
      price: 45000,
    },
  ],
  addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
  image: pizzaTundamaImage,
  featured: true,
  available: true,
},
{
  id: "pizza-colombiana",
  name: "Pizza Colombiana",
  category: "pizzas",
  description:
    "Chorizo Santa Rosano, tocineta, maiz tierno, cebolla en plumas, queso mozzarella y salsa napolitana.",
  price: 23000,
  sizes: [
    {
      name: "Personal 22cm",
      price: 23000,
    },
    {
      name: "Mediana 32cm",
      price: 40000,
    },
  ],
  addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
  image: pizzaColombianaImage,
  featured: true,
  available: true,
},
{
  id: "pizza-ciruela tocineta",
  name: "Pizza Ciruela Tocineta",
  category: "pizzas",
  description:
    "Ciruela pasa, tocineta, queso mozzarella y salsa napolitana.",
  price: 22000,
  sizes: [
    {
      name: "Personal 22cm",
      price: 22000,
    },
    {
      name: "Mediana 32cm",
      price: 38000,
    },
  ],
  addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
  image: pizzaCiruelaTocinetaImage,
  featured: true,
  available: true,
},
{
  id: "pizza-pollo champiñones",
  name: "Pizza Pollo Champiñones",
  category: "pizzas",
  description:
    "Pollo deschado, champiñones, queso mozzarella y salsa napolitana.",
  price: 23000,
  sizes: [
    {
      name: "Personal 22cm",
      price: 23000,
    },
    {
      name: "Mediana 32cm",
      price: 42000,
    },
  ],
  addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
  image: pizzaPolloChampiñonesImage,
  featured: true,
  available: true,
},
{
  id: "pizza-mexicana",
  name: "Pizza Mexicana",
  category: "pizzas",
  description:
    "Carne molida, chorizo, maiz tierno, pico de gallo, picante, salsa guacamole tostacos y queso mozzarella.",
  price: 25000,
  sizes: [
    {
      name: "Personal 22cm",
      price: 25000,
    },
    {
      name: "Mediana 32cm",
      price: 45000,
    },
  ],
  addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
  image: pizzaMexicanaImage,
  featured: true,
  available: true,
},
{
  id: "pizza-carnes",
  name: "Pizza Carnes",
  category: "pizzas",
  description:
    "Carne molida, jamón, chorizo, tocineta, queso mozzarella y salsa napolitana.",
  price: 25000,
  sizes: [
    {
      name: "Personal 22cm",
      price: 25000,
    },
    {
      name: "Mediana 32cm",
      price: 45000,
    },
  ],
  addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
  image: pizzaCarnesImage,
  featured: true,
  available: true,
},



  {
    id: "sushi-eby-tempura",
    name: "Sushi Eby Tempura",
    category: "sushi",
    description: "Langostino apanado, queso crema, aguacate, con mango por fuera. roll de 10 bocados",
    price: 33000,
    image: sushiEbyTempuraImage,
    featured: true,
    available: true,
  },
  {
    id: "sushi-camaron-roll",
    name: "Sushi Camarón Roll",
    category: "sushi",
    description: "Salmón tempura, camarón apanado, queso crema, con palmito por fuera. roll de 10 bocados",
    price: 33000,
    image: sushiCamaronImage,
    featured: true,
    available: true,
  },
  {
    id: "sushi-tempura",
    name: "Sushi Tempura",
    category: "sushi",
    description: "Salmón tempura, queso crema, aguacate. roll de 10 bocados",
    price: 32000,
    image: sushitempuraImage,
    featured: false,
    available: true,
  },
  {
    id: "sushi-philadelphia",
    name: "Sushi Philadelphia",
    category: "sushi",
    description: "Salmón tempura, queso crema, aguacate, con ajonjolí por fuera. roll de 10 bocados",
    price: 32000,
    image: sushiphiladelphiaImage,
    featured: false,
    available: true,
  },
  {
    id: "sushi-ikigai",
    name: "Sushi Ikigai",
    category: "sushi",
    description: "Camaron apanado, salmon tempura, queso crema, con aguacate por fuera. roll de 10 bocados",
    price: 36000,
    image: sushiikigaiImage,
    featured: false,
    available: true,
  },
  {
    id: "sushi-salmon-skin",
    name: "Sushi Salmón Skin",
    category: "sushi",
    description: "Piel de salmón crocante, pepino, aguacate, queso crema, con ajonjolí por fuera. roll de 10 bocados",
    price: 30000,
    image: sushisalmonSkinImage,
    featured: false,
    available: true,
  },
  {
    id: "sushi-california",
    name: "Sushi California",
    category: "sushi",
    description: "Palmito de mar, pepino, aguacate, con masago por fuera. roll de 10 bocados",
    price: 30000,
    image: sushicaliforniaImage,
    featured: false,
    available: true,
  },
  {
    id: "sushi-samurai",
    name: "Sushi Samurai",
    category: "sushi",
    description: "langostino apanado, palmito, queso crema, masago, con mango por fuera. roll de 10 bocados",
    price: 35000,
    image: sushisamuraiImage,
    featured: false,
    available: true,
  },
  {
    id: "sushi-emperador",
    name: "Sushi Emperador",
    category: "sushi",
    description: "Manzana roja apanada, queso crema, con mango por fuera. roll de 10 bocados",
    price: 28000,
    image: sushiemperadorImage,
    featured: false,
    available: true,
  },
  {
    id: "sushi-dokkodo",
    name: "Sushi Dokkodo",
    category: "sushi",
    description: "langostino apanado, queso crema, con aguacate, palmito, ajonjolí, masago y mango por fuera. roll de 10 bocados",
    price: 32000,
    image: sushidokkodoImage,
    featured: false,
    available: true,
  },
  {
    id: "sushi-hamburguesa",
    name: "Sushi Hamburguesa",
    category: "sushi",
    description: "tapas de sushi apanado, salmón o camarón tempura, aguacate, palmito de mar, queso crema y salsa de la casa.",
    price: 38000,
    image: sushihamburguesaImage,
    featured: false,
    available: true,
  },
{
    id: "sushi-Hot-dog",
    name: "Sushi Hot Dog",
    category: "sushi",
    description: "Rollo de sushi (Pan) Queso crema, palmito kanikama, pepino tempura, láminas de manzana y salsa de la casa.",
    price: 38000,
    image: perrosushiImage,
    featured: false,
    available: true,
  },

  {
    id: "salchipapa-clasica",
    name: "Salchipapa Clásica",
    category: "salchipapas",
    description: "300gr de papa francesa, salchicha americana, queso doble crema y salsa de la casa.",
    addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
    price: 18000,
    image: salchipapasencillaimage,
    featured: false,
    available: true,
  },
  {
    id: "salchipapa-especial",
    name: "Salchipapa Especial",
    category: "salchipapas",
    description: "300gr de papa francesa, salchicha americana, pollo desmechado, queso doble crema y salsa de la casa.",
    addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
    price: 22000,
    image: salchipapaespecialimage,
    featured: false,
    available: true,
  },
  {
    id: "mazorcada-sencilla",
    name: "Mazorcada Sencilla",
    category: "salchipapas",
    description: "Maiz tierno, pollo desmechado, salchicha americana, lechuga, papa cabello de angel, queso campesino, salsa tundama y salsa de piña.",
    addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
    price: 22000,
    image:mazorcadaespecialimage,
    featured: false,
    available: true,
  },
  {
    id: "mazorcada-gerrera",
    name: "Mazorcada Gerrera",
    category: "salchipapas",
    description: "Maiz tierno, pollo desmechado, carne desmechada, tocineta, salchicha americana, lechuga, papa cabello de angel, queso campesino, salsa tundama y salsa de piña.",
    addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
    price: 25000,
    image:mazorcadaguerreraimage,
    featured: false,
    available: true,
  },


{
    id: "combo-hamb-clasica",
    name: "Combo Hamburguesa Clasica",
    category: "combos",
    description:
      "Carne Angus 125g, tajada de queso, cebolla salteada, pan tipo brioche, salsa de la casa, tomate y lechuga. Incluye papas a la francesa y bebida gaseosa 400 ml (Coca Cola, zero o quatro).",
    price: 24000,
    sizes: [
    { name: "Coca-Cola", price: 24000 },
    { name: "Coca-Cola Zero", price: 24000 },
    { name: "Quatro", price: 24000 },
  ],
  addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
    image: comboHambClasicaImage,
    featured: true,
    available: true,
  },
  {
    id: "combo-hamb-especial",
    name: "Combo Hamburguesa Especial",
    category: "combos",
    description:
      "Carne Angus 125g, pollo mechado, champiñones, tajada de queso, cebolla salteada, pan tipo brioche, salsa de la casa, tomate y lechuga. Incluye papas a la francesa y bebida gaseosa 400 ml (Coca Cola, zero o quatro).",
    price: 27000,
    sizes: [
    { name: "Coca-Cola", price: 27000 },
    { name: "Coca-Cola Zero", price: 27000 },
    { name: "Quatro", price: 27000 },
  ],
  addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
    image: comboHambEspecialImage,
    featured: true,
    available: true,
  },
  {
    id: "combo-hamb-guerrera",
    name: "Combo Hamburguesa Guerrera",
    category: "combos",
    description:
      "Carne Angus 125g, huevo frito, tocineta, pepinilos, tajada de queso, cebolla salteada, pan tipo brioche, salsa de la casa, tomate y lechuga. Incluye papas a la francesa y bebida gaseosa 400 ml (Coca Cola, zero o quatro).",
    price: 27000,
    sizes: [
    { name: "Coca-Cola", price: 27000 },
    { name: "Coca-Cola Zero", price: 27000 },
    { name: "Quatro", price: 27000 },
  ],
  addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
    image: comboHambGuerreraImage,
    featured: true,
    available: true,
  },
  {
    id: "combo-hamb-delux",
    name: "Combo Hamburguesa Delux",
    category: "combos",
    description:
      "Carne Angus 125g, carne desmechada, pepinilos, tocineta, tajada de queso, cebolla salteada, pan tipo brioche, salsa de la casa, tomate y lechuga. Incluye papas a la francesa y bebida gaseosa 400 ml (Coca Cola, zero o quatro).",
    price: 31000,
    sizes: [
    { name: "Coca-Cola", price: 31000 },
    { name: "Coca-Cola Zero", price: 31000 },
    { name: "Quatro", price: 31000 },
  ],
  addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
    image: comboHambDeluxImage,
    featured: true,
    available: true,
  },
  {
    id: "combo-hamb-dakota",
    name: "Combo Hamburguesa Dakota",
    category: "combos",
    description: "Carne Angus 125g, queso apanado en panko, mermelada de tocineta, pollo mechado, pan tipo brioche, salsa de la casa, tomate y lechuga. Incluye papas a la francesa y bebida gaseosa 400 ml (Coca Cola, zero o quatro).",
    price: 33000,
    sizes: [
    { name: "Coca-Cola", price: 33000 },
    { name: "Coca-Cola Zero", price: 33000 },
    { name: "Quatro", price: 33000 },
  ],
  addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
    image: comboHambDakotaImage,
    featured: true,
    available: true,
  },
  {
    id: "combo-hamb-cheroqui",
    name: "Combo Hamburguesa Cheroqui",
    category: "combos",
    description: "Carne Angus 125g, costilla de cerdo troceada en salsa BBQ, piña en almibar, doble tocineta, queso fundido sobre el pan tipo brioche, salsa de la casa, tomate y lechuga. Incluye papas a la francesa y bebida gaseosa 400 ml (Coca Cola, zero o quatro).",
    price: 33000,
    sizes: [
    { name: "Coca-Cola", price: 33000 },
    { name: "Coca-Cola Zero", price: 33000 },
    { name: "Quatro", price: 33000 },
  ],
  addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
    image: comboHambCheroquiImage,
    featured: true,
    available: true,
  },
  {
    id: "combo-hamb-cacique",
    name: "Combo Hamburguesa Cacique",
    category: "combos",
    description: " Dos carnes Angus 125g, tajada de queso, carne desmechada en salsa BBQ, tocineta, jamón, pepinillos, pan tipo brioche, salsa de la casa, tomate y lechuga. Incluye papas a la francesa y bebida gaseosa 400 ml (Coca Cola, zero o quatro).",
    price: 37000,
    sizes: [
    { name: "Coca-Cola", price: 37000 },
    { name: "Coca-Cola Zero", price: 37000 },
    { name: "Quatro", price: 37000 },
  ],
  addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
    image: comboHambCaciqueImage,
    featured: true,
    available: true,
  },
{
  id: "combo-hamb-hawaiiana",
  name: "Combo Hamburguesa Hawaiiana",
  category: "combos",
  description: "Carne Angus 125g, tajada de queso, piña en almibar y teriyaki, tocineta, jamón, pepinillos, pan tipo brioche, salsa de la casa, tomate y lechuga. Incluye papas a la francesa y bebida gaseosa 400 ml (Coca Cola, zero o quatro).",
  price: 27000,
  sizes: [
    { name: "Coca-Cola", price: 27000 },
    { name: "Coca-Cola Zero", price: 27000 },
    { name: "Quatro", price: 27000 },
  ],
  addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
  image: comboHambHawaiianaImage,
  featured: true,
  available: true,
},

  {
    id: "combo-hot-dog-clasico",
    name: "Combo Hot Dog Clasico",
    category: "combos",
    description:
      "Salchicha americana, queso, cebolla salteada, papa cabello de angel y salsa tundama. Incluye papas a la francesa y bebida gaseosa 400 ml (Coca Cola, zero o quatro).",
    price: 20000,
    sizes: [
    { name: "Coca-Cola", price: 20000 },
    { name: "Coca-Cola Zero", price: 20000 },
    { name: "Quatro", price: 20000 },
  ],
  addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
    image: comboHotDogClasicoImage,
    featured: true,
    available: true,
  },
  {
    id: "combo-hot-dog-especial",
    name: "Combo Hot Dog Especial",
    category: "combos",
    description:
      "Salchicha americana, queso, cebolla salteada, pollo desmechado, champiñones, jamón, papa cabello de angel y salsa tundama. Incluye papas a la francesa y bebida gaseosa 400 ml (Coca Cola, zero o quatro).",
    price: 24000,
    sizes: [
    { name: "Coca-Cola", price: 24000 },
    { name: "Coca-Cola Zero", price: 24000 },
    { name: "Quatro", price: 24000 },
  ],
  addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
    image: comboHotDogEspecialImage,
    featured: true,
    available: true,
  },
   {
    id: "combo-hot-dog-cacique",
    name: "Combo Hot Dog Cacique",
    category: "combos",
    description:
      "Salchicha americana, queso, cebolla salteada, pollo desmechado, carne desmechada, jamón y salsa tundama. Incluye papas a la francesa y bebida gaseosa 400 ml (Coca Cola, zero o quatro).",
    price: 26000,
    sizes: [
    { name: "Coca-Cola", price: 26000 },
    { name: "Coca-Cola Zero", price: 26000 },
    { name: "Quatro", price: 26000 },
  ],
    addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
    image: comboHotDogCaciqueImage,
    featured: true,
    available: true,
  },
   {
    id: "combo-hot-dog-hawaiiano",
    name: "Combo Hot Dog Hawaiiano",
    category: "combos",
    description:
      "Salchicha americana, queso, jamón, piña en almibar, salsa teriyaki y salsa tocineta. Incluye papas a la francesa y bebida gaseosa 400 ml (Coca Cola, zero o quatro).",
    price: 22000,
    sizes: [
    { name: "Coca-Cola", price: 22000 },
    { name: "Coca-Cola Zero", price: 22000 },
    { name: "Quatro", price: 22000 },
  ],
    addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
    image: comboHotDogHawaiianoImage,
    featured: true,
    available: true,
  },
   {
    id: "combo-hot-dog-guerrero",
    name: "Combo Hot Dog Guerrero",
    category: "combos",
    description:
      "Salchicha americana, picó de gallo, guacamole, jamón, tocineta y salsa tundama. Incluye papas a la francesa y bebida gaseosa 400 ml (Coca Cola, zero o quatro).",
    price: 22000,
    sizes: [
    { name: "Coca-Cola", price: 22000 },
    { name: "Coca-Cola Zero", price: 22000 },
    { name: "Quatro", price: 22000 },
  ],
    addonIds: [
    "papas-fritas",
    "pepinillos",
    "jalapenos",
    "carne-mechada",
    "pollo-mechado",
    "jamon",
    "tocineta",
    "queso",
  ],
    image: comboHotDogGuerreroImage,
    featured: true,
    available: true,
  },
 {
  id: "combo-sushi-eby-tempura",
  name: "Combo Sushi Tempura + Eby",
  category: "combos",
  description:"Entrada de palmitos de mar.\n\nEby: Langostino apanado, queso crema, aguacate, con mango por fuera.\n\nTempura: Salmón tempura, queso crema, aguacate.\n\nTotal de 20 bocados.",
  price: 74000,
  image: comboSushiEbyTempuraImage,
  featured: true,
  available: true,
},
{
  id: "combo-sushi-camaron-skin",
  name: "Combo Sushi Camarón + Skin",
  category: "combos",
  description: "Entrada de palmitos de mar.\n\nCamarón Roll: Salmón tempura, camarón apanado, queso crema, con palmito por fuera.\n\nSkin: Piel de salmón crocante, pepino, aguacate, queso crema, con ajonjolí por fuera.\n\nTotal de 20 bocados",
  price: 68000,
  image: comboSushiCamaronSkinImage,
  featured: true,
  available: true,
},
{
  id: "combo-sushi-triple-especial",
  name: "Combo Sushi Triple Especial",
  category: "combos",
  description: "Ikigai Roll: Camaron apanado, salmon tempura, queso crema, con aguacate por fuera.\n\nCalifornia: Palmito de mar, pepino, aguacate, con masago por fuera.\n\nSamurai: langostino apanado, palmito, queso crema, masago, con mango por fuera. Total de 30 bocados",
  price: 90000,
  image: comboSushitripleImage,
  featured: true,
  available: true,
},
{
  id: "combo-sushi-explosion-sabores",
  name: "Combo Sushi Explosión de Sabores",
  category: "combos",
  description: "Tempura: Salmón tempura, queso crema, aguacate.\n\nDokkodo: langostino apanado, queso crema, con aguacate, palmito, ajonjolí, masago y mango por fuera.\n\nEmperador: Manzana roja apanada, queso crema, con mango por fuera. Total de 30 bocados",
  price: 80000,
  image: comboSushiexplosionImage,
  featured: true,
  available: true,
},


{
  id: "acompanamiento-dedos-queso",
  name: "Dedos de Queso",
  category: "acompanamientos",
  description: "Queso mozzarella empanizado en panko",
  price: 14000,
  image: dedosdequesoImage,
  featured: true,
  available: true,
},
{
  id: "acompanamiento-palmitos-apanados",
  name: "Palmitos Apanados",
  category: "acompanamientos",
  description: "Palmitos de mar empanizados en panko",
  price: 14000,
  image: palmitosImage,
  featured: true,
  available: true,
},
{
  id: "acompanamiento-aros-cebolla",
  name: "Aros de Cebolla",
  category: "acompanamientos",
  description: "Aros de cebolla empanizados y crocantes",
  price: 10000,
  image: aroscebollaImage,
  featured: true,
  available: true,
},
{
  id: "acompanamiento-cocacola-400ml",
  name: "Coca Cola 400ml",
  category: "acompanamientos",
  description: "Refresco de Coca Cola de 400ml",
  price: 5000,
  image: coca400Image,
  featured: true,
  available: true,
},
{
  id: "acompanamiento-cocacola-zero-400ml",
  name: "Coca Cola Zero 400ml",
  category: "acompanamientos",
  description: "Refresco de Coca Cola Zero de 400ml",
  price: 5000,
  image: cocaZero400Image,
  featured: true,
  available: true,
},
{
  id: "acompanamiento-quatro-400ml",
  name: "Quatro 400ml",
  category: "acompanamientos",
  description: "Refresco de Quatro de 400ml",
  price: 3000,
  image: quatroImage,
  featured: true,
  available: true,
},
{
  id: "acompanamiento-bretaña-400ml",
  name: "Bretaña 400ml",
  category: "acompanamientos",
  description: "Refresco de Bretaña de 400ml",
  price: 3000,
  image: bretañaImage,
  featured: true,
  available: true,
},
{
  id: "acompanamiento-cocacola-1.5l",
  name: "Coca Cola 1.5l",
  category: "acompanamientos",
  description: "Refresco de Coca Cola de 1.5l",
  price: 12000,
  image: coca1500Image,
  featured: true,
  available: true,
},
{
  id: "acompanamiento-colombiana-1l",
  name: "Colombiana 1l",
  category: "acompanamientos",
  description: "Refresco de Colombiana de 1.",
  price: 8000,
  image: colombianaImage,
  featured: true,
  available: true,
},
];

export const featuredProducts = products.filter((p) => p.featured);

export function getCategory(id: CategoryId) {
  return categories.find((c) => c.id === id);
}

export function countByCategory(id: CategoryId) {
  return products.filter((p) => p.category === id && p.available).length;
}
