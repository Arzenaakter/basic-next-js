import Link from "next/link";
import React from "react";

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      year: 2014,
      title: "title 1",
    },
    {
      id: 2,
      year: 2016,
      title: "title 2",
    },
    {
      id: 3,
      year: 2018,
      title: "title 3",
    },
    {
      id: 4,
      year: 2020,
      title: "title 4",
    },
  ];
  return (
    <div className="container mx-auto">
      {blogs.map(({ id, year, title }) => (
        <li key={id} className="border border-blue-900 my-2">
          <Link href={`/blog/${year}/${id}`}>{title}</Link>
        </li>
      ))}
    </div>
  );
};

export default BlogsPage;
