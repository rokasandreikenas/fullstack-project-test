import { useEffect, useState } from "react";
import { fetchBusinesses } from "../api/business";
import { Business } from "../types/business";

const Businesses = () => {
  const [businesses, setBusinesses] = useState<Business[]>([]);

  useEffect(() => {
    fetchBusinesses()
      .then((response) => {
        setBusinesses(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {businesses.map((business) => (
        <div key={business._id}>{business.name}</div>
      ))}
    </div>
  );
};

export default Businesses;
