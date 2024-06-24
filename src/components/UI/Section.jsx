export default function Section({ children }) {
  const sectionClasses = "h-screen";

  return <section className={sectionClasses}>{children}</section>;
}
