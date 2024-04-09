import { getPost } from "@/app/_shared/services";
import Link from "next/link";
import Image from "next/image";
import Background from "@/app/_shared/components/Background";
import TagButton from "@/app/_shared/components/TagButton";

interface IPostPageProps {
  params: { slug: string };
}

export default async function PostPage({ params }: IPostPageProps) {
  const post = await getPost(params.slug);

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <Background />
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
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
                  <p className="text-gray-600">
                    {post?.primary_author?.location}
                  </p>
                </div>
              </div>
            )}
            <div className="lg:max-w-lg">
              {post?.tags?.map((tag) => (
                <Link href={`/tag/${tag.slug}`} key={tag.id} className="mr-1">
                  <TagButton tagName={tag.name ?? ""} />
                </Link>
              ))}
              <p className="mt-2 italic">
                {`${post?.reading_time || 1}m read time`}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {post?.title}
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                {post?.excerpt}
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={post?.feature_image ?? ""}
            alt="123"
            width={600}
            height={500}
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                No server? No problem.
              </h2>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
                vitae interdum mauris enim, consequat vulputate nibh. Maecenas
                pellentesque id sed tellus mauris, ultrices mauris. Tincidunt
                enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
