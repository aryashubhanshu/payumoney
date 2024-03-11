function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-md w-full bg-zinc-900 text-white py-2"
    >
      {label}
    </button>
  );
}

export default Button;
