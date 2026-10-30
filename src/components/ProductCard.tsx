import { Plus } from "lucide-react";
import type { Product } from "@/data/products";
import { formatCOP } from "@/data/config";
import { ProductImage } from "./ProductImage";

interface Props {
  product: Product;
  onOpen: (product: Product) => void;
  onAdd: (product: Product) => void;
}

export function ProductCard({ product, onOpen, onAdd }: Props) {
  const hasSizes = !!product.sizes?.length;
  const minPrice = hasSizes
    ? Math.min(...product.sizes!.map((s) => s.price))
    : product.price;

  return (
    <article className="card-surface fade-up group flex flex-col overflow-hidden rounded-xl transition-colors hover:border-primary/60">
      <button
        type="button"
        onClick={() => onOpen(product)}
        className="relative block aspect-[4/3] w-full overflow-hidden"
        aria-label={`Ver detalles de ${product.name}`}
      >
        <ProductImage
          src={product.image}
          alt={product.name}
          label={product.name}
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </button>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-display text-2xl tracking-wide">{product.name}</h3>
        {product.description ? (
          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>
        ) : (
          <p className="text-sm text-muted-foreground italic">Descripción pendiente.</p>
        )}
        <div className="mt-auto flex items-center justify-between gap-3 pt-3">
          <span className="font-display text-2xl text-primary">
            {hasSizes ? "Desde " : ""}
            {formatCOP(minPrice)}
          </span>
          <button
            type="button"
            onClick={() => onAdd(product)}
            className="inline-flex h-11 items-center gap-1.5 rounded-md bg-primary px-4 text-sm font-bold tracking-wide text-primary-foreground uppercase transition-colors hover:bg-primary-dark"
          >
            <Plus className="h-4 w-4" aria-hidden />
            Agregar
          </button>
        </div>
      </div>
    </article>
  );
}