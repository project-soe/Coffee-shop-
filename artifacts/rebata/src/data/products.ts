import { Product } from "@/hooks/use-cart";
import signatureBlendImg from "@/assets/images/signature-blend.png";
import torajaImg from "@/assets/images/toraja.png";
import gayoImg from "@/assets/images/gayo.png";
import kopiSusuImg from "@/assets/images/kopi-susu.png";
import coldBrewImg from "@/assets/images/cold-brew.png";

export const PRODUCTS: Product[] = [
  {
    id: "rebata-signature",
    name: "Rebata Signature Blend",
    description: "Medium roast, chocolatey finish. The soul of our coffee house.",
    price: 95000,
    image: signatureBlendImg,
    category: "Espresso Based"
  },
  {
    id: "toraja-arabica",
    name: "Kopi Toraja Arabika",
    description: "Single origin, bright & fruity. High altitude perfection.",
    price: 120000,
    image: torajaImg,
    category: "Single Origin"
  },
  {
    id: "gayo-specialty",
    name: "Kopi Gayo Specialty",
    description: "Earthy & complex, wet-hulled process. Bold flavors from Sumatra.",
    price: 135000,
    image: gayoImg,
    category: "Single Origin"
  },
  {
    id: "es-kopi-susu",
    name: "Es Kopi Susu Rebata",
    description: "Iced milk coffee, house specialty. Creamy, sweet, and strong.",
    price: 35000,
    image: kopiSusuImg,
    category: "Espresso Based"
  },
  {
    id: "cold-brew",
    name: "Cold Brew 12 Hours",
    description: "Smooth & strong. Steeped for 12 hours for maximum flavor extraction.",
    price: 45000,
    image: coldBrewImg,
    category: "Cold Brew"
  }
];

export const CATEGORIES = ["All", "Espresso Based", "Single Origin", "Cold Brew", "Merchandise"];
