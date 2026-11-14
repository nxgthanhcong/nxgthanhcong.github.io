import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type Props = {
  src: string;
  alt: string;
  onClose: () => void;
};

// Full-size view of an image (project thumbnails, the profile photo). Rendered into <body> so it is not
// affected by the list's hover opacity. Closes on Esc, backdrop click or the
// close button; returns focus to whatever opened it.
const ImageLightbox = ({ src, alt, onClose }: Props) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  // Keep the latest onClose without re-running the mount effect when the
  // parent re-renders (e.g. list hover state changes).
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      opener?.focus();
    };
  }, []);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(2,8,20,0.85)] p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        aria-label="Close"
        className="absolute right-4 top-4 rounded-full p-2 text-slate-300 hover:bg-white/10 hover:text-white"
        onClick={onClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
      <img
        src={src}
        alt={alt}
        className="max-h-[85vh] w-auto max-w-[min(92vw,1100px)] rounded-lg border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>,
    document.body
  );
};

export default ImageLightbox;
