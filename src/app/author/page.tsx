import Image from "next/image";
import { getAllAuthors } from "../_shared/services/authors";
import Link from "next/link";

const AuthorsPage = async () => {
  const authors = await getAllAuthors();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
            elementum enim vitae ullamcorper suspendisse.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {authors?.map((author) => (
            <li key={author.id}>
              <Link href={`author/${author.slug}`}>
                <div className="flex items-center gap-x-6">
                  <Image
                    className="h-16 w-16 rounded-full"
                    src={author.profile_image ?? ""}
                    alt={author.name ?? ""}
                    width={80}
                    height={80}
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {author.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {author.location}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AuthorsPage;
