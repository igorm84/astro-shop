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
  category: ProductCategory;
}
export const products: Product[] = [
  {
    id: 1,
    name: "Nike Airmax",
    slug: "nike-airmax",
    price: 199,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cover: "/products/nike-airmax.avif",
    category: ProductCategory.Shoes,
  },
  {
    id: 2,
    name: "Nike ZoomX Invincible",
    slug: "nike-zoomx-invincible",
    price: 599,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cover: "/products/nike-zoomx-invincible.avif",
    category: ProductCategory.Shoes,
  },
  {
    id: 3,
    name: "Nike Jordan MVP",
    slug: "nike-jordan-mvp",
    price: 299,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cover: "/products/nike-jordan-mvp.avif",
    category: ProductCategory.Shoes,
  },
  {
    id: 4,
    name: "Dri-FIT 23 Shirt",
    slug: "dri-fit-23-shirt",
    price: 99,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cover: "/products/dri-fit-23-shirt.avif",
    category: ProductCategory.Shirts,
  },
];
