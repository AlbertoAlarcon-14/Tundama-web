import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  MessageCircle,
  Music2,
} from "lucide-react";
import { Logo } from "./Logo";
import {
  siteConfig,
  isWhatsappConfigured,
} from "@/data/config";
import { whatsappGreetingUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {/* IDENTIDAD */}
        <div>
          <Logo />

          <p className="mt-4 font-display text-2xl tracking-wide">
            TUNDAMA FOOD BARBECUE
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            Domicilios en {siteConfig.city}
          </p>
        </div>

        {/* NAVEGACIÓN */}
        <nav aria-label="Enlaces del pie de página">
          <h2 className="font-display text-xl tracking-wide">
            NAVEGACIÓN
          </h2>

          <span
            className="brush-rule mt-2 !w-12"
            aria-hidden
          />

          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link
                to="/"
                className="hover:text-primary"
              >
                Inicio
              </Link>
            </li>

            <li>
              <Link
                to="/menu"
                className="hover:text-primary"
              >
                Menú
              </Link>
            </li>

            <li>
              <Link
                to="/domicilios"
                className="hover:text-primary"
              >
                Domicilios
              </Link>
            </li>

            <li>
              <Link
                to="/como-pedir"
                className="hover:text-primary"
              >
                ¿Cómo pedir?
              </Link>
            </li>
          </ul>
        </nav>

        {/* WHATSAPP + REDES */}
        <div>
          <h2 className="font-display text-xl tracking-wide">
            PIDE POR WHATSAPP
          </h2>

          <span
            className="brush-rule mt-2 !w-12"
            aria-hidden
          />

          <a
            href={whatsappGreetingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex h-12 items-center gap-2 rounded-md bg-primary px-5 font-display text-lg tracking-wide text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            <MessageCircle
              className="h-5 w-5"
              aria-hidden
            />

            ESCRÍBENOS
          </a>

          {!isWhatsappConfigured && (
            <p className="mt-3 text-xs text-muted-foreground">
              Número de WhatsApp pendiente de configurar.
            </p>
          )}

          {/* REDES SOCIALES */}
          <p className="mt-6 text-xs tracking-widest text-muted-foreground uppercase">
            Redes sociales
          </p>

          <div className="mt-3 flex flex-wrap gap-3">
            {/* INSTAGRAM */}
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Tundama Food Barbecue"
                className="inline-flex h-10 items-center gap-2 rounded-md border border-border px-4 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram
                  className="h-5 w-5"
                  aria-hidden
                />
                Instagram
              </a>
            )}

            {/* FACEBOOK */}
            {siteConfig.social.facebook && (
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Tundama Food Barbecue"
                className="inline-flex h-10 items-center gap-2 rounded-md border border-border px-4 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook
                  className="h-5 w-5"
                  aria-hidden
                />
                Facebook
              </a>
            )}

            {/* TIKTOK */}
            {siteConfig.social.tiktok && (
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok de Tundama Food Barbecue"
                className="inline-flex h-10 items-center gap-2 rounded-md border border-border px-4 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Music2
                  className="h-5 w-5"
                  aria-hidden
                />
                TikTok
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name}. Solo domicilios.
      </div>
    </footer>
  );
}

