export type SanityImage = {
  asset: {
    _ref: string;
    _type: "reference";
  };
};

export type SanityProject = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  order?: number;
  symbol?: string;
  disciplines?: string[];
  year?: number;
  location?: string;
  hoverDescription?: string;
  description?: string;
  coverImage?: SanityImage;
  hoverImages?: SanityImage[];
  gallery?: SanityImage[];
  seoTitle?: string;
  seoDescription?: string;
};