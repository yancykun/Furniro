import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  AuthError,
} from "firebase/auth";
import { auth } from "../firebase";
import LineIcon from "../assets/svg/LineIcon";
import { AccountFormData, AccountSchema } from "../types/types";
import Button from "../components/UI/Button";
import FormField from "../components/UI/FormField";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<AccountFormData>({
    resolver: zodResolver(AccountSchema),
  });

  const navigate = useNavigate();

  const handleAccountSubmit = async (data: AccountFormData) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      console.log("Account form success", data);
      reset();
      navigate("/");
    } catch (error) {
      const authError = error as AuthError;
      let errorMessage = "An error occurred. Please try again.";
      if (authError.code === "auth/email-already-in-use") {
        errorMessage = "This email is already in use.";
      }
      console.error("Signup error:", authError);
      setError("root", {
        type: "manual",
        message: errorMessage,
      });
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log("Google sign up success");
      navigate("/");
    } catch (error) {
      const authError = error as AuthError;
      let errorMessage = "An error occurred. Please try again.";
      if (authError.code === "auth/popup-closed-by-user") {
        errorMessage =
          "Sign-in popup was closed before completing the sign-in.";
      } else if (authError.code === "auth/cancelled-popup-request") {
        errorMessage = "Only one popup request is allowed at one time.";
      }
      console.error("Google sign-up error:", authError);
      setError("root", {
        type: "manual",
        message: errorMessage,
      });
    }
  };

  return (
    <form
      className="grid w-full items-center justify-center"
      onSubmit={handleSubmit(handleAccountSubmit)}
    >
      <div className="grid items-center justify-center">
        <h1 className="mb-6 text-center font-poppins text-lg font-bold text-color-7 md:text-xl lg:text-2xl">
          Create an Account
        </h1>
        <div>
          <FormField
            label="Email"
            name="email"
            placeholder="yancydev@mail.dev"
            type="email"
            register={register}
            error={errors.email}
            className="h-[40px] w-full sm:h-[45px] sm:w-[350px]"
          />
          <FormField
            label="Password"
            name="password"
            type="password"
            register={register}
            error={errors.password}
            className="h-[40px] w-full sm:h-[45px] sm:w-[350px]"
          />
        </div>
        {errors.root && (
          <div className="mb-4 font-poppins font-semibold text-red-800">
            {errors.root.message}
          </div>
        )}
        <div className="grid justify-center">
          <Button
            disabled={isSubmitting}
            type="submit"
            className="my-2 h-[2.875rem] w-[9rem] rounded-md border font-medium sm:h-[3rem] sm:w-[12rem]"
          >
            {isSubmitting ? "Signing up" : "Sign up"}
          </Button>
        </div>
        <div className="flex items-center justify-center gap-4">
          <LineIcon />
          <span className="font-poppins text-[1.25rem] font-semibold">or</span>
          <LineIcon />
        </div>
        <div className="relative grid justify-center">
          <Button
            white
            disabled={isSubmitting}
            type="button"
            className="relative my-2 flex h-[2.875rem] w-[13rem] items-center justify-center rounded-md border pl-6 font-medium sm:h-[3rem] sm:w-[17rem]"
            onClick={handleGoogleSignup}
          >
            <FcGoogle className="absolute -left-6 top-1/2 -translate-y-1/2" />
            Sign up with Google
          </Button>
        </div>
        <div className="mt-2 flex items-center justify-start gap-2">
          <p className="font-poppins font-medium">Already have an account?</p>
          <Link to="/signin">
            <p className="font-poppins font-semibold text-color-4">Sign in</p>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
