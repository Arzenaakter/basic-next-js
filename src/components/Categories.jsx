import getAllCategories from "@/utils/getAllCategories";
import SingleCategory from "./SingleCategory";

const Categories = async () => {
  const categories = await getAllCategories();

  return (
    <div>
      <h1>Categories</h1>
      <div className="container mx-auto">
        {categories.map((category) => (
          <SingleCategory
            key={category.id}
            category={category}></SingleCategory>
        ))}
      </div>
    </div>
  );
};

export default Categories;
