import { useContext } from "react";
import CategoryList from "./CategoryList";
import { UserContext } from "@/context/UserContext";

const Categories = () => {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <div>
      {isLoggedIn ? (
        <CategoryList />
      ) : (
        <div>You need to log in to see all categories...</div>
      )}
    </div>
  );
};

export default Categories;
