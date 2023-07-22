"use client";
import { useParams, useSearchParams } from "next/navigation";

export const metadata = {
  title: "single Blog | Next-Hero",
  description: "Generated by create next app",
};

const SingleBlog = () => {
  // const [year, id] = params.segment;
  const params2 = useParams();
  const search = useSearchParams();
  console.log(params2.segment, search.get("title"));
  return <div>single Page {params2.segment[0]}</div>;
};

export default SingleBlog;
