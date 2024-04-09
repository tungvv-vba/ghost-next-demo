import api from "@/lib/tryghost-api";

export async function getPages(slug: string) {
  return await api.pages
    .read({
      slug,
    })
    .catch((err) => {
      console.error(err);
    });
}
