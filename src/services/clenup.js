export const cleanData = (data) => {
  if (!data) return {};


  return {
    title: data.title || "Unknown title",
    authors: data.authors?.join(", ") || "Unknown author",
    description: data.description ? `${data.description.slice(0, 150)}...`: "No description provided",
    descriptionLg: data.description || "No description provided",
    publisher: data.publisher || "Unknown publisher",
    publishedDate: data.publishedDate || "Unknown published date",
    pageCount: data.pageCount || "N/A",
    categories: data.categories?.join(", ") || ["Uncategorized"],
    averageRating: data.averageRating || "N/A",
    thumbnail: data.imageLinks?.thumbnail ||
    "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
    largeImage: data.imageLinks?.large || "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
    language: data.language || "Unknown language",
    previewLink: data.previewLink || "Problem loading page"
  };
};