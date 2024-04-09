import React from "react";
import { getPages } from "../_shared/services";
import Image from "next/image";
import Background from "../_shared/components/Background";

const About = async () => {
  const content = await getPages("about");

  return (
    <div className="w-4/5 mx-auto about-page">
      <Background />
      <h1 className="text-center mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {content?.title}
      </h1>
      <Image
        src={content?.feature_image!}
        alt="123"
        width={800}
        height={400}
        className="mx-auto my-10"
      />
      <div
        className="mx-auto w-3/5"
        dangerouslySetInnerHTML={{ __html: content?.html ?? "" }}
      />
    </div>
  );
};

export default About;
