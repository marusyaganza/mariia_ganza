"use client";

import { useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import styles from "./CaseStudy.module.css";

interface ZoomableImageProps {
  image: StaticImageData;
  alt: string;
  // Rendered width of the thumbnail, passed to next/image
  sizes: string;
  // Frame around the thumbnail
  className?: string;
}

/**
 * Thumbnail that opens the full-size image in a modal.
 * Native <dialog>: Esc closes it and focus returns to the thumbnail.
 */
const ZoomableImage = ({
  image,
  alt,
  sizes,
  className,
}: ZoomableImageProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        className={`${styles.zoomTrigger} ${className ?? ""}`}
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`Enlarge image: ${alt}`}
      >
        <Image
          src={image}
          alt={alt}
          placeholder="blur"
          sizes={sizes}
          className="h-auto w-full"
        />
      </button>

      <dialog
        ref={dialogRef}
        className={styles.lightbox}
        aria-label={alt}
        // A click on the backdrop lands on the dialog itself
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            event.currentTarget.close();
          }
        }}
      >
        <button
          type="button"
          className={styles.lightboxClose}
          onClick={() => dialogRef.current?.close()}
          aria-label="Close"
        >
          ×
        </button>
        {/* Not loaded until the dialog opens: lazy images skip display: none */}
        <Image
          src={image}
          alt={alt}
          sizes="100vw"
          className={styles.lightboxImage}
        />
      </dialog>
    </>
  );
};

export default ZoomableImage;
