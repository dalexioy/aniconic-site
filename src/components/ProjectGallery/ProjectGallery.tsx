import type { ProjectImage } from "../../types/Project";
import { Image } from "../Image/Image";
import "./ProjectGallery.css";

type ProjectGalleryProps = {
  images: ProjectImage[];
  title: string;
};

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  if (images.length === 0) {
    return <div className="project-gallery__empty">Images will be added soon.</div>;
  }

  const [heroImage, ...restImages] = images;

  return (
    <section className="project-gallery">
      <figure className="project-gallery__hero">
        <Image
          src={heroImage.src}
          alt={heroImage.alt || `${title} main image`}
        />
      </figure>

      {restImages.length > 0 && (
        <div className="project-gallery__grid">
          {restImages.map((image, index) => (
            <figure className="project-gallery__item" key={image.src}>
              <Image
                src={image.src}
                alt={image.alt || `${title} image ${index + 2}`}
              />
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}