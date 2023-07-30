import loadBlogData from "@/utils/loadBlogData";
import Link from "next/link";

const BlogsPage = async () => {
  // const blogs = [
  //   {
  //     id: 1,
  //     year: 2014,
  //     title: "title 1",
  //   },
  //   {
  //     id: 2,
  //     year: 2016,
  //     title: "title 2",
  //   },
  //   {
  //     id: 3,
  //     year: 2018,
  //     title: "title 3",
  //   },
  //   {
  //     id: 4,
  //     year: 2020,
  //     title: "title 4",
  //   },
  // ];

  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const blogs = await res.json();

  const blogs = await loadBlogData();

  return (
    <div className="container mx-auto">
      {blogs.map(({ id, body, title }) => (
        <div key={id} className="border border-blue-900 my-2 p-2">
          <h2 className="text-2xl">
            {id}. {title}
          </h2>
          <p>{body}</p>
          <Link href={`/blog/${id}`} className="inline-block mt-5">
            <button className="bg-blue-500 p-2">Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
