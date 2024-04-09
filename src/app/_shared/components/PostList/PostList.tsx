import { PostsOrPages } from "@tryghost/content-api";
import Post from "./Post";

interface IPostListProps {
  postList: PostsOrPages;
}

export default function PostList({ postList }: IPostListProps) {
  return (
    <div className="bg-white pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {postList?.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
