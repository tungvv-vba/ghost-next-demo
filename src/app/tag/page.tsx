import { getAllTags } from "../_shared/services";
import Link from "next/link";
import Background from "../_shared/components/Background";
import { languages } from "../_shared/ultis/constants";

const TagListPage = async () => {
  const tagList = await getAllTags();
  const tagListWithoutLang = tagList?.filter(tag => !languages.includes(tag.slug))

  return (
    <>
      <Background />
      <h1 className="mt-10 text-3xl leading-normal font-bold mt-0 mb-7 text-center">
        Tag List
      </h1>
      <div className="flex justify-center flex-wrap">
        {tagListWithoutLang?.map((tag) => (
          <Link
            href={`/tag/${tag.slug}`}
            key={tag.id}
            className="cursor-pointer inline-block mx-1 mb-3 px-4 py-2 bg-slate-200 text-slate-700 font-medium rounded-full"
          >
            {tag.name}
            <span className="px-2 py-1 ml-1 text-xs font-semibold bg-teal-300 text-teal-800 rounded-full">
              {tag.count?.posts}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default TagListPage;
