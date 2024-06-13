import LoginForm from "../components/Features/Login/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <h1 className="font-poppins text-base font-semibold md:text-xl lg:text-2xl">
        Welcome back
        <LoginForm />
      </h1>
    </div>
  );
};

export default LoginPage;
