import Link from "next/link";

const SingleCategory = ({ category }) => {
  const { id, name } = category;
  return (
    <Link href={`/categories?categoryId=${id}`}>
      <h1>{name}</h1>
    </Link>
  );
};

export default SingleCategory;
