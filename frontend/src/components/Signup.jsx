import { Link, useNavigate } from "react-router-dom";
import Heading from "./Heading";
import Subheading from "./Subheading";
import InputBox from "./InputBox";
import Button from "./Button";
import axios from "axios";
import { useState } from "react";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-zinc-100">
      <div className="max-sm:w-[80%] max-md:w-[60%] max-lg:w-[50%] w-[30%] px-8 py-4 border border-zinc-300 rounded-xl shadow-md bg-white">
        <Heading title="Sign Up" />
        <Subheading title="Enter your information to create an account" />

        <InputBox
          onChange={(e) => setFirstName(e.target.value)}
          id={"firstName"}
          title={"First Name"}
        />
        <InputBox
          onChange={(e) => setLastName(e.target.value)}
          id={"lastName"}
          title={"Last Name"}
        />
        <InputBox
          onChange={(e) => setUsername(e.target.value)}
          id={"email"}
          title={"Email"}
        />
        <InputBox
          onChange={(e) => setPassword(e.target.value)}
          id={"password"}
          title={"Password"}
        />

        <Button
          onClick={async () => {
            const response = await axios.post(
              "http://localhost:3000/api/v1/user/signup",
              {
                username,
                firstName,
                lastName,
                password,
              }
            );
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
          }}
          label={"Sign up"}
        />

        <p className="text-center my-2">
          Already have an account?{" "}
          <Link to={"/signin"} className="underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
