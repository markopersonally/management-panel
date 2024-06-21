export default function Input({ label, id, error, ...props }) {
  const divStyle = "mt-10 flex flex-col";
  const labelStyle = "mb-2 text-slate-200 font-bold";
  const inputStyle =
    "border-2 focus:ring-red-500 focus:border-red-500 rounded-xl p-2 text-slate-300 bg-slate-700";

  return (
    <div className={divStyle}>
      <label htmlFor={id} className={labelStyle}>
        {label} :
      </label>
      <input id={id} {...props} className={inputStyle} />
      <div className="text-red-500">{error && <p>{error}</p>}</div>
    </div>
  );
}
