const Button = ({ text, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mb-8 inline-flex items-center rounded-md border border-transparent bg-yellow-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
    >
      {text}
    </button>
  );
};

export default Button;
