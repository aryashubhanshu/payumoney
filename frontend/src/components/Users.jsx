function Users() {
  const users = [{ name: "User 1" }, { name: "User 2" }, { name: "User 3" }];
  return (
    <>
      <h1 className="font-bold text-xl">Users</h1>

      <input
        type="text"
        placeholder="Search users..."
        className="px-4 border border-zinc-200 p-2 w-full my-3 rounded-md outline-none"
      />

      {users.map((user, ind) => {
        return (
          <div
            className="flex items-center justify-between p-2 h-[60px]"
            key={ind}
          >
            <h1 className="text-xl font-bold">{user.name}</h1>
            <button className="rounded-md bg-zinc-900 text-white py-2 px-4">
              Send Money
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Users;
