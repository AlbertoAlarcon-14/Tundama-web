interface Props {
  src?: string;
  alt: string;
  label?: string;
  className?: string;
  fit?: "contain" | "cover";
}

export function ProductImage({
  src,
  alt,
  label,
  className = "",
  fit = "contain",
}: Props) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full ${
          fit === "cover"
            ? "object-cover object-center"
            : "object-contain"
        } ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`Fotografía pendiente de ${alt}`}
      className={`grain flex h-full w-full flex-col items-center justify-center gap-1 bg-[repeating-linear-gradient(135deg,var(--color-surface-2)_0px,var(--color-surface-2)_10px,var(--color-surface)_10px,var(--color-surface)_20px)] px-3 text-center ${className}`}
    >
      <span className="font-display text-2xl leading-none text-muted-foreground">
        {label ?? alt}
      </span>

      <span className="text-[10px] font-semibold tracking-[0.2em] text-primary">
        FOTO PENDIENTE
      </span>
    </div>
  );
}