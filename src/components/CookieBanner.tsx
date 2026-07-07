import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";

const STORAGE_KEY = "hbs-cookie-consent-v1";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const t = setTimeout(() => setVisible(true), 600);
        return () => clearTimeout(t);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-Hinweis"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-md rounded-3xl border border-black/[0.06] bg-white/95 p-5 shadow-[0_30px_80px_-30px_rgba(46,46,46,0.35)] backdrop-blur-xl sm:right-6 sm:left-auto sm:bottom-6"
      style={{ animation: "rise 0.5s cubic-bezier(0.22,1,0.36,1) both" }}
    >
      <div className="flex items-start gap-3">
        <div className="flex-1 text-sm leading-relaxed text-ink/80">
          <p className="font-display text-base text-ink">Wir respektieren Ihre Privatsphäre.</p>
          <p className="mt-1.5">
            Diese Website nutzt Google Maps und speichert Ihre Zustimmung lokal. Mehr in
            der{" "}
            <Link to="/datenschutz" className="text-gold underline underline-offset-2 hover:text-ink">
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>
        <button
          onClick={accept}
          aria-label="Cookie-Hinweis schliessen"
          className="grid size-8 shrink-0 place-items-center rounded-full text-ink/50 hover:bg-blush hover:text-ink transition-colors"
        >
          <X className="size-4" />
        </button>
      </div>
      <button
        onClick={accept}
        className="mt-4 w-full rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gold"
      >
        Verstanden
      </button>
    </div>
  );
}
