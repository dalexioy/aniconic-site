import type { SanityImage } from "../../sanity/types";
import { urlFor } from "../../sanity/image";
import { Image } from "../Image/Image";
import "./ProjectGallery.css";

type ProjectGalleryProps = {
  images?: SanityImage[];
  title: string;
};

export function ProjectGallery({ images = [], title }: ProjectGalleryProps) {
  if (images.length === 0) {
    return <div className="project-gallery__empty">Images will be added soon.</div>;
  }

  const [heroImage, ...restImages] = images;

  return (
    <section className="project-gallery">
      <figure className="project-gallery__hero">
        <Image
          src={urlFor(heroImage).width(1400).url()}
          alt={`${title} main image`}
        />
      </figure>

      {restImages.length > 0 && (
        <div className="project-gallery__grid">
          {restImages.map((image, index) => (
            <figure className="project-gallery__item" key={image.asset._ref}>
              <Image
                src={urlFor(image).width(900).url()}
                alt={`${title} image ${index + 2}`}
              />
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}