export default function H1({ children }) {
  const h1Classes = "p-10 flex items-center gap-5 text-3xl";

  return <h1 className={h1Classes}>{children}</h1>;
}
