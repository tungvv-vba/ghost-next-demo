import Background from "@/app/_shared/components/Background";
import PostList from "@/app/_shared/components/PostList";
import { getAuthor, getPostsByAuthor } from "@/app/_shared/services";
import { PostsOrPages } from "@tryghost/content-api";
import Image from "next/image";
import React from "react";

const AuthorPage = async ({ params }: { params: { slug: string } }) => {
  const author = await getAuthor(params.slug);
  const posts = await getPostsByAuthor(params.slug);

  return (
    <>
      {author && (
        <div className="w-3/5 mx-auto">
          <Background />
          <Image
            className="rounded-full mx-auto"
            src={author.profile_image ?? ""}
            alt={author.name ?? ""}
            width={150}
            height={150}
          />
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {author?.name}
            </h1>
            <p>{author.location}</p>
            <p className="italic">{`"${author.bio}"`}</p>
          </div>
          <h2 className="text-3xl mt-16">These are him posts:</h2>
          <PostList postList={posts as PostsOrPages} />
        </div>
      )}
    </>
  );
};

export default AuthorPage;
