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
    description:
      "Experience Unmatched Comfort and Style with Nike Airmax Shoes.",
    cover: "/products/nike-airmax.avif",
    category: ProductCategory.Shoes,
  },
  {
    id: 2,
    name: "Nike ZoomX Invincible",
    slug: "nike-zoomx-invincible",
    price: 599,
    description: "Elevate Your Running Experience with Nike ZoomX Invincible.",
    cover: "/products/nike-zoomx-invincible.avif",
    category: ProductCategory.Shoes,
  },
  {
    id: 3,
    name: "Nike Jordan MVP",
    slug: "nike-jordan-mvp",
    price: 299,
    description: "Dominate the Court with Nike Jordan MVP Basketball Shoes.",
    cover: "/products/nike-jordan-mvp.webp",
    category: ProductCategory.Shoes,
  },
  {
    id: 4,
    name: "Dri-FIT 23 Shirt",
    slug: "dri-fit-23-shirt",
    price: 99,
    description:
      "Stay Cool and Dry with the Dri-FIT 23 Active Shirt. This Shirt is Made with Sweat-Wicking Fabric to Keep You Dry and Comfortable.",
    cover: "/products/dri-fit-23-shirt.avif",
    category: ProductCategory.Shirts,
  },
  {
    id: 5,
    name: "Nike Air 270",
    slug: "nike-air-270",
    price: 399,
    description:
      "Nike Air 270 Shoes are the Perfect Blend of Style and Comfort.",
    cover: "/products/nike-air-270.png",
    category: ProductCategory.Shoes,
  },
];
