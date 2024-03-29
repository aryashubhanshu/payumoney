function InputBox({ id, title, placeholder, onChange }) {
  return (
    <>
      <label className="font-semibold" htmlFor={id}>
        {title}
      </label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className="px-4 border border-zinc-200 p-2 w-full my-3 rounded-md"
      />
    </>
  );
}

export default InputBox;
