function Topbar() {
  return (
    <div className="flex items-center justify-between border-b-zinc-400 p-2 h-[80px] border-b">
      <h1 className="text-2xl font-bold">Pay U Money</h1>
      <div className="flex items-center gap-4">
        <h3 className="text-xl">Hello, User</h3>
        <h3 className="rounded-full bg-zinc-200 h-8 w-8 flex items-center justify-center">
          U
        </h3>
      </div>
    </div>
  );
}

export default Topbar;
