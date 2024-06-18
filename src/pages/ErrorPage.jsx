import H1 from "../components/UI/H1.jsx";
import NavBar from "../components/NavBar";

function ErrorPage() {
  return (
    <>
      <main className="flex">
        <NavBar />
        <H1>An error occurred!</H1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
}

export default ErrorPage;
