import { Product } from "@/hooks/use-cart";
import signatureBlendImg from "@/assets/images/signature-blend.png";
import torajaImg from "@/assets/images/toraja.png";
import gayoImg from "@/assets/images/gayo.png";
import kopiSusuImg from "@/assets/images/kopi-susu.png";
import coldBrewImg from "@/assets/images/cold-brew.png";
import rebataPackImg from "@assets/rebata-product-BdF_9Qpz_1780283596430.png";

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
  },
  {
    id: "rebata-beans-100",
    name: "REBATA Kopi Murni 100gr",
    description: "100% pure Indonesian coffee beans. Premium matte black packaging. Perfect for trying our signature roast.",
    price: 12000,
    image: rebataPackImg,
    category: "Coffee Beans"
  },
  {
    id: "rebata-beans-500",
    name: "REBATA Kopi Murni 500gr",
    description: "100% pure Indonesian coffee beans. Premium matte black packaging. Our most popular home brewing size.",
    price: 60000,
    image: rebataPackImg,
    category: "Coffee Beans"
  },
  {
    id: "rebata-beans-1000",
    name: "REBATA Kopi Murni 1000gr",
    description: "100% pure Indonesian coffee beans. Premium matte black packaging. Best value for the dedicated coffee lover.",
    price: 110000,
    image: rebataPackImg,
    category: "Coffee Beans"
  }
];

export const CATEGORIES = ["All", "Espresso Based", "Single Origin", "Cold Brew", "Coffee Beans", "Merchandise"];
