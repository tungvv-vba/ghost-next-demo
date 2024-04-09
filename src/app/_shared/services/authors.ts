import api from "@/lib/tryghost-api";

export async function getAllAuthors() {
  return await api.authors
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getAuthor(slug: string) {
  return await api.authors
    .read({
      slug,
    })
    .catch((err) => {
      console.error(err);
    });
}
