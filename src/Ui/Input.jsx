export default function Input({ title, id, ...props }) {
  return (
    <>
      <div>
        <label>{title}</label>
        <input id={id} name={id} required {...props} />
      </div>
    </>
  );
}
