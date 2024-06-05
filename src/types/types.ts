import { FieldError, UseFormRegister } from "react-hook-form";

export type CartSidebarProps = {
  toggleCartSidebar: () => void;
  openCart: boolean;
};

export type Product = {
  id: string;
  sku: string;
  image: string;
  name: string;
  price: number;
  category: string;
  rating: number;
  popularity: number;
  isFeatured: boolean;
  url: string;
  description: string;
};

export type FormData = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  className: string;
  label: string;
};

export type ValidFieldNames = "fullName" | "email" | "subject" | "message";
