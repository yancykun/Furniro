import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BillingSchema, BillingFormData } from "../types/types";
import { useCartStore } from "../store/useCartStore";
import { useFormMessageStore } from "../store/useFormMessageStore";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { User } from "firebase/auth";

const useBillingForm = (user: User | null, paymentMethod: string) => {
  const { register, handleSubmit, formState, setValue, reset } =
    useForm<BillingFormData>({
      resolver: zodResolver(BillingSchema),
    });

  const { errors, isSubmitting } = formState;

  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const { successMessage, setSuccessMessage, clearSuccessMessage } =
    useFormMessageStore();

  const handleBillingSubmit = async (data: BillingFormData) => {
    if (!user) {
      alert("You need to be logged in to place an order.");
      return;
    }

    const combinedData = {
      ...data,
      paymentMethod,
      cart: cart.map((item) => ({
        id: item.id,
        title: item.title,
        quantity: item.quantity,
        price: item.price,
      })),
    };

    try {
      await addDoc(collection(db, "users", user.uid, "orders"), combinedData);

      console.log("Billing Success", combinedData);

      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSuccessMessage("Your billing has been successfully sent!");

      setTimeout(() => {
        clearSuccessMessage();
      }, 3000);

      clearCart();
      reset();
    } catch (error) {
      console.error("Error saving billing data: ", error);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    setValue,
    successMessage,
    handleBillingSubmit,
  };
};

export default useBillingForm;
