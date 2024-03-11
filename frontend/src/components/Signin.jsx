import { Link } from "react-router-dom";
import Heading from "./Heading";
import Subheading from "./Subheading";
import InputBox from "./InputBox";
import Button from "./Button";

function Signin() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-zinc-100">
      <div className="max-sm:w-[80%] max-md:w-[60%] max-lg:w-[50%] w-[30%] px-8 py-4 border border-zinc-300 rounded-xl shadow-md bg-white">
        <Heading title="Sign In" />
        <Subheading title="Enter your credentials to access your account" />

        <InputBox id="email" title="Email" placeholder="johndoe@gmail.com" />
        <InputBox id="password" title="Password" />

        <Button label={"Sign In"} onClick={() => {}} />

        <p className="text-center my-2">
          Don&apos;t have an account?{" "}
          <Link to={"/signup"} className="underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
