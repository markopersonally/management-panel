import NavBar from "../components/NavBar";

function ErrorPage() {
  return (
    <>
      <main className="flex">
        <NavBar />
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
}

export default ErrorPage;
