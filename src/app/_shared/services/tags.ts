import api from "@/lib/tryghost-api";

export async function getAllTags() {
  return await api.tags
    .browse({
      limit: "all",
      include: "count.posts",
    })
    .catch((err) => {
      console.error(err);
    });
}
