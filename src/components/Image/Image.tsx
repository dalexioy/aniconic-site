import { useState } from "react";
import "./Image.css";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function Image({
  src,
  alt,
  className = "",
}: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`image-wrapper ${className}`}>
      {!loaded && <div className="image-skeleton" />}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`image ${loaded ? "loaded" : ""}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}