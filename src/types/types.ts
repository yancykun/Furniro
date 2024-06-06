import {
  FieldError,
  FieldValues,
  UseFormRegister,
  Path,
} from "react-hook-form";
import { ZodType, z } from "zod";

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

export type ValidFieldNames =
  | "firstName"
  | "lastName"
  | "fullName"
  | "company"
  | "country"
  | "streetAddress"
  | "townCity"
  | "province"
  | "phone"
  | "email"
  | "additionalInfo"
  | "subject"
  | "message";

export type FormFieldProps<T extends FieldValues> = {
  type?: string;
  placeholder?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error: FieldError | undefined;
  className: string;
  label?: string;
};

export type BillingFormData = {
  firstName: string;
  lastName: string;
  company?: string;
  country: string;
  streetAddress: string;
  townCity: string;
  province: string;
  phone: string;
  email: string;
  additionalInfo?: string;
};

export const BillingSchema: ZodType<BillingFormData> = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  company: z.string().optional(),
  country: z.string().min(1, "Country/Region is required."),
  streetAddress: z.string().min(1, "Street address is required."),
  townCity: z.string().min(1, "Town/City is required."),
  province: z.string().min(1, "Province is required."),
  phone: z.string().min(1, "Phone number is required."),
  email: z.string().email("Invalid email address."),
  additionalInfo: z.string().optional(),
});

export type ContactFormData = {
  fullName: string;
  email: string;
  subject?: string;
  message: string;
};

export const ContactSchema: ZodType<ContactFormData> = z.object({
  fullName: z.string().min(1, "Full name is required."),
  email: z.string().email("Invalid email address."),
  subject: z.string().optional(),
  message: z.string().min(1, "Message is required."),
});
