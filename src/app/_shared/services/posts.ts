import api from "@/lib/tryghost-api";

export async function getPosts(searchParms: Record<string, string>) {
  const order = searchParms["order-by"]?.replace("-", " ");
  const lang = searchParms["lang"];

  return await api.posts
    .browse({
      limit: "all",
      include: ["tags", "authors"],
      filter: `tag:${lang || "en"}`,
      order,
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getPost(slug: string) {
  return await api.posts
    .read(
      {
        slug,
      },
      {
        include: ["authors", "tags"],
      }
    )
    .catch((err) => {
      console.error(err);
    });
}

export async function getPostsByTag(tagSlug: string) {
  return await api.posts
    .browse({
      filter: `tag:${tagSlug}`,
      include: "authors",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getPostsByAuthor(authorSlug: string) {
  return await api.posts
    .browse({
      filter: `author:${authorSlug}`,
      include: "tags",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getPostsByLanguage(lang: string) {
  return await api.posts
    .browse({
      filter: `tag:${lang}`,
      include: "tags",
    })
    .catch((err) => {
      console.error(err);
    });
}
