
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  products,
  type Product,
  type ProductSize,
} from "@/data/products";
import { addons, type Addon } from "@/data/addons";

export interface SelectedAddon {
  id: string;
  quantity: number;
}

export interface SelectedFlavors {
  firstFlavorId: string;
  secondFlavorId: string;
}

export interface CartLine {
  id: string;
  productId: string;
  sizeName?: string;
  quantity: number;
  addons?: SelectedAddon[];
  selectedFlavors?: SelectedFlavors;
}

interface CartItem extends CartLine {
  product: Product;
  size?: ProductSize;
  selectedAddons: {
    addon: Addon;
    quantity: number;
  }[];
  firstFlavor?: Product;
  secondFlavor?: Product;
  unitPrice: number;
  addonsTotal: number;
  subtotal: number;
}

interface CartContextValue {
  lines: CartLine[];
  items: CartItem[];
  count: number;
  total: number;
  add: (
    product: Product,
    quantity?: number,
    size?: ProductSize,
    selectedAddons?: SelectedAddon[],
    selectedFlavors?: SelectedFlavors,
  ) => void;
  setQuantity: (id: string, quantity: number) => void;
  remove: (id: string) => void;
  clear: () => void;
}

const STORAGE_KEY = "tundama-cart-v4";

const CartContext = createContext<CartContextValue | null>(null);

function normalizeAddons(addonsList: SelectedAddon[] = []) {
  return addonsList
    .filter((addon) => addon.quantity > 0)
    .sort((a, b) => a.id.localeCompare(b.id));
}

function addonsKey(addonsList: SelectedAddon[] = []) {
  return normalizeAddons(addonsList)
    .map((addon) => `${addon.id}:${addon.quantity}`)
    .join("|");
}

function flavorsKey(flavors?: SelectedFlavors) {
  if (!flavors) return "no-flavors";

  return `${flavors.firstFlavorId}:${flavors.secondFlavorId}`;
}

function lineId(
  productId: string,
  sizeName?: string,
  selectedAddons: SelectedAddon[] = [],
  selectedFlavors?: SelectedFlavors,
) {
  const sizeKey = sizeName ?? "default";
  const addonsKeyValue = addonsKey(selectedAddons);
  const flavorKeyValue = flavorsKey(selectedFlavors);

  return `${productId}__${sizeKey}__${addonsKeyValue || "no-addons"}__${flavorKeyValue}`;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Recuperar carrito guardado
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);

      if (raw) {
        const parsed = JSON.parse(raw) as CartLine[];

        if (Array.isArray(parsed)) {
          setLines(
            parsed.filter(
              (line) =>
                typeof line?.id === "string" &&
                typeof line?.productId === "string" &&
                Number.isFinite(line?.quantity) &&
                line.quantity > 0,
            ),
          );
        }
      }
    } catch {
      // Carrito ilegible: se empieza vacío.
    }

    setHydrated(true);
  }, []);

  // Guardar carrito
  useEffect(() => {
    if (!hydrated) return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // Almacenamiento no disponible.
    }
  }, [lines, hydrated]);

  // Agregar producto
  const add = useCallback(
    (
      product: Product,
      quantity = 1,
      size?: ProductSize,
      selectedAddons: SelectedAddon[] = [],
      selectedFlavors?: SelectedFlavors,
    ) => {
      const cleanAddons = normalizeAddons(selectedAddons);

      const cleanFlavors =
        product.category === "pizzas" &&
        size?.name === "Mediana 32cm" &&
        selectedFlavors?.firstFlavorId &&
        selectedFlavors?.secondFlavorId &&
        selectedFlavors.firstFlavorId !==
          selectedFlavors.secondFlavorId
          ? selectedFlavors
          : undefined;

      const id = lineId(
        product.id,
        size?.name,
        cleanAddons,
        cleanFlavors,
      );

      setLines((prev) => {
        const found = prev.find((line) => line.id === id);

        if (found) {
          return prev.map((line) =>
            line.id === id
              ? {
                  ...line,
                  quantity: line.quantity + quantity,
                }
              : line,
          );
        }

        return [
          ...prev,
          {
            id,
            productId: product.id,
            sizeName: size?.name,
            quantity,
            addons: cleanAddons,
            selectedFlavors: cleanFlavors,
          },
        ];
      });
    },
    [],
  );

  // Cambiar cantidad del producto
  const setQuantity = useCallback(
    (id: string, quantity: number) => {
      setLines((prev) =>
        quantity <= 0
          ? prev.filter((line) => line.id !== id)
          : prev.map((line) =>
              line.id === id
                ? {
                    ...line,
                    quantity,
                  }
                : line,
            ),
      );
    },
    [],
  );

  // Eliminar línea completa
  const remove = useCallback((id: string) => {
    setLines((prev) =>
      prev.filter((line) => line.id !== id),
    );
  }, []);

  // Vaciar carrito
  const clear = useCallback(() => {
    setLines([]);
  }, []);

  // Construir información completa del carrito
  const items = useMemo(
    () =>
      lines
        .map((line) => {
          const product = products.find(
            (product) => product.id === line.productId,
          );

          if (!product) return null;

          const size = line.sizeName
            ? product.sizes?.find(
                (item) => item.name === line.sizeName,
              )
            : undefined;

          const unitPrice = size?.price ?? product.price;

          const selectedAddons = (line.addons ?? [])
            .map((selectedAddon) => {
              const addon = addons.find(
                (item) => item.id === selectedAddon.id,
              );

              if (!addon) return null;

              return {
                addon,
                quantity: selectedAddon.quantity,
              };
            })
            .filter(
              (
                item,
              ): item is {
                addon: Addon;
                quantity: number;
              } => item !== null,
            );

          const firstFlavor = line.selectedFlavors
            ? products.find(
                (item) =>
                  item.id === line.selectedFlavors?.firstFlavorId,
              )
            : undefined;

          const secondFlavor = line.selectedFlavors
            ? products.find(
                (item) =>
                  item.id === line.selectedFlavors?.secondFlavorId,
              )
            : undefined;

          const addonsTotal = selectedAddons.reduce(
            (total, selectedAddon) =>
              total +
              selectedAddon.addon.price *
                selectedAddon.quantity,
            0,
          );

          const itemUnitPrice = unitPrice + addonsTotal;
          const subtotal = itemUnitPrice * line.quantity;

          return {
            ...line,
            product,
            size,
            selectedAddons,
            firstFlavor,
            secondFlavor,
            unitPrice,
            addonsTotal,
            subtotal,
          };
        })
        .filter(
          (item): item is CartItem => item !== null,
        ),
    [lines],
  );

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      items,

      count: items.reduce(
        (total, item) => total + item.quantity,
        0,
      ),

      total: items.reduce(
        (total, item) => total + item.subtotal,
        0,
      ),

      add,
      setQuantity,
      remove,
      clear,
    }),
    [
      lines,
      items,
      add,
      setQuantity,
      remove,
      clear,
    ],
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);

  if (!ctx) {
    throw new Error(
      "useCart debe usarse dentro de CartProvider",
    );
  }

  return ctx;
}
