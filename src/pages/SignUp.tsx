import Navbar from "../components/navbar";
import SignUpForm from "../components/signUpForm";

const SignUp = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex items-center justify-center h-screen overflow-hidden bg-stone-300">
        <SignUpForm />
      </main>
    </>
  );
};

export default SignUp;
