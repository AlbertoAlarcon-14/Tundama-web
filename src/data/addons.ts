
export interface Addon {
  id: string;
  name: string;
  price: number;
  available: boolean;
}

export const addons: Addon[] = [
  {
    id: "papas-fritas",
    name: "Papas fritas",
    price: 5000,
    available: true,
  },
  {
    id: "pepinillos",
    name: "Pepinillos",
    price: 2000,
    available: true,
  },
  {
    id: "jalapenos",
    name: "Jalapeños",
    price: 2000,
    available: true,
  },
  {
    id: "carne-mechada",
    name: "Carne mechada",
    price: 4000,
    available: true,
  },
  {
    id: "pollo-mechado",
    name: "Pollo mechado",
    price: 3000,
    available: true,
  },
  {
    id: "jamon",
    name: "Jamón",
    price: 1500,
    available: true,
  },
  {
    id: "tocineta",
    name: "Tocineta",
    price: 1500,
    available: true,
  },
  {
    id: "queso",
    name: "Queso",
    price: 2000,
    available: true,
  },
];