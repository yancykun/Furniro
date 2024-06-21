import { useQuery } from "@tanstack/react-query";
import { fetchProductsFromFirestore } from "../services/productService";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProductsFromFirestore,
  });
};
