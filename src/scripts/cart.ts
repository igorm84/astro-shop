/**
 * Tiny client-side cart persisted to localStorage.
 *
 * State changes are broadcast through a `cart:change` window event so any
 * component (header badge, drawer, …) can re-render, including after
 * View Transition navigations swap the DOM.
 */
export { formatPrice } from "../utils/format";

export interface CartItem {
  slug: string;
  name: string;
  price: number;
  cover: string;
  size: string;
  quantity: number;
}

const STORAGE_KEY = "astro-shop:cart";
export const CART_CHANGE = "cart:change";
export const CART_OPEN = "cart:open";
export const MAX_QUANTITY = 10;

let memoryCart: CartItem[] = [];

const isCartItem = (value: unknown): value is CartItem => {
  if (!value || typeof value !== "object") return false;
  const item = value as Record<string, unknown>;
  return (
    typeof item.slug === "string" &&
    typeof item.name === "string" &&
    typeof item.price === "number" &&
    typeof item.cover === "string" &&
    typeof item.size === "string" &&
    typeof item.quantity === "number"
  );
};

export function getCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return memoryCart;
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter(isCartItem) : [];
  } catch {
    return memoryCart;
  }
}

function saveCart(items: CartItem[]) {
  memoryCart = items;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Storage may be unavailable (private mode); keep the in-memory copy.
  }
  window.dispatchEvent(new CustomEvent(CART_CHANGE, { detail: items }));
}

const sameLine = (a: CartItem, slug: string, size: string) =>
  a.slug === slug && a.size === size;

export function addToCart(item: CartItem) {
  const items = getCart();
  const existing = items.find((i) => sameLine(i, item.slug, item.size));
  if (existing) {
    existing.quantity = Math.min(
      MAX_QUANTITY,
      existing.quantity + item.quantity,
    );
  } else {
    items.push({ ...item, quantity: Math.min(MAX_QUANTITY, item.quantity) });
  }
  saveCart(items);
}

export function updateQuantity(slug: string, size: string, quantity: number) {
  const items = getCart()
    .map((i) =>
      sameLine(i, slug, size)
        ? { ...i, quantity: Math.min(MAX_QUANTITY, quantity) }
        : i,
    )
    .filter((i) => i.quantity > 0);
  saveCart(items);
}

export function removeFromCart(slug: string, size: string) {
  saveCart(getCart().filter((i) => !sameLine(i, slug, size)));
}

export const cartCount = (items: CartItem[]) =>
  items.reduce((sum, i) => sum + i.quantity, 0);

export const cartSubtotal = (items: CartItem[]) =>
  items.reduce((sum, i) => sum + i.quantity * i.price, 0);

export const openCart = () => window.dispatchEvent(new Event(CART_OPEN));

// Keep multiple tabs in sync.
if (typeof window !== "undefined") {
  window.addEventListener("storage", (event) => {
    if (event.key === STORAGE_KEY) {
      window.dispatchEvent(new CustomEvent(CART_CHANGE, { detail: getCart() }));
    }
  });
}
