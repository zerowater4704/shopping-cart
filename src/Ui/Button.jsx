export default function Button({ children, ...props }) {
  return (
    <button {...props} className="text-2xl text-orange-700 font-bold">
      {children}
    </button>
  );
}
