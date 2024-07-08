export default function Section({ children }) {
  const sectionClasses = "h-screen ml-8 mb-8";

  return <section className={sectionClasses}>{children}</section>;
}
