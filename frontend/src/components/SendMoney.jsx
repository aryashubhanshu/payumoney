import Heading from "./Heading";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function SendMoney() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-zinc-100">
      <div className="max-sm:w-[80%] max-md:w-[60%] max-lg:w-[50%] w-[30%] px-8 py-4 border border-zinc-300 rounded-xl shadow-md bg-white">
        <Heading title="Send Money" />

        <div className="flex items-center gap-4 mt-10 mb-4">
          <div className="bg-green-500 rounded-full w-10 h-10 flex items-center justify-center text-white text-xl">
            {name.charAt(0).toUpperCase()}
          </div>
          <h1 className="text-2xl font-bold">{name}</h1>
        </div>

        <label className="font-semibold" htmlFor="amount">
          Amount (in Rs)
        </label>
        <input
          id="amount"
          type="text"
          placeholder="Enter amount"
          onChange={(e) => setAmount(e.target.value)}
          className="px-4 border border-zinc-200 p-2 w-full my-3 rounded-md"
        />

        <button
          onClick={() => {
            axios.post(
              "http://localhost:3000/api/v1/account/transfer",
              {
                to: id,
                amount,
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            );
          }}
          className="mt-3 mb-4 rounded-md w-full bg-green-500 text-white py-2"
        >
          Initiate Transfer
        </button>
      </div>
    </div>
  );
}

export default SendMoney;
