import { PostOrPage } from "@tryghost/content-api";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "../../ultis/dateHelpers";
import TagButton from "../TagButton";

interface IPost {
  post: PostOrPage;
}

export default function Post({ post }: IPost) {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={post?.published_at!} className="text-gray-500">
          {formatDate(post?.published_at, "MMM D, YYYY")}
        </time>
        {post?.tags?.map((tag) => (
          <Link
            key={tag.id}
            href={`/tag/${tag.slug}`}
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            <TagButton tagName={tag.name} />
          </Link>
        ))}
      </div>
      <div className="rounded-lg overflow-hidden w-full">
        <Image
          src={post?.feature_image ?? ""}
          alt="123"
          width={300}
          height={200}
          className="w-full"
        />
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <Link href={`/post/${post.slug}`}>
            <span className="absolute inset-0" />
            {post.title}
          </Link>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          {post.excerpt}
        </p>
      </div>
      {post?.primary_author && (
        <div className="relative mt-8 flex items-center gap-x-4">
          <Image
            src={post?.primary_author?.profile_image ?? ""}
            alt={post?.primary_author?.name ?? ""}
            className="h-10 w-10 rounded-full bg-gray-50"
            width={100}
            height={100}
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <Link href={`/author/${post?.primary_author?.slug}`}>
                <span className="absolute inset-0" />
                {post?.primary_author?.name}
              </Link>
            </p>
            <p className="text-gray-600">{post?.primary_author?.location}</p>
          </div>
        </div>
      )}
    </article>
  );
}
