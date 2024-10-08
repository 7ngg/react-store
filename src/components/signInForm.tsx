import { Link } from "react-router-dom";
import Input from "./input";
import Button from "./button";

const SignInForm = () => {
  return (
    <form className="h-[500px] shadow rounded bg-white border border-black font-bold flex gap-2">
      <div className="flex flex-col justify-between p-3">
        <h1 className="text-2xl mb-4">Sign In</h1>
        <div className="flex flex-col gap-2">
          <div>
            <h3>Username</h3>
            <Input type="text"/>
          </div>
          <div>
            <h3>Password</h3>
            <Input type="password"/>
          </div>
        </div>
        <div className="font-normal mt-2">
          <p className="flex flex-col">
            Don't have an account yet?
            <Link to="/signup" className="underline">
              Sign Up
            </Link>
          </p>
        </div>
        <div className="self-center">
          <Button text="Sign in" type="submit" />
        </div>
      </div>
      <div>
        <img
          className="h-full rounded-e"
          src="https://i.imgur.com/q56HAS7.jpeg"
          alt=""
        />
      </div>
    </form>
  );
};

export default SignInForm;
