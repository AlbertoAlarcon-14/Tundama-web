
import { useEffect, useMemo, useState } from "react";
import { Minus, Plus, X } from "lucide-react";
import {
  products,
  type Product,
  type ProductSize,
} from "@/data/products";
import { addons } from "@/data/addons";
import { formatCOP } from "@/data/config";
import { ProductImage } from "./ProductImage";

interface SelectedAddon {
  id: string;
  quantity: number;
}

interface SelectedFlavors {
  firstFlavorId: string;
  secondFlavorId: string;
}

interface Props {
  product: Product | null;
  onClose: () => void;
  onAdd: (
    product: Product,
    quantity: number,
    size?: ProductSize,
    selectedAddons?: SelectedAddon[],
    selectedFlavors?: SelectedFlavors,
  ) => void;
}

export function ProductModal({
  product,
  onClose,
  onAdd,
}: Props) {
  const [quantity, setQuantity] = useState(1);

  const [selectedSize, setSelectedSize] =
    useState<ProductSize | null>(null);

  const [selectedAddons, setSelectedAddons] =
    useState<SelectedAddon[]>([]);

  const [secondFlavor, setSecondFlavor] =
    useState<Product | null>(null);

  const [combineFlavors, setCombineFlavors] =
    useState(false);

  const availablePizzas = useMemo(
    () =>
      products.filter(
        (item) =>
          item.category === "pizzas" &&
          item.available,
      ),
    [],
  );

  // Reiniciar las opciones cuando se abre otro producto
  useEffect(() => {
    setQuantity(1);
    setSelectedSize(product?.sizes?.[0] ?? null);
    setSelectedAddons([]);
    setCombineFlavors(false);

    if (product?.category === "pizzas") {
      setSecondFlavor(
        availablePizzas.find(
          (item) => item.id !== product.id,
        ) ?? null,
      );
    } else {
      setSecondFlavor(null);
    }
  }, [product, availablePizzas]);

  // Cerrar con Escape
  useEffect(() => {
    if (!product) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  // Obtener adicionales disponibles
  const productAddons = useMemo(() => {
    if (!product?.addonIds?.length) {
      return [];
    }

    return addons.filter(
      (addon) =>
        product.addonIds?.includes(addon.id) &&
        addon.available,
    );
  }, [product]);

  if (!product) {
    return null;
  }

  const hasSizes = !!product.sizes?.length;

  const isPizza = product.category === "pizzas";

  const isMediumPizza =
    isPizza &&
    selectedSize?.name === "Mediana 32cm";

  // Precio base
  const finalPrice =
    selectedSize?.price ?? product.price;

  // Calcular adicionales
  const addonsTotal = selectedAddons.reduce(
    (total, selectedAddon) => {
      const addon = addons.find(
        (item) => item.id === selectedAddon.id,
      );

      if (!addon) {
        return total;
      }

      return (
        total +
        addon.price * selectedAddon.quantity
      );
    },
    0,
  );

  const unitTotal = finalPrice + addonsTotal;
  const totalPrice = unitTotal * quantity;

  // Validar si se puede agregar
  const canAdd =
    (!hasSizes || selectedSize !== null) &&
    (!isMediumPizza ||
      !combineFlavors ||
      (!!secondFlavor &&
        secondFlavor.id !== product.id));

  // Consultar cantidad de un adicional
  function getAddonQuantity(addonId: string) {
    return (
      selectedAddons.find(
        (addon) => addon.id === addonId,
      )?.quantity ?? 0
    );
  }

  // Modificar cantidad de adicionales
  function updateAddonQuantity(
    addonId: string,
    change: number,
  ) {
    setSelectedAddons((current) => {
      const existing = current.find(
        (addon) => addon.id === addonId,
      );

      if (!existing) {
        if (change <= 0) {
          return current;
        }

        return [
          ...current,
          {
            id: addonId,
            quantity: change,
          },
        ];
      }

      const newQuantity =
        existing.quantity + change;

      if (newQuantity <= 0) {
        return current.filter(
          (addon) => addon.id !== addonId,
        );
      }

      return current.map((addon) =>
        addon.id === addonId
          ? {
              ...addon,
              quantity: newQuantity,
            }
          : addon,
      );
    });
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
      onClick={onClose}
    >
      <div
        className="card-surface fade-up max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-2xl sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Imagen */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <ProductImage
            src={product.image}
            alt={product.name}
            label={product.name}
          />

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute top-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-background/80 text-foreground transition-colors hover:bg-primary"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <div className="space-y-5 p-5">
          {/* Nombre */}
          <h2 className="font-display text-3xl tracking-wide">
            {product.name}
          </h2>

          {/* Descripción */}
          <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
            {product.description ||
              "Descripción pendiente."}
          </p>

          {/* Tamaños */}
          {hasSizes ? (
            <fieldset className="space-y-2">
              <legend className="mb-2 font-display text-lg tracking-wide">
                Elige el tamaño
              </legend>

              <div className="grid gap-2">
                {product.sizes!.map((size) => {
                  const checked =
                    selectedSize?.name === size.name;

                  return (
                    <label
                      key={size.name}
                      className={`flex cursor-pointer items-center justify-between gap-3 rounded-md border p-3 transition-colors ${
                        checked
                          ? "border-primary bg-primary/10"
                          : "border-border bg-surface-2 hover:border-primary/60"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <input
                          type="radio"
                          name={`size-${product.id}`}
                          value={size.name}
                          checked={checked}
                          onChange={() =>
                            setSelectedSize(size)
                          }
                          className="h-4 w-4 accent-[var(--primary)]"
                        />

                        <span className="font-medium">
                          {size.name}
                        </span>
                      </span>

                      <span className="font-display text-lg text-primary">
                        {formatCOP(size.price)}
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          ) : (
            <p className="font-display text-3xl text-primary">
              {formatCOP(product.price)}
            </p>
          )}

          {/* Modalidad de sabores para pizza mediana */}
          {isMediumPizza && (
            <fieldset className="space-y-3">
              <legend className="font-display text-xl tracking-wide">
                ¿Cómo quieres tu pizza?
              </legend>

              <p className="text-sm text-muted-foreground">
                Puedes pedirla completa de un solo sabor
                o combinar dos sabores diferentes.
              </p>

              {/* Pizza completa */}
              <label
                className={`flex cursor-pointer items-center gap-3 rounded-md border p-3 transition-colors ${
                  !combineFlavors
                    ? "border-primary bg-primary/10"
                    : "border-border bg-surface-2"
                }`}
              >
                <input
                  type="radio"
                  name={`pizza-flavors-${product.id}`}
                  checked={!combineFlavors}
                  onChange={() =>
                    setCombineFlavors(false)
                  }
                  className="h-4 w-4 accent-[var(--primary)]"
                />

                <div>
                  <span className="block font-semibold">
                    Pizza completa
                  </span>

                  <span className="text-sm text-muted-foreground">
                    {product.name} en toda la pizza.
                  </span>
                </div>
              </label>

              {/* Pizza de dos sabores */}
              <label
                className={`flex cursor-pointer items-center gap-3 rounded-md border p-3 transition-colors ${
                  combineFlavors
                    ? "border-primary bg-primary/10"
                    : "border-border bg-surface-2"
                }`}
              >
                <input
                  type="radio"
                  name={`pizza-flavors-${product.id}`}
                  checked={combineFlavors}
                  onChange={() =>
                    setCombineFlavors(true)
                  }
                  className="h-4 w-4 accent-[var(--primary)]"
                />

                <div>
                  <span className="block font-semibold">
                    Pizza de dos sabores
                  </span>

                  <span className="text-sm text-muted-foreground">
                    Combina dos pizzas diferentes en una sola.
                  </span>
                </div>
              </label>

              {/* Selector del segundo sabor */}
              {combineFlavors && (
                <div className="space-y-3 rounded-md border border-border bg-surface-2 p-3">
                  <div>
                    <span className="block text-sm font-medium">
                      Primera mitad
                    </span>

                    <div className="mt-2 flex items-center justify-between rounded-md border border-primary bg-primary/10 p-3">
                      <span className="font-semibold">
                        {product.name}
                      </span>

                      <span className="text-xs font-bold uppercase text-primary">
                        Seleccionado
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor={`second-flavor-${product.id}`}
                      className="block text-sm font-medium"
                    >
                      Segunda mitad
                    </label>

                    <select
                      id={`second-flavor-${product.id}`}
                      value={secondFlavor?.id ?? ""}
                      onChange={(e) =>
                        setSecondFlavor(
                          availablePizzas.find(
                            (item) =>
                              item.id === e.target.value &&
                              item.id !== product.id,
                          ) ?? null,
                        )
                      }
                      className="w-full rounded-md border border-border bg-background p-3"
                    >
                      {availablePizzas
                        .filter(
                          (item) => item.id !== product.id,
                        )
                        .map((flavor) => (
                          <option
                            key={flavor.id}
                            value={flavor.id}
                          >
                            {flavor.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              )}
            </fieldset>
          )}

          {/* Precio base seleccionado */}
          {hasSizes && selectedSize && (
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="text-sm text-muted-foreground">
                Precio
              </span>

              <span className="font-display text-2xl text-primary">
                {formatCOP(finalPrice)}
              </span>
            </div>
          )}

          {/* Adicionales */}
          {productAddons.length > 0 && (
            <fieldset className="space-y-3">
              <legend className="font-display text-xl tracking-wide">
                Adicionales
              </legend>

              <p className="text-sm text-muted-foreground">
                Agrega los adicionales que quieras a tu
                pedido.
              </p>

              <div className="space-y-2">
                {productAddons.map((addon) => {
                  const addonQuantity =
                    getAddonQuantity(addon.id);

                  return (
                    <div
                      key={addon.id}
                      className="flex items-center justify-between gap-3 rounded-md border border-border bg-surface-2 p-3"
                    >
                      <div className="min-w-0">
                        <p className="font-medium">
                          {addon.name}
                        </p>

                        <p className="text-sm text-primary">
                          + {formatCOP(addon.price)}
                        </p>
                      </div>

                      <div className="flex shrink-0 items-center gap-1 rounded-md border border-border bg-background p-1">
                        <button
                          type="button"
                          aria-label={`Disminuir ${addon.name}`}
                          onClick={() =>
                            updateAddonQuantity(addon.id, -1)
                          }
                          disabled={addonQuantity === 0}
                          className="grid h-9 w-9 place-items-center rounded transition-colors hover:bg-surface-2 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          <Minus
                            className="h-4 w-4"
                            aria-hidden
                          />
                        </button>

                        <span
                          aria-live="polite"
                          className="w-7 text-center font-display text-lg"
                        >
                          {addonQuantity}
                        </span>

                        <button
                          type="button"
                          aria-label={`Aumentar ${addon.name}`}
                          onClick={() =>
                            updateAddonQuantity(addon.id, 1)
                          }
                          className="grid h-9 w-9 place-items-center rounded transition-colors hover:bg-surface-2"
                        >
                          <Plus
                            className="h-4 w-4"
                            aria-hidden
                          />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </fieldset>
          )}

          {/* Resumen */}
          <div className="rounded-lg border border-border bg-surface-2 p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Producto
              </span>

              <span className="font-medium">
                {formatCOP(finalPrice)}
              </span>
            </div>

            {addonsTotal > 0 && (
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Adicionales
                </span>

                <span className="font-medium">
                  + {formatCOP(addonsTotal)}
                </span>
              </div>
            )}

            <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
              <span className="font-display text-lg">
                Total
              </span>

              <span className="font-display text-2xl text-primary">
                {formatCOP(totalPrice)}
              </span>
            </div>
          </div>

          {/* Cantidad + agregar */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 rounded-md border border-border bg-surface-2 p-1">
              <button
                type="button"
                aria-label="Disminuir cantidad"
                onClick={() =>
                  setQuantity((q) => Math.max(1, q - 1))
                }
                className="grid h-10 w-10 place-items-center rounded hover:bg-background"
              >
                <Minus className="h-4 w-4" aria-hidden />
              </button>

              <span
                aria-live="polite"
                className="w-8 text-center font-display text-xl"
              >
                {quantity}
              </span>

              <button
                type="button"
                aria-label="Aumentar cantidad"
                onClick={() => setQuantity((q) => q + 1)}
                className="grid h-10 w-10 place-items-center rounded hover:bg-background"
              >
                <Plus className="h-4 w-4" aria-hidden />
              </button>
            </div>

            <button
              type="button"
              disabled={!canAdd}
              onClick={() => {
                onAdd(
                  product,
                  quantity,
                  selectedSize ?? undefined,
                  selectedAddons,
                  isMediumPizza && combineFlavors
                    ? {
                        firstFlavorId: product.id,
                        secondFlavorId: secondFlavor?.id ?? "",
                      }
                    : undefined,
                );

                onClose();
              }}
              className="h-12 flex-1 rounded-md bg-primary font-display text-xl tracking-wide text-primary-foreground shadow-[var(--shadow-red)] transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
            >
              AGREGAR AL PEDIDO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
