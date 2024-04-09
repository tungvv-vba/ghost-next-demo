import Background from "@/app/_shared/components/Background";
import PostList from "@/app/_shared/components/PostList";
import { getPostsByTag } from "@/app/_shared/services";
import { PostsOrPages } from "@tryghost/content-api";

const TagPage = async ({ params }: { params: { slug: string } }) => {
  const posts = await getPostsByTag(params.slug);

  return (
    <div>
      <h1 className="text-center mt-10 font-bold tracking-tight text-gray-900 sm:text-4xl">
        {`Posts with "${params.slug}" tag:`}
      </h1>
      <PostList postList={posts as PostsOrPages} />
    </div>
  );
};

export default TagPage;
