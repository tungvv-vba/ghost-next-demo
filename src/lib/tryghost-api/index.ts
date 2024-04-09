import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: process.env.CMS_GHOST_API_URL as string,
  key: process.env.CMS_GHOST_API_KEY as string,
  // for NextJS version >= 14
  makeRequest: async ({ url, method, params, headers }) => {
    const apiUrl = new URL(url);

    Object.keys(params).map((key) => apiUrl.searchParams.set(key, params[key]));

    try {
      const response = await fetch(apiUrl.toString(), { method, headers });
      const data = await response.json();
      return { data };
    } catch (error) {
      console.error(error);
    }
  },
  version: "v5.0",
});

export default api;
