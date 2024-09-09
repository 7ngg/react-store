import { Link } from "react-router-dom";
import Input from "./input";
import Button from "./button";
import ArrowBackIcon from "./icons/arrowBack";
import { useDispatch } from "react-redux";
import { setContent } from "../store/slices/modalContentSlice";
import SignInForm from "./signInForm";

const SignUpForm: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <form className="h-full flex flex-col items-center gap-2 p-4 justify-between">
      <div>
        <div className="text-2xl mb-4 flex justify-between h-12">
          <h1 className="text-2xl mb-4">Sign Up</h1>
          <button
            className="h-4"
            onClick={() => dispatch(setContent(SignInForm))}
          >
            <span>&#8678;</span>
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h3>Username</h3>
            <Input type="text" />
          </div>
          <div>
            <h3>Email</h3>
            <Input type="email" />
          </div>
          <div>
            <h3>Password</h3>
            <Input type="password" />
          </div>
          <div>
            <h3>Confirm Parssword</h3>
            <Input type="password" />
          </div>
        </div>
      </div>
      <div className="self-center">
        <Button
          text="Sign up"
          type="submit"
          className="hover:scale-105 duration-150"
        />
      </div>
    </form>
  );
};

export default SignUpForm;
