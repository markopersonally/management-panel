export default function H2({ children }) {
  const h2Classes = "p-10 flex items-center gap-5 text-3xl";

  return <h2 className={h2Classes}>{children}</h2>;
}
