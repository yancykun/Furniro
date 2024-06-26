import { useEffect } from "react";
import CartTable from "../Cart/CartTable";
import Section from "../../Layout/Section";
import { useCartStore } from "../../../store/useCartStore";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const fetchCartItems = async () => {
  const db = getFirestore();
  const cartCollection = collection(db, "cartItems");
  const cartSnapshot = await getDocs(cartCollection);
  const cartList = cartSnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      image: data.image,
      title: data.title,
      quantity: data.quantity,
      price: parseFloat(data.price), // Ensure price is a number
    };
  });
  return cartList;
};

const Cart = () => {
  const { addToCart } = useCartStore();

  useEffect(() => {
    // Clear specific item from local storage
    localStorage.removeItem("cart-storage");

    const loadCartItems = async () => {
      const items = await fetchCartItems();
      items.forEach((item) => addToCart(item));
    };

    loadCartItems();
  }, [addToCart]);

  return (
    <Section>
      <CartTable />
    </Section>
  );
};

export default Cart;
