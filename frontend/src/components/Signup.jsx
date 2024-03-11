import { Link } from "react-router-dom";
import Heading from "./Heading";
import Subheading from "./Subheading";
import InputBox from "./InputBox";
import Button from "./Button";

function Signup() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-zinc-100">
      <form className="max-sm:w-[80%] max-md:w-[60%] max-lg:w-[50%] w-[30%] px-8 py-4 border border-zinc-300 rounded-xl shadow-md bg-white">
        <Heading title="Sign Up" />
        <Subheading title="Enter your information to create an account" />

        <InputBox id={"firstName"} title={"First Name"} />
        <InputBox id={"lastName"} title={"Last Name"} />
        <InputBox id={"email"} title={"Email"} />
        <InputBox id={"password"} title={"Password"} />

        <Button label={"Sign Up"} onClick={() => {}} />

        <p className="text-center my-2">
          Already have an account?{" "}
          <Link to={"/signin"} className="underline">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
