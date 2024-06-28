import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { User } from "firebase/auth";
import { Order } from "../types/types";

export const fetchUserOrders = async (user: User | null): Promise<Order[]> => {
  if (!user) return [];

  const ordersCollection = collection(db, "users", user.uid, "orders");
  const ordersSnapshot = await getDocs(ordersCollection);
  return ordersSnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      cart: data.cart || [], // Ensure `cart` is defined and is an array
    } as Order;
  });
};
