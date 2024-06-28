import { useQuery } from "@tanstack/react-query";
import { fetchUserOrders } from "../services/orderService";
import { User } from "firebase/auth";

const useUserOrders = (user: User | null) => {
  return useQuery({
    queryKey: ["orders", user?.uid],
    queryFn: () => fetchUserOrders(user),
    enabled: !!user, // Only fetch if the user is logged in
  });
};

export default useUserOrders;
