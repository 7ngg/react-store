import { Link } from "react-router-dom";
import Input from "./input";
import Button from "./button";
import { useAppSelector } from "../hooks";
import { useDispatch } from "react-redux";
import { setContent } from "../store/slices/modalContentSlice";
import SignUpForm from "./signUpForm";

const SignInForm: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <form className="h-full flex flex-col items-center gap-2 p-4 justify-between">
      <div>
        <div className="text-2xl mb-4 flex justify-between">
          <h1>Sign In</h1>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h3>Username</h3>
            <Input type="text" />
          </div>
          <div>
            <h3>Password</h3>
            <Input type="password" />
          </div>
        </div>
        <div className="font-normal mt-2 w-full flex flex-col items-center">
          <p className="flex flex-col">
            Don't have an account yet?
            <button
              onClick={() => dispatch(setContent(SignUpForm))}
              className="underline"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
      <div className="self-center">
        <Button
          text="Sign in"
          type="submit"
          className="hover:scale-105 duration-150"
        />
      </div>
    </form>
  );
};

export default SignInForm;
