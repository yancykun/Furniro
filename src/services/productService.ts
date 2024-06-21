import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Product } from "../types/types";

export const fetchProductsFromFirestore = async (): Promise<Product[]> => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products: Product[] = [];
  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() } as Product);
  });
  return products;
};
