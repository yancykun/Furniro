import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BillingSchema, BillingFormData } from "../types/types";
import { useCartStore } from "../store/useCartStore";
import { useFormMessageStore } from "../store/useFormMessageStore";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { User } from "firebase/auth";
import { useLoginAlertMessage } from "../store/useLoginAlertMessageStore";

const useBillingForm = (user: User | null, paymentMethod: string) => {
  const { register, handleSubmit, formState, setValue, reset } =
    useForm<BillingFormData>({
      resolver: zodResolver(BillingSchema),
    });

  const { errors, isSubmitting } = formState;

  const { cart, clearCart } = useCartStore();
  const { successMessage, setSuccessMessage, clearSuccessMessage } =
    useFormMessageStore();
  const { loginAlertMessage, setShowLoginAlertMessage } =
    useLoginAlertMessage();

  const handleBillingSubmit = async (data: BillingFormData) => {
    if (!user) {
      setShowLoginAlertMessage(
        "Please log in to complete your order. Logging in ensures a secure and personalized shopping experience.",
      );
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
      // Save order data to Firestore under current user
      await addDoc(collection(db, "users", user.uid, "orders"), combinedData);
      console.log("Billing Success", combinedData);

      // Simulate async operation
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSuccessMessage("Your billing has been successfully sent!");

      // Clear success message after successful submission
      setTimeout(() => {
        clearSuccessMessage();
      }, 3000);

      // Clear the cart after successful submission
      clearCart();

      // Reset form fields after successful submission
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
    loginAlertMessage,
  };
};

export default useBillingForm;
