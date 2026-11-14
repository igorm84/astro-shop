export { formatPrice } from "../utils/format";

export enum ProductCategory {
  Shirts = "shirts",
  Pants = "pants",
  Shoes = "shoes",
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string;
  cover: string;
  coverAuthor: string;
  coverCredits: string;
  category: ProductCategory;
  color: string;
}

export const sizes = ["XS", "S", "M", "L", "XL"] as const;

export const products: Product[] = [
  {
    id: 32,
    name: "705 Shirt Brave",
    slug: "t-705-shirt-brave",
    price: 129,
    description:
      "Stay brave with the 705 Shirt from the Ryan Hoffman Collection. Show your bravery and grab a beer with friends.",
    cover: "/products/ryan-hoffman-A7f7XRKgUWc-unsplash.webp",
    coverAuthor: "Ryan Hoffman",
    coverCredits:
      "https://unsplash.com/photos/A7f7XRKgUWc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    category: ProductCategory.Shirts,
    color: "Black",
  },
  {
    id: 18,
    name: "Haryo Setyadi Shirt",
    slug: "haryo-setyadi-shirt",
    price: 199,
    description:
      "Feel the comfort and peace of the Haryo Setyadi Shirt, white as snow. Don't worry about stains, it's easy to clean.",
    cover: "/products/haryo-setyadi-acn5ERAeSb4-unsplash.webp",
    coverAuthor: "Haryo Setyadi",
    coverCredits:
      "https://unsplash.com/photos/acn5ERAeSb4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    category: ProductCategory.Shirts,
    color: "Snow white",
  },
  {
    id: 21,
    name: "Faith Yarn Shirt",
    slug: "faith-yarn-shirt",
    price: 59,
    description:
      "Elevate your style and comfort with the Faith Yarn Shirt. Designed to stay cool and dry all day.",
    cover: "/products/faith-yarn-Wr0TpKqf26s-unsplash.webp",
    coverAuthor: "Faith Yarn",
    coverCredits:
      "https://unsplash.com/photos/Wr0TpKqf26s?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    category: ProductCategory.Shirts,
    color: "Black",
  },
  {
    id: 49,
    name: "T Shirt 32",
    slug: "t-shirt-32",
    price: 99,
    description:
      "Stay cool and dry with the T Shirt 32 from the Ryan Hoffman Collection. Relax, run, dream.",
    cover: "/products/ryan-hoffman-6Nub980bI3I-unsplash.webp",
    coverAuthor: "Ryan Hoffman",
    coverCredits:
      "https://unsplash.com/photos/6Nub980bI3I?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    category: ProductCategory.Shirts,
    color: "Black",
  },
];
