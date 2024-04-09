import Hero from "./_shared/components/Hero";
import { getPosts, getSettings } from "./_shared/services";
import { PostsOrPages, SettingsResponse } from "@tryghost/content-api";
import PostList from "./_shared/components/PostList";
import Filters from "./_shared/components/Filters";

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const posts = await getPosts(searchParams);
  const settings = await getSettings();

  return (
    <main className="">
      <Hero settings={settings as SettingsResponse} />
      <div className="mx-auto w-3/5">
        <Filters />
      </div>
      <PostList postList={posts as PostsOrPages} />
    </main>
  );
}
