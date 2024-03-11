import Heading from "./Heading";

function SendMoney() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-zinc-100">
      <div className="max-sm:w-[80%] max-md:w-[60%] max-lg:w-[50%] w-[30%] px-8 py-4 border border-zinc-300 rounded-xl shadow-md bg-white">
        <Heading title="Send Money" />

        <div className="flex items-center gap-4 mt-10 mb-4">
          <div className="bg-green-500 rounded-full w-10 h-10 flex items-center justify-center text-white text-xl">
            A
          </div>
          <h1 className="text-2xl font-bold">Friend&apos;s Name</h1>
        </div>

        <label className="font-semibold" htmlFor="amount">
          Amount (in Rs)
        </label>
        <input
          id="amount"
          type="text"
          placeholder="Enter amount"
          className="px-4 border border-zinc-200 p-2 w-full my-3 rounded-md"
        />

        <button className="mt-3 mb-4 rounded-md w-full bg-green-500 text-white py-2">
          Initiate Transfer
        </button>
      </div>
    </div>
  );
}

export default SendMoney;
