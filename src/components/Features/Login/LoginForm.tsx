import LineIcon from "../../../assets/svg/LineIcon";
import useFormHandler from "../../../hooks/useFormHandler";
import { AccountFormData, AccountSchema } from "../../../types/types";
import Button from "../../UI/Button";
import FormField from "../../UI/FormField";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    successMessage,
    onSubmit,
  } = useFormHandler(AccountSchema);

  const handleAccountSubmit = (data: AccountFormData) => {
    console.log("Account form success", data);
  };

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data, handleAccountSubmit))}
    >
      <h1 className="font-poppins text-base font-semibold md:text-xl lg:text-2xl">
        Welcome back
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
      {successMessage && (
        <div className="mb-4 font-poppins font-semibold text-green-800">
          {successMessage}
        </div>
      )}
      <div className="grid justify-center">
        <Button
          disabled={isSubmitting}
          type="submit"
          className="my-2 h-[2.875rem] w-[9rem] rounded-md border font-medium sm:h-[3rem] sm:w-[12rem]"
        >
          Sign in
        </Button>
      </div>
      <div className="flex items-center justify-center gap-4">
        <LineIcon />
        <span className="font-poppin text-[1.25rem] font-semibold">or</span>
        <LineIcon />
      </div>
      <div className="relative grid justify-center">
        <Button
          white
          disabled={isSubmitting}
          type="button"
          className="relative my-2 flex h-[2.875rem] w-[13rem] items-center justify-center rounded-md border pl-6 font-medium sm:h-[3rem] sm:w-[17rem]"
        >
          <FcGoogle className="absolute -left-6 top-1/2 -translate-y-1/2" />
          Sign in with Google
        </Button>
      </div>
      <div className="mt-2 flex items-center justify-start gap-2">
        <p className="font-poppins font-medium">Don't have an accout?</p>
        <Link to="/signup">
          <p className="font-poppins font-semibold text-color-4">Sign up</p>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
