import { useEffect, useState } from "react";
import { fetchCategories } from "../api/categories";
import { Category } from "../types/categories";

const CategoryList = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories()
      .then((response) => {
        setCategories(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {categories.map((category) => (
        <div key={category._id}>{category.name}</div>
      ))}
    </div>
  );
};

export default CategoryList;
