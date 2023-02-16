import React from "react";
import image2 from "../../../images/blog/blog-02.jpg";
import image4 from "../../../images/blog/blog-04.jpg";
import BlogItem from "./BlogItem";

const blogData = [
  {
    id: 1,
    image: image2,
    title: "My thought about User-centred design",
    description:
      "User-centered design focuses on how users interact with technology.",
  },
  {
    id: 2,
    image: image4,
    title: "Why Landing pages?",
    description:
      "A landing page is a page designed to turn visitors into leads. It is separate from other pages on your.",
  },
];

const Blog = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {blogData.map((blog, id) => (
          <BlogItem blog={blog} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
