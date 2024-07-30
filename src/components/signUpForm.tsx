import { Link } from "react-router-dom";
import Input from "./input";
import Button from "./button";

const SignUpForm = () => {
  return (
    <form className="h-[500px] shadow rounded bg-white border border-black font-bold flex gap-2">
      <div className="flex flex-col justify-between p-3">
        <h1 className="text-2xl mb-4">Sign Up</h1>
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
        <div className="self-center">
          <Button text="Sign up" type="submit" />
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

export default SignUpForm;
