export const PROJECTS_QUERY = `
*[_type == "project"] | order(order asc){
  _id,
  title,
  slug,
  order,
  symbol,
  disciplines,
  year,
  location,
  description,
  hoverDescription,
  coverImage,
  hoverImages,
  gallery,
  seoTitle,
  seoDescription
}
`;

export const PROJECT_QUERY = `
*[_type == "project" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  order,
  symbol,
  disciplines,
  year,
  location,
  hoverDescription,
  description,
  coverImage,
  hoverImages,
  gallery,
  seoTitle,
  seoDescription
}
`;